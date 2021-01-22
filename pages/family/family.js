// pages/owner/owner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // idbeforeImg:'',
    // idAfterImg:''
  },
  /**
   * 上传图片
   */
  // chose_pic_before: function (t){
  //   let _this=this,
  //     curPic = t.target;
  //   wx.chooseImage({
  //     sizeType: ['original', 'compressed'],
  //     success(res) {
  //       const tempFilePaths = res.tempFilePaths
  //       console.log(tempFilePaths,)
  //       wx.uploadFile({
  //         // url: app.globalData.site_url+'index.php?s=/api/upload/image&wxapp_id=10001',
  //         filePath: tempFilePaths[0],
  //         name: 'file',
  //         formData: {
  //           'user': 'test'
  //         },
  //         success(res) {
  //           const data = JSON.parse(res.data);
  //           let url = data.image_url;
  //           // if(data.status&&url){
  //           //   _this.setData({
  //           //     mendian_url: app.globalData.site_url + url 
            
  //         }
  //       })
  //     }
  //   })
  // },
  // chose_pic_after(){
  //   let _this=this,
  //   curPic = t.target;
  // wx.chooseImage({
  //   sizeType: ['original', 'compressed'],
  //   success(res) {
  //     const tempFilePaths = res.tempFilePaths
  //     console.log(tempFilePaths,)
  //     wx.uploadFile({
  //       // url: app.globalData.site_url+'index.php?s=/api/upload/image&wxapp_id=10001',
  //       filePath: tempFilePaths[0],
  //       name: 'file',
  //       formData: {
  //         'user': 'test'
  //       },
  //       success(res) {
  //         const data = JSON.parse(res.data);
  //         let url = data.image_url;
  //         // if(data.status&&url){
  //         //   _this.setData({
  //         //     mendian_url: app.globalData.site_url + url 
          
  //       }
  //     })
  //   }
  // })
  // },
  // setData(e){
  //   console.log(e)
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      identity: options.identity
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