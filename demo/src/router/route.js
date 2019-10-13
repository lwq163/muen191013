import loadable from "react-loadable"
import React from 'react';
import "./router.css"

function Loading() {
    return <div className="loadingDiv">Loading...</div>
}
const Home = loadable({ //首页
    loader: () => import("../views/Home"),
    loading: Loading
})

const LwqSmallGifts = loadable({
    loader: () => import("../component/lwqSmallGifts"),
    loading: Loading
})
const DcqMine = loadable({
    loader: () => import("../views/DcqMine"),
    loading: Loading
})
const allMuenNumber = loadable({
    loader: () => import("../views/allMuenNumber"),
    loading: Loading
})
const dcqAddress = loadable({
    loader: () => import("../views/dcqAddress"),
    loading: Loading
})
const MineOrder = loadable({
    loader: () => import("../views/MineOrder"),
    loading: Loading
})
const MineSetting = loadable({
    loader: () => import("../views/MineSetting"),
    loading: Loading
})

const LwqSmallGiftsDetail = loadable({
    loader: () => import("../component/lwqSmallGiftsDetail"),
    loading: Loading
})
const LwqShoppingCart = loadable({
    loader: () => import("../component/lwqShoppingCart"),
    loading: Loading
})
const LwqVote = loadable({
    loader: () => import("../component/Lwqvote"),
    loading: Loading
})
const Lwqvotedetail = loadable({
    loader: () => import("../component/lwqvotedetail"),
    loading: Loading
})
const LwqInitiatevote = loadable({
    loader: () => import("../component/lwqInitiatevote"),
    loading: Loading
})
const Login = loadable({
    loader: () => import("../views/login/login"),
    loading: Loading
})
const Register = loadable({
    loader: () => import("../views/register/register"),
    loading: Loading
}) 
const Suffrage = loadable({
    loader: () => import("../views/suffrage/suffrage"),
    loading: Loading
}) 
const MessageBoard = loadable({
    loader: () => import("../views/messageBoard/messageBoard"),
    loading: Loading
}) 

const MessageBoardDetails = loadable({
    loader: () => import("../views/messageBoardDetails/messageBoardDetails.jsx"),
    loading: Loading
}) 
const Dedication = loadable({
    loader: () => import("../views/dedication/dedication"),
    loading: Loading
}) 
const MyGroups = loadable({
    loader: () => import("../views/MyGroups/MyGroups"),
    loading: Loading
}) 

const RecentSituationOfMuen = loadable({  //沐恩近况
    loader: () => import("../views/recentSituationOfMuen/index"),
    loading: Loading
})

const RecentSituationOfMuenDetails = loadable({  //沐恩近况详情
    loader: () => import("../views/recentSituationOfMuenDetails/index"),
    loading: Loading
})

const RecentSituationOfMuenDetailsList = loadable({  //沐恩近况详情
    loader: () => import("../views/recentSituationOfMuenDetailsList/index"),
    loading: Loading
})

const PersonalRecentSituation = loadable({  //个人近况
    loader: () => import("../views/personalRecentSituation/index"),
    loading: Loading
})

const PersonalRecentSituationimg = loadable({  //个人近况图片
    loader: () => import("../views/personalRecentSituationimg/index"),
    loading: Loading
})

const PersonalRecentSituation_release = loadable({  //个人近况图片
    loader: () => import("../views/personalRecentSituation_release/index"),
    loading: Loading
})

const GroupHomePage = loadable({  //小组首页
    loader: () => import("../views/groupHomePage/index"),
    loading: Loading
})
const MyGroup = loadable({  //我的小组 
    loader: () => import("../views/myGroup/index"),
    loading: Loading
})

const Mygroupxj = loadable({  //我的小组 
    loader: () => import("../views/mygroupxj/index"),
    loading: Loading
})

const Route = [
    {
         path:"/home",
         component:Home
    },{
        path:"/mine",
        component:DcqMine
    },{
        path:"/allnumber",
        component:allMuenNumber
    },{
        path:"/dcqaddress",
        component:dcqAddress
    },{
        path:"/mineorder",
        component:MineOrder
    },{
        path:"/minesetting",
        component:MineSetting
    },{
       path:'/messageBoard',
       component:MessageBoard 
    },
      {
           path:'/messageBoardDetails',
           component:MessageBoardDetails
    },
       {
        path:"/lwqSmallGifts",
        component:LwqSmallGifts,
    },{
        path:"/lwqSmallGiftsDetail",
        component:LwqSmallGiftsDetail,
    },{
        path:"/lwqShoppingCart",
        component:LwqShoppingCart,
    },{
        path:"/lwqvote",
        component:LwqVote
    },{
        path:"/lwqvotedetail",
        component:Lwqvotedetail
    },{
        path:"/lwqInitiatevote",
        component:LwqInitiatevote
    },{
        path:'/login',
        component:Login
    },{
        path:'/register',
        component:Register
    },{
        path:'/myGroups',
        component:MyGroups
    },{
        path:'/suffrage',
        component:Suffrage
    },{
        path:'/dedication',
        component:Dedication
    },{
        path:"/recentSituationOfMuen", //沐恩近况
        component:RecentSituationOfMuen,
    },
    {
        path:"/recentSituationOfMuenDetails", //沐恩近况详情
        component:RecentSituationOfMuenDetails,
        children:[
            {
                path:"/recentSituationOfMuenDetails/recentSituationOfMuenDetailsList", //沐恩近况详情列表
                component:RecentSituationOfMuenDetailsList,
            }
            
        ]
    },
    {
        path:"/personalRecentSituation", //个人近况
        component:PersonalRecentSituation,
    },
    {
        path:"/personalRecentSituationimg", //个人近况
        component:PersonalRecentSituationimg,
    },
    {
        path:"/personalRecentSituation_release", //个人近况中发布
        component:PersonalRecentSituation_release,
    },
    {
        path:"/groupHomePage", //全部小组
        component:GroupHomePage,
    },
    {
        path:"/myGroup", //我的小组 
        component:MyGroup,
    },
    {
        path:"/mygroupxj", //我的小组 
        component:Mygroupxj,
    },
    {
        to: '/home',
        from: "/"
    }
    
]

export default Route
 