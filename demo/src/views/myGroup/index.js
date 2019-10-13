import React, { Component } from 'react';
import Style from "./style.module.scss"
import { Icon,Button,Divider } from 'antd';
import 'antd/dist/antd.css';
import MyGrouplist from "../myGrouplist/index"
import Header from "../../component/Header"

class RecentSituationOfMuen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ind:0,
            list:[
                {
                    name:'小组讨论'
                },
                {
                    name:'小组动态'
                },
                {
                    name:'小组计划'
                }
            ]
         };
    }
    render() {
        let {list,ind}=this.state
        return (
            <div className={Style['box']}>
                <Header title="我的小组" flag={true} routers={this.props.history} />
                <div className={Style['box_section']} >
                    <div className={Style['box_section_top']} >
                        <div className={Style['box_section_topxj']} >
                            <h3>我的小组</h3>
                            <span>加入</span>
                        </div>
                        <dl>
                            <dt>
                                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=180868167,273146879&fm=26&gp=0.jpg" alt="" />
                            </dt>
                            <dd>
                                <h3>如鹿慕溪</h3>
                                <p>Denis Zar 在 React JS中发帖了</p>
                            </dd>
                        </dl>
                    </div>
                    <div className={Style['box_section_list']} >
                        <div className={Style['box_section_listtop']} >
                            {
                                list&&list.map((item,index)=><li key={index} onClick={this.clickdian.bind(this,index)}  className={ind===index?Style['active']:''}>{item.name}</li>)
                            }
                        </div> 
                        <div className={Style['box_section_lists']} >
                            <MyGrouplist />
                        </div> 
                    </div>
                </div>
                {/* <div className={Style['box_footer']} >
                    <input placeholder="发言" />
                </div> */}
            </div>
        );
    }
    shangyieye(){
        let {history} =this.props
        history.go(-1)
    }
    clickdian(ind){
        this.setState({
            ind:ind
        }) 
    }
    
}

export default RecentSituationOfMuen;