// pages/divide/divide.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var that
var city = ""
var qu = ""
const app = getApp()
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        rand1: 27,
        rand2: 47,
        rand3: 4.8,
        isShow: '', //筛选土著
        tagList: [],
        checkbox: [{
                value: 0,
                name: '男',
                checked: false,
                hot: false,
            }, {
                value: 1,
                name: '女',
                checked: false,
                hot: true,
            }, {
                value: 2,
                name: '不限',
                checked: false,
                hot: false,
            }, {
                value: 3,
                name: '0-300元',
                checked: false,
                hot: false,
            }, {
                value: 4,
                name: '0.3-0.6k',
                checked: false,
                hot: false,
            }, {
                value: 5,
                name: '>0.6k元',
                checked: false,
                hot: false,
            }, {
                value: 6,
                name: '美食',
                checked: false,
                hot: true,
            },
            {
                value: 7,
                name: '多日游',
                checked: false,
                hot: false,
            },
            {
                value: 8,
                name: '旅拍',
                checked: false,
                hot: true,
            }, {
                value: 9,
                name: '接送机',
                checked: false,
                hot: false,
            },
            {
                value: 10,
                name: '民宿',
                checked: false,
                hot: true,
            }
        ],
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        swiperList: [{
                id: 1,
                title: "地陪",
                username: 'Jenny?',
                url: 'https://s1.ax1x.com/2018/07/09/Pm2Cb6.jpg',
                isAdd: false
            }, {
                id: 2,
                title: "达人",
                username: '晴朗',
                url: 'https://pic.qqtn.com/up/2019-8/2019080110275145501.jpg',
                isAdd: false
            }, {
                id: 3,
                title: "地陪",
                username: '邓子',
                url: 'https://i03piccdn.sogoucdn.com/827c13834d41a60c',
                isAdd: false
            }, {
                id: 4,
                title: "达人",
                username: '茫终极摄影嘉',
                url: 'https://i02piccdn.sogoucdn.com/30f757ae74f4966d',
                isAdd: false
            }, {
                id: 5,
                title: "地陪",
                username: 'Bro.夫',
                url: 'https://i03piccdn.sogoucdn.com/6fcd6aec7107f84a',
                isAdd: false
            }, {
                id: 6,
                title: "达人",
                username: '八斤',
                url: 'https://i04piccdn.sogoucdn.com/ee0d24f26a21478a',
                isAdd: false
            }, {
                id: 7,
                title: "地陪",
                username: '小曦',
                url: 'https://i03piccdn.sogoucdn.com/46e5ca13cdc2bdb7',
                isAdd: false
            },
            {
                id: 8,
                title: "达人",
                username: '嘉熙',
                url: 'https://i02piccdn.sogoucdn.com/b71088959f771b8a',
                isAdd: false
            }, {
                id: 9,
                title: "地陪",
                username: '杨晓尘',
                url: 'https://i01piccdn.sogoucdn.com/709ae25046ce8bcb',
                isAdd: false
            },
            {
                id: 10,
                title: "达人",
                username: '鱼三',
                url: 'https://i04piccdn.sogoucdn.com/a2e3128e984acf42',
                isAdd: false
            }
        ],
        local: '厦门',
        qu: '海沧区',
        region: ['福建省', '厦门市', '海沧区'],
        tabs: ["厦门达人", "厦门地陪"],
        activeIndex: 0,
        avatarUrl: '',
        swiperLists: [{
            id: 0,
            type: 'image',
            url: 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/tuzhu/6.png'
        }, {
            id: 1,
            type: 'image',
            url: 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/tuzhu/one.png',
        }, {
            id: 2,
            type: 'image',
            url: 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/tuzhu/two.png'
        }, {
            id: 3,
            type: 'image',
            url: 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/tuzhu/four.png'
        }, {
            id: 4,
            type: 'image',
            url: 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/tuzhu/three.png'
        }],
    },
    /** 
     * 回到顶部功能
     */
    // 获取滚动条当前位置
    onPageScroll: function(e) {
        console.log(e.scrollTop)
        if (e.scrollTop > 1000) {
            console.log(1);
            this.setData({
                ico: "/images/message/top.png",
            })
        } else {
            console.log("没有")
            this.setData({
                ico: "",
            });
        }
    },
    // 一键回到顶部
    goTop: function(e) {
        if (wx.pageScrollTo) {
            wx.pageScrollTo({
                scrollTop: 250
            })
        } else {
            wx.showModal({
                title: '提示',
                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            })
        }
    },
    avatar: function(e) {
        wx.navigateTo({
            url: '../userCenter/personal/personal',
        })
    },
    DotStyle(e) {
        this.setData({
            DotStyle: e.detail.value
        })
    },
    find() {
        wx.navigateTo({
            url: '/pages/activateSearch/activateSearch',
        })
    },
    differ() {
        wx.navigateTo({
            url: '/pages/divide/differ/differ',
        })
    },
    RegionChange: function(e) {
        setTimeout(function() {
            wx.showLoading({
                title: '切换城市中',
            })
        }, 100)
        setTimeout(function() {
            wx.hideLoading()
            wx.showToast({
                icon: 'none',
                title: '切换成功',
            })
            city = e.detail.value[1].slice(0, -1)
            qu = e.detail.value[2]
            location = e.detail.value[2]
            app.globalData.sheng = e.detail.value[0].slice(0, -1)
            app.globalData.shi = e.detail.value[1]
            that.setData({
                region: e.detail.value,
            })
            let maze = [city + "达人", city + "地陪"]
            that.setData({
                tabs: maze,
                local: city,
                qu: qu,
            })
        }, 1500)

    },
    openTagList: function(e) {
        that.setData({
            isShow: 'show'
        })
    },
    hideModal(e) {
        that.setData({
            isShow: ''
        })
    },
    ChooseCheckbox(e) {
        let items = this.data.checkbox;
        let values = e.currentTarget.dataset.value;
        for (let i = 0, lenI = items.length; i < lenI; ++i) {
            if (items[i].value == values) {
                items[i].checked = !items[i].checked;
                break
            }
        }
        this.setData({
            checkbox: items
        })
    },
    selected: function(e) {

        wx.showLoading({
            title: '筛选中',
        })

        setTimeout(function() {
            wx.hideLoading()
            let temp = []
            let items = that.data.checkbox
            for (let i = 0; i < items.length; ++i) {
                if (items[i].checked) {
                    temp.push(items[i].name)
                }
            }
            that.setData({
                tagList: temp,
                isShow: ''
            })
        }, 1200)

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        that = this
        setInterval(function() {
            that.setData({
                rand1: Math.floor(Math.random() * 18 + 18),
                rand2: Math.floor(Math.random() * 120) + 35,
                rand3: (Math.random() / 3.0 + 4.7).toFixed(1),
            })
        }, 2800)
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        })
        this.towerSwiper('swiperList');
    },
    guideDetail() {
        wx.navigateTo({
            url: '/pages/divide/divideDetail',
        })
    },
    tabClick: function(e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
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
        // that = this
        // that.setData({
        //     rand1: Math.floor(Math.random() * 18 + 18),
        //     rand2: Math.floor(Math.random() * 120) + 35,
        //     rand3: (Math.random() / 3.0 + 4.7).toFixed(1),
        // })

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
    // towerSwiper
    // 初始化towerSwiper
    towerSwiper(name) {
        let list = this.data[name];
        for (let i = 0; i < list.length; i++) {
            list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
            list[i].mLeft = i - parseInt(list.length / 2)
        }
        this.setData({
            swiperList: list
        })
    },
    // towerSwiper触摸开始
    towerStart(e) {
        this.setData({
            towerStart: e.touches[0].pageX
        })
    },
    // towerSwiper计算方向
    towerMove(e) {
        this.setData({
            direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
        })
    },
    // towerSwiper计算滚动
    towerEnd(e) {
        let direction = this.data.direction;
        let list = this.data.swiperList;
        if (direction == 'right') {
            let mLeft = list[0].mLeft;
            let zIndex = list[0].zIndex;
            for (let i = 1; i < list.length; i++) {
                list[i - 1].mLeft = list[i].mLeft
                list[i - 1].zIndex = list[i].zIndex
            }
            list[list.length - 1].mLeft = mLeft;
            list[list.length - 1].zIndex = zIndex;
            this.setData({
                swiperList: list
            })
        } else {
            let mLeft = list[list.length - 1].mLeft;
            let zIndex = list[list.length - 1].zIndex;
            for (let i = list.length - 1; i > 0; i--) {
                list[i].mLeft = list[i - 1].mLeft
                list[i].zIndex = list[i - 1].zIndex
            }
            list[0].mLeft = mLeft;
            list[0].zIndex = zIndex;
            this.setData({
                swiperList: list
            })
        }
    },
    add: function(e) {
        let index = e.currentTarget.dataset.index
        let isAdd = 'swiperList[' + index + '].isAdd'
        that.setData({
            [isAdd]: !that.data.swiperList[index].isAdd
        })
        if (isAdd) {
            wx.showToast({
                title: '关注成功',
                icon: 'success',
                duration: 1000
            })
        } else {
            wx.showToast({
                title: '已取消关注',
                icon: 'none',
                duration: 1000
            })
        }
    },
    // openHome:function(e){
    //   let item = e.currentTarget.dataset.item
    //   wx.navigateTo({
    //     url: '/pages/homePage/homePage?item=' + item,
    //   })
    // }
    openDetail: function(e) {
        let name = e.currentTarget.dataset.name
        wx.navigateTo({
            url: '/pages/divide/divideDetail?divideName=' + name,
        })
    }
})