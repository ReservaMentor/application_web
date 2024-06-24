import{G as O,H as j,I as T,J as F,K as I,L as k,M as B,N as U,O as L,P as H,Q as G}from"./chunk-DTHQLYN3.js";import{r as E,s as S}from"./chunk-QLQVDVYC.js";import{h as z,k as R,l as D}from"./chunk-BT7ZKXY5.js";import{Ab as d,Bb as C,Cb as g,Kc as b,Mb as P,Sb as n,Tb as x,Ub as u,Wa as v,Za as r,_a as _,da as h,ma as p,na as w,pb as c,rb as m,yb as i,zb as a}from"./chunk-C354RKFX.js";var N=(()=>{let e=class e{constructor(){this.title="",this.description="",this.imageUrl="",this.viewLink=""}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-download-card"]],inputs:{title:"title",description:"description",imageUrl:"imageUrl",viewLink:"viewLink"},decls:8,vars:5,consts:[[1,"download-card"],[3,"src","alt"],["target","_blank",1,"view-button",3,"href"]],template:function(o,l){o&1&&(i(0,"div",0),d(1,"img",1),i(2,"h3"),n(3),a(),i(4,"p"),n(5),a(),i(6,"a",2),n(7,"View \u2192"),a()()),o&2&&(r(),P("alt",l.title),m("src",l.imageUrl,v),r(2),u(" ",l.title,""),r(2),x(l.description),r(),m("href",l.viewLink,v))},styles:[".download-card[_ngcontent-%COMP%]{width:250px;border:1px solid #ddd;border-radius:8px;padding:16px;text-align:center;margin:10px;box-shadow:0 2px 5px #0000001a}.download-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:4px;margin-bottom:16px}.download-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin:0 0 10px}.download-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#666;margin:0 0 20px}.view-button[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;background-color:#000;color:#fff;text-decoration:none;border-radius:4px}.view-button[_ngcontent-%COMP%]:hover{background-color:#444}.download-page[_ngcontent-%COMP%]{text-align:center;margin:20px}.resource-cards[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-wrap:wrap;margin-top:20px}"]});let t=e;return t})();var $=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-download-page"]],decls:8,vars:0,consts:[[1,"download-page"],[1,"resource-cards"],["title","Materiales de curso","description","Materiales realizados durante la mentoria.","imageUrl","../assets/download/materialesCurso.png","routerLink","/course-resources"],["title","Ejercicios","description","Ejercicios realizados durante la mentoria.","imageUrl","../assets/download/exercices.png","routerLink","/course-exercises"],["title","Recursos de aprendizaje","description","Recursos de aprendizaje para aprender mas acerca del tema.","imageUrl","../assets/download/resources.png","routerLink","/course-resources"],["title","Guias","description","Guias de referencia para aprofundizar tu aprendizaje.","imageUrl","../assets/download/guides.png","routerLink","/course-guides"]],template:function(o,l){o&1&&(i(0,"div",0)(1,"h1"),n(2,"Descarga los materiales de la sesion"),a(),i(3,"div",1),d(4,"app-download-card",2)(5,"app-download-card",3)(6,"app-download-card",4)(7,"app-download-card",5),a()())},dependencies:[R,N],styles:[".download-page[_ngcontent-%COMP%]{text-align:center;margin:20px}.resource-cards[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-wrap:wrap;margin-top:20px}"]});let t=e;return t})();function q(t,e){t&1&&(i(0,"th",10),n(1," Name "),a())}function J(t,e){if(t&1&&(i(0,"td",11),n(1),a()),t&2){let f=e.$implicit;r(),u(" ",f.name," ")}}function K(t,e){t&1&&(i(0,"th",10),n(1," Type "),a())}function Q(t,e){if(t&1&&(i(0,"td",11),n(1),a()),t&2){let f=e.$implicit;r(),u(" ",f.type," ")}}function W(t,e){t&1&&(i(0,"th",10),n(1," Size "),a())}function X(t,e){if(t&1&&(i(0,"td",11),n(1),a()),t&2){let f=e.$implicit;r(),u(" ",f.size," ")}}function Y(t,e){t&1&&(i(0,"th",10),n(1," Actions "),a())}function ee(t,e){t&1&&(i(0,"td",11)(1,"button",12),n(2,"Preview"),a(),i(3,"button",12),n(4,"Report"),a(),i(5,"button",12),n(6,"Download"),a()())}function te(t,e){t&1&&d(0,"tr",13)}function ie(t,e){t&1&&d(0,"tr",14)}var M=(()=>{let e=class e{constructor(s){this.route=s,this.materials=[],this.title="",this.description="",this.displayedColumns=["name","type","size","actions"]}ngOnInit(){this.route.data.subscribe(s=>{this.title=s.title,this.description=s.description,this.materials=s.materials})}};e.\u0275fac=function(o){return new(o||e)(_(z))},e.\u0275cmp=p({type:e,selectors:[["app-course-materials"]],decls:20,vars:5,consts:[[1,"course-materials"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","type"],["matColumnDef","size"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-button",""],["mat-header-row",""],["mat-row",""]],template:function(o,l){o&1&&(i(0,"div",0)(1,"h1"),n(2),a(),i(3,"p"),n(4),a(),i(5,"table",1),C(6,2),c(7,q,2,0,"th",3)(8,J,2,1,"td",4),g(),C(9,5),c(10,K,2,0,"th",3)(11,Q,2,1,"td",4),g(),C(12,6),c(13,W,2,0,"th",3)(14,X,2,1,"td",4),g(),C(15,7),c(16,Y,2,0,"th",3)(17,ee,7,0,"td",4),g(),c(18,te,1,0,"tr",8)(19,ie,1,0,"tr",9),a()()),o&2&&(r(2),x(l.title),r(2),x(l.description),r(),m("dataSource",l.materials),r(13),m("matHeaderRowDef",l.displayedColumns),r(),m("matRowDefColumns",l.displayedColumns))},dependencies:[O,T,B,F,j,U,I,k,L,H],styles:[".course-materials[_ngcontent-%COMP%]{padding:20px;margin-bottom:20px;border:1px solid #e0e0e0;border-radius:8px}table[_ngcontent-%COMP%]{width:100%}h1[_ngcontent-%COMP%]{font-size:24px;margin-bottom:10px}p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:20px}"]});let t=e;return t})();var ae=[{path:"course-materials",component:M,data:{title:"Materiales del Curso",description:"Descarga todos los materiales de la sesion, incluyendo PDF, codigo, etc.",materials:[{name:"Introduction to React",type:"PDF",size:"2.3 MB"},{name:"React Hooks Tutorial",type:"MP4",size:"145 MB"},{name:"React Project Starter",type:"ZIP",size:"12 MB"},{name:"React Best Practices",type:"PDF",size:"4.1 MB"},{name:"React Performance Optimization",type:"MP4",size:"215 MB"}]}},{path:"course-exercises",component:M,data:{title:"Ejercicios del Curso",description:"Descarga todos los ejercicios de la sesion para practicar tus habilidades.",materials:[{name:"React Exercise 1",type:"PDF",size:"1.3 MB"},{name:"React Exercise 2",type:"PDF",size:"1.8 MB"}]}},{path:"course-resources",component:M,data:{title:"Recursos del Curso",description:"Descarga todos los recursos para aprender mas.",materials:[{name:"React Resource 1",type:"PDF",size:"3.3 MB"},{name:"React Resource 2",type:"PDF",size:"2.1 MB"}]}},{path:"course-guides",component:M,data:{title:"Guias del Curso",description:"Descargue todas las gu\xEDas de la sesion para mejorar tu aprendizaje.",materials:[{name:"React Guide 1",type:"PDF",size:"4.3 MB"},{name:"React Guide 2",type:"PDF",size:"5.1 MB"}]}},{path:"",component:$}],A=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=w({type:e}),e.\u0275inj=h({imports:[D.forChild(ae),D]});let t=e;return t})();var ye=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=w({type:e}),e.\u0275inj=h({imports:[A,E,b,S,G]});let t=e;return t})();export{ye as DownloadsModule};