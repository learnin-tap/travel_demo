// pages/userCenter/about/about.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        introduce1: "顷遥是一款年轻人的社交旅行APP，是一个淘宝式的C2C社交旅行平台，一方面土著达人和土著地陪可根据客户需求提供行程定制，车辆,线路，景点，票务等，以及介绍当地民俗文化，美食美景的一站式旅游服务，让客户的旅途更加丰满。另一方面土著达人无论职业、年龄、性别，只要了解当地生活，热爱旅行、社交，能够分享自己的业余时间、技能、爱好、资源给游客，提供当地特色体验、包车、民宿、地陪、等服务，完全自主定价，既交朋友又赚钱。",
        introduce2:"服务是旅游的生命线，我们希望我们的平台能真正改变现在人们旅行出游的方式，旅行不是暂住在千篇一律的房子里，不是排着长队在等候景点参观，不是一种“独在异乡为异客”的感觉。我们用心阐述旅行的意义，旅行应该在于生活一包括食住行娱， 包括当地文化，包括交朋识友，不管走多远，都会有一种家的归属感。",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    click:function(){
        wx.previewImage({
            current:"/images/1.png",
            urls: ["https://s2.ax1x.com/2020/02/08/1RBI4x.jpg"],
        })
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

    }
})