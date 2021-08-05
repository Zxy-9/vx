// pages/time/time.js
const util = require('../../utils/util.js')


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
    ifHidden:false,
    rate:'',
    timeStr:'05:00',
    mTime:300000,
    okShow:false,
    pauseShow:true,
    continueCancleShow:false,
    timer:null

    
    
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
  //开始专注
  start(){
this.setData({
  ifHidden:true,
  mTime:this.data.remindrTime*60*1000,
  timeStr:parseInt(this.data.remindrTime)>=10 ? this.data.time+ ':00' : '0'+ this.data.remindrTime + ':00'

})
this.drawBg()
this.drawActive()
  },
  drawBg(){
    var lineWidth = 6 / this.data.rate
    console.log(lineWidth)
    var ctx =wx.createCanvasContext('progress_bg')
    ctx.setLineWidth(lineWidth)
    ctx.setStrokeStyle('#000000')
    ctx.setLineCap('round')
    ctx.beginPath()
    ctx.arc(400/this.data.rate/2,400/this.data.rate/2,400/this.data.rate/2 - lineWidth,0,2*Math.PI,false)
    ctx.stroke()
    ctx.draw()  


  },

  drawActive(){
    var _this= this

 var dingshiqi =   setInterval(function(){
var angle=1.5 + 2*(_this.data.remindrTime*60*1000-_this.data.mTime)/(_this.data.remindrTime*60*1000)
var currentTime = _this.data.mTime - 100
_this.setData({
  mTime:currentTime
})

if(angle<3.5){
  if(currentTime%1000 == 0){
      var timeStr1 = currentTime / 1000;       //秒钟
      var timeStr2 = parseInt(timeStr1 / 60)  //分钟
      var timeStr3 = (timeStr1 - timeStr2 * 60)>=10 ? (timeStr1 - timeStr2 * 60):'0' + (timeStr1 - timeStr2 * 60)
      var timeStr2 = timeStr2 >= 10? timeStr2 :   '0'+timeStr2


      _this.setData({
        timeStr:timeStr2 + ':' + timeStr3
      })      
  }
  var lineWidth = 6 / _this.data.rate
    console.log(lineWidth)
    var ctx =wx.createCanvasContext('progress_active')
    ctx.setLineWidth(lineWidth)
    ctx.setStrokeStyle('#f1f1f1')
    ctx.setLineCap('round')
    ctx.beginPath()
    ctx.arc(400/_this.data.rate/2,400/_this.data.rate/2,400/_this.data.rate/2 - lineWidth,1.5*Math.PI,angle*Math.PI,false)
    ctx.stroke()
    ctx.draw() 
}else{
 
  var logs = wx.getStorageSync('logs') || [];
  logs.unshift({
    date:util.formatTime(new Date),
    cate:_this.data.cateActive,
    time:_this.data.time
  });
  wx.setStorageSync('logs', logs)


clearInterval(dingshiqi)
_this.setData({
  timeStr:'00:00',
  okShow:true,
  pauseShow:false,
  continueCancleShow:false

})
}

    },100)


   _this.setData({
     timer:dingshiqi
   })


  },

  pause(){
   clearInterval(this.data.timer)

   this.setData({
    pauseShow:false,
    continueCancleShow:true,
    okShow:false
   })
   

  },
  continue(){
    this.drawActive()
    this.setData({
      pauseShow:true,
      continueCancleShow:false,
      okShow:false
    })
  },
  cancle(){
    clearInterval(this.data.timer)
    this.setData({
      pauseShow:true,
      continueCancleShow:false,
      okShow:false,
      ifHidden:false
      
    })
  },
  ok(){
    clearInterval(this.data.timer)

    this.setData({
      pauseShow:true,
      continueCancleShow:false,
      okShow:false,
      ifHidden:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        let res= wx.getSystemInfoSync();
        let width = res.windowWidth
        var rate = 750/width
        console.log(rate)
        this.setData({
          rate:rate
        })
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