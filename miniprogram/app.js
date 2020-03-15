const mta = require('vendor/mta_analysis.js');
const config = require('config.js');
App({
    systemInfo: null,
    onLaunch: function (options) {
        /**
         * 初始化 MTA  检测
         */
        mta.App.init({
            "appID": config.mtaAppID,
            "eventID": config.mtaEventID,
            "statShareApp": true,
            "statReachBottom": true,
            "lauchOpts": options,
        });

        const self = this
        wx.getSystemInfo({
                success: e => {
                    self.systemInfo = e

                    this.globalData.StatusBar = e.statusBarHeight;
                    let custom = wx.getMenuButtonBoundingClientRect();
                    this.globalData.Custom = custom;
                    this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
                }
            }),
            wx.cloud.init({
            env: 'jxufe-utf5u',
                traceUser: true
            })
        if (wx.getStorageSync("userInfo")) {
            this.globalData.isAuth = wx.getStorageSync("userInfo").isAuth
        }
    },
    globalData: {
        sheng:'福建',
        shi:'厦门市',
        userInfo: null,
        isAuth: false,
        ColorList: [{
                title: '嫣红',
                name: 'red',
                color: '#e54d42'
            },
            {
                title: '桔橙',
                name: 'orange',
                color: '#f37b1d'
            },
            {
                title: '明黄',
                name: 'yellow',
                color: '#fbbd08'
            },
            {
                title: '橄榄',
                name: 'olive',
                color: '#8dc63f'
            },
            {
                title: '森绿',
                name: 'green',
                color: '#39b54a'
            },
            {
                title: '天青',
                name: 'cyan',
                color: '#1cbbb4'
            },
            {
                title: '海蓝',
                name: 'blue',
                color: '#5397ff'
            },
            {
                title: '天蓝',
                name: 'skyBlue',
                color: '#5397ff'
            },
            {
                title: '姹紫',
                name: 'purple',
                color: '#6739b6'
            },
            {
                title: '木槿',
                name: 'mauve',
                color: '#9c26b0'
            },
            {
                title: '桃粉',
                name: 'pink',
                color: '#e03997'
            },
            {
                title: '棕褐',
                name: 'brown',
                color: '#a5673f'
            },
            {
                title: '玄灰',
                name: 'grey',
                color: '#8799a3'
            },
            {
                title: '草灰',
                name: 'gray',
                color: '#aaaaaa'
            },
            {
                title: '墨黑',
                name: 'black',
                color: '#333333'
            },
            {
                title: '雅白',
                name: 'white',
                color: '#ffffff'
            },
        ]
    }
})