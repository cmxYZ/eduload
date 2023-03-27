(function(){"use strict";var t={1074:function(t,r,n){var e=n(9242),o=n(3396),s=n(7139);const i={class:"app"},u={class:"reg"};function a(t,r,n,e,a,l){const c=(0,o.up)("Header"),d=(0,o.up)("Grid");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(c),(0,o._)("span",u,(0,s.zw)(a.name),1),(0,o._)("button",{class:"reg",onClick:r[0]||(r[0]=(...t)=>l.login&&l.login(...t))},"Sign In"),(0,o._)("button",{class:"reg",onClick:r[1]||(r[1]=(...t)=>l.log&&l.log(...t))},"Log"),(0,o.Wm)(d,{data:a.gridData,columns:a.gridColumns},null,8,["data","columns"])])}var l=n.p+"img/rtflogo.2d6e3cb2.png";const c=t=>((0,o.dD)("data-v-0e526a58"),t=t(),(0,o.Cn)(),t),d=c((()=>(0,o._)("div",{class:"logo"},[(0,o._)("img",{src:l,alt:""}),(0,o._)("div",{class:"logotext"},"Система мониторинга учебной нагрузки преподавателей ИРИТ-РТФ")],-1))),f=c((()=>(0,o._)("button",null,"Menu",-1))),g=[d,f];function h(t,r){return(0,o.wg)(),(0,o.iD)("header",null,g)}var p=n(89);const v={},m=(0,p.Z)(v,[["render",h],["__scopeId","data-v-0e526a58"]]);var w=m;const k={key:0},y=["onClick"],b={key:1};function O(t,r,n,e,i,u){return u.filteredData.length?((0,o.wg)(),(0,o.iD)("table",k,[(0,o._)("thead",null,[(0,o._)("tr",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.columns,(t=>((0,o.wg)(),(0,o.iD)("th",{onClick:r=>u.sortBy(t),class:(0,s.C_)({active:i.sortKey==t})},[(0,o.Uk)((0,s.zw)(u.capitalize(t))+" ",1),(0,o._)("span",{class:(0,s.C_)(["arrow",i.sortOrders[t]>0?"asc":"dsc"])},null,2)],10,y)))),256))])]),(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.filteredData,(t=>((0,o.wg)(),(0,o.iD)("tr",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.columns,(r=>((0,o.wg)(),(0,o.iD)("td",null,(0,s.zw)(t[r]),1)))),256))])))),256))])])):((0,o.wg)(),(0,o.iD)("p",b,"No matches found."))}var D={props:{data:Array,columns:Array,filterKey:String},data(){return{sortKey:"",sortOrders:this.columns.reduce(((t,r)=>(t[r]=1,t)),{})}},computed:{filteredData(){const t=this.sortKey,r=this.filterKey&&this.filterKey.toLowerCase(),n=this.sortOrders[t]||1;let e=this.data;return r&&(e=e.filter((t=>Object.keys(t).some((n=>String(t[n]).toLowerCase().indexOf(r)>-1))))),t&&(e=e.slice().sort(((r,e)=>(r=r[t],e=e[t],(r===e?0:r>e?1:-1)*n)))),e}},methods:{sortBy(t){this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t]},capitalize(t){return t.charAt(0).toUpperCase()+t.slice(1)}}};const _=(0,p.Z)(D,[["render",O]]);var C=_,P=n(9948);const K=(0,P.Z)({url:"https://keys.urfu.ru/auth/",realm:"urfu-lk",clientId:"rtf-eduload",public_key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt201JHU3XjmpVTbO8uZsG/nq39zPhd9rQX9fiPJtcjUWl+elVOy6IaMPs2wfsUQkU1SnUKWGYLdO+YEg4zk0z0nTpzaBubYgPlZ5MzERPPNlbaPQxv/kbojiYQr5CrZF4TUrALZ0qHzYpx346wNJiQ3cHVHNbY8VI2+bsKQoBslNfUlQhxdjgH9H8523rM8PRXUB4MrzV/kfuPrDXce7W6GlS8lN5QT/hxlfTJb3lXSRH8yuDTH8LPxQKVtnw9qgc0QIwi7lAIVcaY5s4ixKPd6jL5LRGEjot6yRSb4WEUM1DYcwIMgMBPK1WWCqDuWQYcjwM9VMhomJc4Zx9V/snQIDAQAB","token-service":"https://keys.urfu.ru/auth/realms/urfu-lk/protocol/openid-connect","account-service":"https://keys.urfu.ru/auth/realms/urfu-lk/account","tokens-not-before":0});K.init({onLoad:"check-sso"});var Q={components:{Header:w,Grid:C},data(){return{name:"No User",gridColumns:["ФИО","Место работы","Должность","Ставка","Часы на ставку","Планируемое количеаство часов","Фактическое количество часов","Разница между плановым и фактическим количеством часов","Год"],gridData:[{"ФИО":"Сапожникова Александра Вячеславовна","Место работы":"Кафедра иностранных языков и образовательных технологий","Должность":"Старший преподаватель","Ставка":"1.0","Часы на ставку":"100","Планируемое количеаство часов":"64","Фактическое количество часов":"64","Разница между плановым и фактическим количеством часов":"0","Год":"2020"},{"ФИО":"Зубова Анастасия Владимировна","Место работы":"Кафедра интеллектуальных информационных технологий","Должность":"Доцент","Ставка":"1.0","Часы на ставку":"120","Планируемое количеаство часов":"64","Фактическое количество часов":"60","Разница между плановым и фактическим количеством часов":"4","Год":"2019"},{"ФИО":"Шегал Анна Айзиковна","Место работы":"Департамент радиоэлектроники и связи","Должность":"Доцент","Ставка":"0.375","Часы на ставку":"90","Планируемое количеаство часов":"44","Фактическое количество часов":"30","Разница между плановым и фактическим количеством часов":"14","Год":"2021"}]}},methods:{login(){K.login(),this.showName()},log(){console.log(K),console.log(K.tokenParsed),this.showName()},showName(){"undefined"==typeof K.tokenParsed?this.name="Updated":this.name=K.tokenParsed.user.person.title}}};const j=(0,p.Z)(Q,[["render",a]]);var A=j;(0,e.ri)(A).mount("#app")}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(r,e,o,s){if(!e){var i=1/0;for(c=0;c<t.length;c++){e=t[c][0],o=t[c][1],s=t[c][2];for(var u=!0,a=0;a<e.length;a++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](e[a])}))?e.splice(a--,1):(u=!1,s<i&&(i=s));if(u){t.splice(c--,1);var l=o();void 0!==l&&(r=l)}}return r}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[e,o,s]}}(),function(){n.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(r,{a:r}),r}}(),function(){n.d=function(t,r){for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(r){return 0===t[r]};var r=function(r,e){var o,s,i=e[0],u=e[1],a=e[2],l=0;if(i.some((function(r){return 0!==t[r]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(a)var c=a(n)}for(r&&r(e);l<i.length;l++)s=i[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},e=self["webpackChunkeduload_vue"]=self["webpackChunkeduload_vue"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(1074)}));e=n.O(e)})();
//# sourceMappingURL=app.428a3aa1.js.map