const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        edata: "25.6",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    exit: function() {
        wx.showModal({
            title: '确定退出',
            content: '',
            confirmColor: "#5397FF",
            success: function(res) {
                if (res.confirm) {
                    console.log(6)
                    wx.reLaunch({
                        url: '/pages/register/register',
                    })
                }
            }
        })
    },

    clean: function(res) {
        var dat = this.data.edata
        var that=this
        wx.showModal({
            title: '提示',
            content: 'app现有系统缓存' + this.data.edata + 'MB,是否立即进入清除？',
            cancelColor: "#5397FF",
            confirmColor: "#5397FF",
            success: function(res) {
                if (res.confirm) {
                    setTimeout(function(){
                        wx.showToast({
                            title: '清除缓存成功',
                        })
                        console.log(dat)
                        that.setData({
                            edata: "0.0",
                        })
                    },1000)                
                }
            }
        })
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

    }
})