// pages/userCenter/binding/binding.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    phone:function(){
        wx.showToast({
            title: '您刚绑定手机号,请稍后再来',
            icon:'none',
        })
    },

    email:function(){
        wx.showToast({
            title: '系统繁忙，,请稍后再试',
            icon: 'none',
        })
    },

    fix: function () {
        wx.showToast({
            title: '您不久前注册账号,请过段时间再试',
            icon: 'none',
        })
    },
    sina: function () {
        wx.showToast({
            title: '请先安装新浪微博客户端',
            icon: 'none',
        })
    },

    wechat: function () {
        wx.showToast({
            title: '您的微信客户端版本过低，请先升级',
            icon: 'none',
        })
    },



    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },
  

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})