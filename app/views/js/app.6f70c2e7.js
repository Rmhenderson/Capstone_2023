(function(e){function t(t){for(var s,i,o=t[0],u=t[1],l=t[2],c=0,d=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);m&&m(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={app:0},a=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0efcba":"941f2418","chunk-2d20f022":"55b3f6c4","chunk-2d228d00":"682a1c3e"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,s){n=r[e]=[t,s]}));t.push(n[2]=s);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",l.name="ChunkLoadError",l.type=s,l.request=a,n[1](l)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var m=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1c51":function(e,t,n){"use strict";n("2b43")},"1f57":function(e,t,n){"use strict";var s=n("d4ec"),r=n("bee2"),a=n("bc3a"),i=n.n(a);function o(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var u="https://cappy-2023.herokuapp.com/api/test/",l=function(){function e(){Object(s["a"])(this,e)}return Object(r["a"])(e,[{key:"getPublicContent",value:function(){return i.a.get(u+"all")}},{key:"getUserBoard",value:function(){return i.a.get(u+"user",{headers:o()})}},{key:"getAdminBoard",value:function(){return i.a.get(u+"mod",{headers:o()})}},{key:"getRootBoard",value:function(){return i.a.get(u+"root",{headers:o()})}}]),e}();t["a"]=new l},"2b43":function(e,t,n){},"4cca":function(e,t,n){"use strict";n("8c95")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[t("a",{staticClass:"navbar-brand",attrs:{href:""},on:{click:function(e){e.preventDefault()}}},[e._v("Back Of House")]),t("div",{staticClass:"navbar-nav mr-auto"},[t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[t("font-awesome-icon",{attrs:{icon:"home"}}),e._v("Home\n        ")],1)],1),e.showRootBoard?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/root"}},[e._v("Root Board")])],1):e._e(),e.showRootBoard?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/acceptance"}},[e._v("Registration Requests")])],1):e._e(),e.showAdminBoard?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/mod"}},[e._v("Admin Board")])],1):e._e(),e.showAdminBoard|e.showRootBoard?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/assignments"}},[e._v("Manage Assignments")])],1):e._e(),t("li",{staticClass:"nav-item"},[e.currentUser?t("router-link",{staticClass:"nav-link",attrs:{to:"/user"}},[e._v("User")]):e._e()],1)]),e.currentUser?e._e():t("div",{staticClass:"navbar-nav ml-auto"},[t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t("font-awesome-icon",{attrs:{icon:"user-plus"}}),e._v("Sign Up.\n        ")],1)],1),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t("font-awesome-icon",{attrs:{icon:"sign-in-alt"}}),e._v("Login.\n        ")],1)],1)]),e.currentUser?t("div",{staticClass:"navbar-nav ml-auto"},[t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[t("font-awesome-icon",{attrs:{icon:"user"}}),e._v("\n          "+e._s(e.currentUser.username)+"\n        ")],1)],1),t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logOut.apply(null,arguments)}}},[t("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),e._v("LogOut\n        ")],1)])]):e._e()]),t("div",{staticClass:"container"},[t("router-view")],1)])},a=[],i=(n("6762"),n("2fdb"),{computed:{currentUser:function(){return this.$store.state.auth.user},showRootBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ROOT")},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}}),o=i,u=n("2877"),l=Object(u["a"])(o,r,a,!1,null,null,null),c=l.exports,m=n("8c4f"),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("header",{staticClass:"jumbotron"},[t("h3",[e._v(e._s(e.content))])])])},p=[],v=(n("6b54"),n("1f57")),g={name:"Home",data:function(){return{content:""}},mounted:function(){var e=this;v["a"].getPublicContent().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))}},f=g,h=Object(u["a"])(f,d,p,!1,null,null,null),w=h.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"card card-container"},[t("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),t("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.errors.has("username")?t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Username is required!")]):e._e()]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.errors.has("password")?t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Password is required!")]):e._e()]),t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:e.loading}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),t("span",[e._v("Login")])])]),t("div",{staticClass:"form-group"},[e.message?t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()])])])])},_=[],y=n("bee2"),k=n("d4ec"),x=Object(y["a"])((function e(t,n,s,r){Object(k["a"])(this,e),this.username=t,this.email=n,this.password=s,this.requestedUserType=r})),T={name:"Login",data:function(){return{user:new x("",""),loading:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(t){t?e.user.username&&e.user.password&&e.$store.dispatch("auth/login",e.user).then((function(){e.$router.push("/profile")}),(function(t){e.loading=!1,e.message=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})):e.loading=!1}))}}},A=T,U=(n("1c51"),Object(u["a"])(A,b,_,!1,null,"6a49104c",null)),C=U.exports,R=function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"card card-container"},[t("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),t("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleRegister.apply(null,arguments)}}},[e.successful?e._e():t("div",[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:20",expression:"'required|min:3|max:20'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.submitted&&e.errors.has("username")?t("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("username")))]):e._e()]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"requestedUserType"}},[e._v("Requested User Type")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.user.requestedUserType,expression:"user.requestedUserType"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"requestedUserType"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.user,"requestedUserType",t.target.multiple?n:n[0])}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Select a User Type")]),t("option",[e._v("Admin")]),t("option",[e._v("Root")]),t("option",[e._v("Assistant")]),t("option",[e._v("Employee")])]),e.submitted&&e.errors.has("requestedUserType")?t("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("requestedUserType")))]):e._e()]),e.submitted&&e.errors.has("username")?t("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("username")))]):e._e(),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"email"}},[e._v("Email?")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email|max:50",expression:"'required|email|max:50'"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e.submitted&&e.errors.has("email")?t("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:4|max:40",expression:"'required|min:4|max:40'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.submitted&&e.errors.has("password")?t("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("password")))]):e._e()]),e._m(0)])]),e.message?t("div",{staticClass:"alert",class:e.successful?"alert-success":"alert-danger"},[e._v(e._s(e.message))]):e._e()])])},I=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-primary btn-block"},[e._v("Sign Up")])])}],S={name:"Register",data:function(){return{user:new x("","","",""),submitted:!1,successful:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(t){t&&e.$store.dispatch("auth/register",e.user).then((function(t){e.message=t.message,e.successful=!0}),(function(t){e.message=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),e.successful=!1}))}))}}},O=S,E=(n("4cca"),Object(u["a"])(O,R,I,!1,null,"3b233564",null)),N=E.exports,j=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("header",{staticClass:"jumbotron"},[t("h3",[e._v(e._s(e.content))])]),t("div",{staticStyle:{display:"flex"}},[t("div",{staticStyle:{flex:"1",overflow:"auto","max-height":"300px"}},[t("table",e._l(e.kitchenAssignments,(function(n){return t("tr",{key:n.id},[t("td",[e._v(e._s(n.id))]),t("td",[e._v(e._s(n.kAName))]),t("td",[e._v(e._s(n.startTime))]),t("td",[e._v(e._s(n.endTime))]),t("td",[e._v(e._s(n.minRoleRequired))]),t("td",[t("button",{on:{click:function(t){return e.getAssignment(n.id,n.kAName)}}},[e._v("Choose Assignment")])]),t("td",[t("button",{on:{click:function(t){return e.deleteAssignment(n.id)}}},[e._v("Delete")])])])})),0)]),t("div",{staticStyle:{flex:"1",overflow:"auto","max-height":"300px"}},[t("table",e._l(e.shiftAssignments,(function(n){return t("tr",{key:n.id},[t("td",[e._l(e.kitchenAssignments,(function(t){return[t.id===n.kitchenAssignmentId?[e._v("\n          "+e._s(t.kAName)+"\n        ")]:e._e()]}))],2),t("td",[e._v(e._s(n.id))]),t("td",[e._v(e._s(n.neededEmployees))]),t("td",[t("button",{on:{click:function(t){return e.deleteSAssignment(n.id)}}},[e._v("Delete")])])])})),0)])]),t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.createAssignment.apply(null,arguments)}}},[t("label",[e._v("Name:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newAssignment.kAName,expression:"newAssignment.kAName"}],attrs:{type:"text"},domProps:{value:e.newAssignment.kAName},on:{input:function(t){t.target.composing||e.$set(e.newAssignment,"kAName",t.target.value)}}}),t("br"),t("label",[e._v("Start Time:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newAssignment.startTime,expression:"newAssignment.startTime"}],attrs:{type:"time"},domProps:{value:e.newAssignment.startTime},on:{input:function(t){t.target.composing||e.$set(e.newAssignment,"startTime",t.target.value)}}}),t("br"),t("label",[e._v("End Time:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newAssignment.endTime,expression:"newAssignment.endTime"}],attrs:{type:"time"},domProps:{value:e.newAssignment.endTime},on:{input:function(t){t.target.composing||e.$set(e.newAssignment,"endTime",t.target.value)}}}),t("br"),t("label",[e._v("Minimum Role Required:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.newAssignment.minRoleRequired,expression:"newAssignment.minRoleRequired"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newAssignment,"minRoleRequired",t.target.multiple?n:n[0])}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Select role")]),t("option",{attrs:{value:"Kitchen Leader"}},[e._v("Kitchen Leader")]),t("option",{attrs:{value:"Sous Chef"}},[e._v("Sous Chef")]),t("option",{attrs:{value:"Line Cook"}},[e._v("Line Cook")]),t("option",{attrs:{value:"Junior Cook"}},[e._v("Junior Cook")]),t("option",{attrs:{value:"Dishwasher"}},[e._v("Dishwasher")])]),t("br"),t("button",{attrs:{type:"submit",disabled:e.vAssignment()}},[e._v("Create Kitchen Assignment")])])]),t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.createShiftAssignment.apply(null,arguments)}}},[t("label",[e._v("Selected Kitchen Assignment here:")]),e._v(" "+e._s(e.pickedId)+", "+e._s(e.pickedName)+"\n      "),t("br"),t("label",[e._v("# of required Employees: ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newShiftAssignment.neededEmployees,expression:"newShiftAssignment.neededEmployees"}],attrs:{type:"number"},domProps:{value:e.newShiftAssignment.neededEmployees},on:{input:function(t){t.target.composing||e.$set(e.newShiftAssignment,"neededEmployees",t.target.value)}}}),t("br"),e.errorMessage?t("p",{staticStyle:{color:"red"}},[e._v(e._s(e.errorMessage))]):e._e(),t("button",{attrs:{type:"submit",disabled:!e.newShiftAssignment.neededEmployees||isNaN(e.newShiftAssignment.neededEmployees)}},[e._v("Create Shift Assignment")])])])])},q=[],P=(n("96cf"),n("1da1")),$=n("bc3a"),D=n.n($),L={name:"sendAssignment",data:function(){return{kitchenAssignments:[],shiftAssignments:[],pickedId:null,kAname:null,newAssignment:{kAName:"",startTime:"",endTime:"",minRoleRequired:""},newShiftAssignment:{kitchenAssignmentId:"",neededEmployees:""}}},created:function(){this.getAssignments(),this.getSAssignments()},methods:{getAssignments:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/assignmentList");case 2:t=e.sent,this.kitchenAssignments=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getSAssignments:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/sAssignmentList");case 2:t=e.sent,this.shiftAssignments=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getAssignment:function(e,t){this.pickedId=e,this.pickedName=t,this.newShiftAssignment.kitchenAssignmentId=parseInt(this.pickedId,10),console.log("selected id:",e)},deleteAssignment:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.delete("/api/deleteAssignment/".concat(t));case 3:this.kitchenAssignments=this.kitchenAssignments.filter((function(e){return e.id!==t})),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}(),deleteSAssignment:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.delete("/api/deleteSAssignment/".concat(t));case 3:this.shiftAssignments=this.shiftAssignments.filter((function(e){return e.id!==t})),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}(),createAssignment:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.a.post("/api/kitchenAssignments",this.newAssignment);case 2:t=e.sent,console.log(t.data),this.getAssignments();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createShiftAssignment:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!isNaN(this.newShiftAssignment.neededEmployees)){e.next=3;break}return this.errorMessage="Please input a whole number.",e.abrupt("return");case 3:return e.next=5,D.a.post("/api/addShiftAssignment",this.newShiftAssignment);case 5:t=e.sent,console.log(t.data),this.errorMessage="",this.getSAssignments();case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),vAssignment:function(){return!this.newAssignment.kAName||!this.newAssignment.startTime||!this.newAssignment.endTime||!this.newAssignment.minRoleRequired||!["Kitchen Leader","Sous Chef","Line Cook","Junior Cook","Dishwasher"].includes(this.newAssignment.minRoleRequired)}}},B=L,H=Object(u["a"])(B,j,q,!1,null,null,null),M=H.exports,J=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("header",{staticClass:"jumbotron"},[t("h3",[e._v(e._s(e.content))])]),t("div",{staticStyle:{display:"flex"}},[t("div",[t("button",{on:{click:e.toggleTable}},[e._v("Show Unaccepted Users.")]),e.showUsers?t("table",e._l(e.users,(function(n){return t("tr",{key:n.id},[t("td",[e._v(e._s(n.username))]),t("td",[e._v(e._s(n.email))]),t("td",[e._v(e._s(n.accepted))]),t("td",[e._v(e._s(n.requestedUserType))]),t("td",[t("button",{attrs:{disabled:n.accepted=!0},on:{click:function(t){return e.getUser(n.id,n.username)}}},[e._v("Select a user to modify.")])])])})),0):t("table",e._l(e.usersUnaccepted,(function(n){return t("tr",{key:n.id},[t("td",[e._v(" "+e._s(n.id))]),t("td",[e._v(e._s(n.username))]),t("td",[e._v(e._s(n.email))]),t("td",[e._v(e._s(n.accepted))]),t("td",[e._v(e._s(n.requestedUserType))]),t("td",[t("button",{on:{click:function(t){return e.getUser(n.id,n.username)}}},[e._v("Select a user to modify.")])])])})),0)])]),t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.createEmployee.apply(null,arguments)}}},[t("label",[e._v("Selected User:")]),e._v(" "+e._s(e.pickedUsername)+"\n     "),t("br"),t("label",[e._v("Brigade title: ")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.newEmployee.employeeBrigadeTitle,expression:"newEmployee.employeeBrigadeTitle"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newEmployee,"employeeBrigadeTitle",t.target.multiple?n:n[0])}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Please select")]),t("option",[e._v("Kitchen Leader")]),t("option",[e._v("Sous Chef")]),t("option",[e._v("Line Cook")]),t("option",[e._v("Junior Cook")]),t("option",[e._v("Dishwasher")])]),t("br"),t("label",[e._v("Minimum hours: ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newEmployee.minHours,expression:"newEmployee.minHours"}],attrs:{type:"number"},domProps:{value:e.newEmployee.minHours},on:{input:function(t){t.target.composing||e.$set(e.newEmployee,"minHours",t.target.value)}}}),t("br"),t("label",[e._v("~Maximum hours: ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newEmployee.maxHours,expression:"newEmployee.maxHours"}],attrs:{type:"number"},domProps:{value:e.newEmployee.maxHours},on:{input:function(t){t.target.composing||e.$set(e.newEmployee,"maxHours",t.target.value)}}}),t("br"),t("button",{attrs:{type:"submit",disabled:!e.newEmployee.employeeBrigadeTitle||!e.newEmployee.minHours||!e.newEmployee.maxHours}},[e._v("Add to Employees")])])]),t("div",[t("h3",[e._v("Select role ID:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedRoleId,expression:"selectedRoleId"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedRoleId=t.target.multiple?n:n[0]}}},[t("option",{attrs:{value:"2"}},[e._v("Admin")]),t("option",{attrs:{value:"3"}},[e._v("Root")]),t("option",{attrs:{value:"4"}},[e._v("Employee")]),t("option",{attrs:{value:"5"}},[e._v("Assistant")])]),t("br"),t("button",{attrs:{disabled:!e.selectedRoleId},on:{click:e.updateRoleId}},[e._v("Update role ID.")])]),t("button",{on:{click:e.acceptUser}},[e._v("Accept this user.")]),t("br"),t("button",{on:{click:e.denyUser}},[e._v("Deny this user.")])])},F=[],K={name:"userDisplay",data:function(){return{users:[],employees:[],usersUnaccepted:[],showUsers:!1,roles:[],userId:null,pickedUsername:null,selectedRoleId:1,roleIds:[2,3,4,5],newEmployee:{userId:"",employeeBrigadeTitle:"",minHours:"",maxHours:""}}},created:function(){this.getUsers(),this.getEmployees(),this.getUnaccepted()},methods:{getUsers:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/userList");case 2:t=e.sent,this.users=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getEmployees:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/employeeList");case 2:t=e.sent,this.employees=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getUnaccepted:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/unacceptedList");case 2:t=e.sent,this.usersUnaccepted=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),toggleTable:function(){this.showUsers=!this.showUsers},acceptUser:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!confirm("Are you sure you want to accept this user?")){e.next=10;break}return e.prev=1,e.next=4,D.a.post("/api/userAccept/".concat(this.userId));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0);case 9:case 10:this.getUsers();case 12:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(){return e.apply(this,arguments)}return t}(),denyUser:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!confirm("Are you sure you want to DENY this user?")){e.next=10;break}return e.prev=1,e.next=4,D.a.post("/api/userDeny/".concat(this.userId));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0);case 9:case 10:this.getUsers();case 12:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(){return e.apply(this,arguments)}return t}(),getUser:function(e,t){this.userId=e,this.pickedUsername=t,this.newEmployee.userId=parseInt(this.userId,10)},createEmployee:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.newEmployee.employeeBrigadeTitle&&this.newEmployee.minHours&&this.newEmployee.maxHours){e.next=2;break}return e.abrupt("return",alert("Please fill in all the fields!"));case 2:return e.next=4,D.a.post("/api/createEmployee",this.newEmployee);case 4:t=e.sent,console.log(t.data);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateRoleId:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("/api/updateRoleId",{selectedRoleId:this.selectedRoleId,userId:this.userId});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(){return e.apply(this,arguments)}return t}()}},V=K,W=Object(u["a"])(V,J,F,!1,null,null,null),Q=W.exports,Y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("header",{staticClass:"jumbotron"},[t("h3",[t("strong",[e._v(e._s(e.currentUser.username))]),e._v(" | "),t("strong",[e._v(e._s(e.employee.employeeId))]),e._v(" | "),t("strong",[e._v(e._s(e.employee.employeeBrigadeTitle))]),e._v("Profile\n      ")])]),t("p",[t("strong",[e._v("Id...:")]),e._v("\n      "+e._s(e.currentUser.id)+"\n    ")]),t("p",[t("strong",[e._v("Email:")]),e._v("\n      "+e._s(e.currentUser.email)+"\n    ")]),t("strong",[e._v("Authorities:")]),t("ul",e._l(e.currentUser.roles,(function(n,s){return t("li",{key:s},[e._v(e._s(n))])})),0),t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.addTime.apply(null,arguments)}}},[t("label",[e._v("Input week day:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.newUnavailableTime.weekDay,expression:"newUnavailableTime.weekDay"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newUnavailableTime,"weekDay",t.target.multiple?n:n[0])}}},[t("option",{attrs:{value:"Monday"}},[e._v("Monday")]),t("option",{attrs:{value:"Tuesday"}},[e._v("Tuesday")]),t("option",{attrs:{value:"Wednesday"}},[e._v("Wednesday")]),t("option",{attrs:{value:"Thursday"}},[e._v("Thursday")]),t("option",{attrs:{value:"Friday"}},[e._v("Friday")])]),t("br"),t("label",[e._v("Start Time:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newUnavailableTime.startTime,expression:"newUnavailableTime.startTime"}],attrs:{type:"time"},domProps:{value:e.newUnavailableTime.startTime},on:{input:function(t){t.target.composing||e.$set(e.newUnavailableTime,"startTime",t.target.value)}}}),t("br"),t("label",[e._v("End Time:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newUnavailableTime.endTime,expression:"newUnavailableTime.endTime"}],attrs:{type:"time"},domProps:{value:e.newUnavailableTime.endTime},on:{input:function(t){t.target.composing||e.$set(e.newUnavailableTime,"endTime",t.target.value)}}}),t("br"),t("label",[e._v("Reason (below 100 words):")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newUnavailableTime.reason,expression:"newUnavailableTime.reason"}],attrs:{type:"text"},domProps:{value:e.newUnavailableTime.reason},on:{input:function(t){t.target.composing||e.$set(e.newUnavailableTime,"reason",t.target.value)}}}),t("br"),t("button",{attrs:{type:"submit",disabled:!e.isValidReason||!e.vUnavailableTime}},[e._v("Submit unavailable time.")])])]),t("div",[e.viewTimes?t("table",e._l(e.unavailableTimes,(function(n){return t("tr",{key:n.employeeId},[t("td",[e._v(e._s(n.employeeId))]),t("td",[e._v(e._s(n.weekDay))]),t("td",[e._v(e._s(n.accepted))]),t("td",[e._v(e._s(n.requestedUserType))]),t("td",[t("button",{on:{click:function(t){return e.deleteTime(n.employeeId)}}},[e._v("Delete Time")])])])})),0):e._e()])])},z=[],G={name:"Profile",computed:{currentUser:function(){return this.$store.state.auth.user}},data:function(){return{employeeId:null,unavailableTimes:[],employee:{employeeId:"",employeeBrigadeTitle:"",minHours:"",maxHours:"",userId:""},newUnavailableTime:{employeeId:"",weekDay:"",startTime:"",endTime:"",reason:""}}},created:function(){this.getEmployeeId(),this.viewTimes()},mounted:function(){this.currentUser||this.$router.push("/login")},methods:{getEmployeeId:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/getEmployeeId/".concat(this.currentUser.id));case 2:t=e.sent,this.employee=t.data.employee;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),addTime:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.newUnavailableTime.employeeId=this.employee.employeeId,e.next=3,D.a.post("/api/addNewTime",this.newUnavailableTime);case 3:t=e.sent,console.log(t.data),this.viewTimes();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),viewTimes:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/unavailableTimes/".concat(this.employeeId));case 2:t=e.sent,this.unavailableTimes=t.data.unavailableTime;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deleteTime:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.delete("/api/deleteTime/".concat(t));case 3:this.unavailableTimes=this.unavailableTimes.filter((function(e){return e.employeeId!==t})),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:this.viewTimes();case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}(),vUnavailableTime:function(){return this.newUnavailableTime.startTime&&this.newUnavailableTime.endTime&&this.newUnavailableTime.reason},isValidReason:function(){return this.newUnavailableTime.reason.length<=100}}},X=G,Z=Object(u["a"])(X,Y,z,!1,null,null,null),ee=Z.exports;s["a"].use(m["a"]);var te=new m["a"]({mode:"history",routes:[{path:"/",name:"home",component:w},{path:"/home",component:w},{path:"/login",component:C},{path:"/register",component:N},{path:"/profile",component:ee},{path:"/root",name:"root",component:function(){return n.e("chunk-2d228d00").then(n.bind(null,"db7c"))}},{path:"/mod",name:"admin",component:function(){return n.e("chunk-2d20f022").then(n.bind(null,"b295"))}},{path:"/user",name:"user",component:function(){return n.e("chunk-2d0efcba").then(n.bind(null,"9a40"))}},{path:"/assignments",name:"kitchenassign",component:M},{path:"/acceptance",name:"acceptanceQueue",component:Q}]}),ne=n("2f62"),se="https://cappy-2023.herokuapp.com/api/auth/",re=function(){function e(){Object(k["a"])(this,e)}return Object(y["a"])(e,[{key:"login",value:function(e){return D.a.post(se+"signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return D.a.post(se+"signup",{username:e.username,email:e.email,password:e.password,requestedUserType:e.requestedUserType})}}]),e}(),ae=new re,ie=JSON.parse(localStorage.getItem("user")),oe=ie?{status:{loggedIn:!0},user:ie}:{status:{loggedIn:!1},user:null},ue={namespaced:!0,state:oe,actions:{login:function(e,t){var n=e.commit;return ae.login(t).then((function(e){return n("loginSuccess",e),Promise.resolve(e)}),(function(e){return n("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;ae.logout(),t("logout")},register:function(e,t){var n=e.commit;return ae.register(t).then((function(e){return n("registerSuccess"),Promise.resolve(e.data)}),(function(e){return n("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}};s["a"].use(ne["a"]);var le=new ne["a"].Store({modules:{auth:ue}}),ce=(n("4989"),n("ab8b"),n("7bb1")),me=n("ecee"),de=n("ad3d"),pe=n("c074");me["c"].add(pe["a"],pe["d"],pe["e"],pe["b"],pe["c"]),s["a"].config.productionTip=!1,s["a"].use(ce["a"]),s["a"].component("font-awesome-icon",de["a"]),s["a"].use(ne["a"]),new s["a"]({router:te,store:le,render:function(e){return e(c)}}).$mount("#app")},"8c95":function(e,t,n){}});
//# sourceMappingURL=app.6f70c2e7.js.map