
const app = getApp()
const util = require('../../utils/util.js')
// pages/statist/satatist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sum:[
      {
        title:'今日番茄次数',
        val:'0'
      },
      {
        title:'累计番茄次数',
        val:'0'
      },
      {
        title:'今日专注时长',
        val:'0'+'分钟'
      },
      {
        title:'累计专注时长',
        val:'0'+'分钟'
      }
    ]

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