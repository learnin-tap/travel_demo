const db = wx.cloud.database();
const _ = db.command
const userInfo = db.collection('userInfo');
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

var that
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ["图文攻略", "视频攻略"],
        activeIndex: 0,
        avatarUrl: '',
        username: '',
        brick_option: {
            defaultExpandStatus: false,
            backgroundColor: '',
            forceRepaint: true
        },
        messageCount: 0,
        clickCount: 0, //点击次数
        dataSet: [{
                id: '1',
                content: '厦门环岛路是一条海滨公路，全长43公里，绿化带为游客提供了沿着美丽海岸骑自行车的完美场所。环岛路的最佳部分从厦门大学的白城海滩到厦门国际会展中心，从南到东的环形公路10公里。可以租一辆自行车或者双人车来骑行10公里的岛环约2小时。还可以参观一些有趣的景点，如胡里山炮台。',
                backgroundColor: '#E67E22',
                time: 1581106010,
                likedCount: 100,
                liked: false,
                images: [
                    'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/厦门环岛路.jpg',
                    'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/厦门环岛路3.jpg',
                ],
                user: {
                    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/G0gFFhboeNibJZS3jVsT1VGw4JbXGZb5ibYrCiaLbGNrYKJA62IPicNOsUmGOicKa6z61XdZCFl2KVSRN7oJ4BicuibZQ/132',
                    name: 'Minya Chan',
                    userId: '1'
                }
            }, {
                id: '2',
                content: '每个城市都有一条主打当地美食的商业街，北京的王府井、成都的宽窄巷子、武汉的户部巷…重庆的磁器口古镇也是这样的存在。经过改造、翻新的磁器口古镇拥有数量众多的美食店、手工艺品。磁器口古镇大部分时间人流拥挤嘈杂，但深入其中或是转入旁边的小巷中，会探索到它清静、古色古香的一面；除了古老蜿蜒的石板路阶梯，老一辈重庆人的真实生活也展现在眼前；这里也不乏现代化的小清新店铺，走累了可以找一家临江的茶馆，感受重庆人的悠闲生活。',
                backgroundColor: '#2980B9',
                time: 1580106010,
                likedCount: 87,
                liked: false,
                user: {
                    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/7F6kq8NdQLvE0VLYn61ibB1rEXHPDfUeVHUU6jmnSfgeP7SuiaN9ammsIU1L3nVG0GbShomRmDhIeVtX8JXyvdJQ/132',
                    name: 'Minya Chan',
                    userId: '2'
                }
            }, {
                id: '3',
                content: '中国最美高校之一——厦大之旅，预约进入~',
                backgroundColor: '#AF7AC5',
                time: 1580006010,
                likedCount: 99,
                liked: false,
                images: [
                    'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/厦门大学.jpg',
                    'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/厦门大学2.jpg',
                    'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/厦门大学3.jpg'
                ],
                user: {
                    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/KRpDw2uu5G9NMwSdickicicQQU337HWaxUAYHfK71MVnpibnPxNLKjsIllKSA9nI01FyHTJnlicbXB3jH5Kg7Q8ciaXQ/132',
                    name: 'Minya Chan',
                    userId: '3'
                }
            }, {
                id: '4',
                content: '筼筜湖就像一条明如玻璃的轻飘带，几乎横贯了整个厦门，而湖中央的小岛则像一颗闪闪发光的明珠，镶嵌在筼筜湖中。白天，一群群白鹭从筼筜湖中心的小岛飞上天空，澄澈的湖水倒映着白鹭那优雅柔美的身姿，以及湖边那高大雄伟的现代化建筑，构成了一幅美丽的水彩画。',
                backgroundColor: '#E74C3C',
                time: 1579996010,
                likedCount: 125,
                liked: false,
                images: [
                    'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/筼筜湖.jpg',
                    'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/筼筜湖2.jpg',
                    'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/筼筜湖3.jpg'
                ],
                user: {
                    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/y3yWFSAAhQNAaRDy3sWdf4rnEPOfh7zP6OmByTnUiazPkdele0w140Q48894uuYmB1Rp9bJJzFkVczKMnyOjMpQ/132',
                    name: 'Minya Chan',
                    userId: '5'
                }
            }, {
                id: '5',
                content: '厦门观音山海滨旅游项目用地位于厦门东部，紧临环岛路，面向厦门东海域，与金门隔海相望，周边有香山、鸡山、观音山、虎仔山等，自然环境良好。其西部为观音山国际商务运营中心，南面靠近国际会展中心、国际会议中心、国际网球中心、国际游艇俱乐部。',
                backgroundColor: '#45B39D',
                time: 1579896010,
                likedCount: 86,
                liked: false,
                images: ['cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/厦门观音山.jpg', 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/厦门观音山2.jpg',
                    'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/筼筜湖3.jpg'
                ],
                user: {
                    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/8F6rkMEFJ2SJNibtEZIaAUKU80Ge9f64PTkm9Gt8GZt5nO5iaakEO8icrZcWGib7W4LxMN8jWfybLuzFF3jo5UdNTg/132',
                    name: 'Minya Chan',
                    userId: '5'
                }
            },
            {
                id: '6',
                content: '椰风寨就是"东环望海"景区中黄厝海滨上的一个点。椰风寨始建于1997年，这里的建筑外型像金字塔，耸立在蓝天碧水之间十分惹眼，与金门岛仅一水之隔的厦门海滨椰风寨风光独特，还有不少稀有的植物，每天都有各地游人来此观光，享受南国海岛的风情。',
                backgroundColor: '#B7950B',
                time: 1579876010,
                likedCount: 94,
                liked: false,
                images: ['cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/椰风寨.jpg', 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/椰风寨2.jpg',
                    'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/椰风寨3.jpg'
                ],
                user: {
                    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ0nxkH4GOseic1Ld6UslGvkKfGUeEa8744nAhDCLic9FpXQL2neSkasMSG0KmPicvoS8WEnyOzlNHJA/132',
                    name: 'Minya Chan',
                    userId: '6'
                }
            },

            {
                id: '7',
                content: '鼓浪屿，是厦门市海岸外的一个没有车子的小岛，面积很小，在中山路附近的厦门岛轮渡码头对面。鼓浪屿面积1.87平方公里，与厦门市隔海相望。有大约2万人，是一个非常受欢迎的旅游目的地。在岛上众多景点中，最吸引人的是日光岩和菽庄花园。鼓浪屿以其海滩和蜿蜒的小巷以及各种建筑而闻名。',
                backgroundColor: '#9B59B6',
                time: 1579676010,
                likedCount: 67,
                liked: false,
                images: ['cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/鼓浪屿.jpg', 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/鼓浪屿2.jpg', 'cloud://jxufe-utf5u.6a78-jxufe-utf5u-1259584938/store-images/鼓浪屿3.jpg'],
                user: {
                    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/7F6kq8NdQLvE0VLYn61ibB1rEXHPDfUeVHUU6jmnSfgeP7SuiaN9ammsIU1L3nVG0Gt5bEUtRXYoJh8pwF9T7SuQ/132',
                    name: 'Minya Chan',
                    userId: '7'
                }
            },
        ],
    },

    go1() {
        console.log(1)
        wx.navigateTo({
            url: '../info/info?id=' + '9QiqNubdo2xciUxKHy9tQmp9fAVTYu6IKgeUzglcPheBQOK4',
        })
    },
    go2() {
        console.log(2)
        wx.navigateTo({
            url: '../info/info?id=' + 'lPNyXxw8USb9AgvNTbLsCZXVElQ5Ftgs8lfQH5ALBnV4SCyf',
        })
    },
    go3() {
        console.log(3)
        wx.navigateTo({
            url: '../info/info?id=' + 'JTJ1LhNiQaEnxxFiG5QECr8YrqDdSG5fp7puKBdicWp3hPoq',
        })
    },
    go4() {
        console.log(4)
        wx.navigateTo({
            url: '../info/info?id=' + 'jd5VcJtQDkFcJCKPsKA6ZrKQmkFodGfYToCttj0WnZT7wiNF',
        })
    },
    go5() {
        console.log(5)
        wx.navigateTo({
            url: '../info/info?id=' + '3FfAHAVJHQoDfq8SipUQubdUOcTozpPT2QxX9iLf4BOpQj8z',
        })
    },
    go6() {
        console.log(6)
        wx.navigateTo({
            url: '../info/info?id=' + 'gzAchpbCqkzKYZMvnKKu5lt22hxn4wbJrV95nO3ERUSVn5jR',
        })
    },
    go7() {
        console.log(7)
        wx.navigateTo({
            url: '../info/info?id=' + '1GNm0x9cqotcTVLGl9tGWey5vAjDDsT6FRvusCRrMxJo8gVx',
        })
    },
    go8() {
        console.log(8)
        wx.navigateTo({
            url: '../info/info?id=' + 'bXyMtojBa29Hx3HogN6fhQakJHmLOtxVaxgJLRHOoZQg3AYC',
        })
    },
    go9() {
        console.log(9)
        wx.navigateTo({
            url: '../info/info?id=' + 'j56eX8pzbh109bFBMpAwyCPmxH5imPySbMmpvPD6yvs5koDS',
        })
    },
    go10() {
        console.log(10)
        wx.navigateTo({
            url: '../info/info?id=' + 'Ch2edOqSdz6w339JzP2HmAZzAboSPRMJxJoMZiVB80uSCLra',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        })
    },
    tap: function() {
        wx.navigateTo({
            url: '/pages/launch/work/work_detail/index',
        })
    },
    tapCard: function(event) {
        const cardId = event.detail.card_id
        // code here.
        console.log('tap card!')
    },
    handleLike: function(event) {
        let dataSet = that.data.dataSet
        const cardId = event.detail.card_id
        // code here.
        if (dataSet[cardId - 1].liked == false) {
            dataSet[cardId - 1].liked = true,
                dataSet[cardId - 1].likedCount++
        } else if (dataSet[cardId - 1].liked == true) {
            {
                dataSet[cardId - 1].liked = false,
                    dataSet[cardId - 1].likedCount--
            }
        }
        that.setData({
            dataSet,
        })
        console.log('tap like!')
    },
    handleUserEvent: function(event) {
        const userId = event.detail.user_id
        // code here.
        console.log('tap user!')
    },
    handleExpand: function(event) {
        const cardId = event.detail.card_id
        const expandStatus = event.detail.expand_status
        // code here
        console.log("expand call back")
    },
    /**
     * 生命周期函数--监听页面显示
     */
    // onShow: function() {
    //     var that = this;
    //     db.collection('message')
    //         .orderBy('time', 'desc')
    //         .get({
    //             success: function(res) {
    //                 console.log(res.data)
    //                 that.setData({
    //                     dataSet: res.data,
    //                 })

    //             },
    //             fail: function(event) {}
    //         });
    // },

    tabClick: function(e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        })
        if (that.data.activeIndex == 1) {

        }
    },


})