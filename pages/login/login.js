// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    phoneLoginIsShow:false,
    getCodeIsShow:false,
    secondCode:60,
    codeText:"获取验证码",
    phoneLoginIsDisabled:true,
    height:0,
    top:0
  },
  

  // 事件处理函数
  phoneLogin(){
    this.setData({
      phoneLoginIsShow:true
    })
  },
  close(){
    this.setData({
      phoneLoginIsShow:false
    })
  },
  getCode(){
    var countdown = 60;
    const _this = this;
    var setTime=function(_this){
      if(countdown==0){
        _this.setData({
          getCodeIsShow:false
        })
        countdown = 60;
        return;
      }else{
        countdown--;
        _this.setData({
          getCodeIsShow:true,
          secondCode:countdown
        })
        setTimeout(function () {
          setTime(_this)
        }, 1000)
      }
    }
    setTime(_this);
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
   
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
