"use strict";(self.webpackChunkaetrio_dashboard_angular=self.webpackChunkaetrio_dashboard_angular||[]).push([[592],{8503:(g,d,o)=>{o.d(d,{r:()=>l});var s=o(262),h=o(529),i=o(2843),n=o(2340),u=o(4650);let l=(()=>{class a{constructor(p){this.http=p,this.validateLogin=t=>this.http.post(n.N.baseUrl+"/api/users/login",t,{observe:"response"}).pipe((0,s.K)(r=>(0,i._)(r))),this.updateProfile=t=>this.http.post(n.N.baseUrl+"/api/users/updateprofile",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.editProfile=t=>this.http.post(n.N.baseUrl+"/api/users/edituserprofile",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.createrofile=t=>this.http.post(n.N.baseUrl+"/api/users/registerUser",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.getUser=t=>this.http.post(n.N.baseUrl+"/api/users/getuserwithid",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.getallusers=t=>this.http.post(n.N.baseUrl+"/api/users/adminuserview",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.deleteuser=t=>this.http.post(n.N.baseUrl+"/api/users/deleteuser",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r)))}getRequestHeaders(){let p;const t=localStorage.getItem("aetrio-token");return p=new h.WM({Authorization:`Bearer ${t}`}),{headers:p}}}return a.\u0275fac=function(p){return new(p||a)(u.LFG(h.eN))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},3257:(g,d,o)=>{o.d(d,{Y:()=>l});var s=o(262),h=o(529),i=o(2843),n=o(2340),u=o(4650);let l=(()=>{class a{constructor(p){this.http=p,this.addAuthor=t=>this.http.post(n.N.baseUrl+"/api/blog/addauthor",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.getAuthorDetails=t=>this.http.post(n.N.baseUrl+"/api/blog/viewauthor",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.getAuthorWithId=t=>this.http.post(n.N.baseUrl+"/api/blog/getAuthorWithId",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.editAuthordata=(t,e)=>{let r=n.N.baseUrl+"/api/blog/editAuthordata";return e&&(r+=`?id=${e}`),this.http.post(r,t,this.getRequestHeaders()).pipe((0,s.K)(c=>(0,i._)(c)))},this.deleteauthor=t=>this.http.post(n.N.baseUrl+"/api/blog/deleteauthor",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.getInfluencerDetails=t=>this.http.post(n.N.baseUrl+"/api/home/viewinfluencer",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.deleteprogram=t=>this.http.post(n.N.baseUrl+"/api/home/deleteprogram",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r)))}getRequestHeaders(){let p;const t=localStorage.getItem("aetrio-token");return p=new h.WM({Authorization:`Bearer ${t}`}),{headers:p}}}return a.\u0275fac=function(p){return new(p||a)(u.LFG(h.eN))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},1528:(g,d,o)=>{o.d(d,{v:()=>l});var s=o(262),h=o(529),i=o(2843),n=o(2340),u=o(4650);let l=(()=>{class a{constructor(p){this.http=p,this.addTestimonial=t=>this.http.post(n.N.baseUrl+"/api/home/addtestimonial",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.getTestimonialDetails=t=>this.http.post(n.N.baseUrl+"/api/home/alltestimonial",t).pipe((0,s.K)(r=>(0,i._)(r))),this.getTestimonialWithId=t=>this.http.post(n.N.baseUrl+"/api/home/getTestimonialWithId",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.editTestimonialdata=(t,e)=>{let r=n.N.baseUrl+"/api/home/editTestimonialdata";return e&&(r+=`?id=${e}`),this.http.post(r,t,this.getRequestHeaders()).pipe((0,s.K)(c=>(0,i._)(c)))},this.deleteTestimonial=t=>this.http.post(n.N.baseUrl+"/api/home/deleteTestimonial",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.getcontactDetails=t=>this.http.post(n.N.baseUrl+"/api/home/allcontact",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r))),this.deletecontact=t=>this.http.post(n.N.baseUrl+"/api/home/deletecontact",t,this.getRequestHeaders()).pipe((0,s.K)(r=>(0,i._)(r)))}getRequestHeaders(){let p;const t=localStorage.getItem("aetrio-token");return p=new h.WM({Authorization:`Bearer ${t}`}),{headers:p}}}return a.\u0275fac=function(p){return new(p||a)(u.LFG(h.eN))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);