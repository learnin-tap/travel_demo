// pages/lanuch/yuePai/yuePai.js
var that
var util = require('../../../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        loading: false,
        title: '发布',
        disabled: true,
        imgList: [],
        max: 200,
        currentNumber: 0,
        files: [],
        maximage: 3,
        region: ['福建省', '厦门市', '海沧区'],
        require: '暂无',
        price: '1.2k-1.5k',
        requirePicker: ['需要达人陪同', '需要地陪陪同', '需要自驾', '>=18周岁'],
        pricePicker: ['<100元', '100元-500元', '500元-2k', '2k-5k','5000-2w','>2w'],
        areaPicker: ['昆明丽江', '巴厘岛', '日光岩', '椰风寨', '厦门大学', '曾厝垵', '同安孔庙', '筼筜湖', '下罗皇家财经学院一日游','地点待定',],
        cameraArea: '鼓浪屿',
        isShow: '',
        explain: '',
        tagList: [],
        checkbox: [{
            value: 0,
            name: '毕业旅行',
            checked: false,
            hot: true,
        }, {
            value: 1,
            name: '踏青',
            checked: false,
            hot: false,
        }, {
            value: 2,
            name: '美食特产',
            checked: false,
            hot: false,
        }, {
            value: 3,
            name: '丽江古城',
            checked: false,
            hot: true,
        }, {
            value: 4,
            name: '旅拍',
            checked: false,
            hot: true,
        }, {
            value: 5,
            name: '穷游党',
            checked: false,
            hot: false,
        }, {
            value: 6,
            name: '自驾游',
            checked: false,
            hot: true,
        },
        {
            value: 7,
            name: '徒步行',
            checked: false,
            hot: false,
        },
        {
            value: 8,
            name: '农家乐',
            checked: false,
            hot: false,
        }, {
            value: 9,
            name: 'culture',
            checked: false,
            hot: true,
        }
        ],
        autoCheck: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        that = this
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    chooseImage: function (e) {
        that = this;
        if (that.data.files.length >= that.data.maximage) return;
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                that.setData({
                    files: that.data.files.concat(res.tempFilePaths)
                });
                console.log(that.data.files)
            }
        })
    },
    previewImage: function (e) {
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.files // 需要预览的图片http链接列表
        })
    },
    DelImg: function (e) {
        this.data.files.splice(e.currentTarget.dataset.index, 1);
        this.setData({
            files: this.data.files
        })
    },
    requirePickerChange(e) {
        that.setData({
            require: that.data.requirePicker[e.detail.value]
        })
    },
    RegionChange: function (e) {
        that.setData({
            region: e.detail.value
        })
    },
    pricePickerChange: function (e) {
        that.setData({
            price: that.data.pricePicker[e.detail.value]
        })
    },
    areaPickerChange: function (e) {
        that.setData({
            cameraArea: that.data.areaPicker[e.detail.value]
        })
    },
    openTagList: function (e) {
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
    getExplain: function (e) {
        that.setData({
            explain: e.detail.value
        })
    },
    selected: function (e) {
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
    },
    launch: function (e) {

        if (that.data.files.length == 0) {
            wx.showToast({
                title: '请先添加示例照片',
                icon: 'none',
                duration: 1000
            })
        } else {
            that.setData({
                autoCheck: true,
                loading: true,
                title: '发布中'
            })
            let userInfo = wx.getStorageSync("userInfo")
            let imgList = []
            for (let i = 0; i < that.data.files.length; ++i) {
                const fileName = that.data.files[i];
                const dotPosition = fileName.lastIndexOf('.');
                const extension = fileName.slice(dotPosition);
                const cloudPath = `${Date.now()}-${Math.floor(Math.random(0, 1) * 10000000)}${extension}`;
                wx.cloud.uploadFile({
                    cloudPath,
                    filePath: fileName,
                    success: res => {
                        imgList.push(res.fileID)
                        if (imgList.length == that.data.files.length) {
                            let cameraInfo = {
                                openId: userInfo.openId,
                                avatarUrl: userInfo.avatarUrl,
                                nickName: userInfo.nickName,
                                gender: userInfo.gender,
                                launchTime: util.formatTime(new Date()),
                                province: that.data.region[0],
                                city: that.data.region[1],
                                area: that.data.region[2],
                                price: that.data.price,
                                explain: that.data.explain,
                                imgList: imgList,
                                tagList: that.data.tagList,
                                cameraArea: that.data.cameraArea,
                                getInvite: 0,
                                readNumber: 0,
                            }
                            wx.cloud.callFunction({
                                name: 'yuePaiCURD',
                                data: {
                                    type: 'add',
                                    cameraInfo: cameraInfo
                                },
                                success: res => {
                                    wx.showToast({
                                        title: '发布成功',
                                        icon: 'success',
                                        duration: 1500
                                    })
                                },
                                fail: err => {

                                },
                                complete: res => {
                                    that.setData({
                                        loading: false,
                                        title: '发布',
                                        files: [],
                                        explain: '',
                                        region: ['江西省', '南昌市', '青山湖区'],
                                        require: '暂无',
                                        price: '愿意付费',
                                    })
                                    wx.cloud.callFunction({
                                        name: 'yuePaiCURD',
                                        data: {
                                            type: 'getAll',
                                        },
                                        success: res => {
                                            let ypList = []
                                            for (let i = 0; i < res.result.data.length; ++i) {
                                                ypList.push(res.result.data[i].cameraInfo)
                                            }
                                            wx.setStorageSync('ypList', ypList)
                                            setTimeout(function () {
                                                wx.navigateBack({
                                                    url: '/pages/index'
                                                })
                                            }, 800)
                                        }
                                    })
                                }
                            })
                        }

                    },
                    fail: err => {
                        wx.showToast({
                            title: '图片上传失败',
                            icon: "none",
                            duration: 1500
                        })
                    },
                    complete: res => {
                        wx.redirectTo({
                            url: '/pages/index/index',
                        })
                    }
                })
            }
        }
    },

})