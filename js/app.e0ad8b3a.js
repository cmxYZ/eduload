(function(){"use strict";var t={4161:function(t,r,e){var A=e(9242),n=e(3396),s=e(7139);const a={class:"app"},o={class:"reg"},u={class:"reg",id:"search"};function i(t,r,e,i,l,g){const c=(0,n.up)("Header"),d=(0,n.up)("Grid");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(c),(0,n._)("span",o,(0,s.zw)(l.name),1),l.showSingIn?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"reg",onClick:r[0]||(r[0]=(...t)=>g.login&&g.login(...t))},"Войти")):(0,n.kq)("",!0),(0,n._)("form",u,[(0,n.Uk)(" Поиск:ㅤ "),(0,n.wy)((0,n._)("input",{name:"query","onUpdate:modelValue":r[1]||(r[1]=t=>l.searchQuery=t)},null,512),[[A.nr,l.searchQuery]])]),(0,n.Wm)(d,{data:l.gridData,columns:l.gridColumns,"filter-key":l.searchQuery},null,8,["data","columns","filter-key"])])}e(7658);var l=e.p+"img/rtflogo.2d6e3cb2.png",g="data:image/png;base64,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";const c=t=>((0,n.dD)("data-v-63a55f0a"),t=t(),(0,n.Cn)(),t),d=c((()=>(0,n._)("div",{class:"logo"},[(0,n._)("img",{src:l,alt:""}),(0,n._)("div",{class:"logotext"},"Система мониторинга учебной нагрузки преподавателей ИРИТ-РТФ")],-1))),B=c((()=>(0,n._)("button",null,[(0,n._)("img",{class:"menu",src:g,alt:""})],-1))),f=[d,B];function h(t,r){return(0,n.wg)(),(0,n.iD)("header",null,f)}var C=e(89);const w={},m=(0,C.Z)(w,[["render",h],["__scopeId","data-v-63a55f0a"]]);var p=m;const Q={key:0},v=["onClick"],I={key:1};function b(t,r,e,A,a,o){return o.filteredData.length?((0,n.wg)(),(0,n.iD)("table",Q,[(0,n._)("thead",null,[(0,n._)("tr",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.columns,(t=>((0,n.wg)(),(0,n.iD)("th",{onClick:r=>o.sortBy(t),class:(0,s.C_)({active:a.sortKey==t})},[(0,n.Uk)((0,s.zw)(o.capitalize(t))+" ",1),(0,n._)("span",{class:(0,s.C_)(["arrow",a.sortOrders[t]>0?"asc":"dsc"])},null,2)],10,v)))),256))])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.filteredData,(t=>((0,n.wg)(),(0,n.iD)("tr",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.columns,(r=>((0,n.wg)(),(0,n.iD)("td",null,(0,s.zw)(t[r]),1)))),256))])))),256))])])):((0,n.wg)(),(0,n.iD)("p",I,"No matches found."))}var q={props:{data:Array,columns:Array,filterKey:String},data(){return{sortKey:"",sortOrders:this.columns.reduce(((t,r)=>(t[r]=1,t)),{}),counter:1}},computed:{filteredData(){const t=this.sortKey,r=this.filterKey&&this.filterKey.toLowerCase(),e=this.sortOrders[t]||1;let A=this.data;return r&&(A=A.filter((t=>Object.keys(t).some((e=>String(t[e]).toLowerCase().indexOf(r)>-1))))),t&&(A=A.slice().sort(((r,A)=>(r=r[t],A=A[t],(r===A?0:r>A?1:-1)*e)))),A}},methods:{sortBy(t){this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t]},capitalize(t){return t.charAt(0).toUpperCase()+t.slice(1)},nextNumber(){return this.counter++,this.counter},dropNumber(){this.counter=0}}};const y=(0,C.Z)(q,[["render",b]]);var V=y,W=e(9948);const Y=new W.Z({url:"https://keys.urfu.ru/auth/",realm:"urfu-lk",clientId:"rtf-eduload",public_key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt201JHU3XjmpVTbO8uZsG/nq39zPhd9rQX9fiPJtcjUWl+elVOy6IaMPs2wfsUQkU1SnUKWGYLdO+YEg4zk0z0nTpzaBubYgPlZ5MzERPPNlbaPQxv/kbojiYQr5CrZF4TUrALZ0qHzYpx346wNJiQ3cHVHNbY8VI2+bsKQoBslNfUlQhxdjgH9H8523rM8PRXUB4MrzV/kfuPrDXce7W6GlS8lN5QT/hxlfTJb3lXSRH8yuDTH8LPxQKVtnw9qgc0QIwi7lAIVcaY5s4ixKPd6jL5LRGEjot6yRSb4WEUM1DYcwIMgMBPK1WWCqDuWQYcjwM9VMhomJc4Zx9V/snQIDAQAB","token-service":"https://keys.urfu.ru/auth/realms/urfu-lk/protocol/openid-connect","account-service":"https://keys.urfu.ru/auth/realms/urfu-lk/account","tokens-not-before":0});var L={mounted(){this.fetchJson(),this.updateKC()},components:{Header:p,Grid:V},data(){return{showSingIn:!0,name:"Not Auth",isAuth:!1,searchQuery:"",gridColumns:["ФИО","Должность/Место работы","Ставка","Часы на ставку","Кол-во часов на часовую оплату","Планируемое кол-во часов (БЮДЖЕТ)","Фактическое кол-во часов (БЮДЖЕТ)","Разница (БЮДЖЕТ)","Планируемое кол-во часов (КОНТРАКТ)","Фактическое кол-во часов (КОНТРАКТ)","Разница (КОНТРАКТ)","Планируемое кол-во часов (ОБЩЕЕ)","Фактическое кол-во часов (ОБЩЕЕ)","Разница (ОБЩЕЕ)","Год"],gridData:[]}},methods:{async updateKC(){await Y.init({onLoad:"check-sso"}),Y.authenticated&&(this.name=Y.tokenParsed.user.person.title,this.showSingIn=!1)},async login(){Y.authenticated?(this.name=Y.tokenParsed.user.person.title,this.isAuth=!0):await Y.login()},async fetchJson(){let t,r=[];await fetch("http://212.193.88.196:8080/loaddata").then((t=>t.text())).then((r=>t=r)),r=JSON.parse(t),console.log(r),r.forEach((t=>{let r={"ФИО":t.name,"Место работы/Должность":t.infoWorkPlaces,"Ставка":t.stake,"Часы на ставку":t.hoursOnStake,"Кол-во часов на часовую оплату":t.hours,"Планируемое кол-во часов (БЮДЖЕТ)":t.bHoursPlaned,"Фактическое кол-во часов (БЮДЖЕТ)":t.bHoursReal,"Разница (БЮДЖЕТ)":t.bHoursDiff,"Планируемое кол-во часов (КОНТРАКТ)":t.cHoursPlaned,"Фактическое кол-во часов (КОНТРАКТ)":t.cHoursReal,"Разница (КОНТРАКТ)":t.cHoursDiff,"Планируемое кол-во часов (ОБЩЕЕ)":t.hoursPlaned,"Фактическое кол-во часов (ОБЩЕЕ)":t.hoursReal,"Разница (ОБЩЕЕ)":t.hoursDiff,"Год":t.year};this.gridData.push(r)}))}}};const O=(0,C.Z)(L,[["render",i]]);var k=O;(0,A.ri)(k).mount("#app")}},r={};function e(A){var n=r[A];if(void 0!==n)return n.exports;var s=r[A]={exports:{}};return t[A](s,s.exports,e),s.exports}e.m=t,function(){e.amdO={}}(),function(){var t=[];e.O=function(r,A,n,s){if(!A){var a=1/0;for(l=0;l<t.length;l++){A=t[l][0],n=t[l][1],s=t[l][2];for(var o=!0,u=0;u<A.length;u++)(!1&s||a>=s)&&Object.keys(e.O).every((function(t){return e.O[t](A[u])}))?A.splice(u--,1):(o=!1,s<a&&(a=s));if(o){t.splice(l--,1);var i=n();void 0!==i&&(r=i)}}return r}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[A,n,s]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var A in r)e.o(r,A)&&!e.o(t,A)&&Object.defineProperty(t,A,{enumerable:!0,get:r[A]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,A){var n,s,a=A[0],o=A[1],u=A[2],i=0;if(a.some((function(r){return 0!==t[r]}))){for(n in o)e.o(o,n)&&(e.m[n]=o[n]);if(u)var l=u(e)}for(r&&r(A);i<a.length;i++)s=a[i],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(l)},A=self["webpackChunkeduload_vue"]=self["webpackChunkeduload_vue"]||[];A.forEach(r.bind(null,0)),A.push=r.bind(null,A.push.bind(A))}();var A=e.O(void 0,[998],(function(){return e(4161)}));A=e.O(A)})();
//# sourceMappingURL=app.e0ad8b3a.js.map