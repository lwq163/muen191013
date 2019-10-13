import { observable, action, computed } from "mobx"
import axios from "axios"
import LwqSmallGifts from "../../component/lwqSmallGifts";

class lwqvote {
    //投票详情
    @observable lwqvoteData;
    @observable SpeedProgress;
    //发起投票
    @observable voteoption = [];
    //礼品
    @observable LwqSmallGifts;
    @observable like;
    @observable id;
    @observable item;
    @observable buylist = [];
    @observable totalcount;
    @observable totalprice;
    
    //获取votelist
    @action.bound
    getvoteSync(url) {
        return new Promise((resolve, reject) => {
            axios.get(url).then(({ data: { lwqvoteData: { data: data } } }) => {
                resolve(data)
                this.lwqvoteData = data
            }).catch((err) => {
                reject(err)
            })
        })
    }

    @action.bound
    changeSpeedProgress(isSelec, id, ind) {
        isSelec ? this.SpeedProgress = this.SpeedProgress + 1 : this.SpeedProgress = this.SpeedProgress - 1
        this.lwqvoteData.forEach((ele, index) => {
            if (ele.id == id) {
                ele.options[ind].SpeedProgress = this.SpeedProgress
            } else {
                ele.options[ind].SpeedProgress = this.SpeedProgress
            }
        })
    }
    //添加options数组
    @action.bound
    Addoptions(obj) {
        if (this.voteoption.length < 3) {
            this.voteoption.push(obj)
        } else {
            return this.voteoption
        }
    }
    //删除options数组
    @action.bound
    Deleteoptions(ind) {
        this.voteoption.splice(ind,1)
    }

    //发起投票接口
    @action.bound
    InitiateavoteAsync(obj){
        this.lwqvoteData = obj;
        console.log(obj)
        axios.post("/lwqInitiateVote",obj).then((res) => {
            console.log(res,"发起投票")
        })
    }

    //礼品
    @action.bound
    getSmallGiftsSync(url){
        return new Promise((resolve,reject) => {
            axios.get(url).then(({data:{lwqSmallGiftsData:{data:data}}}) => {
                resolve(data)
                this.LwqSmallGifts = data
            }).catch((err) => {
                reject(err)
            })
        })
    }
    //id
    @action.bound
    getId(id,ele){
        this.id = id
        this.item = ele
    }
    //礼品详情点赞加加
    @action.bound
    getLike(like){
        this.LwqSmallGifts.map((item,index) => {
            if(item.id == this.id) {
                return item.like++
            }
        })
    }

    //购物车
    @action.bound
    getBuyList(item){
        this.buylist.push(item);
    }

    //加数量
    @action.bound
    AddNum(index,num){
        this.buylist[index].num = num
       
        this.totalcount =  this.buylist.reduce((prev, next) => {
            return prev + next.num;
        }, 0);
        
        this.totalprice = this.buylist.reduce((prev, next) => {
            return prev + next.num * next.price;
        }, 0);
    }

    //减数量
    @action.bound
    DeleteNum(index,num){
        this.buylist[index].num = num;
        this.totalcount =  this.buylist.reduce((prev, next) => {
            return prev + next.num;
        }, 0);
        
        this.totalprice = this.buylist.reduce((prev, next) => {
            return prev + next.num * next.price;
        }, 0);
    }
}

export default new lwqvote()