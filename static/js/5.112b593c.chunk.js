(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{84:function(e,t,a){},85:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=(a(84),function(e){return i.a.createElement("div",{className:"timeline-item-container"},i.a.createElement("div",{className:"timeline-item-content"},i.a.createElement("div",{className:"timeline-date"},e.startDate," - ",e.endDate),i.a.createElement("div",{className:"timeline-heading"},e.heading),i.a.createElement("div",{className:"timeline-role"},e.role),i.a.createElement("div",{className:"timeline-body"},e.body),i.a.createElement("div",{className:"timeline-circle"})))});a(85),t.default=function(e){var t=e.timelineArray.sort((function(e,t){var a=new Date(e.startDate);return new Date(t.startDate)-a}));return i.a.createElement("div",{className:"portfolio-container"},i.a.createElement("div",{className:"timeline-container"},t.map((function(e,t){return i.a.createElement(r,{key:t,startDate:e.startDate,endDate:e.endDate,heading:e.heading,role:e.role,body:e.body})}))))}}}]);