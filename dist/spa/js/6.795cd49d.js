(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"024d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-md"},[a("tool-bar",{attrs:{moduleName:t.moduleName}}),a("q-scroll-area",{staticClass:"q-scroll-area-matching",style:t.lprData.length>0?"background-color:#e5e5e5":""},[a("lpr-table")],1)],1)},s=[],n=a("ded3"),o=a.n(n),r=a("2f62"),l={data(){return{moduleName:"toll-gates-module"}},components:{"tool-bar":a("5bd4").default,"lpr-table":a("ceec").default,"no-data":a("28d6").default,loading:a("c5e0").default,pagination:a("f836").default},watch:{autoUpdateTransits:function(t,e){t&&(this.$socket.emit("join","generic-lpr-module"),this.sendMetaData(!0),this.listenToLprHub()),t||(this.$socket.emit("leave","generic-lpr-module"),this.stopListenToLprHub())},paginationLimit:function(t,e){t&&this.updateTransits&&this.sendMetaData()},paginationPage:function(t,e){t&&this.updateTransits&&this.sendMetaData()},confidenceLimit:function(t,e){t&&this.updateTransits&&(console.log("confidence limit changed",this.filters),this.sendMetaData())},speedLimit:function(t,e){console.log("speed limit changed",t,e),t&&this.updateTransits&&(console.log("speed limit changed",t),this.sendMetaData())},confirmed:function(t,e){t&&this.updateTransits&&(console.log("confirmed filter changed",this.filters),this.sendMetaData())}},methods:o()(o()(o()({},Object(r["b"])("devices",["getDevices"])),Object(r["b"])("lpr",["getLprData","setModuleName","setPagination","updateLprData","setDeviceFilter","getDistinctDates"])),{},{sendMetaData(t){let e=o()({},this.pagination);t&&(e.page=1),this.$socket.emit("meta_update",{pagination:e,filters:{confidenceFilter:parseInt(this.confidenceLimit),speedFilter:parseInt(this.speedLimit),confirmedFilter:this.confirmed}})},listenToLprHub(){this.sockets.subscribe("lpr_transits",t=>{this.updateLprData(t)})},stopListenToLprHub(){this.sockets.unsubscribe("lpr_transits"),console.log("Stop listning to lpr_transits channel")}}),mounted(){this.setModuleName(this.moduleName),this.getDistinctDates(),this.getDevices(),setTimeout(()=>{this.setDeviceFilter(this.moduleActiveDevices)},1500)},destroyed(){this.setModuleName(" "),this.$socket.emit("leave","generic-lpr-module")},computed:o()(o()(o()(o()({},Object(r["d"])("lpr",["pagination","filters","updateTransits","lprDataDownloaded"])),Object(r["c"])("lpr",["sortedTransits","paginationData"])),Object(r["c"])("devices",["getModuleActiveDevices"])),{},{autoUpdateTransits:{get(){return this.updateTransits},set(t){this.setUpdateTransits(t)}},lprData(){return this.sortedTransits},moduleActiveDevices(){return this.getModuleActiveDevices(this.moduleName)},paginationLimit(){return this.pagination.limit},paginationPage(){return this.pagination.page},confidenceLimit(){return this.filters.confidence_number.isActive?this.filters.confidence_number.data:"0"},speedLimit(){return this.filters.speed.isActive?this.filters.speed.data:"0"},confirmed(){return this.filters.confirmed.isActive?"true":"false"}})},c=l,d=(a("9995"),a("2877")),u=a("9989"),p=a("4983"),m=a("eebe"),g=a.n(m),f=Object(d["a"])(c,i,s,!1,null,null,null);e["default"]=f.exports;g()(f,"components",{QPage:u["a"],QScrollArea:p["a"]})},"05bf":function(t,e,a){},"47af":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"ExpandableCard"},[a("div",{staticClass:"row"},[a("q-img",{staticClass:"col",staticStyle:{height:"400px","max-width":"500px"},attrs:{src:t.activeCarousel.path+"/"+t.activeCarousel.source2,transition:"slide-right"}},[a("div",{staticClass:"absolute-top  text-weight-bold  "},[a("div",{staticClass:"absolute-center  "},[t._v("\n          "+t._s(t.activeCarousel.date_time)+"\n        ")])])]),a("q-img",{staticClass:"col",staticStyle:{width:"500px","max-height":"500px"},attrs:{src:t.activeCarousel.path+"/"+t.activeCarousel.source1,transition:"slide-left"}},[a("div",{staticClass:"absolute-bottom text-subtitle2 text-center"},[a("div",[t._v("Brand: "+t._s(t.activeCarousel.brand))]),a("div",[t._v("Model: "+t._s(t.activeCarousel.model))]),a("div",[t._v("Colour: "+t._s(t.activeCarousel.color))])]),a("div",{staticClass:"absolute-top text-h6 text-weight-bold"},[a("div",{staticClass:"absolute-center "},[t._v("\n          "+t._s(t.activeCarousel.plate_number)+"\n        ")])])])],1)])},s=[],n={props:["activeCarousel"]},o=n,r=(a("8c29"),a("2877")),l=a("f09f"),c=a("068f"),d=a("eebe"),u=a.n(d),p=Object(r["a"])(o,i,s,!1,null,null,null);e["default"]=p.exports;u()(p,"components",{QCard:l["a"],QImg:c["a"]})},"5d39":function(t,e,a){},"8c29":function(t,e,a){"use strict";var i=a("5d39"),s=a.n(i);s.a},9995:function(t,e,a){"use strict";var i=a("05bf"),s=a.n(i);s.a},ceec:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{data:t.lprData,pagination:t.pagination,columns:t.columns,"row-key":"name"},on:{"update:pagination":function(e){t.pagination=e},request:t.onRequest},scopedSlots:t._u([{key:"top-right",fn:function(){return[a("q-btn",{attrs:{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":""},on:{click:t.exportTable}})]},proxy:!0},{key:"header",fn:function(e){return[a("q-tr",{attrs:{props:e}},t._l(e.cols,(function(i){return a("q-th",{key:i.name,attrs:{props:e}},[t._v("\n          "+t._s(i.label)+"\n        ")])})),1)]}},{key:"body",fn:function(e){return[a("q-tr",{staticClass:"cursor-pointer",attrs:{props:e},on:{click:function(a){return t.setCarousel(e.row)}}},t._l(e.cols,(function(i){return a("q-td",{key:i.name,attrs:{props:e}},["Image"!=i.name&&"Plate_Image"!=i.name?a("span",[t._v("\n            "+t._s(i.value))]):t._e(),"Image"==i.name?a("q-avatar",{staticClass:"shadow-10",attrs:{size:"50px"}},[a("img",{attrs:{src:e.row.path+"/"+e.row.source2}})]):t._e(),"Plate_Image"==i.name?a("q-avatar",{staticClass:"shadow-10",attrs:{size:"50px"}},[a("img",{attrs:{src:e.row.path+"/"+e.row.source1}})]):t._e()],1)})),1)]}}])}),a("q-dialog",{staticClass:" q-pa-md items-start q-gutter-md ",model:{value:t.carousel,callback:function(e){t.carousel=e},expression:"carousel"}},[a("popupModal",{attrs:{activeCarousel:t.activeCarousel}})],1)],1)},s=[],n=a("ded3"),o=a.n(n),r=a("2f62"),l=a("a357");function c(t,e){let a=void 0!==e?e(t):t;return a=void 0===a||null===a?"":String(a),a=a.split('"').join('""'),`"${a}"`}var d={data(){return{carousel:!1,activeCarousel:[],pagination:{sortBy:"ID",descending:!1,page:1,rowsPerPage:3,rowsNumber:10},columns:[{name:"ID",required:!0,label:"ID",field:t=>t.id,align:"left",format:t=>""+t,sortable:!0},{name:"Plate No.",required:!0,label:"Plate No.",field:t=>t.plate_number,align:"left",format:t=>""+t,sortable:!0},{name:"Plate_Image",label:"Plate Image",field:"plate_image",style:"width: 5px"},{name:"Date",label:"Date",field:t=>t.date_time,align:"center",sortable:!0},{name:"Brand",label:"Brand",field:t=>t.brand,align:"center",sortable:!0},{name:"Model",label:"Model",field:t=>t.model,align:"center",sortable:!0},{name:"Color",label:"Color",field:t=>t.color,align:"center",sortable:!0},{name:"Image",label:"Image",field:"image",style:"width: 5px"}]}},components:{popupModal:a("47af").default},mounted(){this.pagination=this.paginationRename},methods:o()(o()({},Object(r["b"])("lpr",["setPagination"])),{},{setCarousel(t){this.activeCarousel=t,this.carousel=!0},onRequest(t){console.log("table triggered",t);const{page:e,rowsPerPage:a,sortBy:i,descending:s}=t.pagination;this.setPagination({page:e,limit:a}),this.pagination=t.pagination},exportTable(){const t=[this.columns.map(t=>c(t.label))].concat(this.lprData.map(t=>this.columns.map(e=>c("function"===typeof e.field?e.field(t):t[void 0===e.field?e.name:e.field],e.format)).join(","))).join("\r\n"),e=Object(l["a"])("table-export.csv",t,"text/csv");!0!==e&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}),computed:o()(o()({},Object(r["c"])("lpr",["sortedTransits","paginationRename"])),{},{lprData(){return this.sortedTransits}})},u=d,p=a("2877"),m=a("eaac"),g=a("9c40"),f=a("bd08"),h=a("357e"),b=a("db86"),v=a("cb32"),_=a("24e8"),C=a("eebe"),D=a.n(C),w=Object(p["a"])(u,i,s,!1,null,null,null);e["default"]=w.exports;D()(w,"components",{QTable:m["a"],QBtn:g["a"],QTr:f["a"],QTh:h["a"],QTd:b["a"],QAvatar:v["a"],QDialog:_["a"]})}}]);