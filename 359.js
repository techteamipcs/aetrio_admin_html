"use strict";(self.webpackChunkaetrio_dashboard_angular=self.webpackChunkaetrio_dashboard_angular||[]).push([[359],{3359:(B,p,r)=>{r.r(p),r.d(p,{TestimonialModule:()=>z});var c=r(6895),v=r(529),a=r(433),h=r(6913),d=r(8869),e=r(4650),m=r(2340),f=r(1528),A=r(6570);const b=["uploader"];function q(o,s){if(1&o&&(e.TgZ(0,"div",50),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.hij(" ",i.throw_msg," ")}}function U(o,s){if(1&o&&(e.TgZ(0,"div",51),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.hij(" ",i.throw_msg," ")}}function C(o,s){1&o&&(e.TgZ(0,"span",52),e._uU(1,"Testimonial Name is required"),e.qZA())}function x(o,s){1&o&&(e.TgZ(0,"span",52),e._uU(1,"Testimonial Title is required"),e.qZA())}function y(o,s){1&o&&(e.TgZ(0,"span",52),e._uU(1,"Location is required"),e.qZA())}function w(o,s){1&o&&(e.TgZ(0,"span",52),e._uU(1,"Featured is required"),e.qZA())}function I(o,s){1&o&&(e.TgZ(0,"span",52),e._uU(1,"Testimonial Information is required"),e.qZA())}function k(o,s){if(1&o&&e._UZ(0,"img",53),2&o){const i=e.oxw();e.hYB("src","",i.imagePath,"",i.ImageName,"",e.LSH)}}let T=(()=>{class o{constructor(i,t,n,l,g){this.formBuilder=i,this.router=t,this.route=n,this.testimonialService=l,this.toastr=g,this.submitted=!1,this.msg_success=!1,this.msg_danger=!1,this.isEdit="edit"===this.route.snapshot.data.title,this.jobs=[{id:1,name:"User"},{id:2,name:"Manager"},{id:3,name:"Admin"},{id:4,name:"Developer"},{id:5,name:"Others"}],this.selected=[{id:1,name:"User"}],this.hasError=(D,R)=>this.addTestimonialForm.controls[D].hasError(R),this.uploadInput=new e.vpe,this.addTestimonialForm=this.formBuilder.group({name:["",a.kI.required],status:[!0,a.kI.required],title:["",a.kI.required],location:["",a.kI.required],text:["",a.kI.required],featured:["",a.kI.required],job:["",a.kI.required],ratings:["",a.kI.required]}),this.imagePath=m.N.baseUrl+"/public/"}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.isEdit?(this.patchingdata(this.id),this.applyAction="Update"):this.applyAction="Add"}patchingdata(i){this.testimonialService.getTestimonialWithId({id:i}).subscribe(n=>{if(200==n.code){let l=n?.result;this.ImageName=l?.image,this.addTestimonialForm.patchValue({name:l?.name,title:l?.title,location:l?.location,text:l?.text,featured:l?.featured,status:l?.status,job:l?.job,ratings:l?.ratings})}})}onSubmit(){this.submitted=!0;let i=this.addTestimonialForm.value,t=this.id;i.image=this.ImageName,!this.addTestimonialForm.invalid&&(this.isEdit?this.testimonialService.editTestimonialdata(i,t).subscribe(n=>{200==n.code?(this.toastr.successToastr(n.message),setTimeout(()=>{this.router.navigate(["/testimonial/view"])},2e3)):this.toastr.errorToastr(n.message)}):this.testimonialService.addTestimonial(i).subscribe(n=>{200==n.code?(this.toastr.successToastr(n.message),setTimeout(()=>{this.router.navigate(["/testimonial/view"])},2e3)):400==n.code&&this.toastr.errorToastr(n.message)}))}onUploadOutput(i){"allAddedToQueue"===i.type?this.uploadInput.emit({type:"uploadAll",url:m.N.baseUrl+"/api/home/addimage",method:"POST",data:{}}):"done"===i.type&&typeof i.file<"u"&&(this.ImageName=i.file.response.result)}onCancel(){this.router.navigate(["/testimonial/view"])}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(a.qu),e.Y36(d.F0),e.Y36(d.gz),e.Y36(f.v),e.Y36(A.eP))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-testimonial"]],viewQuery:function(i,t){if(1&i&&e.Gf(b,5,e.SBq),2&i){let n;e.iGM(n=e.CRH())&&(t.fileInput=n.first)}},decls:110,vars:10,consts:[[1,"header","pb-8","pt-5","pt-lg-8","d-flex","align-items-center",2,"min-height","400px","background-size","cover","background-position","center top"],[1,"mask","bg-gradient-info","opacity-8"],[1,"container-fluid","d-flex","align-items-center"],[1,"row"],[1,"col-lg-7","col-md-10"],[1,"display-2","text-white"],[1,"text-white","mt-0","mb-5"],[1,"container-fluid","mt--7"],[1,"col-xl-12","order-xl-1"],[1,"card","bg-secondary","shadow"],[1,"card-header","bg-white","border-0"],[1,"row","align-items-center"],[1,"col-8"],[1,"mb-0"],["class","alert alert-success alert-dismissable","style","margin-left: 0;",4,"ngIf"],["class","alert alert-danger alert-dismissable","style","margin-left: 0;",4,"ngIf"],[1,"card-body"],["method","post","novalidate","",3,"formGroup","ngSubmit"],[1,"box-body"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","name","name","autocomplete","off","formControlName","name","placeholder","Testimonial Name",1,"form-control"],["class","alert-danger",4,"ngIf"],["name","ratings","formControlName","ratings",1,"form-control"],["value",""],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["type","text","name","name","autocomplete","off","formControlName","title","placeholder","Testimonial Title",1,"form-control"],["type","text","name","name","autocomplete","off","formControlName","location","placeholder","Location",1,"form-control"],["name","featured","formControlName","featured",1,"form-control"],["value","true"],["value","false"],["name","text","autocomplete","nope","formControlName","text","placeholder","Testimonial Information",1,"form-control"],["name","job","formControlName","job",1,"form-control"],["value","User"],["value","Manager"],["value","Admin"],["value","Developer"],["value","Others"],["type","file","ngFileSelect","",3,"uploadInput","uploadOutput"],["uploader",""],["for","exampleInputEmail1",2,"display","block"],["alt","logo","style","height: 100px; width: 100px;",3,"src",4,"ngIf"],["name","status","formControlName","status",1,"form-control"],[1,"box-footer"],["type","submit",1,"btn","btn-primary"],["type","cancel",1,"btn","btn-danger",3,"click"],[1,"alert","alert-success","alert-dismissable",2,"margin-left","0"],[1,"alert","alert-danger","alert-dismissable",2,"margin-left","0"],[1,"alert-danger"],["alt","logo",2,"height","100px","width","100px",3,"src"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"span",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),e._uU(6,"Testimonial Information "),e.qZA(),e.TgZ(7,"p",6),e._uU(8,"This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks"),e.qZA()()()()(),e.TgZ(9,"div",7)(10,"div",3)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h3",13),e._uU(17,"Edit Testimonial"),e.qZA()()(),e.YNc(18,q,2,1,"div",14),e.YNc(19,U,2,1,"div",15),e.qZA(),e.TgZ(20,"div",16)(21,"form",17),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(22,"div",18)(23,"div",19)(24,"label",20),e._uU(25,"Name"),e.qZA(),e._UZ(26,"input",21),e.YNc(27,C,2,0,"span",22),e.qZA(),e.TgZ(28,"div",19)(29,"label",20),e._uU(30,"Ratings"),e.qZA(),e.TgZ(31,"select",23)(32,"option",24),e._uU(33,"Select Rating"),e.qZA(),e.TgZ(34,"option",25),e._uU(35,"1"),e.qZA(),e.TgZ(36,"option",26),e._uU(37,"2"),e.qZA(),e.TgZ(38,"option",27),e._uU(39,"3"),e.qZA(),e.TgZ(40,"option",28),e._uU(41,"4"),e.qZA(),e.TgZ(42,"option",29),e._uU(43,"5"),e.qZA()()(),e.TgZ(44,"div",19)(45,"label",20),e._uU(46,"Title"),e.qZA(),e._UZ(47,"input",30),e.YNc(48,x,2,0,"span",22),e.qZA(),e.TgZ(49,"div",19)(50,"label",20),e._uU(51,"Location"),e.qZA(),e._UZ(52,"input",31),e.YNc(53,y,2,0,"span",22),e.qZA(),e.TgZ(54,"div",19)(55,"label",20),e._uU(56,"Featured"),e.qZA(),e.TgZ(57,"select",32)(58,"option",24),e._uU(59,"Select Featured"),e.qZA(),e.TgZ(60,"option",33),e._uU(61,"Active"),e.qZA(),e.TgZ(62,"option",34),e._uU(63,"InActive"),e.qZA()(),e.YNc(64,w,2,0,"span",22),e.qZA(),e.TgZ(65,"div",19)(66,"label",20),e._uU(67,"Text"),e.qZA(),e._UZ(68,"textarea",35),e.YNc(69,I,2,0,"span",22),e.qZA(),e.TgZ(70,"div",19)(71,"label",20),e._uU(72,"Job"),e.qZA(),e.TgZ(73,"select",36)(74,"option",24),e._uU(75,"Select Job"),e.qZA(),e.TgZ(76,"option",37),e._uU(77,"User"),e.qZA(),e.TgZ(78,"option",38),e._uU(79,"Manager"),e.qZA(),e.TgZ(80,"option",39),e._uU(81,"Admin"),e.qZA(),e.TgZ(82,"option",40),e._uU(83,"Developer"),e.qZA(),e.TgZ(84,"option",41),e._uU(85,"Others"),e.qZA()()(),e.TgZ(86,"div",19)(87,"label",20),e._uU(88,"Testimonial Image"),e.qZA(),e._UZ(89,"br"),e.TgZ(90,"input",42,43),e.NdJ("uploadOutput",function(l){return t.onUploadOutput(l)}),e.qZA(),e._UZ(92,"br"),e.TgZ(93,"label",44),e._uU(94,"(Required Size 141 * 141)"),e.qZA(),e._UZ(95,"br"),e.YNc(96,k,1,2,"img",45),e.qZA(),e.TgZ(97,"div",19)(98,"label",20),e._uU(99,"Status"),e.qZA(),e.TgZ(100,"select",46)(101,"option",33),e._uU(102,"Active"),e.qZA(),e.TgZ(103,"option",34),e._uU(104,"InActive"),e.qZA()()()(),e.TgZ(105,"div",47)(106,"button",48),e._uU(107,"Submit"),e.qZA(),e.TgZ(108,"button",49),e.NdJ("click",function(){return t.onCancel()}),e._uU(109,"Cancel"),e.qZA()()()()()()()()),2&i&&(e.xp6(18),e.Q6J("ngIf",t.msg_success),e.xp6(1),e.Q6J("ngIf",t.msg_danger),e.xp6(2),e.Q6J("formGroup",t.addTestimonialForm),e.xp6(6),e.Q6J("ngIf",t.submitted&&t.hasError("name","required")),e.xp6(21),e.Q6J("ngIf",t.submitted&&t.hasError("title","required")),e.xp6(5),e.Q6J("ngIf",t.submitted&&t.hasError("location","required")),e.xp6(11),e.Q6J("ngIf",t.submitted&&t.hasError("featured","required")),e.xp6(5),e.Q6J("ngIf",t.submitted&&t.hasError("text","required")),e.xp6(21),e.Q6J("uploadInput",t.uploadInput),e.xp6(6),e.Q6J("ngIf",t.ImageName))},dependencies:[c.O5,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.sg,a.u,h.qx]}),o})();var N=r(8601),Z=r(4417),_=r(3189),J=r(9972);function M(o,s){1&o&&(e.TgZ(0,"td",21)(1,"div",22),e._uU(2," Testimonial List is Empty "),e.qZA()())}function S(o,s){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const i=e.oxw().index;e.xp6(1),e.Oqu(i+1)}}function F(o,s){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const i=e.oxw().index,t=e.oxw();e.xp6(1),e.Oqu(i+1+(t.currentPage-1)*t.currentLimit)}}function O(o,s){if(1&o){const i=e.EpF();e.TgZ(0,"tr"),e.YNc(1,S,2,1,"td",23),e.YNc(2,F,2,1,"td",23),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"img",24),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.ALo(17,"date"),e.qZA(),e.TgZ(18,"td")(19,"a",25),e._UZ(20,"i",26),e.qZA(),e.TgZ(21,"a",27),e.NdJ("click",function(){const l=e.CHM(i).$implicit,g=e.oxw();return e.KtG(g.deleteTestimonial(l._id))}),e._UZ(22,"i",28),e.qZA()()()}if(2&o){const i=s.$implicit,t=e.oxw();e.xp6(1),e.Q6J("ngIf",1==t.currentPage),e.xp6(1),e.Q6J("ngIf",1!=t.currentPage),e.xp6(2),e.Oqu(i.name),e.xp6(2),e.hYB("src","",t.imagePath,"",i.image,"",e.LSH),e.xp6(2),e.Oqu(i.location),e.xp6(2),e.Oqu(i.title),e.xp6(2),e.Oqu(i.ratings),e.xp6(2),e.Oqu(1==i.status?"Active":"Deactive"),e.xp6(2),e.Oqu(e.xi3(17,11,i.created_at,"dd/MMM/yyyy hh:mm a")),e.xp6(3),e.MGl("routerLink","/testimonial/edit/",i._id,"")}}function P(o,s){if(1&o){const i=e.EpF();e.TgZ(0,"div",29)(1,"app-pagination",30,31),e.NdJ("changePage",function(n){e.CHM(i);const l=e.oxw();return e.KtG(l.onListChangePage(n))}),e.qZA()()}if(2&o){const i=e.oxw();e.xp6(1),e.Q6J("initialPage",i.currentPage)("count",i.totalRecord)}}let L=(()=>{class o{constructor(i,t){this.router=i,this.testimonialservice=t,this.msg_danger=!1,this.currentPage=1,this.initialized=!1,this.currentLimit=10,this.totalRecord=0,this.config={value:!0,name:"",disabled:!1,height:25,width:90,margin:3,fontSize:10,speed:300,color:{checked:"#36aef5",unchecked:"#423f3f"},switchColor:{checked:"#3366FF",unchecked:"crimson"},labels:{unchecked:"Deactive",checked:"Active"},checkedLabel:"",uncheckedLabel:"",fontColor:{checked:"#fafafa",unchecked:"#ffffff"}},this.imagePath=m.N.baseUrl+"/public/",this.config.switchColor.checked="#dcdcdc",this.config.color.checked="#dcdcdc",this.config.labels.checked="Change",this.isactive="none"}ngOnInit(){this.get_testimonialData()}get_testimonialData(){this.testimonialservice.getTestimonialDetails({limit:this.currentLimit,page:this.currentPage}).subscribe(t=>{200==t.code&&(null!=t.result&&""!=t.result?(this.testimonialData=t.result,this.totalRecord=t?.count,window.scroll(0,0)):this.msg_danger=!0)})}onListChangePage(i){this.currentPage=i,this.get_testimonialData()}deleteTestimonial(i){confirm("Are you sure to delete this testimonial")&&this.testimonialservice.deleteTestimonial({id:i}).subscribe(n=>{200==n.code&&(this.get_testimonialData(),this.router.navigate(["/testimonial/view"]))})}searchProduct(){this.searchText?(this.currentLimit=1e3,this.currentPage=1):this.currentLimit=10,this.get_testimonialData()}changeStatus(){"none"!=this.isactive?(this.config.switchColor.checked="#ffffff",this.config.color.checked="green",this.config.labels.checked="Active"):this.isactive?(this.isactive=!1,this.config.switchColor.unchecked="crimson",this.config.color.unchecked="#423f3f",this.config.labels.unchecked="Deactive"):this.isactive=!0}resetFilter(){this.config.switchColor.checked="#dcdcdc",this.config.color.checked="#dcdcdc",this.config.labels.checked="Change",this.config.switchColor.unchecked="#dcdcdc",this.config.color.unchecked="#dcdcdc",this.config.labels.unchecked="Change",this.isactive="none"}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(d.F0),e.Y36(f.v))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-view-testimonial"]],decls:50,vars:20,consts:[[1,"header","bg-gradient-info","pb-8","pt-5","pt-md-8"],[1,"container-fluid"],[1,"header-body"],[1,"container-fluid","mt--7"],[1,"row"],[1,"col"],[1,"card","shadow"],[1,"card-header","border-0"],[1,"mb-0"],[1,"col-md-12"],[1,"col-md-6"],["type","text","name","search","autocomplete","off","placeholder","\uf002  Start searching for a Testimonial",1,"form-control","mt-4",3,"ngModel","keyup","ngModelChange"],["type","button","routerLink","/testimonial/add",1,"btn","btn-primary","pull-right"],[1,"title"],[1,"table-responsive"],[1,"table","align-items-center","table-flush"],["required","",3,"ngModel","disabled","width","height","margin","labels","color","switchColor","fontColor","fontSize","ngModelChange","click"],[1,"btn","btn-sm","btn-info","mr-4",3,"click"],["colspan","5",4,"ngIf"],[4,"ngFor","ngForOf"],["class","aetrio-pagination",4,"ngIf"],["colspan","5"],[1,"alert","alert-dismissable",2,"text-align","center"],[4,"ngIf"],["alt","logo",2,"height","100px","width","100px",3,"src"],[2,"cursor","pointer",3,"routerLink"],["aria-hidden","true",1,"fa","fa-pencil-square-o"],[2,"cursor","pointer","padding-left","15px",3,"click"],["aria-hidden","true",1,"fa","fa-trash-o"],[1,"aetrio-pagination"],[3,"initialPage","count","changePage"],["pagination",""]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2),e.qZA()(),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h3",8),e._uU(9,"Testimonial List"),e.qZA()(),e.TgZ(10,"div",9)(11,"div",4)(12,"div",10)(13,"input",11),e.NdJ("keyup",function(){return t.searchProduct()})("ngModelChange",function(l){return t.searchText=l}),e.qZA()(),e.TgZ(14,"div",10)(15,"button",12),e._uU(16,"Add Testimonial"),e.qZA()()(),e.TgZ(17,"div",10),e._UZ(18,"h4",13),e.qZA()(),e.TgZ(19,"div",14)(20,"table",15)(21,"thead")(22,"tr")(23,"th"),e._uU(24,"SL No"),e.qZA(),e.TgZ(25,"th"),e._uU(26,"Name"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"Image"),e.qZA(),e.TgZ(29,"th"),e._uU(30,"location"),e.qZA(),e.TgZ(31,"th"),e._uU(32,"Title"),e.qZA(),e.TgZ(33,"th"),e._uU(34,"Ratings"),e.qZA(),e.TgZ(35,"th"),e._uU(36,"Status "),e.TgZ(37,"ng-toggle",16),e.NdJ("ngModelChange",function(l){return t.isactive=l})("click",function(){return t.changeStatus()}),e.qZA(),e.TgZ(38,"a",17),e.NdJ("click",function(){return t.resetFilter()}),e._uU(39,"Reset"),e.qZA()(),e.TgZ(40,"th"),e._uU(41,"Created At"),e.qZA(),e.TgZ(42,"th"),e._uU(43,"Action"),e.qZA()()(),e.TgZ(44,"tbody"),e.YNc(45,M,3,0,"td",18),e.YNc(46,O,23,14,"tr",19),e.ALo(47,"activefilter"),e.ALo(48,"filter"),e.qZA()(),e.YNc(49,P,3,2,"div",20),e.qZA()()()()()),2&i&&(e.xp6(13),e.Q6J("ngModel",t.searchText),e.xp6(24),e.Q6J("ngModel",t.isactive)("disabled",t.config.disabled)("width",t.config.width)("height",t.config.height)("margin",t.config.margin)("labels",t.config.labels)("color",t.config.color)("switchColor",t.config.switchColor)("fontColor",t.config.fontColor)("fontSize",t.config.fontSize),e.xp6(8),e.Q6J("ngIf",t.msg_danger),e.xp6(1),e.Q6J("ngForOf",e.xi3(47,14,e.xi3(48,17,t.testimonialData,t.searchText),t.isactive)),e.xp6(3),e.Q6J("ngIf",t.totalRecord>0&&!t.searchText))},dependencies:[c.sg,c.O5,d.rH,d.yS,a.Fj,a.JJ,a.Q7,a.On,N.Q,Z.sX,c.uU,_.Z,J.L],styles:[".aetrio-pagination[_ngcontent-%COMP%]{display:inline-block;width:100%;text-align:center;background-color:#36aef5}.btn-primary[_ngcontent-%COMP%]{color:#fff;background-color:#423f3f;border-color:#423f3f}.title[_ngcontent-%COMP%]{font-size:30px}.box-title[_ngcontent-%COMP%]{font-size:60px}.container[_ngcontent-%COMP%]{padding-top:50px;padding-bottom:10px;color:#405065}"]}),o})();var u=r(5826);const Y=[{path:"add",component:T,canActivate:[u.a]},{path:"edit/:id",component:T,data:{title:"edit"},canActivate:[u.a]},{path:"view",component:L,canActivate:[u.a]}];let Q=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(Y),d.Bz]}),o})();var E=r(6849),V=r(3778),j=r(9771);let z=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,Q,a.u5,a.UX,v.JF,h.TA,E.BlogModule,V.A0,_.h,Z.zb,j.B]}),o})()}}]);