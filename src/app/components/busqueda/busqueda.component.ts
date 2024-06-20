import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../navbar/navbar.component';
import { MentorService } from '../../services/mentor.service';
import { HorarioDisponible, Mentor } from '../../models/mentor';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import * as math from 'mathjs';
import { create, all } from 'mathjs';
@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, NgIf, NgForOf, FormsModule],
  providers: [CommonModule, BrowserModule],
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  mentores: Mentor[] = [];
  filteredMentores: Mentor[] = [];
  filteredMentoresSlice: Mentor[] = [];
  categories: string[] = [];
  filteredCategories: string[] = [];
  selectedCategories: string[] = [];
  searchCategory: string = '';
  ratings: number[] = [5, 4, 3, 2, 1];
  selectedRatings: number[] = [];
  sortOption: string = '';
  searchTopic: string = '';
  startDate: string = '';
  endDate: string = '';
  startTime: string = '';
  endTime: string = '';
  selectedSessionTypes: string[] = [];
  maxPrice: number = 0;
  private math = create(all);

  // Estado para la paginación
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 0;

  constructor(private mentorService: MentorService, private http: HttpClient) {
    this.mentorService = new MentorService(http);
    this.obtenerMentores();
    this.filterMentores1();
    this.paginateMentores();
  }

  ngOnInit(): void {
    this.filterMentores1();
    this.paginateMentores();
  }

  obtenerMentores(): void {
    this.mentorService.getData().subscribe(
      (data: Mentor[]) => {
        this.mentores = data;
        this.filteredMentores = data;
        this.categories = Array.from(
          new Set(data.flatMap((mentor) => mentor.categorias))
        );
      },
      (error) => {
        console.error('Error al obtener mentores:', error);
      }
    );
  }

  onSearch(): void {
    this.currentPage = 1;
    this.filterMentores1();
    this.paginateMentores();
  }

  normalizeString = (str: string): string => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  // Crea el vector del query normalizando y tokenizando
  createQueryVector(query: string): number[] {
    const allTerms = this.getAllTerms();
    return allTerms.map(
      (term) =>
        this.termFrequency(term, query) * this.inverseDocumentFrequency(term)
    );
  }

  // Obtiene todos los términos únicos de los nombres y descripciones de los mentores
  getAllTerms(): string[] {
    const terms = new Set<string>();
    this.mentores.forEach((mentor) => {
      this.tokenize(mentor.nombre).forEach((term) => terms.add(term));
      this.tokenize(mentor.descripcion).forEach((term) => terms.add(term));
    });
    return Array.from(terms);
  }

  // Tokeniza el texto en un arreglo de palabras normalizadas
  tokenize(text: string): string[] {
    return this.normalizeString(text)
      .split(/\W+/)
      .filter((term) => term.length > 0);
  }

  // Calcula la frecuencia de un término en un texto
  termFrequency(term: string, text: string): number {
    const tokens = this.tokenize(text);
    const count = tokens.filter((t) => t === term).length;
    return count / tokens.length;
  }

  // Calcula la frecuencia inversa de documentos
  inverseDocumentFrequency(term: string): number {
    const numDocumentsWithTerm = this.mentores.filter((mentor) =>
      this.tokenize(mentor.nombre + ' ' + mentor.descripcion).includes(term)
    ).length;
    return 1 + Math.log(this.mentores.length / (numDocumentsWithTerm + 1));
  }

  // Calcula la similitud del coseno entre el query y el mentor
  calculateCosineSimilarity(queryVector: number[], mentor: Mentor): number {
    const docVector = this.createDocumentVector(mentor);
    const dotProduct = queryVector.reduce(
      (sum, qVal, i) => sum + qVal * docVector[i],
      0
    );
    const normQuery = Math.sqrt(
      queryVector.reduce((sum, qVal) => sum + qVal * qVal, 0)
    );
    const normDoc = Math.sqrt(
      docVector.reduce((sum, dVal) => sum + dVal * dVal, 0)
    );
    return dotProduct / (normQuery * normDoc);
  }

  // Crea el vector del mentor normalizando y tokenizando
  createDocumentVector(mentor: Mentor): number[] {
    const allTerms = this.getAllTerms();
    const combinedText = mentor.nombre + ' ' + mentor.descripcion;
    return allTerms.map(
      (term) =>
        this.termFrequency(term, combinedText) *
        this.inverseDocumentFrequency(term)
    );
  }

  filterMentores1(): void {
    const query = this.normalizeString(this.searchTopic).trim();
    const queryVector = this.createQueryVector(query);
    console.log('Query Vector:', queryVector);

    this.filteredMentores = this.mentores
      .map((mentor) => {
        const similarity = this.calculateCosineSimilarity(queryVector, mentor);
        console.log(`Similitud con ${mentor.nombre}: ${similarity}`);
        return {
          mentor,
          similarity,
        };
      })
      .filter(({ similarity }) => similarity >= 0.1)
      .sort((a, b) => b.similarity - a.similarity)
      .map(({ mentor }) => mentor);

    this.filterByAdditionalCriteria();
    this.sortMentores();
    this.paginateMentores();
  }

  filterByAdditionalCriteria(): void {
    this.filteredMentores = this.filteredMentores.filter((mentor) => {
      const matchesCategory =
        this.selectedCategories.length === 0 ||
        this.selectedCategories.some((category) =>
          mentor.categorias.includes(category)
        );

      const matchesDate = this.isWithinSelectedDateTimeRange(
        mentor.horariosDisponibles
      );

      const matchesSessionType =
        this.selectedSessionTypes.length === 0 ||
        this.selectedSessionTypes.some((type) =>
          mentor.tiposSesiones.includes(type)
        );

      const matchesRating =
        this.selectedRatings.length === 0 ||
        this.selectedRatings.some(
          (rating) => Math.round(mentor.calificacion) === rating
        );

      const matchesPrice =
        this.maxPrice === 0 || mentor.tarifaPorHora <= this.maxPrice;

      return (
        matchesCategory &&
        matchesDate &&
        matchesSessionType &&
        matchesRating &&
        matchesPrice
      );
    });

    this.sortMentores();
  }

  roundCalificacion(calificacion: number): number {
    return Math.round(calificacion);
  }

  formatHorario(horario: {
    fecha: string;
    inicio: string;
    fin: string;
  }): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const fecha = new Date(horario.fecha).toLocaleDateString('es-ES', options);
    return `${fecha}, ${horario.inicio} - ${horario.fin}`;
  }
  paginateMentores(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(
      startIndex + this.pageSize,
      this.filteredMentores.length
    );

    if (this.filteredMentores.length > 0) {
      this.filteredMentoresSlice = this.filteredMentores.slice(
        startIndex,
        endIndex
      );
      this.totalPages = Math.ceil(this.filteredMentores.length / this.pageSize);
    } else {
      this.totalPages = 0;
    }
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.paginateMentores();
  }

  isWithinSelectedDateTimeRange(
    horariosDisponibles: HorarioDisponible[]
  ): boolean {
    if (!this.startDate || !this.endDate || !this.startTime || !this.endTime) {
      return true;
    }

    const startDateTime = new Date(`${this.startDate}T${this.startTime}`);
    const endDateTime = new Date(`${this.endDate}T${this.endTime}`);

    return horariosDisponibles.some((horario) => {
      const horarioStart = new Date(`${horario.fecha}T${horario.inicio}`);
      const horarioEnd = new Date(`${horario.fecha}T${horario.fin}`);
      return (
        (horarioStart >= startDateTime && horarioStart <= endDateTime) ||
        (horarioEnd >= startDateTime && horarioEnd <= endDateTime) ||
        (horarioStart <= startDateTime && horarioEnd >= endDateTime)
      );
    });
  }

  isWithinSelectedDateRange(horariosDisponibles: HorarioDisponible[]): boolean {
    if (!this.startDate || !this.endDate) {
      return true;
    }

    const start = new Date(this.startDate);
    const end = new Date(this.endDate);

    return horariosDisponibles.some((horario) => {
      const date = new Date(horario.fecha);
      return date >= start && date <= end;
    });
  }

  toggleCategory(category: string): void {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(
        (cat) => cat !== category
      );
    } else {
      this.selectedCategories.push(category);
    }
    this.filterMentores1();
    this.changePage(1);
  }

  removeCategory(category: string): void {
    this.selectedCategories = this.selectedCategories.filter(
      (cat) => cat !== category
    );
    this.filterMentores1();
    this.paginateMentores();
  }

  filterCategories(): void {
    const normalizeString = (str: string): string =>
      str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

    this.filteredCategories = this.categories.filter((category) =>
      normalizeString(category).includes(normalizeString(this.searchCategory))
    );
    this.filterMentores1();
    this.paginateMentores();
  }

  onMaxPriceChange(event: any): void {
    // Si el campo de entrada está vacío, establece maxPrice en 0, de lo contrario, usa el valor ingresado
    this.maxPrice = event.target.value ? parseFloat(event.target.value) : 0;
    this.filterMentores1();
    this.changePage(1);
    this.paginateMentores();
  }

  toggleSessionType(sessionType: string): void {
    if (this.selectedSessionTypes.includes(sessionType)) {
      this.selectedSessionTypes = this.selectedSessionTypes.filter(
        (st) => st !== sessionType
      );
    } else {
      this.selectedSessionTypes.push(sessionType);
    }
    this.filterMentores1();
    this.changePage(1);
    this.paginateMentores();
  }

  toggleRating(rating: number): void {
    if (this.selectedRatings.includes(rating)) {
      this.selectedRatings = this.selectedRatings.filter((r) => r !== rating);
    } else {
      this.selectedRatings.push(rating);
    }
    this.filterMentores1();
    this.changePage(1);
    this.paginateMentores();
  }

  sortMentores(): void {
    switch (this.sortOption) {
      case 'rating-asc':
        this.filteredMentores.sort((a, b) => a.calificacion - b.calificacion);
        break;
      case 'rating-desc':
        this.filteredMentores.sort((a, b) => b.calificacion - a.calificacion);
        break;
      case 'students-asc':
        this.filteredMentores.sort(
          (a, b) => a.estudiantesAyudados - b.estudiantesAyudados
        );
        break;
      case 'students-desc':
        this.filteredMentores.sort(
          (a, b) => b.estudiantesAyudados - a.estudiantesAyudados
        );
        break;
      case 'price-asc':
        this.filteredMentores.sort((a, b) => a.tarifaPorHora - b.tarifaPorHora);
        break;
      case 'price-desc':
        this.filteredMentores.sort((a, b) => b.tarifaPorHora - a.tarifaPorHora);
        break;
      default:
        break;
    }
  }

  onSortChange(event: any): void {
    this.sortOption = event.target.value;
    this.sortMentores();
    this.paginateMentores();
  }
}
