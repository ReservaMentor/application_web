import{a as _,h as F,j as N,l as d}from"./chunk-BT7ZKXY5.js";import{Eb as D,Hb as S,Jb as k,Kc as E,Sb as a,Tb as p,Ub as y,Vb as w,Za as l,ca as C,da as f,ha as b,ia as m,ma as u,na as g,ua as M,va as I,vb as P,w as v,wb as O,xb as j,yb as r,zb as s}from"./chunk-C354RKFX.js";var x=(()=>{let t=class t{constructor(i){this.http=i}getAllCourses(){return this.http.get("/assets/course.json")}getCourseById(i){return this.getAllCourses().pipe(v(n=>n.find(o=>o.id===i)))}};t.\u0275fac=function(n){return new(n||t)(b(_))},t.\u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function V(e,t){if(e&1){let c=D();r(0,"div",1)(1,"h2"),a(2),s(),r(3,"p"),a(4),s(),r(5,"button",2),S("click",function(){let n=M(c).$implicit,o=k();return I(o.send(n))}),a(6,"Ver detalle"),s()()}if(e&2){let c=t.$implicit;l(2),p(c.title),l(2),w("",c.duration," \u2014 ",c.author,"")}}var T=(()=>{let t=class t{constructor(){this.router=m(N),this.service=m(x),this.items=[]}ngOnInit(){this.service.getAllCourses().subscribe(i=>{this.items=i})}send(i){console.log(i),this.router.navigate(["/course/detail/",i.id])}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["app-list"]],decls:3,vars:0,consts:[[1,"container","list"],[1,"item"],[3,"click"]],template:function(n,o){n&1&&(r(0,"div",0),O(1,V,7,3,"div",1,P),s()),n&2&&(l(),j(o.items))},styles:[".list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;margin-bottom:70px;font-family:Playfair Display}.item[_ngcontent-%COMP%]{display:block;border:2px solid #00540d;padding:10px;border-radius:20px;margin-bottom:45px}button[_ngcontent-%COMP%]{border-radius:10px;border:none;color:#f5f5f5;background-color:#00540d;padding:5px}h2[_ngcontent-%COMP%]{font-family:Playfair Display}"]});let e=t;return e})();var A=(()=>{let t=class t{constructor(){this.route=m(F),this.service=m(x),this.id=0,this.item=null,this.route.params.subscribe(i=>{console.log(i),this.id=Number(i.id)})}ngOnInit(){this.service.getCourseById(this.id).subscribe(i=>{console.log(i),this.item=i})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["app-detail"]],decls:13,vars:4,consts:[[1,"container"],[1,"info"],[1,"options"]],template:function(n,o){n&1&&(r(0,"div",0)(1,"div",1)(2,"h2"),a(3),s(),r(4,"p"),a(5),s(),r(6,"p"),a(7),s(),r(8,"p"),a(9),s(),r(10,"div",2)(11,"button"),a(12,"Inscribirse"),s()()()()),n&2&&(l(3),p(o.item==null?null:o.item.title),l(2),p(o.item==null?null:o.item.desc),l(2),y("Duraci\xF3n: ",o.item==null?null:o.item.duration,""),l(2),y("Por: ",o.item==null?null:o.item.author,""))},styles:[".info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Playfair Display}.info[_ngcontent-%COMP%]{display:inline-block;border:1px solid#00540d;max-width:50%;padding:20px;margin-bottom:50px}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}button[_ngcontent-%COMP%]{border-radius:10px;border:none;color:#f5f5f5;background-color:#00540d;padding:15px;margin:5px}"]});let e=t;return e})();var B=[{path:"",component:T},{path:"detail/:id",component:A}],L=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g({type:t}),t.\u0275inj=f({imports:[d.forChild(B),d]});let e=t;return e})();var ct=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g({type:t}),t.\u0275inj=f({imports:[E,d,L]});let e=t;return e})();export{ct as a};
