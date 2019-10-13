import {observable,action} from "mobx"
import axios from "axios"
import "../mock/index";
import lwqvotedata from "./lwqstore/lwqvote"

class TestStore {
    @observable lwqSmallGiftsData = [];
    @observable dcqHomeData = [];//首页路由列表8个
    @observable dcqHomeGroupData = [];//首页组内情况
    @observable dcqFooterData = [];//首页底部路由跳转5个
    @observable dcqPersonData = [];//个人信息设置
    @observable dcqMineRouterList = [];//我的页面路由List渲染
    @observable numberData = [];//全部沐恩成员
    @observable muenDynamicsList = [];//沐恩动态数据
    @observable personalRecentSituation = []; //个人动态数据
    @observable ListmuenDynamics

    @action.bound
    ListmuenDynamics=(ListmuenDynamics) =>{
        this.ListmuenDynamics=ListmuenDynamics
    }

    //this指向始终指向class
    @action.bound

    getlwqSmallGiftsData = () => {
        axios.get("/api/lwqSmallGifts").then(({data:{lwqSmallGiftsData:{data}}}) => {
            this.lwqSmallGiftsData = JSON.parse(data)
        })
    }
    @action.bound
    getdcqHomeData = ()=>{
        axios.get("/api/dcqHomeData").then(res=>{
            this.dcqHomeData = res.data.dcqHomeData
        })
    }
    @action.bound
    getdcqHomeGroupData = () =>{
        axios.get("/api/dcqHomeGroupData").then(res=>{
            this.dcqHomeGroupData = res.data.HomeGroupSituationData;
        })
    }
    @action.bound
    getdcqFooterData = ()=> {
        axios.get("/api/dcqFooterData").then(res=>{
            this.dcqFooterData = res.data.dcqFooterData
        })
    }
    @action.bound
    getdcqPersonDatas = ()=>{
        return new Promise((resolve,reject)=>{
            axios.get("/api/dcqMineSetting").then(res=>{
                resolve(res.data.personData)
            })
        })
    }
    @action.bound
    getdcqPersonData=()=>{
        axios.get("/api/dcqMineSetting").then(res=>{
            this.dcqPersonData = res.data.personData
        })
    }
    @action.bound
    getdcqMineRouterList=()=>{
        axios.get("/api/dcqMineRouterList").then(res=>{
            this.dcqMineRouterList = res.data.dcqMineRouterList
        })
    }
    @action.bound
    getnumberData=()=>{
        axios.get("/api/numberData").then(res=>{
            this.numberData = res.data.numberData
        })
    }
    @action.bound
    setdcqPersonData = (imgBoolean,datas,text)=>{
        if(imgBoolean){
            this.dcqPersonData = this.dcqPersonData.map(item=>{
                if(item.imgUrl){
                    item.imgUrl= datas
                }
                return item
            })
        }else{
            this.dcqPersonData = this.dcqPersonData.map((item,index)=>{
                if(datas === index){
                    item.msgText = text
                }
                return item
            })
        }
    }

    @action.bound
    getmuenDynamicsList = ()=> {
        axios.get("/api/muenDynamicsList").then(res=>{
            this.muenDynamicsList = res.data.MuenDynamicsList
        })
    }

    @action.bound
    getpersonalRecentSituationList = ()=> {
        axios.get("/api/personalRecentSituation").then(res=>{
            console.log(res.data.PersonalRecentSituation)
            this.personalRecentSituation = res.data.PersonalRecentSituation
        })
    }
}

let testStore = new TestStore()

export default {testStore,lwqvotedata}