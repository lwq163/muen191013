import React, { Component } from 'react';
import Style from "./style.module.scss"
import { Icon } from 'antd';
import testStore from "../../mobx/index"
import {observer} from "mobx-react"
import {withRouter} from "react-router-dom"

@observer
class RecentSituationOfMuen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(this.props)
        let {item} =this.props
        return (
            <div className={Style['section_list']}>
                <dl  className={Style['section_dltop']}>
                    <dt>
                        <img src={item.Personal_Avatar} alt="" />
                    </dt>
                    <dd>
                        <h3>{item.Personal_Name}</h3>
                        <p>{item.Personal_Time}</p>
                    </dd>
                </dl>
                <h4>{item.Personal_Speak}</h4>
                <dl className={Style['section_dlbottom']}>
                    <dt onClick={this.linktoimg.bind(this)}>
                        {
                            item.Img_list&&item.Img_list.map(item1=>{
                                return <p key={item1.id}> 
                                            <img src={item1.img} alt="" />
                                        </p>
                            })
                        }
                    </dt>
                    <dd>
                        <p onClick={this.xihuan.bind(this)}>
                            <Icon  className={Style['section_dlbottom_Icon_Left']} type="heart" />
                            <span>{item.Browse}</span>
                        </p>
                        <p onClick={this.xinxi.bind(this)}>
                            <Icon className={Style['section_dlbottom_Icon_Left']} type="solution" />
                            <span>{item.Message}</span>
                        </p>
                        <p onClick={this.dianzan.bind(this)}>
                            <Icon className={Style['section_dlbottom_Icon_Left']} type="like" />
                            <span>{item.Give_The_Thumbs_Up}</span>
                        </p>
                    </dd> 
                </dl>
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
        testStore.testStore.getmuenDynamicsList()
    }
}

export default withRouter(RecentSituationOfMuen);