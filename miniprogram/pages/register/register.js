var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let phone = ''
let rand_code = ''
let message_code = ''
let code=''
Page({

    /**
     * 页面的初始数据
     */
    data: {
        code_id: "获取验证码",
        time: 60,
        selected: true,
        selected1: false,
        title_code: '',
        title_name: "       账号密码登录",
        btn: "登  录",
        promise: " 顷遥用户注册协议 ",
        assign: " 隐私政策",
    },

    onLoad: function() {

    },
    selected: function(e) {
        this.setData({
            selected1: false,
            selected: true
        })
    },
    selected1: function(e) {
        this.setData({
            selected: false,
            selected1: true
        })
    },

    //获取随机验证码，n代表几位
    generateMixed(n) {
        var res = "";
        for (var i = 0; i < n; i++) {
            var id = Math.ceil(Math.random() * 9);
            res += chars[id];
        }
        return res;
    },

    go(){
        wx.showToast({
            icon:'none',
            title: '输入正确账号后直接登录',
        })
    },

    goto(){
        wx.showToast({
            title: '正在登录中',
            icon: 'loading',
        })
        setTimeout(function () {
            wx.switchTab({
                url: '/pages/index/index',
            })
        }, 2000)
       
    },

    //调用云函数发送短信
    sendSMS() {
        let that = this
        if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
            wx.showToast({
                icon: 'none',
                title: '请输入11位手机号',
            })
            return
        }
        // if (phone.length != 11) {
        //     wx.showToast({
        //         icon: 'none',
        //         title: '请输入11位手机号',
        //     })
        //     return
        // } 
        else {
            that.data.Time = setInterval(() => {
                that.setData({
                    code_id: --that.data.time + " s"
                })
                if (that.data.time <= 0) {
                    clearInterval(that.data.Time)
                    that.setData({
                        code_id: "输入验证码"
                    })
                }
            }, 1000)
            let code = this.generateMixed(6)
            rand_code = code
            console.log('本地生成的验证码', code, rand_code)
            if (that.data.code_id == '获取验证码') {
                console.log(0)
                wx.cloud.callFunction({
                    name: "sendSms",
                    data: {
                        phone: phone,
                        code: code //生成6位的验证码
                    }
                }).then(res => {

                    console.log('发送成功', res)
                }).catch(res => {
                    console.log('发送失败', res)
                })
            }
        }
    },

    //获取要发送的手机号
    getPhone(event) {
        console.log(event.detail.value)
        phone = event.detail.value
        this.setData({
            phone,
        })
    },

    getCode(event) {
        console.log(event.detail.value)
        message_code = event.detail.value
        this.setData({
            message_code,
        })
    },

    think(e) {
        if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
            wx.showToast({
                icon: 'none',
                title: '请检查手机号的输入',
            })
            return
        }
        if (rand_code == message_code) {
            wx.reLaunch({
                url: '/pages/index/index',
            })
        } else {
            wx.showToast({
                icon: 'none',
                title: '验证码错误',
            })
        }
    },

    getIt(event){
        console.log(event.detail.value)
        code = event.detail.value
        this.setData({
            code,
        })
    },

    think_2(e) {
        let that=this
        if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(that.data.title_code)) && !(/^[\w\-]+@[a-zA-Z\d\-]+(\.[a-zA-Z]{2,8}){1,2}$/ig.test(that.data.title_code)) ) {
            wx.showToast({
                icon: 'none',
                title: '账号输入不正确',
            })
            return
        }
        if(code==''){
            wx.showToast({
                icon: 'none',
                title: '密码输入不正确',
            })
            return
        }
        if (rand_code == message_code) {
            wx.reLaunch({
                url: '/pages/index/index',
            })
        } else {
            wx.showToast({
                icon: 'none',
                title: '验证码错误',
            })
        }
    },

    promise(e){
        wx.navigateTo({
            url: '/pages/promise/promise',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    },

    assign(e){
        wx.navigateTo({
            url: '/pages/assign/assign',
        })
    },

    getTitle(event) {
        var that = this
        that.data.title_code = event.detail.value
        that.setData({
            title_code: event.detail.value
        })
        event.detail.value = that.data.title_code
        console.log(that.data.title_code)
    },

    // onShow(){

    // },

    onClearTap(event) {
        console.log("点到了")
        let that=this
        this.setData({
            title_code : ''
        })
  },


})