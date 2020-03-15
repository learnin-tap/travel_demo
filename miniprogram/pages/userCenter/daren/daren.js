// pages/userCenter/daren/daren.js
var realNname = ''
var authNumber = ''
var locaton = ''
var contact = ''
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    getRealName(e) {
        realNname = e.detail.value

    },
    getAuthNumber(e) {
        authNumber = e.detail.value
    },
    getLocation(e) {
        locaton = e.detail.vaue
    },
    getContact(e) {
        contact = e.detail.value
    },
    submit() {
        var regName = /^[\u4e00-\u9fa5]{2,4}$/
        var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        if (!regName.test(realNname)) {
            wx.showToast({
                title: '请正确输入姓名',
                icon: 'none'
            })
            return
        }

        
        else if (!regIdNo.test(authNumber)) {
            wx.showToast({
                title: '身份证输入错误',
                icon: 'none'
            })
            return
        } 
        else if (locaton=='') {
            wx.showToast({
                title: '请正确输入地址',
                icon: 'none'
            })
            return
        } else if (contact=='') {
            wx.showToast({
                title: '请正确输入联系方式',
                icon: 'none'
            })
            return
        }
        else{
            wx.navigateTo({
                url: '/pages/userCenter/next/next',
            })
        }
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