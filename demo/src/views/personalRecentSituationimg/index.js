import React, { Component } from 'react';
import Style from "./style.module.scss"
import { Icon } from 'antd';

class RecentSituationOfMuen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={Style['box']}>
                <div className={Style['box_top']}>
                <Icon className={Style['box_topicon']}  onClick={this.shangyieye.bind(this)} type="left" />
                </div>
                <div className={Style['box_img']}>
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2943189637,3941537920&fm=26&gp=0.jpg" alt="" />>
                </div>
            </div>
        );
    }
    shangyieye(){
        let {history} =this.props
        history.go(-1)
    }
}

export default RecentSituationOfMuen;