(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{332:function(t,s,e){},384:function(t,s,e){"use strict";var a=e(332);e.n(a).a},417:function(t,s,e){"use strict";e.r(s);e(39),e(20);var a={data:function(){return{deg:6}},methods:{},watch:{},mounted:function(){var t=this,s=setInterval((function(){var e=new Date,a=5*e.getHours()*t.deg,r=e.getMinutes()*t.deg,n=e.getSeconds()*t.deg;t.$refs.hh&&t.$refs.mm&&t.$refs.ss?(t.$refs.hh.style.transform="rotateZ(".concat(a+r/12,"deg)"),t.$refs.mm.style.transform="rotateZ(".concat(r,"deg)"),t.$refs.ss.style.transform="rotateZ(".concat(n,"deg)")):clearInterval(s)}),1e3)}},r=(e(384),e(2)),n=Object(r.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"wrap",attrs:{id:"clock"}},[s("div",{staticClass:"clock"},[s("div",{ref:"hh",staticClass:"hour"}),this._v(" "),s("div",{ref:"mm",staticClass:"min"}),this._v(" "),s("div",{ref:"ss",staticClass:"sec"})])])}),[],!1,null,"67397712",null);s.default=n.exports}}]);