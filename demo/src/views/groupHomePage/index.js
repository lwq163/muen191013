import React, { Component } from 'react';
import Style from "./style.module.scss"
import { Icon } from 'antd';
import 'antd/dist/antd.css';
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
                {/* <div className={Style['box_top']} >
                    <Icon className={Style['box_topicon']}  onClick={this.shangyieye.bind(this)} type="left" />
                    <h3>全部小组</h3>
                    <span></span>
                </div> */}
                <Header title="全部小组" flag={true} routers={this.props.history} />

                <div className={Style['box_List']} >
                    <dl onClick={this.xiangq.bind(this)}>
                        <dt>
                            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1787878064,1513897330&fm=26&gp=0.jpg" alt="" />
                        </dt>
                        <dd>
                            <h3>活动小组</h3>
                            <p>Denis Zar 在 React JS中发帖了</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1787878064,1513897330&fm=26&gp=0.jpg" alt="" />
                        </dt>
                        <dd>
                            <h3>活动小组</h3>
                            <p>Denis Zar 在 React JS中发帖了</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1787878064,1513897330&fm=26&gp=0.jpg" alt="" />
                        </dt>
                        <dd>
                            <h3>活动小组</h3>
                            <p>Denis Zar 在 React JS中发帖了</p>
                        </dd>
                    </dl>
                </div>
            </div>
        );
    }
    shangyieye(){
        let {history} =this.props
        history.go(-1)
    }
    xiangq(){
        let {history} =this.props
        history.push('/myGroup')
    }
    
}

export default RecentSituationOfMuen;