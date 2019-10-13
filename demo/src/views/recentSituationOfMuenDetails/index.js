import React, { Component } from 'react';
import Style from "./style.module.scss"
import { Icon } from 'antd';
import Header from "../../component/Header"

import RecentSituationOfMuenDetailsList from "../recentSituationOfMuenDetailsList"

class RecentSituationOfMuenDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            ind:0,  //点赞  评论 切换
            list:[], //点赞  评论 切换之后的数据
            dian:[
                {
                    name:"点赞",
                    id:0
                },
                {
                    name:"评论",
                    id:1
                }
            ]
        };
    }
    render() {
        let {dian,ind,list}=this.state
        return (
            <div  className={Style['box']}>
                <Header title="详情" flag={true} routers={this.props.history} />

                <div className={Style['section']}>
                    
                    <dl className={Style['section_tops']}>
                        <dd>
                            <dl className={Style['section_topnames']}>
                                <dt>
                                    <img src="http://img5.imgtn.bdimg.com/it/u=1634273909,305714040&fm=26&gp=0.jpg" alt="" />
                                </dt>
                                <dd>
                                    <h3>沐恩</h3>
                                    <p>28分钟前</p>
                                </dd>
                            </dl>
                            <h4>团契十三周年啦</h4>
                        </dd>
                        <dt>
                            <img src="http://img5.imgtn.bdimg.com/it/u=3618655323,3741137898&fm=26&gp=0.jpg" alt="" />
                        </dt>
                    </dl>



                    <div className={Style['section_top_bottom']}>
                        {
                            dian&&dian.map((item,index)=><li key={index} onClick={this.clickdian.bind(this,index)}  className={ind===index?Style['active']:''}>{item.name}</li>)
                        }
                    </div>
                    {/* {
                        list?<RecentSituationOfMuenDetailsList  />:''
                    } */}
                    <RecentSituationOfMuenDetailsList  />
                    
                </div>
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

export default RecentSituationOfMuenDetails;