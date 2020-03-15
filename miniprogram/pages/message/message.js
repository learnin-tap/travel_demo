const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
     
    },

    question(){
        wx.navigateTo({
            url: '/pages/message/question/question',
        })
    },

    system(){
        wx.navigateTo({
            url: '/pages/message/system/system',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
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