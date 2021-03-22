module.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=12)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat["models/Group"]},function(e,t,o){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}o.d(t,"a",(function(){return r}))},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/SignUpModal"]},,function(e,t){e.exports=flarum.core.compat["components/Modal"]},function(e,t){e.exports=flarum.core.compat["components/Button"]},function(e,t){e.exports=flarum.core.compat["components/GroupBadge"]},function(e,t){e.exports=flarum.core.compat["utils/ItemList"]},function(e,t){e.exports=flarum.core.compat["components/Page"]},,function(e,t,o){"use strict";o.r(t);var r=o(3),n=o(0),i=o.n(n),a=o(1),l=o.n(a),u=o(4),s=o.n(u),c=o(2),p=o(6),f=o.n(p),d=o(7),g=o.n(d),h=o(8),b=o.n(h),v=o(9),y=o.n(v),R=function(e){function t(){return e.apply(this,arguments)||this}Object(c.a)(t,e);var o=t.prototype;return o.init=function(){e.prototype.init.call(this);var t=this.props.user;this.showing=!1,this.regRole=m.prop([]),this.username=m.prop(t.username()||"")},o.isDismissible=function(){return!1},o.config=function(e){this.showing&&!$(".ModalManager").hasClass("in")&&$(".ModalManager").addClass("in"),e||(this.showing=!0)},o.className=function(){return"Modal--small ChooseRoleModal"},o.title=function(){return app.translator.trans("the-turk-regrole.forum.chooseRole")},o.content=function(){return[m("div",{className:"Modal-body"},this.body()),m("div",{className:"Modal-footer"},this.footer())]},o.body=function(){return[m("div",{className:"Form Form--centered"},this.fields().toArray())]},o.roleField=function(){var e=this;return m("div",{className:"Form-group"},m("div",{className:"regRole-container"},app.store.all("groups").filter((function(e){return app.forum.attribute("safeRoles").indexOf(e.id())>-1})).map((function(t){return m("div",{className:"regRole-item"},m("label",null,m("div",{className:"regRole-badge"},b.a.component({group:t,className:"Group-icon",label:null})),m("input",{type:"checkbox",className:"regRole-input",name:"regRole[]",onchange:function(o){var r=e.regRole().indexOf(t.id()),n=o.target.checked;app.forum.attribute("multipleRoles")?n&&-1===r?e.regRole().push(t.id()):!n&&r>-1&&e.regRole().splice(r,1):e.regRole(n?[t.id()]:[])},disabled:e.loading}),t.nameSingular()))}))))},o.fields=function(){var e=new y.a;return e.add("regroles",this.roleField(),10),e.add("submit",m("div",{className:"Form-group"},m(g.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("the-turk-regrole.forum.save"))),-10),e},o.footer=function(){return[m("p",null,app.translator.trans("the-turk-regrole.forum.chooseRoleHelp"))]},o.onsubmit=function(e){var t=this;e.preventDefault(),this.loading=!0,app.request({url:app.forum.attribute("apiUrl")+"/regrole",method:"POST",data:{regRoleIds:this.regRole()},errorHandler:this.onerror.bind(this)}).then((function(){window.location.reload()})).catch((function(){t.loading=!1,m.redraw()}))},t}(f.a),x=o(10),O=o.n(x);i.a.initializers.add("the-turk-regrole",(function(){Object(r.extend)(O.a.prototype,"init",(function(){if(i.a.forum.attribute("forceUsers")){var e=i.a.session.user;if(e)if(!e.groups().filter((function(e){return[l.a.ADMINISTRATOR_ID].indexOf(e.id())>-1})).length)e.groups().filter((function(e){return i.a.forum.attribute("safeRoles").indexOf(e.id())>-1})).length||i.a.modal.show(new R({user:e}))}$("body").on("click",".SignUpModal .regRole-input, .ChooseRoleModal .regRole-input",(function(){var e=$(this).closest(".regRole-item");e.hasClass("active")?e.removeClass("active"):(e.addClass("active"),i.a.forum.attribute("multipleRoles")||(e.siblings().removeClass("active"),e.siblings().find("input[type=checkbox]").prop("checked",!1)))}))})),Object(r.extend)(s.a.prototype,"init",(function(){this.regRole=m.prop([])})),Object(r.extend)(s.a.prototype,"fields",(function(e){e.add("regroles",R.prototype.roleField.bind(this)(),9)})),Object(r.extend)(s.a.prototype,"submitData",(function(e){e.regRole=this.regRole()}))}))}]);
//# sourceMappingURL=forum.js.map