import React, { Component } from 'react';
import Style from "./style.module.scss"
import { Icon } from 'antd';
 
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
        let {muenDynamicsList}=this.props
        return (
                <div className={Style['section']}>
                {
                        muenDynamicsList&&muenDynamicsList.map((item,index)=>{
                            return <div key={item.id} className={Style['section_list']}>
                            <dl  className={Style['section_dltop']}  onClick={this.xiangqing.bind(this)}>
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
                                <dt>
                                    {
                                        item.Img_list&&item.Img_list.map(item1=>{
                                            return <p key={item1.id}> 
                                                        <img src={item1.img} alt="" />
                                                    </p>
                                        })
                                    }
                                </dt>
                                <dd>
                                    <ul>
                                        <li onClick={this.xihuan.bind(this)}>
                                            <Icon  className={Style['section_dlbottom_Icon_Left']} type="heart" />
                                            <span>{item.Browse}</span>
                                        </li>
                                        <li onClick={this.xinxi.bind(this)}>
                                            <Icon className={Style['section_dlbottom_Icon_Left']} type="solution" />
                                            <span>{item.Message}</span>
                                        </li>
                                        <li onClick={this.dianzan.bind(this)}>
                                            <Icon className={Style['section_dlbottom_Icon_Left']} type="like" />
                                            <span>{item.Give_The_Thumbs_Up}</span>
                                        </li>
                                    </ul>
                                    <ol>
                                        {
                                            item.Message_Children?<li>
                                            {
                                                item.Message_Children&&item.Message_Children.map((item2,index)=>{
                                                    return <dl key={item2.id} className={Style['section_dlbottom_list']}>
                                                        <dt>
                                                            <p> 
                                                                <img src={item2.Personal_Avatar} alt="" />
                                                            </p>
                                                        </dt>
                                                        <dd>
                                                            <div>
                                                                <h3>{item2.Personal_Name}</h3>
                                                                <p>
                                                                    <span>
                                                                        {item.Personal_Speak}
                                                                    </span>
                                                                    <span>
                                                                        {item2.Personal_Time}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            {
                                                                item2.Message_Children?item2.Message_Children.map((item3)=>{
                                                                    return <dl key={item3.id} className={Style['section_dlbottom_listli']}>
                                                                    <dt>
                                                                        <p> 
                                                                            <img src={item3.Personal_Avatar} alt="" />
                                                                        </p>
                                                                    </dt>
                                                                    <dd>
                                                                        <div>
                                                                            <div>
                                                                                <h3>{item3.Personal_Name}</h3>
                                                                                <span>
                                                                                    {item3.Personal_Time}
                                                                                </span>
                                                                            </div>
                                                                            <p>
                                                                            {item3.Personal_Speak}
                                                                            </p>
                                                                        </div>
                                                                        
                                                                    </dd>
                                                                </dl>
                                                                }):''
                                                            }
                                                        </dd>
                                                    </dl>
                                                })
                                            }
                                        </li>:''
                                        }
                                        
                                    </ol>
                                </dd>
                            </dl>
                        </div>
                        })
                    }
                 </div>
        );
    }
    xiangqing(){ 
        let {history} =this.props
        history.push('/recentSituationOfMuenDetails')
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
    
}

export default withRouter(RecentSituationOfMuen);