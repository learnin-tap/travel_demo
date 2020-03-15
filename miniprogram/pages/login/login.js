// pages/login/login.js
var that
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '开启专属陪伴旅行',
    loading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
  },


  getuserinfo: function(e) {
    if(!e.detail.userInfo){
      wx.showToast({
        title: '授权失败',
        icon:'none',
        duration:1500
      })
    }else{
      let userInfo = e.detail.userInfo
      that.setData({
        loading: true
      })
      if (!wx.getStorageSync("userInfo")) {
        wx.setStorageSync("userInfo", userInfo)
        wx.cloud.callFunction({
          name: 'login',
          data: {
            avatarUrl: userInfo.avatarUrl,
            nickName: userInfo.nickName,
            gender: userInfo.gender
          },
          success: res => {
            console.log(res)
            wx.showToast({
              title: '正在进入~',
              icon: 'loading',
            })
            wx.reLaunch({
                url: '/pages/register/register',
            })
            // wx.switchTab({
            //   url: '/pages/index/index',
            // })
          },
          fail: res => {
            wx.showToast({
              title: '授权失败',
              icon: 'none',
              duration: 1500
            })
          }
        })
      } else {
        wx.showToast({
            title: '正在进入~',
          icon: 'loading',
        })
          wx.reLaunch({
              url: '/pages/register/register',
          })
        // wx.switchTab({
        //   url: '/pages/index/index',
        // })
      }
    }
  }
})