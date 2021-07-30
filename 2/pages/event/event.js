// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:["星球大战","加油吧少年","qq炫舞","qq飞车","穿越火线","英雄联盟"],
    currentTab:0,
    num:0,
    classArr:["colorRed"],
    title1:["大战","加油吧","炫舞","飞车","火线","联盟","cs","加油","111"],

  },
  activity(event){
    console.log(event.currentTarget.dataset.index)
 let classActivity=[]
    let num=event.currentTarget.dataset.index

    for(let i=0;i<this.data.title.length;i++){
              if(num==i){
                classActivity.push("colorRed")
              }else{
                classActivity.push("colorBlack")
              }
    }
   // console.log(this.data.title.length)
this.setData({
  currentTab:num,
  classArr:classActivity

}


)

  },
getname(event){
console.log(event)
},
outer(){
  console.log("outer")
},
middle(){
  console.log("middle")
},
inner(){
  console.log("inner")
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})