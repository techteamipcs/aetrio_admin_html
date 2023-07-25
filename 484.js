"use strict";(self.webpackChunkaetrio_dashboard_angular=self.webpackChunkaetrio_dashboard_angular||[]).push([[484],{6484:(B,_,s)=>{s.r(_),s.d(_,{AuthModule:()=>z});var u=s(6895),Z=s(529),d=s(8869),i=s(433),m=s(8503),e=s(4650),p=s(6570);function v(t,a){if(1&t&&(e.TgZ(0,"div",33),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.hij(" ",o.throw_msg," ")}}function U(t,a){if(1&t&&(e.TgZ(0,"div",34),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.hij(" ",o.throw_msg," ")}}function b(t,a){1&t&&(e.TgZ(0,"span",35),e._uU(1,"User Name is required"),e.qZA())}function T(t,a){1&t&&(e.TgZ(0,"span",35),e._uU(1,"Email is required"),e.qZA())}function A(t,a){1&t&&(e.TgZ(0,"span",35),e._uU(1,"Password is required"),e.qZA())}function w(t,a){1&t&&(e.TgZ(0,"span",35),e._uU(1,"Confirm Password is required"),e.qZA())}let C=(()=>{class t{constructor(o,r,n,l,c){this.formBuilder=o,this.router=r,this.route=n,this.loginService=l,this.toastr=c,this.submitted=!1,this.msg_success=!1,this.msg_danger=!1,this.hasError=(f,h)=>this.addProfileForm.controls[f].hasError(h),this.addProfileForm=this.formBuilder.group({username:["",i.kI.required],email:["",i.kI.required],password:["",i.kI.required],confirmpassword:["",i.kI.required],role:["",i.kI.required]}),this.token=localStorage.getItem("aetrio-token")}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.id&&this.patchingdata(this.id)}patchingdata(o){this.loginService.getUser({id:o}).subscribe(n=>{if(200==n.code){let l=n?.result;this.addProfileForm.patchValue({username:l?.username,email:l?.email,role:l?.role})}})}onSubmit(){this.submitted=!0;let o=this.addProfileForm.value;o.id=this.id,this.addProfileForm.value.password==this.addProfileForm.value.confirmpassword?this.loginService.editProfile(o).subscribe(r=>{200==r.code?(this.toastr.successToastr(r.message),setTimeout(()=>{this.router.navigate(["/auth/view-user"])},2e3)):this.toastr.errorToastr(r.message)}):(this.throw_msg="Please Enter same Password",this.msg_danger=!0)}onCancel(){this.router.navigate(["/auth/view-user"])}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i.qu),e.Y36(d.F0),e.Y36(d.gz),e.Y36(m.r),e.Y36(p.eP))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-profile"]],decls:58,vars:7,consts:[[1,"header","pb-8","pt-5","pt-lg-8","d-flex","align-items-center",2,"min-height","400px","background-size","cover","background-position","center top"],[1,"mask","bg-gradient-info","opacity-8"],[1,"container-fluid","d-flex","align-items-center"],[1,"row"],[1,"col-lg-7","col-md-10"],[1,"display-2","text-white"],[1,"text-white","mt-0","mb-5"],[1,"container-fluid","mt--7"],[1,"col-xl-12","order-xl-1"],[1,"card","bg-secondary","shadow"],[1,"card-header","bg-white","border-0"],[1,"row","align-items-center"],[1,"col-8"],[1,"mb-0"],["class","alert alert-success alert-dismissable","style","margin-left: 0;",4,"ngIf"],["class","alert alert-danger alert-dismissable","style","margin-left: 0;",4,"ngIf"],[1,"card-body"],["method","post","novalidate","",3,"formGroup","ngSubmit"],[1,"box-body"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","name","username","autocomplete","off","formControlName","username","placeholder","Username",1,"form-control"],["class","alert-danger",4,"ngIf"],["type","text","name","email","autocomplete","off","formControlName","email","placeholder","email",1,"form-control"],["name","role","formControlName","role",1,"form-control"],["value",""],["value","admin"],["value","user"],["type","password","name","password","autocomplete","off","formControlName","password","placeholder","Password",1,"form-control"],["type","password","name","confirmpassword","autocomplete","off","formControlName","confirmpassword","placeholder","Confirm Password",1,"form-control"],[1,"box-footer"],["type","submit",1,"btn","btn-primary"],["type","cancel",1,"btn","btn-danger",3,"click"],[1,"alert","alert-success","alert-dismissable",2,"margin-left","0"],[1,"alert","alert-danger","alert-dismissable",2,"margin-left","0"],[1,"alert-danger"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"span",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),e._uU(6,"Users"),e.qZA(),e.TgZ(7,"p",6),e._uU(8,"This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks"),e.qZA()()()()(),e.TgZ(9,"div",7)(10,"div",3)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h3",13),e._uU(17,"Edit Users"),e.qZA()()(),e.YNc(18,v,2,1,"div",14),e.YNc(19,U,2,1,"div",15),e.qZA(),e.TgZ(20,"div",16)(21,"form",17),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(22,"div",18)(23,"div",19)(24,"label",20),e._uU(25,"User Name"),e.qZA(),e._UZ(26,"input",21),e.YNc(27,b,2,0,"span",22),e.qZA(),e.TgZ(28,"div",19)(29,"label",20),e._uU(30,"Email"),e.qZA(),e._UZ(31,"input",23),e.YNc(32,T,2,0,"span",22),e.qZA(),e.TgZ(33,"div",19)(34,"label",20),e._uU(35,"Select User Role"),e.qZA(),e.TgZ(36,"select",24)(37,"option",25),e._uU(38,"Select User role"),e.qZA(),e.TgZ(39,"option",26),e._uU(40,"Admin"),e.qZA(),e.TgZ(41,"option",27),e._uU(42,"User"),e.qZA()()(),e.TgZ(43,"div",19)(44,"label",20),e._uU(45,"Password"),e.qZA(),e._UZ(46,"input",28),e.YNc(47,A,2,0,"span",22),e.qZA(),e.TgZ(48,"div",19)(49,"label",20),e._uU(50,"Confirm Password"),e.qZA(),e._UZ(51,"input",29),e.YNc(52,w,2,0,"span",22),e.qZA()(),e.TgZ(53,"div",30)(54,"button",31),e._uU(55,"Submit"),e.qZA(),e.TgZ(56,"button",32),e.NdJ("click",function(){return r.onCancel()}),e._uU(57,"Cancel"),e.qZA()()()()()()()()),2&o&&(e.xp6(18),e.Q6J("ngIf",r.msg_success),e.xp6(1),e.Q6J("ngIf",r.msg_danger),e.xp6(2),e.Q6J("formGroup",r.addProfileForm),e.xp6(6),e.Q6J("ngIf",r.submitted&&r.hasError("username","required")),e.xp6(5),e.Q6J("ngIf",r.submitted&&r.hasError("email","required")),e.xp6(15),e.Q6J("ngIf",r.submitted&&r.hasError("password","required")),e.xp6(5),e.Q6J("ngIf",r.submitted&&r.hasError("confirmpassword","required")))},dependencies:[u.O5,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u]}),t})();var g=s(5826);function q(t,a){if(1&t&&(e.TgZ(0,"div",33),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.hij(" ",o.throw_msg," ")}}function x(t,a){if(1&t&&(e.TgZ(0,"div",34),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.hij(" ",o.throw_msg," ")}}function P(t,a){1&t&&(e.TgZ(0,"span",35),e._uU(1,"User Name is required"),e.qZA())}function y(t,a){1&t&&(e.TgZ(0,"span",35),e._uU(1,"Email is required"),e.qZA())}function N(t,a){1&t&&(e.TgZ(0,"span",35),e._uU(1,"Password is required"),e.qZA())}function I(t,a){1&t&&(e.TgZ(0,"span",35),e._uU(1,"Confirm Password is required"),e.qZA())}let J=(()=>{class t{constructor(o,r,n,l,c){this.formBuilder=o,this.router=r,this.route=n,this.loginService=l,this.toastr=c,this.submitted=!1,this.msg_success=!1,this.msg_danger=!1,this.hasError=(f,h)=>this.addProfileForm.controls[f].hasError(h),this.addProfileForm=this.formBuilder.group({username:["",i.kI.required],email:["",i.kI.required],password:["",i.kI.required],confirmpassword:["",i.kI.required],role:["",i.kI.required]}),this.token=localStorage.getItem("aetrio-token")}ngOnInit(){}onSubmit(){this.submitted=!0;let o=this.addProfileForm.value;o["aetrio-token"]=this.token,this.addProfileForm.value.password==this.addProfileForm.value.confirmpassword?this.loginService.createrofile(o).subscribe(r=>{200==r.code?(this.msg_success=!0,this.msg_danger=!1,this.toastr.successToastr(r.message),this.router.navigate(["/auth/view-user"])):(this.msg_success=!1,this.toastr.errorToastr(r.message))}):(this.throw_msg="Please Enter same Password",this.msg_danger=!0)}onCancel(){this.router.navigate(["/auth/view-user"])}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i.qu),e.Y36(d.F0),e.Y36(d.gz),e.Y36(m.r),e.Y36(p.eP))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-user"]],decls:58,vars:7,consts:[[1,"header","pb-8","pt-5","pt-lg-8","d-flex","align-items-center",2,"min-height","400px","background-size","cover","background-position","center top"],[1,"mask","bg-gradient-info","opacity-8"],[1,"container-fluid","d-flex","align-items-center"],[1,"row"],[1,"col-lg-7","col-md-10"],[1,"display-2","text-white"],[1,"text-white","mt-0","mb-5"],[1,"container-fluid","mt--7"],[1,"col-xl-12","order-xl-1"],[1,"card","bg-secondary","shadow"],[1,"card-header","bg-white","border-0"],[1,"row","align-items-center"],[1,"col-8"],[1,"mb-0"],["class","alert alert-success alert-dismissable","style","margin-left: 0;",4,"ngIf"],["class","alert alert-danger alert-dismissable","style","margin-left: 0;",4,"ngIf"],[1,"card-body"],["method","post","novalidate","",3,"formGroup","ngSubmit"],[1,"box-body"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","name","username","autocomplete","off","formControlName","username","placeholder","Username",1,"form-control"],["class","alert-danger",4,"ngIf"],["type","text","name","email","autocomplete","off","formControlName","email","placeholder","email",1,"form-control"],["name","role","formControlName","role",1,"form-control"],["value",""],["value","admin"],["value","user"],["type","password","name","password","autocomplete","off","formControlName","password","placeholder","Password",1,"form-control"],["type","password","name","confirmpassword","autocomplete","off","formControlName","confirmpassword","placeholder","Confirm Password",1,"form-control"],[1,"box-footer"],["type","submit",1,"btn","btn-primary"],["type","cancel",1,"btn","btn-danger",3,"click"],[1,"alert","alert-success","alert-dismissable",2,"margin-left","0"],[1,"alert","alert-danger","alert-dismissable",2,"margin-left","0"],[1,"alert-danger"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"span",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),e._uU(6,"Users"),e.qZA(),e.TgZ(7,"p",6),e._uU(8,"This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks"),e.qZA()()()()(),e.TgZ(9,"div",7)(10,"div",3)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h3",13),e._uU(17,"Edit Users"),e.qZA()()(),e.YNc(18,q,2,1,"div",14),e.YNc(19,x,2,1,"div",15),e.qZA(),e.TgZ(20,"div",16)(21,"form",17),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(22,"div",18)(23,"div",19)(24,"label",20),e._uU(25,"User Name"),e.qZA(),e._UZ(26,"input",21),e.YNc(27,P,2,0,"span",22),e.qZA(),e.TgZ(28,"div",19)(29,"label",20),e._uU(30,"Email"),e.qZA(),e._UZ(31,"input",23),e.YNc(32,y,2,0,"span",22),e.qZA(),e.TgZ(33,"div",19)(34,"label",20),e._uU(35,"Select User Role"),e.qZA(),e.TgZ(36,"select",24)(37,"option",25),e._uU(38,"Select User role"),e.qZA(),e.TgZ(39,"option",26),e._uU(40,"Admin"),e.qZA(),e.TgZ(41,"option",27),e._uU(42,"User"),e.qZA()()(),e.TgZ(43,"div",19)(44,"label",20),e._uU(45,"Password"),e.qZA(),e._UZ(46,"input",28),e.YNc(47,N,2,0,"span",22),e.qZA(),e.TgZ(48,"div",19)(49,"label",20),e._uU(50,"Confirm Password"),e.qZA(),e._UZ(51,"input",29),e.YNc(52,I,2,0,"span",22),e.qZA()(),e.TgZ(53,"div",30)(54,"button",31),e._uU(55,"Submit"),e.qZA(),e.TgZ(56,"button",32),e.NdJ("click",function(){return r.onCancel()}),e._uU(57,"Cancel"),e.qZA()()()()()()()()),2&o&&(e.xp6(18),e.Q6J("ngIf",r.msg_success),e.xp6(1),e.Q6J("ngIf",r.msg_danger),e.xp6(2),e.Q6J("formGroup",r.addProfileForm),e.xp6(6),e.Q6J("ngIf",r.submitted&&r.hasError("username","required")),e.xp6(5),e.Q6J("ngIf",r.submitted&&r.hasError("email","required")),e.xp6(15),e.Q6J("ngIf",r.submitted&&r.hasError("password","required")),e.xp6(5),e.Q6J("ngIf",r.submitted&&r.hasError("confirmpassword","required")))},dependencies:[u.O5,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u]}),t})();var k=s(8601);let E=(()=>{class t{transform(o,r){return o&&r?o.filter(n=>-1!==n.username.toLowerCase().indexOf(r.toLowerCase())):o}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=e.Yjl({name:"active",type:t,pure:!0}),t})();function S(t,a){1&t&&(e.TgZ(0,"td",19)(1,"div",20),e._uU(2," Career List is Empty "),e.qZA()())}function Y(t,a){if(1&t&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&t){const o=e.oxw().index;e.xp6(1),e.Oqu(o+1)}}function F(t,a){if(1&t&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&t){const o=e.oxw().index,r=e.oxw();e.xp6(1),e.Oqu(o+1+(r.currentPage-1)*r.currentLimit)}}function M(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"tr"),e.YNc(1,Y,2,1,"td",21),e.YNc(2,F,2,1,"td",21),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"a",22),e._UZ(11,"i",23),e.qZA(),e.TgZ(12,"a",24),e.NdJ("click",function(){const l=e.CHM(o).$implicit,c=e.oxw();return e.KtG(c.deleteCareer(l._id))}),e._UZ(13,"i",25),e.qZA()()()}if(2&t){const o=a.$implicit,r=e.oxw();e.xp6(1),e.Q6J("ngIf",1==r.currentPage),e.xp6(1),e.Q6J("ngIf",1!=r.currentPage),e.xp6(2),e.Oqu(o.username),e.xp6(2),e.Oqu(o.email),e.xp6(2),e.Oqu(o.role),e.xp6(2),e.MGl("routerLink","/auth/edit-profile/",o._id,"")}}function O(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"div",26)(1,"app-pagination",27,28),e.NdJ("changePage",function(n){e.CHM(o);const l=e.oxw();return e.KtG(l.onListChangePage(n))}),e.qZA()()}if(2&t){const o=e.oxw();e.xp6(1),e.Q6J("initialPage",o.currentPage)("count",o.totalRecord)}}const L=[{path:"edit-profile/:id",component:C,canActivate:[g.a]},{path:"view-user",component:(()=>{class t{constructor(o,r,n){this.router=o,this.userService=r,this.toastr=n,this.msg_danger=!1,this.currentPage=1,this.initialized=!1,this.currentLimit=10,this.totalRecord=0,this.searchText=""}ngOnInit(){this.get_userData(),this.tableData1={headerRow:["ID","Name","Country","City","Salary"],dataRows:[["1","Dakota Rice","Niger","Oud-Turnhout","$36,738"],["2","Minerva Hooper","Cura\xe7ao","Sinaai-Waas","$23,789"],["3","Sage Rodriguez","Netherlands","Baileux","$56,142"],["4","Philip Chaney","Korea, South","Overland Park","$38,735"],["5","Doris Greene","Malawi","Feldkirchen in K\xe4rnten","$63,542"],["6","Mason Porter","Chile","Gloucester","$78,615"]]},this.tableData2={headerRow:["ID","Name","Salary","Country","City"],dataRows:[["1","Dakota Rice","$36,738","Niger","Oud-Turnhout"],["2","Minerva Hooper","$23,789","Cura\xe7ao","Sinaai-Waas"],["3","Sage Rodriguez","$56,142","Netherlands","Baileux"],["4","Philip Chaney","$38,735","Korea, South","Overland Park"],["5","Doris Greene","$63,542","Malawi","Feldkirchen in K\xe4rnten"],["6","Mason Porter","$78,615","Chile","Gloucester"]]}}get_userData(){this.userService.getallusers({limit:this.currentLimit,page:this.currentPage}).subscribe(r=>{200==r.code?null!=r.result&&""!=r.result?(this.userData=r.result,this.totalRecord=r?.count,window.scroll(0,0)):this.msg_danger=!0:this.toastr.errorToastr(r.message)})}onListChangePage(o){this.currentPage=o,this.get_userData()}deleteCareer(o){confirm("Are you sure to delete this User")&&this.userService.deleteuser({id:o}).subscribe(n=>{200==n.code&&(this.get_userData(),this.router.navigate(["/auth/view-user"]))})}onCancel(){this.router.navigate(["/auth/view"])}searchUser(){this.searchText?(this.currentLimit=100,this.currentPage=1):this.currentLimit=10,this.get_userData()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(d.F0),e.Y36(m.r),e.Y36(p.eP))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-view-user"]],decls:39,vars:7,consts:[[1,"header","bg-gradient-info","pb-8","pt-5","pt-md-8"],[1,"container-fluid"],[1,"header-body"],[1,"container-fluid","mt--7"],[1,"row"],[1,"col"],[1,"card","shadow"],[1,"card-header","border-0"],[1,"mb-0"],[1,"col-md-12"],[1,"col-md-6"],[1,"title"],["type","text","name","search","autocomplete","off","placeholder","\uf002  Start searching for a User by id or name or email",1,"form-control",3,"ngModel","keyup","ngModelChange"],["type","button","routerLink","/auth/add-user",1,"btn","btn-primary","pull-right"],[1,"table-responsive"],[1,"table","align-items-center","table-flush"],["colspan","5",4,"ngIf"],[4,"ngFor","ngForOf"],["class","aetrio-pagination",4,"ngIf"],["colspan","5"],[1,"alert","alert-dismissable",2,"text-align","center"],[4,"ngIf"],[2,"cursor","pointer",3,"routerLink"],["aria-hidden","true",1,"fa","fa-pencil-square-o"],[2,"cursor","pointer","padding-left","15px",3,"click"],["aria-hidden","true",1,"fa","fa-trash-o"],[1,"aetrio-pagination"],[3,"initialPage","count","changePage"],["pagination",""]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2),e.qZA()(),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h3",8),e._uU(9,"Users List"),e.qZA()(),e.TgZ(10,"div",9)(11,"div",4)(12,"div",10)(13,"h4",11)(14,"input",12),e.NdJ("keyup",function(){return r.searchUser()})("ngModelChange",function(l){return r.searchText=l}),e.qZA()()(),e.TgZ(15,"div",10)(16,"button",13),e._uU(17,"Add User"),e.qZA()()(),e.TgZ(18,"div",10),e._UZ(19,"h4",11),e.qZA()(),e.TgZ(20,"div",14)(21,"table",15)(22,"thead")(23,"tr")(24,"th"),e._uU(25,"SL No"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"User Name"),e.qZA(),e.TgZ(28,"th"),e._uU(29,"Email"),e.qZA(),e.TgZ(30,"th"),e._uU(31,"Role"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"Action"),e.qZA()()(),e.TgZ(34,"tbody"),e.YNc(35,S,3,0,"td",16),e.YNc(36,M,14,6,"tr",17),e.ALo(37,"active"),e.qZA()(),e.YNc(38,O,3,2,"div",18),e.qZA()()()()()),2&o&&(e.xp6(14),e.Q6J("ngModel",r.searchText),e.xp6(21),e.Q6J("ngIf",r.msg_danger),e.xp6(1),e.Q6J("ngForOf",e.xi3(37,4,r.userData,r.searchText)),e.xp6(2),e.Q6J("ngIf",r.totalRecord>0&&!r.searchText))},dependencies:[u.sg,u.O5,d.rH,d.yS,i.Fj,i.JJ,i.On,k.Q,E],styles:[".aetrio-pagination[_ngcontent-%COMP%]{display:inline-block;width:100%;text-align:center;background-color:#36aef5}.btn-primary[_ngcontent-%COMP%]{color:#fff;background-color:#423f3f;border-color:#423f3f}.title[_ngcontent-%COMP%]{font-size:30px}.box-title[_ngcontent-%COMP%]{font-size:60px}"]}),t})(),canActivate:[g.a]},{path:"add-user",component:J,canActivate:[g.a]}];let R=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(L),d.Bz]}),t})();var D=s(8567),j=s(3778),V=s(6849),$=s(3189);let z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,R,i.u5,i.UX,Z.JF,j.A0,D.JX,V.BlogModule,$.h]}),t})()}}]);