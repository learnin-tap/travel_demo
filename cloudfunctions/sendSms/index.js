const cloud = require('wx-server-sdk')
cloud.init()
const Sms = require('qcloudsms_js') //引入类库
exports.main = async (event, context) => new Promise((resolve, reject) => {
    let appid = '1400313313' // AppID是短信应用的唯一标识
    let appkey = 'ae05da09feef2143d0eaa311d44db96d' //App Key是用来校验短信发送合法性的密码
    let templateid = '532432' //短信模板id
    let smsSign = '顷遥APP' //你设置的短信签名
    let sender = Sms(appid, appkey).SmsSingleSender()
    sender.sendWithParam(
        86, //中国的区号
        event.phone, //要发送的手机号
        templateid, //短信模板
        [event.code], //要发送的验证码
        smsSign, //签名
        '', '',
        (err, res, resData) => {
            if (err) {
                reject({
                    err
                })
            } else {
                resolve({
                    res: res.req,
                    resData
                })
            }
        }
    )
})