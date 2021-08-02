// pages/time/time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uiAdress:[
      {
        name:"运动",
        class:  "iconfont icon-yundong"
      },
      {
        name:"写作",
        class: "iconfont icon-24"
      },
      {
        name:"阅读",
        class:  "iconfont icon-yanjing"
      },
      {
        name:"工作",
        class:"iconfont icon-gongzuotai"
      },
      {
        name:"学习",
        class:  "iconfont icon-books-01"
      },
      {
        name:"思考",
        class: "iconfont icon-idea"
      }
    
    
   
    
    
     
    ],
    remindrTime:5,
    uiActive:'0',
    ifHidden:false

    
    
  },
  listenerSlider(e){
    console.log(e.detail.value);
    let num=e.detail.value
    this.setData({
      remindrTime:num,

    })
  },
  uiAlter(e){
    console.log(e)
    let num=e.currentTarget.dataset.index
    console.log(num)
    this.setData({
      uiActive:num
    })

  },
  start(){
this.setData({
  ifHidden:true
})

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