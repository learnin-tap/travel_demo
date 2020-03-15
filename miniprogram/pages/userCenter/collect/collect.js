// pages/collect/collect.js
var that

Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
    if(!wx.getStorageSync("collectList") || wx.getStorageSync("collectList").length == 0){
      setTimeout(function () {
        wx.showToast({
          title: '暂无',
          icon: 'none',
          duration: 1500
        })
        wx.navigateBack({
            
        })
      }, 1500)
    }else{
      that.setData({
        collectList:wx.getStorageSync("collectList")
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  openHome: function (e) {
    const item = e.currentTarget.dataset.item
    if (item.openId == wx.getStorageSync('userInfo').openId) {
      wx.navigateTo({
        url: '/pages/userCenter/personal/personal',
      })
    } else {
      wx.navigateTo({
        url: '/pages/homePage/homePage?item=' + JSON.stringify(item),
      })
    }
  },
  openDetail: function (e) {
    let item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: '/pages/index/detail/detail?item=' + JSON.stringify(item),
    })
  },
  previewImage: function (e) {
    var src = e.currentTarget.dataset.src
    var imgList = e.currentTarget.dataset.imagelist
    console.log(src)
    wx.previewImage({
      current: src,
      urls: imgList,
      success: function (res) {
        console.log(res)
      },
      fail: function (error) {

      },
      complete: function (res) {

      },
    })
  },
})