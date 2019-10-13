import React, { Component } from 'react';
import "./suffrage.scss"
import 'antd/dist/antd.css';
import Header from "../../component/Header"
class suffrage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          data:[
            {
                img:'http://k.zol-img.com.cn/dcbbs/22000/a21999018_01000.jpg',
                title:'中国的儿童以及青少年',
                text:'教会的儿童教育：因为他们将是教会的后背力量' ,
                type:1,
                time:1564399856
            },
            {
               img:'http://k.zol-img.com.cn/dcbbs/22000/a21999018_01000.jpg',
               title:'中国的儿童以及青少年',
               text:'教会的儿童教育：因为他们将是教会的后背力量' ,
               type:0,
               time:1564399856
           },
           {
             img:'http://k.zol-img.com.cn/dcbbs/22000/a21999018_01000.jpg',
             title:'中国的儿童以及青少年',
             text:'教会的儿童教育：因为他们将是教会的后背力量' ,
             type:0,
             time:1564399856
         },
         {
           img:'http://k.zol-img.com.cn/dcbbs/22000/a21999018_01000.jpg',
           title:'中国的儿童以及青少年',
           text:'教会的儿童教育：因为他们将是教会的后背力量' ,
           type:0,
           time:1564399856
       },
        ]
         };
    }
    render() {
        return (
              
            <div className='roooot'>
              <Header title="代祷事项" flag={true} routers={this.props.history} />
              <div className='boody'>
              <h2 className="top">顶置</h2>
               {
                 this.state.data.filter(res=>res.type===1).map((item,index)=>(
                  <div className="txt" key={index}>
                  <p>
                  <span className={item.type===1 ? "show":'none'}  id="change">编辑</span>  
                  <img src={item.img} alt='' /> <span>{item.title}</span>
                  
                  </p> 
                  
                  <p>{item.text}</p>
                  <b>{this.formatTime(item.time)}</b>
                </div>  
                 ))
               }     
                   <h2 className="bottom">全部留言</h2>
              {
                 this.state.data.map((item,index)=>(
                   <div className="txt" key={index}>
                     <p>
                     <img src={item.img} alt='' /> <span>{item.title}</span>
                     
                     </p> 
                     
                     <p>{item.text}</p>
                     <b>{this.formatTime(item.time)}</b>
                   </div>  
                 ))
              }
              </div>
              </div>
          
        );
    }
    formatTime(number){
      var date = new Date(number * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
     var  Y = date.getFullYear() + '-';
     var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
     var  D = date.getDate() + ' ';
     var  h = date.getHours() + ':';
     var  m = date.getMinutes() + ':';
      var s = date.getSeconds();
      return Y+M+D+h+m+s;
  
    }
}

export default suffrage;