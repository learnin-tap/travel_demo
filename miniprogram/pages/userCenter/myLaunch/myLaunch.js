// miniprogram/pages/userCenter/myLaunch/myLaunch.js
let that
let detail = ''
Page({

    data: {
        TabCur: 0,
        scrollLeft: 0
    },
    tabSelect(e) {
        let that = this
        wx.showLoading({
            title: '加载订单中~',
        })
        that.setData({
            detail: 666,
            TabCur: e.currentTarget.dataset.id,
            scrollLeft: (e.currentTarget.dataset.id - 1) * 60
        })
        setTimeout(function() {
            wx.hideLoading()
        }, 1000)

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that=this
        wx.showLoading({
            title: '数据加载中',
        })
        setTimeout(function() {
            that.setData({
                detail: 666
            })
            wx.hideLoading()
            wx.showToast({
                title: ' ˚‧º·(˚ ˃̣̣̥᷄⌓˂̣̣̥᷅ )‧º·˚ 空空如也',
                icon: 'none'
            })
        }, 1000)


    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

})