const mta = require('../../vendor/mta_analysis.js');
const app = getApp();
const config = require('../../config.js');
const db = wx.cloud.database()
const store = db.collection('store');
const userInfo = db.collection('userInfo');

Page({
    /**
     * 页面的初始数据
     */
    data: {
        hidden: true,
        show: false,
        state: false,
        longitude: config.center_longitude,
        latitude: config.center_latitude,
        windowHeight: 600,
        mapSubKey: config.mapSubKey,
        hideMe: true,
        showAdmin: false,
        userInfo: {},
        region: ['福建省', '厦门市', '海沧区'],
        temp: '多云  1℃',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this
        that.setData({
            show: true,
            hidden: false,
        })

        setTimeout(function () {
            that.setData({
                hidden: true,
                show: false
            })
        }, 1300)
        mta.Page.init();
        store.get().then(res => {
            let data = res.data;
            // 将 _id 给 id ,确保 marker 事件的正确触发
            data.map(item => {
                item.id = item._id
            });
            this.setData({
                userInfo: wx.getStorageSync('userInfo'),
                stores: res.data,
                windowHeight: app.globalData.windowHeight,
                hideMe: false,
                defaultScale: config.default_scale
            }, () => {
                wx.hideLoading();
                // wx.showToast({
                //   title: '双指缩放可以调整地图可视区域，查看更多江财标志物',
                //   icon: 'none'
                // })
            })
        })
    },


    RegionChange: function(e) {
        let rand = Math.ceil(Math.random() * 9 + 1)
        let temp = this.data.temp
        let state = !this.data.state
        let r_longitude = this.data.longitude
        let r_latitude = this.data.latitude
        
        if (state) {
            r_longitude = 118.10922
            r_latitude = 24.49114
        }else{
            r_longitude = 118.09015
            r_latitude = 24.44212
        }
        switch (rand) {
            case 1:
                temp = "小雨 12℃";
                break;
            case 2:
                temp = "晴  16℃";
                break;
            case 3:
                temp = "阵雨  3℃ ";
                break;
            case 4:
                temp = "多云转晴  19℃ ";
                break;
            case 5:
                temp = "阴转小雨  7℃ ";
                break;
            case 6:
                temp = "小雪  4℃ ";
                break;
            case 7:
                temp = "晴   21℃ ";
                break;
            case 8:
                temp = "晴转多云 19℃ ";
                break;
            case 9:
                temp = "雨夹雪  13℃ ";
                break;
            case 10:
                temp = "大雨  14℃";
                break;
            default:
                temp = "雷阵雨  7℃";
                break;

        }

        this.setData({
            region: e.detail.value,
            temp: temp,
            state: state,
            longitude: r_longitude,
            latitude: r_latitude
        })
    },

    /*点击地图中标志物时触发跳转至标志物详情页 */
    onMarkerTap: function(e) {
        console.log('a')
                wx.navigateTo({
            url: '../info/info?id=' + e.markerId,
        })
    },

    avatar:function(e){
        wx.navigateTo({
            url: '../userCenter/personal/personal',
        })
    },
    onLocal:function(e){
        wx.reLaunch({
            url: '/pages/divide/divide',
        })
    },

    search: function() {
        wx.navigateTo({
            url: '../search/search',
        })
    },

    onActivateSearch:function(){
        // console.log(0)
        wx.navigateTo({
            url: '/pages/activateSearch/activateSearch',
        })
    }
})