import React, { Component } from 'react';
import "./MyGroups.scss"
import 'antd/dist/antd.css';
import Header from "../../component/Header"
import { Input } from 'antd';
class MyGroups extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { Search } = Input;
        return (
            <div className="rot">
                 <Header  flag={true} routers={this.props.history} />
                <b className="seek">  
                <Search
                placeholder="搜索小组"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
                /></b>
            <p></p>
            <div className="box">
                  <div className="header">
                      <span>全部小组</span>
                      <b></b>
                      <span onClick={this.clicksTomycroup.bind(this)}>查看全部</span>
                  </div>
                 
                 <div className='scrol'>
                     <dl onClick={this.clicksTomycroupxq.bind(this)}>
                         <dd>图片</dd>
                         <dt>祷告小组</dt>
                     </dl>
                     <dl>
                         <dd>图片</dd>
                         <dt>祷告小组</dt>
                     </dl>
                     <dl>
                         <dd>图片</dd>
                         <dt>祷告小组</dt>
                     </dl>
                     <dl>
                         <dd>图片</dd>
                         <dt>祷告小组</dt>
                     </dl>
                     <dl>
                         <dd>图片</dd>
                         <dt>祷告小组</dt>
                     </dl>
                     <dl>
                         <dd>图片</dd>
                         <dt>祷告小组</dt>
                     </dl>
                     <dl>
                         <dd>图片</dd>
                         <dt>祷告小组</dt>
                     </dl>
                 </div>
             </div>
            </div>
        );
    }
    clicksTomycroup(){
        let {history} =this.props
        console.log(history)
        history.push('/groupHomePage')
    }
    clicksTomycroupxq(){
        let {history} =this.props
        console.log(history)
        history.push('/mygroupxj')
    }
}

export default MyGroups;