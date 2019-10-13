import React, { Component } from 'react';
import "./register.scss"
import 'antd/dist/antd.css';
import { Input ,Button,Icon} from 'antd';

class register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName:'',
            OncePassWord:"",
            TwoPassWord:''
         };
    }
    render() {
        return (
             <div className='root'>
             <Icon type="left" onClick={()=>this.goBack()} />
              <h2>沐恩宝贝~</h2>
             <Input placeholder="请输入你的姓名" className='UseUserName' value={this.state.userName} onChange={(e)=>this.nameChange(e)} />
             <Input placeholder="请输入你的密码" className='OncePassWord' value={this.state.OncePassWord} onChange={(e)=>this.OncePassWord(e)} />
             <Input placeholder="请再次输入你的密码" className='TwoPassWord' value={this.state.TwoPassWord} onChange={(e)=>this.TwoPassWord(e)}/>
             <Button onClick={()=>this.btn()}>注册</Button>
             </div>
        );
    }
    goBack(){
          this.props.history.go(-1)
    }
     nameChange(e){
          this.setState({
              userName:e.target.value
          })
     }
     OncePassWord(e){
        this.setState({
            OncePassWord:e.target.value
        })
   }
   TwoPassWord(e){
    this.setState({
        TwoPassWord:e.target.value
    })
}

   btn(){
       if(this.state.userName!==''&&this.state.OncePassWord!==''&&this.state.OncePassWord===this.state.TwoPassWord){
           console.log(1)
       }else{
           console.log(2)
       }
   }

}

export default register;