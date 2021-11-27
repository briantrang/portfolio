/*! For license information please see 7.1463e6e9.chunk.js.LICENSE.txt */
(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[7],{79:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a(17);var n=a(1),r=a.n(n),c=r.a.createContext({});c.Consumer,c.Provider;function l(e,t){var a=Object(n.useContext)(c);return e||a[t]||t}},90:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(1),c=a.n(r),l=(a(90),a(18)),o=a.n(l),s=a(17),i=a(10),u=a(79),f=a.n(u),m=a(80);var p=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)};function v(e){return!e||"#"===e.trim()}var b=c.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"a":a,r=e.disabled,l=e.onKeyDown,o=Object(i.a)(e,["as","disabled","onKeyDown"]),u=function(e){var t=o.href,a=o.onClick;(r||v(t))&&e.preventDefault(),r?e.stopPropagation():a&&a(e)};return v(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),r&&(o.tabIndex=-1,o["aria-disabled"]=!0),c.a.createElement(n,Object(s.a)({ref:t},o,{onClick:u,onKeyDown:p((function(e){" "===e.key&&(e.preventDefault(),u(e))}),l)}))}));b.displayName="SafeAnchor";var d=b,E=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,r=e.size,l=e.active,o=e.className,u=e.block,p=e.type,v=e.as,b=Object(i.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),E=Object(m.a)(a,"btn"),N=f()(o,E,l&&"active",E+"-"+n,u&&E+"-block",r&&E+"-"+r);if(b.href)return c.a.createElement(d,Object(s.a)({},b,{as:v,ref:t,className:f()(N,b.disabled&&"disabled")}));t&&(b.ref=t),p?b.type=p:v||(b.type="button");var h=v||"button";return c.a.createElement(h,Object(s.a)({},b,{className:N}))}));E.displayName="Button",E.defaultProps={variant:"primary",active:!1,disabled:!1};var N=E;t.default=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),l=a[0],s=a[1],i=Object(r.useState)(""),u=Object(n.a)(i,2),f=u[0],m=u[1],p=Object(r.useState)(""),v=Object(n.a)(p,2),b=v[0],d=v[1],E=Object(r.useState)(""),h=Object(n.a)(E,2),y=h[0],g=h[1],j=Object(r.useState)(!1),O=Object(n.a)(j,2),S=O[0],w=O[1],x=function(){s(""),m(""),d(""),g(""),w(!0),setTimeout((function(){w(!1)}),4e3)};return c.a.createElement("div",{className:"portfolio-container"},c.a.createElement("form",{className:"contact-container",onSubmit:function(e){e.preventDefault();var t={firstName:l,lastName:f,email:b,message:y};o.a.post("https://porfoliocontactserver.firebaseio.com/message.json",t).then((function(e){return console.log("MESSAGE SENT!")})).catch((function(e){return console.log("MESSAGE FAILED! "+e)})),x()}},c.a.createElement("div",{className:"contact-info"},c.a.createElement("div",{className:"contact-field"},c.a.createElement("input",{className:"contact-input",type:"text",name:"firstName",value:l,required:!0,onChange:function(e){s(e.target.value)},placeholder:" "}),c.a.createElement("label",{className:"contact-label"},"First Name")),c.a.createElement("div",{className:"contact-field"},c.a.createElement("input",{className:"contact-input",type:"text",name:"lastName",value:f,onChange:function(e){m(e.target.value)},placeholder:" "}),c.a.createElement("label",{className:"contact-label"},"Last Name")),c.a.createElement("div",{className:"contact-field"},c.a.createElement("input",{className:"contact-input",type:"input",name:"email",value:b,onChange:function(e){d(e.target.value)},placeholder:" "}),c.a.createElement("label",{className:"contact-label"},"Email"))),c.a.createElement("div",{className:"contact-message"},c.a.createElement("textarea",{className:"contact-message-input",name:"message",value:y,onChange:function(e){g(e.target.value)},placeholder:" "}),c.a.createElement("label",{className:"contact-label"},"Message")),c.a.createElement("div",{className:"contact-button-container"},c.a.createElement(N,{type:"submit",className:"contact-button"},"Send Message")),c.a.createElement("p",{className:S?"messageSuccess text-center":"messageHide"},"MESSAGE SENT!")))}}}]);