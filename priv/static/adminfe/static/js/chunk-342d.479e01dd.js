(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-342d"],{"53Av":function(e,t,s){"use strict";var r=s("lOBV");s.n(r).a},"6eCR":function(e,t,s){"use strict";var r=s("Jdpf");s.n(r).a},"9/5/":function(e,t,s){(function(t){var s="Expected a function",r=NaN,n="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=u||d||Function("return this")(),f=Object.prototype.toString,v=Math.max,g=Math.min,m=function(){return p.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function _(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==n}(e))return r;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var s=o.test(e);return s||c.test(e)?l(e.slice(2),s?2:8):i.test(e)?r:+e}e.exports=function(e,t,r){var n,a,i,o,c,l,u=0,d=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(s);function w(t){var s=n,r=a;return n=a=void 0,u=t,o=e.apply(r,s)}function $(e){var s=e-l;return void 0===l||s>=t||s<0||p&&e-u>=i}function b(){var e=m();if($(e))return k(e);c=setTimeout(b,function(e){var s=t-(e-l);return p?g(s,i-(e-u)):s}(e))}function k(e){return c=void 0,f&&n?w(e):(n=a=void 0,o)}function y(){var e=m(),s=$(e);if(n=arguments,a=this,l=e,s){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?w(e):o}(l);if(p)return c=setTimeout(b,t),w(l)}return void 0===c&&(c=setTimeout(b,t)),o}return t=_(t)||0,h(r)&&(d=!!r.leading,i=(p="maxWait"in r)?v(_(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),y.cancel=function(){void 0!==c&&clearTimeout(c),u=0,n=l=a=c=void 0},y.flush=function(){return void 0===c?o:k(m())},y}}).call(this,s("yLpj"))},DPTh:function(e,t,s){"use strict";var r=s("vg5t");s.n(r).a},GGbL:function(e,t,s){},Jdpf:function(e,t,s){},RGjw:function(e,t,s){"use strict";s.r(t);var r=s("o0o1"),n=s.n(r),a=s("yXPU"),i=s.n(a),o=s("9/5/"),c=s.n(o),l=s("ZhIB"),u=s.n(l),d=s("lSNA"),p=s.n(d);function f(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function v(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?f(Object(s),!0).forEach(function(t){p()(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}var g={data:function(){return{value:["local","active"]}},computed:{isDesktop:function(){return"desktop"===this.$store.state.app.device}},created:function(){var e=this.$data.value.reduce(function(e,t){return v(v({},e),{},p()({},t,!0))},{});this.$store.dispatch("ToggleUsersFilter",e)},methods:{removeOppositeFilters:function(){var e=Object.keys(this.$store.state.users.filters).length,t=[],s=this.$data.value.indexOf("local"),r=this.$data.value.indexOf("external"),n=this.$data.value.indexOf("active"),a=this.$data.value.indexOf("deactivated"),i=this.$data.value.indexOf("need_approval");return this.$data.value.length===e?[]:(Math.max(s,r)>-1&&t.push(this.$data.value[Math.max(s,r)]),Math.max(n,a,i)>-1&&t.push(this.$data.value[Math.max(n,a,i)]),t)},toggleFilters:function(){this.$data.value=this.removeOppositeFilters();var e=this.$data.value.reduce(function(e,t){return v(v({},e),{},p()({},t,!0))},{});this.$store.dispatch("ToggleUsersFilter",e)}}},m=(s("xAET"),s("KHd+")),h=Object(m.a)(g,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-select",{staticClass:"select-field",attrs:{clearable:e.isDesktop,placeholder:e.$t("usersFilter.inputPlaceholder"),multiple:""},on:{change:e.toggleFilters},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[s("el-option-group",{attrs:{label:e.$t("usersFilter.byAccountType")}},[s("el-option",{attrs:{value:"local",label:"Local"}},[e._v(e._s(e.$t("usersFilter.local")))]),e._v(" "),s("el-option",{attrs:{value:"external",label:"External"}},[e._v(e._s(e.$t("usersFilter.external")))])],1),e._v(" "),s("el-option-group",{attrs:{label:e.$t("usersFilter.byStatus")}},[s("el-option",{attrs:{value:"active",label:"Active"}},[e._v(e._s(e.$t("usersFilter.active")))]),e._v(" "),s("el-option",{attrs:{value:"need_approval",label:"Need Approval"}},[e._v(e._s(e.$t("usersFilter.pending")))]),e._v(" "),s("el-option",{attrs:{value:"deactivated",label:"Deactivated"}},[e._v(e._s(e.$t("usersFilter.deactivated")))])],1)],1)},[],!1,null,"377d5068",null);h.options.__file="UsersFilter.vue";var _=h.exports,w=s("i7Kn"),$={name:"NewAccountDialog",props:{dialogFormVisible:{type:Boolean,default:function(){return!1}}},data:function(){return{newUserForm:{nickname:"",email:"",password:""},rules:{nickname:[{validator:this.validateUsername,trigger:"blur"}],email:[{validator:this.validateEmail,trigger:"blur"}],password:[{validator:this.validatePassword,trigger:"blur"}]}}},computed:{isDesktop:function(){return"desktop"===this.$store.state.app.device},isVisible:{get:function(){return this.$props.dialogFormVisible},set:function(){this.closeDialogWindow()}},getLabelWidth:function(){return this.isDesktop?"120px":"85px"}},methods:{closeDialogWindow:function(){this.$emit("closeWindow")},resetForm:function(){var e=this;this.$nextTick(function(){e.$refs.newUserForm.resetFields()})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message({type:"error",message:t.$t("users.submitFormError")}),!1;t.$emit("createNewAccount",t.$data.newUserForm)})},validateEmail:function(e,t,s){return""===t?s(new Error(this.$t("users.emptyEmailError"))):this.validEmail(t)?s():s(new Error(this.$t("users.invalidEmailError")))},validatePassword:function(e,t,s){return""===t?s(new Error(this.$t("users.emptyPasswordError"))):s()},validateUsername:function(e,t,s){return""===t?s(new Error(this.$t("users.emptyNicknameError"))):this.validNickname(t)?s():s(new Error(this.$t("users.invalidNicknameError")))},validEmail:function(e){return/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},validNickname:function(e){return/^[a-zA-Z\d_-]+$/.test(e)}}},b=(s("DPTh"),Object(m.a)($,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{visible:e.isVisible,"show-close":!1,title:e.$t("users.createAccount"),"custom-class":"create-user-dialog"},on:{"update:visible":function(t){e.isVisible=t},open:e.resetForm}},[s("el-form",{ref:"newUserForm",attrs:{model:e.newUserForm,rules:e.rules,"label-width":e.getLabelWidth,"status-icon":""}},[s("el-form-item",{staticClass:"create-account-form-item",attrs:{label:e.$t("users.username"),prop:"nickname"}},[s("el-input",{attrs:{name:"nickname",autofocus:""},model:{value:e.newUserForm.nickname,callback:function(t){e.$set(e.newUserForm,"nickname",t)},expression:"newUserForm.nickname"}})],1),e._v(" "),s("el-form-item",{staticClass:"create-account-form-item",attrs:{label:e.$t("users.email"),prop:"email"}},[s("el-input",{attrs:{name:"email",type:"email"},model:{value:e.newUserForm.email,callback:function(t){e.$set(e.newUserForm,"email",t)},expression:"newUserForm.email"}})],1),e._v(" "),s("el-form-item",{staticClass:"create-account-form-item-without-margin",attrs:{label:e.$t("users.password"),prop:"password"}},[s("el-input",{attrs:{type:"password",name:"password",autocomplete:"off"},model:{value:e.newUserForm.password,callback:function(t){e.$set(e.newUserForm,"password",t)},expression:"newUserForm.password"}})],1)],1),e._v(" "),s("span",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.closeDialogWindow}},[e._v(e._s(e.$t("users.cancel")))]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("newUserForm")}}},[e._v(e._s(e.$t("users.create")))])],1)],1)},[],!1,null,null,null));b.options.__file="NewAccountDialog.vue";var k=b.exports,y=s("tPM3"),P=s("rIUS"),O=s("WjBP"),D={name:"Users",components:{NewAccountDialog:k,ModerationDropdown:y.a,MultipleUsersMenu:w.a,RebootButton:P.a,ResetPasswordDialog:O.a,UsersFilter:_},filters:{truncate:function(e,t,s){return e.length<t?e:e.substring(0,t)+s}},data:function(){return{search:"",selectedUsers:[],createAccountDialogOpen:!1,resetPasswordDialogOpen:!1}},computed:{loading:function(){return this.$store.state.users.loading},normalizedUsersCount:function(){return u()(this.$store.state.users.totalUsersCount).format("0a")},pageSize:function(){return this.$store.state.users.pageSize},currentPage:function(){return this.$store.state.users.currentPage},isDesktop:function(){return"desktop"===this.$store.state.app.device},isMobile:function(){return"mobile"===this.$store.state.app.device},users:function(){return this.$store.state.users.fetchedUsers},usersCount:function(){return this.$store.state.users.totalUsersCount},pendingView:function(){return this.$store.state.users.filters.need_approval},width:function(){return!!this.isMobile&&55}},created:function(){var e=this;this.handleDebounceSearchInput=c()(function(t){e.$store.dispatch("SearchUsers",{query:t,page:1})},500)},mounted:function(){this.$store.dispatch("NeedReboot"),this.$store.dispatch("FetchTagPolicySetting"),this.$store.dispatch("FetchUsers",{page:1})},destroyed:function(){this.$store.dispatch("ClearUsersState")},methods:{clearSelection:function(){this.$refs.usersTable.clearSelection()},closeResetPasswordDialog:function(){this.resetPasswordDialogOpen=!1,this.$store.dispatch("RemovePasswordToken")},createNewAccount:function(e){var t=this;return i()(n.a.mark(function s(){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.$store.dispatch("CreateNewAccount",e);case 2:t.createAccountDialogOpen=!1;case 3:case"end":return s.stop()}},s)}))()},getFirstLetter:function(e){return e.charAt(0).toUpperCase()},handlePageChange:function(e){var t=this.$store.state.users.searchQuery;""===t?this.$store.dispatch("FetchUsers",{page:e}):this.$store.dispatch("SearchUsers",{query:t,page:e})},handleRowClick:function(e){e.id&&this.$router.push({name:"UsersShow",params:{id:e.id}})},handleSelectionChange:function(e){this.$data.selectedUsers=e},openResetPasswordDialog:function(){this.resetPasswordDialogOpen=!0},propertyExists:function(e,t){return e[t]},regReason:function(e){return e&&e.length>0},showDeactivatedButton:function(e){return this.$store.state.user.id!==e}}},A=(s("6eCR"),Object(m.a)(D,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"users-container"},[s("div",{staticClass:"users-header-container"},[s("h1",[e._v("\n      "+e._s(e.$t("users.users"))+"\n      "),s("span",{staticClass:"user-count"},[e._v("("+e._s(e.normalizedUsersCount)+")")])]),e._v(" "),s("reboot-button")],1),e._v(" "),s("div",{staticClass:"filter-container"},[s("users-filter"),e._v(" "),s("el-input",{staticClass:"search",attrs:{placeholder:e.$t("users.search"),"prefix-icon":"el-icon-search"},on:{input:e.handleDebounceSearchInput},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),s("div",{staticClass:"actions-container"},[s("el-button",{staticClass:"actions-button",on:{click:function(t){e.createAccountDialogOpen=!0}}},[s("span",{staticClass:"create-account"},[s("i",{staticClass:"el-icon-plus"}),e._v("\n        "+e._s(e.$t("users.createAccount"))+"\n      ")])]),e._v(" "),s("multiple-users-menu",{attrs:{"selected-users":e.selectedUsers},on:{"apply-action":e.clearSelection}})],1),e._v(" "),s("new-account-dialog",{attrs:{"dialog-form-visible":e.createAccountDialogOpen},on:{createNewAccount:e.createNewAccount,closeWindow:function(t){e.createAccountDialogOpen=!1}}}),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"usersTable",staticStyle:{width:"100%"},attrs:{data:e.users,"row-key":"id"},on:{"row-click":function(t){return e.handleRowClick(t)},"selection-change":e.handleSelectionChange}},[e.isDesktop?s("el-table-column",{attrs:{type:"selection","reserve-selection":"",width:"44",align:"center"}}):e._e(),e._v(" "),s("el-table-column",{attrs:{"min-width":e.width,label:e.$t("users.id"),prop:"id"}}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("users.name"),prop:"nickname"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.nickname)+"\n        "),e.isDesktop?s("el-tag",{attrs:{type:"info",size:"mini"}},[s("span",[e._v(e._s(t.row.local?e.$t("users.local"):e.$t("users.external")))])]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{"min-width":e.width,label:e.$t("users.status")},scopedSlots:e._u([{key:"default",fn:function(t){return[!t.row.deactivated&!t.row.approval_pending?s("el-tag",{attrs:{type:"success"}},[e.isDesktop?s("span",[e._v(e._s(e.$t("users.active")))]):s("i",{staticClass:"el-icon-circle-check"})]):e._e(),e._v(" "),t.row.deactivated&!t.row.approval_pending?s("el-tag",{attrs:{type:"danger"}},[e.isDesktop?s("span",[e._v(e._s(e.$t("users.deactivated")))]):s("i",{staticClass:"el-icon-circle-close"})]):e._e(),e._v(" "),s("el-tooltip",{attrs:{content:e.$t("users.unapprovedAccount"),effect:"dark"}},[t.row.approval_pending?s("el-tag",{attrs:{type:"info"}},[e.isDesktop?s("span",[e._v(e._s(e.$t("users.unapproved")))]):s("i",{staticClass:"el-icon-warning-outline"})]):e._e()],1),e._v(" "),t.row.roles.admin?s("el-tag",[s("span",[e._v(e._s(e.isDesktop?e.$t("users.admin"):e.getFirstLetter(e.$t("users.admin"))))])]):e._e(),e._v(" "),t.row.roles.moderator?s("el-tag",[s("span",[e._v(e._s(e.isDesktop?e.$t("users.moderator"):e.getFirstLetter(e.$t("users.moderator"))))])]):e._e(),e._v(" "),s("el-tooltip",{attrs:{content:e.$t("users.unconfirmedEmail"),effect:"dark"}},[t.row.confirmation_pending?s("el-tag",{attrs:{type:"info"}},[e._v("\n            "+e._s(e.isDesktop?e.$t("users.unconfirmed"):e.getFirstLetter(e.$t("users.unconfirmed")))+"\n          ")]):e._e()],1)]}}])}),e._v(" "),e.pendingView&&e.isDesktop?s("el-table-column",{attrs:{label:e.$t("users.registrationReason")},scopedSlots:e._u([{key:"default",fn:function(t){return[e.regReason(t.row.registration_reason)?s("el-tooltip",{attrs:{content:t.row.registration_reason,"popper-class":"reason-tooltip",effect:"dark"}},[s("span",[e._v('\n            "'+e._s(e._f("truncate")(t.row.registration_reason,100,"..."))+'"\n          ')])]):e._e()]}}],null,!1,975858353)}):e._e(),e._v(" "),s("el-table-column",{attrs:{label:e.$t("users.actions"),fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.propertyExists(t.row,"nickname")?s("moderation-dropdown",{attrs:{user:t.row,page:"users"},on:{"open-reset-token-dialog":e.openResetPasswordDialog}}):s("el-button",{attrs:{type:"text",disabled:""}},[e._v("\n          "+e._s(e.$t("users.moderation"))+"\n          "),e.isDesktop?s("i",{staticClass:"el-icon-arrow-down el-icon--right"}):e._e()])]}}])})],1),e._v(" "),s("reset-password-dialog",{attrs:{"reset-password-dialog-open":e.resetPasswordDialogOpen},on:{"close-reset-token-dialog":e.closeResetPasswordDialog}}),e._v(" "),e.loading?e._e():s("div",{staticClass:"pagination"},[s("el-pagination",{attrs:{total:e.usersCount,"current-page":e.currentPage,"page-size":e.pageSize,"hide-on-single-page":"",layout:"prev, pager, next"},on:{"current-change":e.handlePageChange}})],1)],1)},[],!1,null,null,null));A.options.__file="index.vue";t.default=A.exports},WjBP:function(e,t,s){"use strict";var r={name:"ResetPasswordDialog",props:{resetPasswordDialogOpen:{type:Boolean,default:!1}},computed:{dialogOpen:function(){return this.resetPasswordDialogOpen},loading:function(){return this.$store.state.users.loading},passwordResetLink:function(){return this.$store.state.users.passwordResetToken.link},passwordResetToken:function(){return this.$store.state.users.passwordResetToken.token}},methods:{closeResetPasswordDialog:function(){this.$emit("close-reset-token-dialog")}}},n=s("KHd+"),a=Object(n.a)(r,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{visible:e.dialogOpen,title:e.$t("users.passwordResetTokenCreated"),"custom-class":"password-reset-token-dialog"},on:{close:e.closeResetPasswordDialog}},[s("div",[s("p",{staticClass:"password-reset-token"},[e._v(e._s(e.$t("users.passwordResetTokenGenerated"))+" "+e._s(e.passwordResetToken))]),e._v(" "),s("p",[e._v(e._s(e.$t("users.linkToResetPassword"))+"\n      "),s("a",{staticClass:"reset-password-link",attrs:{href:e.passwordResetLink,target:"_blank"}},[e._v(e._s(e.passwordResetLink))])])])])},[],!1,null,null,null);a.options.__file="ResetPasswordDialog.vue";t.a=a.exports},lOBV:function(e,t,s){},tPM3:function(e,t,s){"use strict";var r={name:"ModerationDropdown",props:{user:{type:Object,default:function(){return{}}},page:{type:String,default:"users"},statusId:{type:String,default:""}},computed:{actorType:{get:function(){return this.user.actor_type},set:function(e){this.$store.dispatch("UpdateActorType",{user:this.user,type:e,_userId:this.user.id,_statusId:this.statusId})}},isDesktop:function(){return"desktop"===this.$store.state.app.device},tagPolicyEnabled:function(){return this.$store.state.users.mrfPolicies.includes("Pleroma.Web.ActivityPub.MRF.TagPolicy")}},methods:{disableMfa:function(e){this.$store.dispatch("DisableMfa",e)},enableTagPolicy:function(){var e=this;this.$confirm(this.$t("users.confirmEnablingTagPolicy"),{confirmButtonText:"Yes",cancelButtonText:"Cancel",type:"warning"}).then(function(){e.$message({type:"success",message:e.$t("users.enableTagPolicySuccessMessage")}),e.$store.dispatch("EnableTagPolicy")}).catch(function(){e.$message({type:"info",message:"Canceled"})})},getPasswordResetToken:function(e){this.$emit("open-reset-token-dialog"),this.$store.dispatch("GetPasswordResetToken",e)},handleConfirmationResend:function(e){this.$store.dispatch("ResendConfirmationEmail",[e])},handleDeletion:function(e){var t=this;this.$confirm(this.$t("users.deleteUserConfirmation"),{confirmButtonText:"Delete",cancelButtonText:"Cancel",type:"warning"}).then(function(){t.$store.dispatch("DeleteUsers",{users:[e],_userId:e.id})}).catch(function(){t.$message({type:"info",message:"Delete canceled"})})},handleAccountApproval:function(e){this.$store.dispatch("ApproveUsersAccount",{users:[e],_userId:e.id,_statusId:this.statusId})},handleAccountRejection:function(e){var t=this;this.$confirm(this.$t("users.rejectAccountConfirmation"),{confirmButtonText:"Reject",cancelButtonText:"Cancel",type:"warning"}).then(function(){t.$store.dispatch("DeleteUsers",{users:[e],_userId:e.id})}).catch(function(){t.$message({type:"info",message:"Reject canceled"})})},handleEmailConfirmation:function(e){this.$store.dispatch("ConfirmUsersEmail",{users:[e],_userId:e.id,_statusId:this.statusId})},requirePasswordReset:function(e){this.$store.state.user.nodeInfo.metadata.mailerEnabled?this.$store.dispatch("RequirePasswordReset",[e]):this.$alert(this.$t("users.mailerMustBeEnabled"),"Error",{type:"error"})},showAdminAction:function(e){var t=e.local,s=e.id;return t&&this.showDeactivatedButton(s)},showDeactivatedButton:function(e){return this.$store.state.user.id!==e},toggleActivation:function(e){e.deactivated?this.$store.dispatch("ActivateUsers",{users:[e],_userId:e.id}):this.$store.dispatch("DeactivateUsers",{users:[e],_userId:e.id})},toggleTag:function(e,t){e.tags.includes(t)?this.$store.dispatch("RemoveTag",{users:[e],tag:t,_userId:e.id,_statusId:this.statusId}):this.$store.dispatch("AddTag",{users:[e],tag:t,_userId:e.id,_statusId:this.statusId})},toggleUserRight:function(e,t){e.roles[t]?this.$store.dispatch("DeleteRight",{users:[e],right:t,_userId:e.id,_statusId:this.statusId}):this.$store.dispatch("AddRight",{users:[e],right:t,_userId:e.id,_statusId:this.statusId})}}},n=(s("53Av"),s("KHd+")),a=Object(n.a)(r,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dropdown",{attrs:{"hide-on-click":!1,size:"small",trigger:"click",placement:"top-start"},nativeOn:{click:function(e){e.stopPropagation()}}},[s("div",["users"===e.page?s("el-button",{staticClass:"el-dropdown-link",attrs:{type:"text"}},[e._v("\n      "+e._s(e.$t("users.moderation"))+"\n      "),e.isDesktop?s("i",{staticClass:"el-icon-arrow-down el-icon--right"}):e._e()]):e._e(),e._v(" "),"userPage"===e.page||"statusPage"===e.page?s("el-button",{staticClass:"moderate-user-button"},[s("span",{staticClass:"moderate-user-button-container"},[s("span",[s("i",{staticClass:"el-icon-edit"}),e._v("\n          "+e._s(e.$t("users.moderateUser"))+"\n        ")]),e._v(" "),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})])]):e._e()],1),e._v(" "),s("el-dropdown-menu",{staticClass:"moderation-dropdown-menu",attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{staticClass:"actor-type-dropdown"},[s("el-select",{staticClass:"actor-type-select",attrs:{placeholder:e.$t("userProfile.actorType")},model:{value:e.actorType,callback:function(t){e.actorType=t},expression:"actorType"}},[s("el-option",{attrs:{label:e.$t("users.service"),value:"Service"}}),e._v(" "),s("el-option",{attrs:{label:e.$t("users.person"),value:"Person"}})],1)],1),e._v(" "),e.showAdminAction(e.user)?s("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.toggleUserRight(e.user,"admin")}}},[e._v("\n      "+e._s(e.user.roles.admin?e.$t("users.revokeAdmin"):e.$t("users.grantAdmin"))+"\n    ")]):e._e(),e._v(" "),e.showAdminAction(e.user)?s("el-dropdown-item",{nativeOn:{click:function(t){return e.toggleUserRight(e.user,"moderator")}}},[e._v("\n      "+e._s(e.user.roles.moderator?e.$t("users.revokeModerator"):e.$t("users.grantModerator"))+"\n    ")]):e._e(),e._v(" "),e.showDeactivatedButton(e.user.id)&&"statusPage"!==e.page?s("el-dropdown-item",{attrs:{divided:e.showAdminAction(e.user)},nativeOn:{click:function(t){return e.toggleActivation(e.user)}}},[e._v("\n      "+e._s(e.user.deactivated?e.$t("users.activateAccount"):e.$t("users.deactivateAccount"))+"\n    ")]):e._e(),e._v(" "),e.showDeactivatedButton(e.user.id)&&"statusPage"!==e.page?s("el-dropdown-item",{nativeOn:{click:function(t){return e.handleDeletion(e.user)}}},[e._v("\n      "+e._s(e.$t("users.deleteAccount"))+"\n    ")]):e._e(),e._v(" "),e.user.local&&e.user.approval_pending?s("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.handleAccountApproval(e.user)}}},[e._v("\n      "+e._s(e.$t("users.approveAccount"))+"\n    ")]):e._e(),e._v(" "),e.user.local&&e.user.approval_pending?s("el-dropdown-item",{nativeOn:{click:function(t){return e.handleAccountRejection(e.user)}}},[e._v("\n      "+e._s(e.$t("users.rejectAccount"))+"\n    ")]):e._e(),e._v(" "),e.user.local&&e.user.confirmation_pending?s("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.handleEmailConfirmation(e.user)}}},[e._v("\n      "+e._s(e.$t("users.confirmAccount"))+"\n    ")]):e._e(),e._v(" "),e.user.local&&e.user.confirmation_pending?s("el-dropdown-item",{nativeOn:{click:function(t){return e.handleConfirmationResend(e.user)}}},[e._v("\n      "+e._s(e.$t("users.resendConfirmation"))+"\n    ")]):e._e(),e._v(" "),e.tagPolicyEnabled?s("el-dropdown-item",{class:{"active-tag":e.user.tags.includes("mrf_tag:media-force-nsfw")},attrs:{divided:e.showAdminAction(e.user)},nativeOn:{click:function(t){return e.toggleTag(e.user,"mrf_tag:media-force-nsfw")}}},[e._v("\n      "+e._s(e.$t("users.forceNsfw"))+"\n      "),e.user.tags.includes("mrf_tag:media-force-nsfw")?s("i",{staticClass:"el-icon-check"}):e._e()]):e._e(),e._v(" "),e.tagPolicyEnabled?s("el-dropdown-item",{class:{"active-tag":e.user.tags.includes("mrf_tag:media-strip")},nativeOn:{click:function(t){return e.toggleTag(e.user,"mrf_tag:media-strip")}}},[e._v("\n      "+e._s(e.$t("users.stripMedia"))+"\n      "),e.user.tags.includes("mrf_tag:media-strip")?s("i",{staticClass:"el-icon-check"}):e._e()]):e._e(),e._v(" "),e.tagPolicyEnabled?s("el-dropdown-item",{class:{"active-tag":e.user.tags.includes("mrf_tag:force-unlisted")},nativeOn:{click:function(t){return e.toggleTag(e.user,"mrf_tag:force-unlisted")}}},[e._v("\n      "+e._s(e.$t("users.forceUnlisted"))+"\n      "),e.user.tags.includes("mrf_tag:force-unlisted")?s("i",{staticClass:"el-icon-check"}):e._e()]):e._e(),e._v(" "),e.tagPolicyEnabled?s("el-dropdown-item",{class:{"active-tag":e.user.tags.includes("mrf_tag:sandbox")},nativeOn:{click:function(t){return e.toggleTag(e.user,"mrf_tag:sandbox")}}},[e._v("\n      "+e._s(e.$t("users.sandbox"))+"\n      "),e.user.tags.includes("mrf_tag:sandbox")?s("i",{staticClass:"el-icon-check"}):e._e()]):e._e(),e._v(" "),e.user.local&&e.tagPolicyEnabled?s("el-dropdown-item",{class:{"active-tag":e.user.tags.includes("mrf_tag:disable-remote-subscription")},nativeOn:{click:function(t){return e.toggleTag(e.user,"mrf_tag:disable-remote-subscription")}}},[e._v("\n      "+e._s(e.$t("users.disableRemoteSubscription"))+"\n      "),e.user.tags.includes("mrf_tag:disable-remote-subscription")?s("i",{staticClass:"el-icon-check"}):e._e()]):e._e(),e._v(" "),e.user.local&&e.tagPolicyEnabled?s("el-dropdown-item",{class:{"active-tag":e.user.tags.includes("mrf_tag:disable-any-subscription")},nativeOn:{click:function(t){return e.toggleTag(e.user,"mrf_tag:disable-any-subscription")}}},[e._v("\n      "+e._s(e.$t("users.disableAnySubscription"))+"\n      "),e.user.tags.includes("mrf_tag:disable-any-subscription")?s("i",{staticClass:"el-icon-check"}):e._e()]):e._e(),e._v(" "),e.tagPolicyEnabled?e._e():s("el-dropdown-item",{staticClass:"no-hover",attrs:{divided:""},nativeOn:{click:function(t){return e.enableTagPolicy(t)}}},[e._v("\n      "+e._s(e.$t("users.enableTagPolicy"))+"\n    ")]),e._v(" "),e.user.local?s("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.getPasswordResetToken(e.user.nickname)}}},[e._v("\n      "+e._s(e.$t("users.getPasswordResetToken"))+"\n    ")]):e._e(),e._v(" "),e.user.local?s("el-dropdown-item",{nativeOn:{click:function(t){return e.requirePasswordReset(e.user)}}},[e._v("\n      "+e._s(e.$t("users.requirePasswordReset"))+"\n    ")]):e._e(),e._v(" "),e.user.local?s("el-dropdown-item",{nativeOn:{click:function(t){return e.disableMfa(e.user.nickname)}}},[e._v("\n      "+e._s(e.$t("users.disableMfa"))+"\n    ")]):e._e()],1)],1)},[],!1,null,null,null);a.options.__file="ModerationDropdown.vue";t.a=a.exports},vg5t:function(e,t,s){},xAET:function(e,t,s){"use strict";var r=s("GGbL");s.n(r).a}}]);
//# sourceMappingURL=chunk-342d.479e01dd.js.map