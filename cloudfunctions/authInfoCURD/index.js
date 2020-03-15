// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async(event, context) => {
    const wxContext = cloud.getWXContext()
    if (event.type === 'add') {
        const addResult = await db.collection('authInfo').add({
            data: {
                openId: wxContext.OPENID,
                authInfo: event.authInfo
            }
        })
        return addResult
    }
    if (event.type === 'update') {
        return new Promise((resolve,reject) => {
            db.collection('userList').doc('_id').update({
                data: {
                    isAuth: true
                }
            })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                console.log(err)
            })
    })
}
}