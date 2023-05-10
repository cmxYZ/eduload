(function(){"use strict";var e={1684:function(e,t,a){var o=a(9242),r=a(3396),i=a(7139);const l={key:0,class:"w-page"},n={class:"float"},s={key:0,class:"reg"};function d(e,t,a,o,d,u){const c=(0,r.up)("Header"),h=(0,r.up)("Welcome"),p=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[((0,r.wg)(),(0,r.j4)(c,{key:this.role,role:this.role},null,8,["role"])),d.showSingIn?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(h),(0,r._)("button",{class:"signin-button",onClick:t[0]||(t[0]=(...e)=>u.login&&u.login(...e))},"Войти с помощью учетной записи УрФУ")])):(0,r.kq)("",!0),(0,r._)("div",n,[d.showSingIn?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",s,(0,i.zw)(d.name),1)),d.showSingIn?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("button",{key:1,class:"reg-button",onClick:t[1]||(t[1]=(...e)=>u.logout&&u.logout(...e))},"Выйти"))]),d.showSingIn?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(p,{key:this.role,role:this.role},null,8,["role"]))],64)}var u=a.p+"img/rtflogo.2d6e3cb2.png";const c=e=>((0,r.dD)("data-v-4d0c424c"),e=e(),(0,r.Cn)(),e),h=c((()=>(0,r._)("div",{class:"logo"},[(0,r._)("img",{src:u,alt:""}),(0,r._)("div",{class:"logotext"},"Система мониторинга учебной нагрузки преподавателей ИРИТ-РТФ")],-1)));function p(e,t,a,o,i,l){return(0,r.wg)(),(0,r.iD)("header",null,[h,l.isAdmin()?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>l.openAP&&l.openAP(...e))},"Админ. панель")):(0,r.kq)("",!0)])}var g={props:["role"],methods:{isAdmin(){return"admin"==this.role},openAP(){window.location.href="/admin"}}},f=a(89);const m=(0,f.Z)(g,[["render",p],["__scopeId","data-v-4d0c424c"]]);var w=m,b=a(9948);const A=e=>((0,r.dD)("data-v-3abe48a8"),e=e(),(0,r.Cn)(),e),C=A((()=>(0,r._)("p",null,"Система мониторинга учебной нагрузки преподавателей РТФ предназначена для хранения и редактирования следующих данных преподавателей РТФ:",-1))),y=A((()=>(0,r._)("br",null,null,-1))),v=A((()=>(0,r._)("p",null,"· плановой бюджетной и контрактной нагрузках в соответствии с заявками на учебную нагрузку читающих кафедр в модуле РУНП (ЕИСУ);",-1))),k=A((()=>(0,r._)("p",null,"· фактической бюджетной и контрактной нагрузках в соответствии с договорами, индивидуальными поручениями, актами и отчетами в модуле РУНП (ЕИСУ) либо добавленных вручную;",-1))),P=A((()=>(0,r._)("p",null,"· ставок и долей ставок из модуля «1C Кадры».",-1))),D=A((()=>(0,r._)("br",null,null,-1))),S=A((()=>(0,r._)("p",null,"В системе формируются отчеты для мониторинга учебной нагрузки преподавателей в разрезе учебных лет.",-1))),T=[C,y,v,k,P,D,S];function x(e,t){return(0,r.wg)(),(0,r.iD)("span",null,T)}const H={},L=(0,f.Z)(H,[["render",x],["__scopeId","data-v-3abe48a8"]]);var N=L;const F=new b.Z({url:"https://keys.urfu.ru/auth/",realm:"urfu-lk",clientId:"rtf-eduload",public_key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt201JHU3XjmpVTbO8uZsG/nq39zPhd9rQX9fiPJtcjUWl+elVOy6IaMPs2wfsUQkU1SnUKWGYLdO+YEg4zk0z0nTpzaBubYgPlZ5MzERPPNlbaPQxv/kbojiYQr5CrZF4TUrALZ0qHzYpx346wNJiQ3cHVHNbY8VI2+bsKQoBslNfUlQhxdjgH9H8523rM8PRXUB4MrzV/kfuPrDXce7W6GlS8lN5QT/hxlfTJb3lXSRH8yuDTH8LPxQKVtnw9qgc0QIwi7lAIVcaY5s4ixKPd6jL5LRGEjot6yRSb4WEUM1DYcwIMgMBPK1WWCqDuWQYcjwM9VMhomJc4Zx9V/snQIDAQAB","token-service":"https://keys.urfu.ru/auth/realms/urfu-lk/protocol/openid-connect","account-service":"https://keys.urfu.ru/auth/realms/urfu-lk/account","tokens-not-before":0});var X={beforeMount(){this.updateKC()},components:{Header:w,Welcome:N},data(){return{role:"",showSingIn:!0,name:"Not Auth",isAuth:!1}},methods:{async updateKC(){if(await F.init({onLoad:"check-sso"}),F.authenticated){this.name=F.tokenParsed.user.person.title,this.showSingIn=!1;let e="http://212.193.88.196:8080/checkuser?login="+F.tokenParsed.user.person.email+"&isKeycloak=1&samAccountName="+F.tokenParsed.user.person.id;await fetch(e).then((e=>e.text())).then((e=>this.role=e)),console.log(this.role)}},async login(){F.authenticated?(this.name=F.tokenParsed.user.person.title,this.isAuth=!0):await F.login()},async logout(){F.authenticated&&await F.logout()}}};const R=(0,f.Z)(X,[["render",d]]);var E=R,O=a(2483);const G={class:"reg",style:{display:"flex"}},z={class:"reg",style:{display:"flex"}},B={class:"reg",style:{display:"flex"}},I={class:"reg",style:{display:"flex"}},j={class:"table"};function M(e,t,a,o,l,n){const s=(0,r.up)("AGGrid");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("button",{class:"reg-button",onClick:t[0]||(t[0]=(...e)=>n.goBack&&n.goBack(...e)),style:{display:"flex"}},"Назад"),(0,r._)("button",{class:"reg-button",onClick:t[1]||(t[1]=(...e)=>n.loadExcelByTkey&&n.loadExcelByTkey(...e))},"Экспорт в Excel"),(0,r._)("div",G,"Преподаватель: "+(0,i.zw)(this.name)+", "+(0,i.zw)(this.info)+", "+(0,i.zw)(this.year),1),(0,r._)("button",{class:"reg-button",onClick:t[2]||(t[2]=(...e)=>n.reload&&n.reload(...e)),style:{display:"flex"}},"Рассчитать"),(0,r._)("div",z,"Кол-во часов на почасовую оплату: "+(0,i.zw)(this.hours),1),(0,r._)("div",B,"Часы почасовой оплаты: "+(0,i.zw)(n.getHours()),1),(0,r._)("div",I,"Разница: "+(0,i.zw)(this.diff),1),(0,r._)("div",j,[(0,r.Wm)(s,{gridData:l.gridData,columnDefs:l.columnDefs,defaultColDef:l.defaultColDef,getRowId:e.getRowId,localeText:e.ruLocale},null,8,["gridData","columnDefs","defaultColDef","getRowId","localeText"])])],64)}function q(e,t,a,o,i,l){const n=(0,r.up)("ag-grid-vue");return(0,r.wg)(),(0,r.j4)(n,{style:{width:"100%",height:"100%"},class:"ag-theme-alpine",defaultColDef:a.defaultColDef,columnDefs:a.columnDefs,rowData:a.gridData},null,8,["defaultColDef","columnDefs","rowData"])}var U=a(6732),V="data:image/png;base64,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";const Y=e=>((0,r.dD)("data-v-82ff1496"),e=e(),(0,r.Cn)(),e),Q=Y((()=>(0,r._)("img",{src:V,alt:""},null,-1))),J=[Q];function W(e,t,a,o,i,l){return(0,r.wg)(),(0,r.iD)("button",{onClick:t[0]||(t[0]=e=>o.infoClick())},J)}var Z={setup(e){function t(){window.location.href="/filtered?tkey="+e.params.value.toString()+"&name="+e.params.data.name.toString()+"&info="+e.params.data.infoWorkPlaces.toString()+"&year="+e.params.data.year.toString()+"&hours="+e.params.data.hours.toString()}return{infoClick:t}}};const K=(0,f.Z)(Z,[["render",W],["__scopeId","data-v-82ff1496"]]);var _=K,$={props:["gridData","columnDefs","defaultColDef"],name:"App",components:{AgGridVue:U.n,infoCellRenderer:_},setup(){return{}}};const ee=(0,f.Z)($,[["render",q]]);var te=ee;const ae={selectAll:"(Выбрать все)",selectAllSearchResults:"(Select All Search Results)",searchOoo:"Поиск...",blanks:"(Blanks)",noMatches:"Нет совпадений",filterOoo:"Фильтр...",equals:"Равно",notEqual:"Не равно",blank:"Пустое поле",notBlank:"Не пустое поле",empty:"Выберите один",lessThan:"Меньше чем",greaterThan:"Больше чем",lessThanOrEqual:"Меньше или равно",greaterThanOrEqual:"Больше или равно",inRange:"В диапазоне",inRangeStart:"от",inRangeEnd:"до",contains:"Содержит",notContains:"Не содержит",startsWith:"Начинается с",endsWith:"Заканчивается на",dateFormatOoo:"yyyy-mm-dd",andCondition:"И",orCondition:"ИЛИ",applyFilter:"Применить",resetFilter:"Сбросить",clearFilter:"Очистить",cancelFilter:"Отменить",textFilter:"Текстовый фильтр",numberFilter:"Числовой фильтр",dateFilter:"Фильтр данных",setFilter:"Настроить фильтр",groupFilterSelect:"Выбрать поле:",columns:"Колонка",filters:"Фильтры",pivotMode:"Pivot Mode",groups:"Row Groups",rowGroupColumnsEmptyMessage:"Drag here to set row groups",values:"Values",valueColumnsEmptyMessage:"Drag here to aggregate",pivots:"Column Labels",pivotColumnsEmptyMessage:"Drag here to set column labels",group:"Group",rowDragRow:"row",rowDragRows:"rows",loadingOoo:"Loading...",loadingError:"ERR",noRowsToShow:"No Rows To Show",enabled:"Enabled",pinColumn:"Pin Column",pinLeft:"Pin Left",pinRight:"Pin Right",noPin:"No Pin",valueAggregation:"Value Aggregation",noAggregation:"None",autosizeThiscolumn:"Autosize This Column",autosizeAllColumns:"Autosize All Columns",groupBy:"Group by",ungroupBy:"Un-Group by",addToValues:"Add ${variable} to values",removeFromValues:"Remove ${variable} from values",addToLabels:"Add ${variable} to labels",removeFromLabels:"Remove ${variable} from labels",resetColumns:"Reset Columns",expandAll:"Expand All",collapseAll:"Close All",copy:"Copy",ctrlC:"Ctrl+C",ctrlX:"Ctrl+X",copyWithHeaders:"Copy With Headers",copyWithGroupHeaders:"Copy with Group Headers",cut:"Cut",paste:"Paste",ctrlV:"Ctrl+V",export:"Export",csvExport:"CSV Export",excelExport:"Excel Export",sum:"Sum",first:"First",last:"Last",min:"Min",max:"Max",none:"None",count:"Count",avg:"Average",filteredRows:"Filtered",selectedRows:"Selected",totalRows:"Total Rows",totalAndFilteredRows:"Rows",more:"More",to:"to",of:"of",page:"Page",pageLastRowUnknown:"?",nextPage:"Next Page",lastPage:"Last Page",firstPage:"First Page",previousPage:"Previous Page",pivotColumnGroupTotals:"Total",pivotChartAndPivotMode:"Pivot Chart & Pivot Mode",pivotChart:"Pivot Chart",chartRange:"Chart Range",columnChart:"Column",groupedColumn:"Grouped",stackedColumn:"Stacked",normalizedColumn:"100% Stacked",barChart:"Bar",groupedBar:"Grouped",stackedBar:"Stacked",normalizedBar:"100% Stacked",pieChart:"Pie",pie:"Pie",doughnut:"Doughnut",line:"Line",xyChart:"X Y (Scatter)",scatter:"Scatter",bubble:"Bubble",areaChart:"Area",area:"Area",stackedArea:"Stacked",normalizedArea:"100% Stacked",histogramChart:"Histogram",histogramFrequency:"Frequency",combinationChart:"Combination",columnLineCombo:"Column & Line",AreaColumnCombo:"Area & Column",pivotChartTitle:"Pivot Chart",rangeChartTitle:"Range Chart",settings:"Settings",data:"Data",format:"Format",categories:"Categories",defaultCategory:"(None)",series:"Series",xyValues:"X Y Values",paired:"Paired Mode",axis:"Axis",navigator:"Navigator",color:"Color",thickness:"Thickness",xType:"X Type",automatic:"Automatic",category:"Category",number:"Number",time:"Time",autoRotate:"Auto Rotate",xRotation:"X Rotation",yRotation:"Y Rotation",ticks:"Ticks",width:"Width",height:"Height",length:"Length",padding:"Padding",spacing:"Spacing",chart:"Chart",title:"Title",titlePlaceholder:"Chart title - double click to edit",background:"Background",font:"Font",top:"Top",right:"Right",bottom:"Bottom",left:"Left",labels:"Labels",size:"Size",minSize:"Minimum Size",maxSize:"Maximum Size",legend:"Legend",position:"Position",markerSize:"Marker Size",markerStroke:"Marker Stroke",markerPadding:"Marker Padding",itemSpacing:"Item Spacing",itemPaddingX:"Item Padding X",itemPaddingY:"Item Padding Y",layoutHorizontalSpacing:"Horizontal Spacing",layoutVerticalSpacing:"Vertical Spacing",strokeWidth:"Stroke Width",lineDash:"Line Dash",offset:"Offset",offsets:"Offsets",tooltips:"Tooltips",callout:"Callout",markers:"Markers",shadow:"Shadow",blur:"Blur",xOffset:"X Offset",yOffset:"Y Offset",lineWidth:"Line Width",normal:"Normal",bold:"Bold",italic:"Italic",boldItalic:"Bold Italic",predefined:"Predefined",fillOpacity:"Fill Opacity",strokeOpacity:"Line Opacity",histogramBinCount:"Bin count",columnGroup:"Column",barGroup:"Bar",pieGroup:"Pie",lineGroup:"Line",scatterGroup:"X Y (Scatter)",areaGroup:"Area",histogramGroup:"Histogram",combinationGroup:"Combination",groupedColumnTooltip:"Grouped",stackedColumnTooltip:"Stacked",normalizedColumnTooltip:"100% Stacked",groupedBarTooltip:"Grouped",stackedBarTooltip:"Stacked",normalizedBarTooltip:"100% Stacked",pieTooltip:"Pie",doughnutTooltip:"Doughnut",lineTooltip:"Line",groupedAreaTooltip:"Area",stackedAreaTooltip:"Stacked",normalizedAreaTooltip:"100% Stacked",scatterTooltip:"Scatter",bubbleTooltip:"Bubble",histogramTooltip:"Histogram",columnLineComboTooltip:"Column & Line",areaColumnComboTooltip:"Area & Column",customComboTooltip:"Custom Combination",noDataToChart:"No data available to be charted.",pivotChartRequiresPivotMode:"Pivot Chart requires Pivot Mode enabled.",chartSettingsToolbarTooltip:"Menu",chartLinkToolbarTooltip:"Linked to Grid",chartUnlinkToolbarTooltip:"Unlinked from Grid",chartDownloadToolbarTooltip:"Download Chart",seriesChartType:"Series Chart Type",seriesType:"Series Type",secondaryAxis:"Secondary Axis",ariaChecked:"checked",ariaColumn:"Column",ariaColumnGroup:"Column Group",ariaColumnList:"Column List",ariaColumnSelectAll:"Toggle Select All Columns",ariaDateFilterInput:"Date Filter Input",ariaDefaultListName:"List",ariaFilterColumnsInput:"Filter Columns Input",ariaFilterFromValue:"Filter from value",ariaFilterInput:"Filter Input",ariaFilterList:"Filter List",ariaFilterToValue:"Filter to value",ariaFilterValue:"Filter Value",ariaFilteringOperator:"Filtering Operator",ariaHidden:"hidden",ariaIndeterminate:"indeterminate",ariaInputEditor:"Input Editor",ariaMenuColumn:"Press CTRL ENTER to open column menu.",ariaRowDeselect:"Press SPACE to deselect this row",ariaRowSelectAll:"Press Space to toggle all rows selection",ariaRowToggleSelection:"Press Space to toggle row selection",ariaRowSelect:"Press SPACE to select this row",ariaSearch:"Search",ariaSortableColumn:"Press ENTER to sort",ariaToggleVisibility:"Press SPACE to toggle visibility",ariaUnchecked:"unchecked",ariaVisible:"visible",ariaSearchFilterValues:"Search filter values",ariaRowGroupDropZonePanelLabel:"Row Groups",ariaValuesDropZonePanelLabel:"Values",ariaPivotDropZonePanelLabel:"Column Labels",ariaDropZoneColumnComponentDescription:"Press DELETE to remove",ariaDropZoneColumnValueItemDescription:"Press ENTER to change the aggregation type",ariaDropZoneColumnGroupItemDescription:"Press ENTER to sort",ariaDropZoneColumnComponentAggFuncSeperator:" of ",ariaDropZoneColumnComponentSortAscending:"ascending",ariaDropZoneColumnComponentSortDescending:"descending",ariaLabelColumnMenu:"Column Menu",ariaLabelCellEditor:"Cell Editor",ariaLabelDialog:"Dialog",ariaLabelSelectField:"Select Field",ariaLabelTooltip:"Tooltip",ariaLabelContextMenu:"Context Menu",ariaLabelSubMenu:"SubMenu",ariaLabelAggregationFunction:"Aggregation Function",thousandSeparator:",",decimalSeparator:"."};var oe=ae;const re=["checked"];function ie(e,t,a,o,i,l){return(0,r.wg)(),(0,r.iD)("input",{type:"checkbox",onClick:t[0]||(t[0]=e=>o.checkedHandler(e)),checked:e.params.value},null,8,re)}var le={setup(e){function t(t){if("write"==e.params.data.role||"admin"==e.params.data.role){let a=t.target.checked,o="http://212.193.88.196:8080/changeishour?id="+e.params.data.id+"&value="+a;fetch(o)}else t.target.checked=!t.target.checked}return{checkedHandler:t}}};const ne=(0,f.Z)(le,[["render",ie],["__scopeId","data-v-cfb91cf2"]]);var se=ne,de={props:["role"],beforeMount(){this.fetchJson(),this.ruLocale=oe,this.name=this.$route.query.name,this.info=this.$route.query.info,this.year=this.$route.query.year,this.hours=this.$route.query.hours},components:{AGGrid:te,checkboxCellRenderer:se},data(){return{diff:0,gridData:[],columnDefs:[{headerName:"№",valueGetter:e=>e.node?e.node.rowIndex+1:null,width:70},{headerName:"Дисциплина",field:"disciplineName",width:300,filter:!0,floatingFilter:!0},{headerName:"Академическая группа",field:"groupsHistory",width:160,filter:!0,floatingFilter:!0},{headerName:"Семестр",field:"semester",width:160,filter:!0,floatingFilter:!0},{headerName:"Вид нагрузки",field:"loadType",width:195,filter:!0,floatingFilter:!0},{headerName:"Формирующая кафедра",field:"formingDivisionuuid",width:300,filter:!0,floatingFilter:!0},{headerName:"Читающая кафедра",field:"readingDivisionuuid",width:300,filter:!0,floatingFilter:!0},{headerName:"Тип нагрузки",field:"compensationType",width:140,filter:!0,floatingFilter:!0},{headerName:"Планируемое кол-во часов",field:"plannedHours",width:140},{headerName:"Фактическое кол-во часов",valueGetter:e=>e.data.realHours,valueSetter:e=>{let t=parseFloat(e.newValue).toFixed(2);isNaN(t)&&(t=0);let a="http://212.193.88.196:8080/changerealhours?id="+e.data.id+"&value="+t;return fetch(a),e.data.realHours=t,e.data.diff=(e.data.plannedHours-e.data.realHours).toFixed(2),!0},editable:this.isEditable(this.role),width:140},{headerName:"Разница",field:"diff",width:100},{headerName:"Почасовая оплата",field:"isHour",width:120,cellRenderer:"checkboxCellRenderer"}],defaultColDef:{sortable:!0,resizable:!0,spanHeaderHeight:!0,wrapHeaderText:!0,minWidth:50,wrapText:!0,autoHeight:!0,autoHeaderHeight:!0}}},methods:{loadExcelByTkey(){window.open("http://212.193.88.196:8080/loadexcelbytkey?tkey="+this.$route.query.tkey+"&year="+this.$route.query.year,"_blank")},reload(){location.reload()},getHours(){let e=0;return this.gridData.forEach((t=>{1==t.isHour&&(e+=parseFloat(t.plannedHours))})),this.diff=(parseFloat(this.hours)-e).toFixed(2),e.toFixed(2)},goBack(){window.location.href="/"},async fetchJson(){let e;await fetch("http://212.193.88.196:8080/loaddatabytkey?tkey="+this.$route.query.tkey+"&year="+this.$route.query.year).then((e=>e.text())).then((t=>e=t)),this.gridData=JSON.parse(e),this.gridData.forEach((e=>{e.role=this.role}))},isEditable(e){return"admin"==e||"write"==e}}};const ue=(0,f.Z)(de,[["render",M],["__scopeId","data-v-292f7f8c"]]);var ce=ue;const he={key:0,style:{display:"flex"},class:"reg"},pe={class:"table"};function ge(e,t,a,o,i,l){const n=(0,r.up)("AGGrid");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i.isLoading?((0,r.wg)(),(0,r.iD)("div",he,"Загрузка таблицы...")):(0,r.kq)("",!0),(0,r._)("button",{class:"reg-button",onClick:t[0]||(t[0]=(...e)=>l.loadExcel&&l.loadExcel(...e))},"Экспорт в Excel"),(0,r._)("div",pe,[(0,r.Wm)(n,{gridData:i.gridData,columnDefs:i.columnDefs,defaultColDef:i.defaultColDef,getRowId:e.getRowId,localeText:e.ruLocale},null,8,["gridData","columnDefs","defaultColDef","getRowId","localeText"])])],64)}var fe={props:["role"],beforeMount(){this.fetchJson(),this.ruLocale=oe},components:{AGGrid:te,infoCellRenderer:_},data(){return{isLoading:!0,gridData:[],columnDefs:[{headerName:"",field:"tkey",cellRenderer:"infoCellRenderer",width:70},{headerName:"№",valueGetter:e=>e.node?e.node.rowIndex+1:null,width:70},{headerName:"ФИО",field:"name",width:280,filter:!0,floatingFilter:!0},{headerName:"Должность/Место работы",field:"infoWorkPlaces",width:280,filter:!0,floatingFilter:!0},{headerName:"Ставка",valueGetter:e=>e.data.stake,valueSetter:e=>{let t=parseFloat(e.newValue).toFixed(2);isNaN(t)&&(t=0);let a="http://212.193.88.196:8080/changestake?tkey="+e.data.tkey+"&value="+t+"&year="+e.data.year;return fetch(a),e.data.stake=t,!0},editable:this.isEditable(this.role),width:100},{headerName:"Часы на ставку",valueGetter:e=>e.data.hoursOnStake,valueSetter:e=>{let t=parseFloat(e.newValue).toFixed(2);isNaN(t)&&(t=0);let a="http://212.193.88.196:8080/changehours?guidPerson1C="+e.data.guidPerson1C+"&value="+t;return fetch(a),e.data.hoursOnStake=t,e.data.hours=(e.data.bHoursPlaned-e.data.hoursOnStake).toFixed(2),!0},editable:this.isEditable(this.role),width:100},{headerName:"Кол-во часов на почасовую оплату",valueGetter:e=>e.data.hours,valueSetter:e=>{let t=parseFloat(e.newValue).toFixed(2);return e.data.hours=t,!0},width:130},{headerName:"Бюджет",children:[{headerName:"Планируемое кол-во часов",field:"bHoursPlaned",width:140},{headerName:"Фактическое кол-во часов",field:"bHoursReal",width:140},{headerName:"Разница",field:"bHoursDiff",width:100}]},{headerName:"Контракт",children:[{headerName:"Планируемое кол-во часов",field:"cHoursPlaned",width:140},{headerName:"Фактическое кол-во часов",field:"cHoursReal",width:140},{headerName:"Разница",field:"cHoursDiff",width:100}]},{headerName:"Общее",children:[{headerName:"Планируемое кол-во часов",field:"hoursPlaned",width:140},{headerName:"Фактическое кол-во часов",field:"hoursReal",width:140},{headerName:"Разница",field:"hoursDiff",width:100}]},{headerName:"Год",field:"year",width:130,filter:!0,floatingFilter:!0}],defaultColDef:{sortable:!0,resizable:!0,spanHeaderHeight:!0,wrapHeaderText:!0,minWidth:50,wrapText:!0,autoHeight:!0,autoHeaderHeight:!0}}},methods:{loadExcel(){window.open("http://212.193.88.196:8080/loadexcel","_blank")},async fetchJson(){let e;await fetch("http://212.193.88.196:8080/loaddata").then((e=>e.text())).then((t=>e=t)),this.gridData=await JSON.parse(e),this.isLoading=!1},isEditable(e){return"admin"==e||"write"==e}}};const me=(0,f.Z)(fe,[["render",ge],["__scopeId","data-v-234262d0"]]);var we=me,be=a.p+"img/loading.46c42de7.gif";const Ae=e=>((0,r.dD)("data-v-2334cc0e"),e=e(),(0,r.Cn)(),e),Ce={class:"content flow-row"},ye={class:"item"},ve=Ae((()=>(0,r._)("div",{class:"title"},"Обновить нагрузки преподавателей:",-1))),ke={class:"loads-div"},Pe={class:"loads-div"},De={key:0,class:"loading-img",src:be},Se={key:1},Te={class:"item"},xe=Ae((()=>(0,r._)("div",{class:"title"},"Обновить данные преподавателей:",-1))),He={key:0,class:"loading-img",src:be},Le={key:1};function Ne(e,t,a,i,l,n){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("button",{class:"reg-button",onClick:t[0]||(t[0]=(...e)=>n.goBack&&n.goBack(...e)),style:{display:"flex"}},"Назад"),(0,r._)("div",Ce,[(0,r._)("div",ye,[ve,(0,r._)("div",ke,[(0,r.Uk)("Год"),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>this.search_year=e),class:"loads-input",type:"text"},null,512),[[o.nr,this.search_year]])]),(0,r._)("div",Pe,[(0,r.Uk)("tkey"),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>this.search_tkey=e),class:"loads-input",type:"text"},null,512),[[o.nr,this.search_tkey]])]),(0,r._)("button",{class:"update-button",onClick:t[3]||(t[3]=(...e)=>n.updateLoads&&n.updateLoads(...e))},[l.isLoadingL?((0,r.wg)(),(0,r.iD)("img",De)):(0,r.kq)("",!0),l.isLoadingL?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("p",Se,"Запуск"))])]),(0,r._)("div",Te,[xe,(0,r._)("button",{class:"update-button",onClick:t[4]||(t[4]=(...e)=>n.updateTeachers&&n.updateTeachers(...e))},[l.isLoadingT?((0,r.wg)(),(0,r.iD)("img",He)):(0,r.kq)("",!0),l.isLoadingT?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("p",Le,"Запуск"))])])])],64)}var Fe={data(){return{isLoadingT:!1,isLoadingL:!1,search_year:"2022",search_tkey:""}},methods:{goBack(){window.location.href="/"},async updateTeachers(){this.isLoadingL||(this.isLoadingT=!0,await fetch("http://212.193.88.196:8080/updateteachers"),this.isLoadingT=!1)},async updateLoads(){this.isLoadingT||(this.isLoadingL=!0,console.log("http://212.193.88.196:8080/updateloads?year="+this.search_year.toString()+"&tkey="+this.search_tkey.toString()),await fetch("http://212.193.88.196:8080/updateloads?year="+this.search_year.toString()+"&tkey="+this.search_tkey.toString()),this.isLoadingL=!1)}}};const Xe=(0,f.Z)(Fe,[["render",Ne],["__scopeId","data-v-2334cc0e"]]);var Re=Xe;const Ee=(0,O.p7)({history:(0,O.PO)(),routes:[{path:"/filtered",component:ce},{path:"/",component:we},{path:"/admin",component:Re}]}),Oe=(0,o.ri)(E);Oe.use(Ee),Oe.mount("#app")}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,a),i.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,o,r,i){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var n=!0,s=0;s<o.length;s++)(!1&i||l>=i)&&Object.keys(a.O).every((function(e){return a.O[e](o[s])}))?o.splice(s--,1):(n=!1,i<l&&(l=i));if(n){e.splice(u--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,l=o[0],n=o[1],s=o[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(s)var u=s(a)}for(t&&t(o);d<l.length;d++)i=l[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},o=self["webpackChunkeduload_vue"]=self["webpackChunkeduload_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(1684)}));o=a.O(o)})();
//# sourceMappingURL=app.3945c360.js.map