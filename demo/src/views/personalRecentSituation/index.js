import React, { Component } from 'react';
import Style from "./style.module.scss"
import { Icon } from 'antd';
import Header from "../../component/Header"
import testStore from "../../mobx/index"
import {observer} from "mobx-react"
import PersonalDynamicsList from "../../component/personalRecentSituationList/index"

@observer
class RecentSituationOfMuen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(testStore.testStore.personalRecentSituation)
        return (
            <div className={Style['box']}>
                <Header title="个人动态 " flag={true} routers={this.props.history} ></Header>
                <span className={Style['headerClick']} onClick={this.release.bind(this)}>发布</span>
                <div className={Style['section']}>
                    {
                        testStore.testStore.personalRecentSituation&&testStore.testStore.personalRecentSituation.map((item)=>{
                            return <PersonalDynamicsList key={item.id} item={item} />
                        })
                    }
                    
                    {/* <div className={Style['section_list']}>
                        <dl  className={Style['section_dltop']}>
                            <dt>
                                <img src="http://img2.imgtn.bdimg.com/it/u=2705304326,1100186784&fm=26&gp=0.jpg" alt="" />
                            </dt>
                            <dd>
                                <h3>羊城少帅</h3>
                                <p>2小时前</p>
                            </dd>
                        </dl>
                        <h4>巴拉巴拉小魔仙</h4>
                        <dl className={Style['section_dlbottom']}>
                            <dt onClick={this.linktoimg.bind(this)}>
                                <img src="http://img0.imgtn.bdimg.com/it/u=4062905256,3623457166&fm=26&gp=0.jpg" alt="" />
                            </dt>
                            <dd>
                                <p onClick={this.xihuan.bind(this)}>
                                    <Icon  className={Style['section_dlbottom_Icon_Left']} type="heart" />
                                    <span>15</span>
                                </p>
                                <p onClick={this.xinxi.bind(this)}>
                                    <Icon className={Style['section_dlbottom_Icon_Left']} type="solution" />
                                    <span>0</span>
                                </p>
                                <p onClick={this.dianzan.bind(this)}>
                                    <Icon className={Style['section_dlbottom_Icon_Left']} type="like" />
                                    <span>0</span>
                                </p>
                            </dd> 
                        </dl>
                    </div> */}
                </div>
            </div>
        );
    }
    xihuan(e){
        e.stopPropagation()
        console.log("喜欢")
    }
    xinxi(e){
        e.stopPropagation()
        console.log("信息")
    }
    dianzan(e){
        e.stopPropagation()
        console.log("点赞")
    }
    shangyieye(){
        let {history} =this.props
        history.go(-1)
    }
    linktoimg(){
        let {history} =this.props
        history.push('/personalRecentSituationimg')
    }
    release(){
        let {history} =this.props
        history.push('/personalRecentSituation_release')
    }
    componentDidMount(){
        testStore.testStore.getpersonalRecentSituationList()
    }
}

export default RecentSituationOfMuen;