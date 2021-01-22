// index.js
// 获取应用实例
const app = getApp()

// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    indicatorDots: true,
    indicatorActiveColor: "white",
    swiperImg:["../../images/timg.jpg","../../images/gonggao.jpg"],
    grid:[
      {
        url:"icon-shuifeiguanli",
        text:"水费"
      },
      {
        url:"icon-dianfeifuwu",
        text:"电费"
      },
      {
        url:"icon-icon_tingchejiaofei-copy",
        text:"停车费"
      },
      {
        url:"icon-baoxiu",
        text:"物业报修"
      },
      {
        url:"icon-fuli",
        text:"业主福利"
      },
      {
        url:"icon-qiandao",
        text:"签到积分"
      },
      {
        url:"icon-fuwu",
        text:"便民服务"
      },
      {
        url:"icon-19",
        text:"更多"
      },
    ],
    classification:[
      {
        icon:"icon-wuyefeiyongchuzhang",
        text:"物业缴费",
        url:"../houselist/houselist"
      },
      {
        icon:"icon-gonggao",
        text:"社区公告",
        url:"../announcement/announcement"
      },
      {
        icon:"icon-yuechi",
        text:"智能开锁",
        url:"../announcement/announcement"
      },
      {
        icon:"icon-fangkeshuxing",
        text:"访客通行",
        url:"../announcement/announcement"
      }
    ]
  },
  goLogin(){
    wx.navigateTo({
      url: '../login/login',
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
