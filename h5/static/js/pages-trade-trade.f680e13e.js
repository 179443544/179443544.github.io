(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-trade"],{"5b5f":function(t,i,e){"use strict";var n=e("ac08"),a=e.n(n);a.a},"82d8":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 颜色变量 */\n/* 页面背景色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.p2[data-v-6357004a]{background:#4894ea;width:50%;height:5px;border-radius:5px}.p1[data-v-6357004a]{background:#9e9ea0;width:100%;height:5px;border-radius:5px;width:100%;margin:10px auto 5px auto}',""]),t.exports=i},ac08:function(t,i,e){var n=e("82d8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("4bcbd446",n,!0,{sourceMap:!1,shadowMode:!1})},aff5:function(t,i,e){"use strict";e.r(i);var n=e("cecc"),a=e("cd3c");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("5b5f");var s,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"6357004a",null,!1,n["a"],s);i["default"]=c.exports},be6c:function(t,i,e){"use strict";function n(){uni.showToast({title:"请重新登录",icon:"error",duration:3e3}),uni.removeStorage({key:"x-Auth"}),uni.removeStorage({key:"userinfo"})}function a(){uni.navigateTo({url:"/pages/login/login"})}function r(t){return t}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={LoginError:n,LoginRedic:a,countDownFun:r};i.default=s},cd3c:function(t,i,e){"use strict";e.r(i);var n=e("d382"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},cecc:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var n={uTabsSwiper:e("d13c").default,uPopup:e("9dfb").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticStyle:{"font-size":"40rpx",margin:"20rpx"}},[t._v("交易")]),n("v-uni-view",{staticStyle:{width:"windowWidth",height:"100rpx","background-color":"#eef4ff","border-radius":"10rpx",margin:"20rpx",display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center","padding-left":"20rpx","padding-right":"20rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.gotoWater.apply(void 0,arguments)}}},[n("v-uni-text",[t._v("资金流水")]),n("v-uni-image",{staticStyle:{width:"80rpx",height:"60rpx"},attrs:{src:e("ebaf")}})],1),n("v-uni-view",[n("u-tabs-swiper",{ref:"tabs",attrs:{list:t.tabsList,current:t.current,"is-scroll":!1,"bar-height":"4","bar-width":"40","active-color":"#4172d3","inactive-color":"#9e9e9e"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.tabsChange.apply(void 0,arguments)}}})],1),n("v-uni-swiper",{staticClass:"swiper-group",style:{height:t.swiperContentHeight},attrs:{current:t.swiperCurrent},on:{transition:function(i){arguments[0]=i=t.$handleEvent(i),t.transition.apply(void 0,arguments)},animationfinish:function(i){arguments[0]=i=t.$handleEvent(i),t.animationfinish.apply(void 0,arguments)}}},t._l(t.tabs,(function(i,e){return n("v-uni-swiper-item",{key:e,staticClass:"swiper-item"},[n("v-uni-scroll-view",{staticClass:"scroll-content-container",style:{height:t.scrollerHeight},attrs:{"scroll-y":!0},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.onreachBottom.apply(void 0,arguments)}}},[[n("v-uni-view",{staticStyle:{"background-color":"#f7f7fb",padding:"10rpx 4%"}},[n("v-uni-view",{staticClass:"item-content-row",staticStyle:{"background-color":"#f7f7fb"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openPop.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",[t._v("LINK-USDT(X:LINKUSDT)")]),n("v-uni-text",{staticStyle:{color:"#4172d3","margin-top":"10rpx"}},[t._v("买涨500")])],1),n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticStyle:{color:"#ff0000"}},[t._v("$9.12132")]),n("v-uni-text",{staticStyle:{color:"#4172d3"}},[t._v("倒计时"+t._s(t.a))])],1)],1),n("v-uni-view",{staticClass:"p1"},[n("v-uni-view",{staticClass:"p2",style:{width:t.a1+"%"}})],1)],1),n("v-uni-view",{staticStyle:{"background-color":"#f7f7fb",padding:"10rpx 4%"}},[n("v-uni-view",{staticClass:"item-content-row",staticStyle:{"background-color":"#f7f7fb"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openPop.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",[t._v("LINK-USDT(X:LINKUSDT)")]),n("v-uni-text",{staticStyle:{color:"#4172d3","margin-top":"10rpx"}},[t._v("买涨500")])],1),n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticStyle:{color:"#ff0000"}},[t._v("$9.12132")]),n("v-uni-text",{staticStyle:{color:"#4172d3"}},[t._v("倒计时"+t._s(t.a))])],1)],1),n("v-uni-view",{staticClass:"p1"},[n("v-uni-view",{staticClass:"p2",style:{width:t.a2+"%"}})],1)],1)]],2)],1)})),1),n("u-popup",{attrs:{mode:"bottom","border-radius":"14"},model:{value:t.popShow,callback:function(i){t.popShow=i},expression:"popShow"}},[n("v-uni-view",{staticClass:"content",staticStyle:{padding:"20rpx"}},[n("v-uni-text",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.$t("trade-pop-title")))]),n("v-uni-view",{staticClass:"gray-line",staticStyle:{"margin-top":"20rpx"}}),n("v-uni-view",{staticClass:"item-content-row"},[n("v-uni-text",{staticClass:"list-gray-text",staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("产品名称")]),n("v-uni-text",{staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("USD")])],1),n("v-uni-view",{staticClass:"item-content-row"},[n("v-uni-text",{staticClass:"list-gray-text",staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("产品购入价格")]),n("v-uni-text",{staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("11")])],1),n("v-uni-view",{staticClass:"item-content-row"},[n("v-uni-text",{staticClass:"list-gray-text",staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("产品结算价格")]),n("v-uni-text",{staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("22")])],1),n("v-uni-view",{staticClass:"item-content-row"},[n("v-uni-text",{staticClass:"list-gray-text",staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("方向")]),n("v-uni-text",{staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("11")])],1),n("v-uni-view",{staticClass:"item-content-row"},[n("v-uni-text",{staticClass:"list-gray-text",staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("交易金额")]),n("v-uni-text",{staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("22")])],1),n("v-uni-view",{staticClass:"item-content-row"},[n("v-uni-text",{staticClass:"list-gray-text",staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("类型")]),n("v-uni-text",{staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("22")])],1),n("v-uni-view",{staticClass:"item-content-row"},[n("v-uni-text",{staticClass:"list-gray-text",staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("收益")]),n("v-uni-text",{staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("11")])],1),n("v-uni-view",{staticClass:"item-content-row"},[n("v-uni-text",{staticClass:"list-gray-text",staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("交易时间")]),n("v-uni-text",{staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("22")])],1),n("v-uni-view",{staticClass:"item-content-row"},[n("v-uni-text",{staticClass:"list-gray-text",staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("结算时间")]),n("v-uni-text",{staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("11")])],1),n("v-uni-view",{staticClass:"item-content-row"},[n("v-uni-text",{staticClass:"list-gray-text",staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("盈亏")]),n("v-uni-text",{staticStyle:{margin:"10rpx","font-size":"26rpx"}},[t._v("22")])],1),n("v-uni-text",{staticStyle:{"border-style":"solid",width:"95%",height:"60rpx","background-color":"#ffffff","text-align":"center",color:"#000",margin:"20rpx","padding-top":"10rpx","border-radius":"10rpx","margin-top":"60rpx","padding-bottom":"0rpx","border-color":"#4172d3","border-width":"3rpx"}},[t._v("返回")])],1)],1)],1)},r=[]},d382:function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;n(e("be6c"));var a={data:function(){return{a:60,b:60,a1:0,a2:0,popShow:!1,windowWidth:"",tabsList:[{name:"待结算"},{name:"已结算"}],timer:null,current:0,swiperCurrent:0,scrollerHeight:0,swiperContentHeight:0,tabs:[{name:"菜单1",index:0,dataSet:[11,22,33,44,55]},{name:"菜单2",index:1,dataSet:[111,222,333,444,555]},{name:"菜单3",index:2,dataSet:[1111,2222,3333,4444,5555]}]}},onLoad:function(){uni.getSystemInfo({success:function(t){this.windowWidth=t.windowWidth-100,console.log("ssss==="+this.windowWidth)}}),this.mend(60)},onReady:function(){var t=this;uni.getSystemInfo({success:function(i){var e=i.windowHeight;t.swiperContentHeight=e-158+"px",t.scrollerHeight=e-158-5+"px"}})},beforeDestroye:function(){clearInterval(this.timer)},methods:{mend:function(t){var i=this;this.timer=setInterval((function(){i.a=t--,i.a=t--,i.a1=t/100*100,i.a2=t/100*100,0==t&&(clearInterval(i.timer),i.a=0)}),1e3)},time:function(){},gotoWater:function(){uni.navigateTo({url:"../childpage/flowingwater/flowingwater"})},openPop:function(){this.popShow=!0},tabsChange:function(t){this.swiperCurrent=t},transition:function(t){var i=t.detail.dx;this.$refs.tabs.setDx(i)},animationfinish:function(t){var i=t.detail.current;this.$refs.tabs.setFinishCurrent(i),this.swiperCurrent=i,this.current=i},onreachBottom:function(){}}};i.default=a},ebaf:function(t,i,e){t.exports=e.p+"static/img/trade_logo1.aa943ee7.png"}}]);