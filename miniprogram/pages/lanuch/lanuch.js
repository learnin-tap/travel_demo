// pages/lanuch/lanuch.js
var that;
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {

        list: [{
                title: '精选游记',
                src: 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/launch/activity.png',
                time: 0.5,
                url: '/pages/lanuch/daily/daily'
            },
            {
                title: '旅者攻略',
                src: 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/launch/camera.png',
                time: 1.0,
                url: '/pages/lanuch/work/work'
            },
            {
                title: '一键约玩',
                src: 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/launch/work.png',
                time: 1.5,
                url: '/pages/lanuch/work/work'
            },
            {
                title: '旅者云游',
                src: 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/launch/1.png',
                time: 2.0,
                url: '/pages/lanuch/yuePai/yuePai'
            }
        ],
        toggleDelay: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        that = this;
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        that.setData({
            toggleDelay: true
        })
        setTimeout(function() {
            that.setData({
                toggleDelay: false
            })
        }, 2000)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

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

    openLaunch: function(e) {
        let item = e.currentTarget.dataset.item
        if (item.title === '一键约玩') {
            wx.showModal({
                title: '提示',
                content: '您还不是顷遥会员或者会员已过期，暂无体验权限',
                // cancelColor: "#5397FF",
                confirmColor: "#438EFE",
                confirmText: '前往充值',
                success: function(res) {

                    if (res.confirm) {
                        wx.showLoading({
                            title: '',
                        })
                        setTimeout(function() {
                            wx.navigateTo({
                                url: '/pages/userCenter/club/clubDetail',
                            })
                        }, 1500)
                        setTimeout(function() {
                            wx.hideLoading()
                        }, 1500)
                    }
                }
            })
            // wx.showToast({
            //     title: '您可能未实名认证或者非顷遥会员，暂无体验权限',
            //     icon: 'none',
            //     duration: 2000
            // })
        } else {
            // if (!app.globalData.isAuth) {
            //   wx.showModal({
            //     title: '权限提示',
            //     content: '请先完成实名认证',
            //     showCancel: true,
            //     cancelText: '取消',
            //     confirmText: '去认证',
            //     confirmColor: '#5397ff',
            //     success: function(res) {
            //       if (res.confirm) {
            //         wx.redirectTo({
            //           url: '/pages/userCenter/authenticationCenter/authenticationCenter',
            //         })
            //       } else {

            //       }
            //     }
            //   })
            // }else{
            //   wx.navigateTo({
            //     url: item.url
            //   })
            // }
            wx.navigateTo({
                url: item.url
            })
        }

    }
})