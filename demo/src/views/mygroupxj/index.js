import React, { Component } from 'react';
import Style from "./style.module.scss"
// import { Icon,Button,Divider } from 'antd';
import 'antd/dist/antd.css';
import MyGrouplist from "../myGrouplist/index"
import Header from "../../component/Header"

class RecentSituationOfMuen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        return (
            <div className={Style['box']}>
                <Header title="我的小组" flag={true} routers={this.props.history} />

                {/* <div className={Style['box_top']} >
                    <Icon className={Style['box_topicon']}  onClick={this.shangyieye.bind(this)} type="left" />
                    <h3>我的小组</h3>
                    <span></span>
                </div> */}

                
                <div className={Style['box_section']} >
                    <div className={Style['box_section_top']} >
                        <div className={Style['box_section_topxj']} >
                            <h3>我的小组</h3>
                            <span>编辑</span>
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
                                <span>其他</span>
                                <span>换一换</span>
                            </div>
                            <ul>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3768890033,68770272&fm=26&gp=0.jpg" alt="" />
                                        </dt>
                                        <dd>
                                            <h3>祷告小组</h3> 
                                            <p>小组介绍</p>
                                        </dd>
                                    </dl>
                                </li>  
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3768890033,68770272&fm=26&gp=0.jpg" alt="" />
                                        </dt>
                                        <dd>
                                            <h3>祷告小组</h3>
                                            <p>小组介绍</p>
                                        </dd>
                                    </dl>
                                </li>    
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3768890033,68770272&fm=26&gp=0.jpg" alt="" />
                                        </dt>
                                        <dd>
                                            <h3>祷告小组</h3>
                                            <p>小组介绍</p>
                                        </dd>
                                    </dl>
                                </li>    
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3768890033,68770272&fm=26&gp=0.jpg" alt="" />
                                        </dt>
                                        <dd>
                                            <h3>祷告小组</h3>
                                            <p>小组介绍</p>
                                        </dd>
                                    </dl>
                                </li>     
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3768890033,68770272&fm=26&gp=0.jpg" alt="" />
                                        </dt>
                                        <dd>
                                            <h3>祷告小组</h3>
                                            <p>小组介绍</p>
                                        </dd>
                                    </dl>
                                </li>     
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3768890033,68770272&fm=26&gp=0.jpg" alt="" />
                                        </dt>
                                        <dd>
                                            <h3>祷告小组</h3>
                                            <p>小组介绍</p>
                                        </dd>
                                    </dl>
                                </li>      
                            </ul>  
                    </div>
                </div>
            </div>
        );
    }

    shangyieye(){
        let {history} =this.props;
        history.go(-1)
    }

    clickdian(ind){
        this.setState({
            ind:ind
        }) 
    }
    
}

export default RecentSituationOfMuen;