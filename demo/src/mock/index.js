import Mock from "mockjs"
import MuenDynamicsList from "./MuenDynamicsList.json"
import PersonalRecentSituation from "./personalDynamicsList.json"
//小礼品数据
let lwqSmallGiftsData = Mock.mock({
    "data|6-8": [
        {
            "src": "@image(110x88,#acf)",
            "name": "@ctitle(2,6)",
            "describe": "@ctitle(6,15)",
            "price|1000-9999": 6666,
            "person|0-520": 31,
            "id": "@id",
            "like|0-100":66,
            "address": "@city(true)",
            "num":1,
        }
    ]
})

//投票数据
let lwqvoteData = Mock.mock({
    "data|10-30": [
        {
            "HeadPortrait": "@image(45x45,#acf)",
            "name": "@ctitle(2,6)",
            "time": "@datetime",
            "checkBox":"多选",
            "id": "@id",
            "question": "@ctitle(6,15)",
            "options|3": [
                {
                    "text":"@ctitle(2,6)",
                    "SpeedProgress|0-100": 10,
                }
            ]
        }
    ]
})

//小礼品数据
Mock.mock("/api/lwqSmallGifts", {
    lwqSmallGiftsData
})

//所有沐恩成员
Mock.mock("/api/numberData",{
    numberData:[
        {
            "img":"http://img0.imgtn.bdimg.com/it/u=2981792485,3160712805&fm=26&gp=0.jpg",
            "name":"王艳",
            "numberMessage":"王艳自我介绍"
        },{
            "img":"http://img0.imgtn.bdimg.com/it/u=2981792485,3160712805&fm=26&gp=0.jpg",
            "name":"王艳",
            "numberMessage":"王艳自我介绍"
        },{
            "img":"http://img0.imgtn.bdimg.com/it/u=2981792485,3160712805&fm=26&gp=0.jpg",
            "name":"王艳",
            "numberMessage":"王艳自我介绍"
        },{
            "img":"http://img0.imgtn.bdimg.com/it/u=2981792485,3160712805&fm=26&gp=0.jpg",
            "name":"王艳",
            "numberMessage":"王艳自我介绍"
        },{
            "img":"http://img0.imgtn.bdimg.com/it/u=2981792485,3160712805&fm=26&gp=0.jpg",
            "name":"王艳",
            "numberMessage":"王艳自我介绍"
        }
    ]
})

//我的页面路由跳转7个
Mock.mock("/api/dcqMineRouterList",{
    dcqMineRouterList:[
        {
            name:"所有沐恩成员~",
            path:"/allnumber"
        },{
            name:"我的小组",
            path:"/myGroup"
        },{
            name:"我的订单",
            path:"/lwqShoppingCart"
        },{
            name:"管理地址",
            path:"/dcqaddress"
        },{
            name:"我的投票",
            path:"/lwqvote"
        },{
            name:"我的动态",
            path:"/personalRecentSituation"
        },{
            name:"设置",
            path:"/minesetting"
        }
    ]
})

//个人信息设置
Mock.mock("/api/dcqMineSetting",{
    personData:[
        {
            title:"头像",
            tips:"",
            imgUrl:"data:image/jpeg;base64,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"
        },{
            title:"姓名",
            tips:"需实名制",
            msgText:"沐恩白牙"
        },{
            title:"电话",
            tips:"",
            msgText:"12345670110"
        },{
            title:"修改密码",
            tips:"",
            msgText:"*******"
        },{
            title:"个性签名",
            tips:"",
            msgText:"沐恩"
        },{
            title:"性别",
            tips:"",
            msgText:"女"
        },{
            title:"生日",
            tips:"",
            msgText:"1995-07-29"
        },{
            title:"地区",
            tips:"",
            msgText:"北京 朝阳"
        }
    ]
})

//首页Footer数据
Mock.mock("/api/dcqFooterData",{
    dcqFooterData:[
        {
            tit:"首页",
            path:"/home",
            iconfonts:"iconhuidaoshouye"
        },{
            tit:"沐恩动态",
            path:"/recentSituationOfMuen",
            iconfonts:"zixun"
        },{
            tit:"主内资料",
            path:"/home",
            iconfonts:"guangpan"
        },{
            tit:"留言板",
            path:"/messageBoard",
            iconfonts:"xiaoxi"
        },{
            tit:"我的",
            path:"/mine",
            iconfonts:"icongerenzhongxin-01"
        }
    ]
})

Mock.mock("/api/dcqHomeGroupData",{
    HomeGroupSituationData:[
        {
            groupName:"祷告小组",
            personName:"Denis Zar",
            subjectAddress:" React JS",
            groupPersonImg:"http://img4.imgtn.bdimg.com/it/u=1046545449,3387777221&fm=26&gp=0.jpg"
        },{
            groupName:"祷告小组",
            personName:"Denis Zar",
            subjectAddress:" React JS",
            groupPersonImg:"http://img4.imgtn.bdimg.com/it/u=1046545449,3387777221&fm=26&gp=0.jpg"
        },{
            groupName:"祷告小组",
            personName:"Denis Zar",
            subjectAddress:" React JS",
            groupPersonImg:"http://img4.imgtn.bdimg.com/it/u=1046545449,3387777221&fm=26&gp=0.jpg"
        }
    ]
})

Mock.mock("/api/dcqHomeData",{
    dcqHomeData:[
        {
            tit:"沐恩近况",
            path:"/recentSituationOfMuen",
            iconfonts:"zixun"
        },{
            tit:"个人近况",
            path:"/personalRecentSituation",
            iconfonts:"yonghu" 
        },{
            tit:"代祷列表",
            path:"/suffrage",
            iconfonts:"wenjian"
        },{
            tit:"小礼品",
            path:"/lwqSmallGifts",
            iconfonts:"lingsheng"
        },{
            tit:"留言",
            path:"/messageBoard",
            iconfonts:"xiaoxi"
        },{
            tit:"奉献",
            path:"/dedication",
            iconfonts:"zhifu-01"
        },{
            tit:"投票",
            path:"/lwqvote",
            iconfonts:"qiaquan"
        },{
            tit:"小组",
            path:"/myGroups",
            iconfonts:"fenlei-xuanzhong"
        }
    ]
})

//沐恩动态
Mock.mock('/api/muenDynamicsList',{
    MuenDynamicsList:MuenDynamicsList
})

//个人动态
Mock.mock('/api/personalRecentSituation',{
    PersonalRecentSituation:PersonalRecentSituation
})

//投票
Mock.mock("/api/lwqvote", {
    lwqvoteData
})
//礼品
Mock.mock("/api/smallgifts",{
    lwqSmallGiftsData
})
