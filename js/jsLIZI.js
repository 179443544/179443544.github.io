//左滑删除
// moveList:[],
// startX:0,
// startY:0
// onLoad: function (options) {

// },
// act(e){

//   this.setData({
//     show : e.currentTarget.dataset.id
//   })
// },


// /**
//  * 生命周期函数--监听页面显示
//  */
// onShow: function () {

// },

// /**
//  * 生命周期函数--监听页面隐藏
//  */
// onHide: function () {

// },

// /**
//  * 生命周期函数--监听页面卸载
//  */
// onUnload: function () {

// },

// /**
//  * 页面相关事件处理函数--监听用户下拉动作
//  */
// onPullDownRefresh: function () {

// },

// /**
//  * 页面上拉触底事件的处理函数
//  */
// onReachBottom: function () {

// },

// /**
//  * 用户点击右上角分享
//  */
// onShareAppMessage: function () {

// },
// del(){
//   wx.showToast({
//     title: '删除',
//   })
// },
// touchstart(e){
//   const pageX=e.changedTouches[0].pageX
//   const pageY=e.changedTouches[0].pageY;

//   this.data.moveList.forEach((item,index)=>{
//      if(item.isView){
//       item.isView=false
//      }
//   })
//   this.setData({
//       startX:pageX,
//       startY:pageY,
//       moveList:this.data.moveList
//   })
// },

// touchmove(e){
//   const pageX=e.changedTouches[0].pageX;
//   const pageY=e.changedTouches[0].pageY;
//   const startX=this.data.startX;
//   const startY=this.data.startY;
//   const that=this

//  const angle=this.angle({X:startX,Y:startY},{X:pageX,Y:pageY})

//   const index=e.currentTarget.dataset.index
//   this.data.moveList.forEach((item,i)=>{

//       if(Math.abs(angle>30)){
//       return
//       }
//       if(i==index){
//           if(that.data.startX<pageX){
//               item.isView=false
//           }else{
            
//               item.isView=true
//           }
//       }
//   })  
//   this.setData({
//       moveList:this.data.moveList
//   })      
// },

//   onReady: function () {
//       let moveList=[]
//       for(let i=0;i<5;i++){
//           this.data.moveList.push({
//               text:'110.5',
//               text1:'26日 08:39',
//               isView:false,
//               id:i
//           })
//           this.setData({
//               moveList:moveList
//           })
//       }
//   },

//   angle:function(start,end){
//     var _X=start.X-end.X;
//     var _Y=start.Y-end.Y;
//   return 360*Math.atan(_Y/_X)/(2*Math.PI)
//   },
// })
//左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除左滑删除