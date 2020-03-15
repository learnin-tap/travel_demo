// pages/divide/divideDetail.js
var that
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        yesSrc: '/images/icons/like.png',
        noSrc: '/images/icons/like@dis.png',
        like: false,
        concern: '+关注',
        count: 665,
        hidden: true,
        show: false,
        sheng: '福建',
        shi: '厦门市',
        currentTab: 0, //预设当前项的值
        searchLogoList: [{
                id: '01',
                txt: '123',
                img: '/images/daren/images.png'
            },
            {
                id: '02',
                txt: '456',
                img: '/images/daren/videos.png'
            },
            {
                id: '03',
                img: '/images/daren/tourist.png'
            },
            {
                id: '04',
                img: '/images/daren/scence.png'
            }
        ]
    },
    information() {
        console.log(0)
        wx.navigateTo({
            url: '/pages/divide/divideDetail/information/index',
        })
    },
    concern() {
        wx.showToast({
            icon: 'none',
            title: '抱歉，您不是顷遥会员，暂无查看权限！',
        })
    },
    server() {
        wx.showToast({
            icon: 'none',
            title: 'ta还未有更多服务',
        })
    },
    question() {
        wx.showToast({
            icon: 'none',
            title: 'ta还未有更多问答',
        })
    },
    question1() {
        wx.showToast({
            icon: 'none',
            title: '系统异常',
        })
    },
    sixin(){
        wx.showToast({
            icon:'none',
            title: '系统异常',
        })
    },
    tap() {
        let concern = this.data.concern
        if (concern == '+关注') {
            this.setData({
                concern: '已关注'
            })
            wx.showToast({
                icon: 'none',
                title: '关注成功',
            })
        } else if (concern == '已关注') {
            this.setData({
                concern: '+关注'
            })
            wx.showToast({
                icon: 'none',
                title: '取消关注',
            })
        }
        console.log(0)
    },
    onLike: function(event) {
        let like = this.data.like
        let count = this.data.count

        count = like ? count - 1 : count + 1
        this.setData({
            count: count,
            like: !like
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        that = this
        that.setData({
            sheng: app.globalData.sheng,
            shi: app.globalData.shi,
            show: true,
            hidden: false,
        })

        setTimeout(function() {
            that.setData({
                hidden: true,
                show: false
            })
        }, 1300)
    },
    selectImage(e) {
        var choose_current = e.target.dataset.current;
        wx.showToast({
            icon: 'none',
            title: '很抱歉，TA还没有对应相册',
        })
        // switch (choose_current){
        //     case 0:wx.showToast({
        //         title: '很抱歉，TA还没有对应相册',
        //     })
        //      break;
        //     case 1: wx.showToast({
        //         title: '很抱歉，TA还没有对应相册',
        //     })
        //     break;
        //     case 2: wx.showToast({
        //         title: '很抱歉，TA还没有对应相册',
        //     })
        //     break;
        //     case 3: wx.showToast({
        //         title: '很抱歉，TA还没有对应相册',
        //     })
        //     break;
        // }
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
     * 导航标签选择1）
     */
    swichNav: function(e) {
        // console.log(e);
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current,
            })
        }
    },
    /**
     * 导航页面显示2）
     */
    swiperChange: function(e) {
        // console.log(e);
        this.setData({
            currentTab: e.detail.current,
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})