import React, { Component } from 'react';
import "./login.scss"
import 'antd/dist/antd.css';
import { Input ,Button} from 'antd';
import {NavLink} from "react-router-dom"
class login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             userName:'',
             passWord:''
         };
    }
    render() {
        return (
            <div className="root"> 
             <h2>沐恩宝贝</h2>
             <p><span>开始沐恩生活~,</span> <NavLink to="/register"><b>立即注册</b></NavLink></p>
             <Input placeholder="请输入你的姓名" className='userName' value={this.state.userName} onChange={(e)=>this.nameChange(e)} />
             <Input placeholder="请输入你的密码" className='passWord' value={this.state.passWord} onChange={(e)=>this.passWordChange(e)} />
             <Button onClick={()=>this.btn()}>登录</Button>
              <span className="ico">forget the password</span>
            </div> 
        );
    }
     nameChange(e){
            this.setState({
               userName:e.target.value
            })
     }
     passWordChange(e){
        this.setState({
            passWord:e.target.value
         })
     }
     btn(){
         this.props.history.push("/home")
         console.log(this.state.userName,this.state.passWord)
     }
}

export default login;