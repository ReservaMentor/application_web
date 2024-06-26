import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounselingRoutingModule } from './counseling-routing.module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    CounselingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CounselingModule {}
