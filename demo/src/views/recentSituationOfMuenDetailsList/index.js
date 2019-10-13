import React, { Component } from 'react';
import Style from "./style.module.scss"

class RecentSituationOfMuenDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div  className={Style['box']}>
                <dl className={Style['box_list']}>
                    <dt>
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2943189637,3941537920&fm=26&gp=0.jpg" alt=""/>
                    </dt>
                    <dd>
                        <h3>灵佩</h3>
                        <p>我是灵佩，点我看详情</p>
                    </dd>
                </dl>
                <dl className={Style['box_list']}>
                    <dt>
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2943189637,3941537920&fm=26&gp=0.jpg" alt=""/>
                    </dt>
                    <dd>
                        <h3>灵佩</h3>
                        <p>我是灵佩，点我看详情</p>
                    </dd>
                </dl>
                <dl className={Style['box_list']}>
                    <dt>
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2943189637,3941537920&fm=26&gp=0.jpg" alt=""/>
                    </dt>
                    <dd>
                        <h3>灵佩</h3>
                        <p>我是灵佩，点我看详情</p>
                    </dd>
                </dl>
            </div>    
        );
    }
   
}

export default RecentSituationOfMuenDetails;