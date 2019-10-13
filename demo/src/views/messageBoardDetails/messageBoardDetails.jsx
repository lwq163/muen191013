import React, { Component } from 'react';
import scss from   "./messageBoardDetails.module.scss"
import Header from "../../component/Header"

class messageBoardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                ind:0,
                list:['评论','点赞'],
                data:   [{
                img:'http://k.zol-img.com.cn/dcbbs/22000/a21999018_01000.jpg',
                title:'中国的儿童以及青少年',
                text:'教会的儿童教育：因为他们将是教会的后背力量' ,
                type:0,
                time:1564399856,
                comment:[
                   {   
                       img:'http://i2.hexunimg.cn/2014-04-21/164112790.jpg', 
                       user:'沐恩',
                       txt:'评论吧',
                       time:1564399856         
                   },
                   {   
                    img:'http://i2.hexunimg.cn/2014-04-21/164112790.jpg', 
                    user:'沐恩',
                    txt:'评论吧',
                    time:1564399856         
                }  
                ],
                good:[
                    {   
                        img:'http://i2.hexunimg.cn/2014-04-21/164112790.jpg',
                        user:'沐恩2',
                        txt:'评论吧2',
                        time:1564399856  
                    }
                ]
                  }],
         };
        
    }
    render() {
             
        return (
             <div className={scss['box']}>
                 <Header title="留言详情" flag={true} routers={this.props.history}></Header>
                <div className={scss['boody']}>
                {
                 this.state.data.map((item,index)=>(
                   <div className={scss['txt']} key={index}>
                     <p>
                     <img src={item.img} alt='' /> <span>{item.title}</span>
                     
                     </p> 
                     
                     <p>{item.text}</p>
                     <b>{this.formatTime(item.time)}</b>
                   </div>  
                 ))
              }
              <div className={scss['divs']}>
                  <p> {this.state.list.map((item,ind)=>(
                      <span key={ind} className={this.state.ind===ind ? scss["active"]:''} onClick={()=>this.changeIndex(ind)} >{item}</span>
                  ))} </p>

                  <div className={scss["text"]} >
                       {
                          this.state.ind===0 ? this.state.data[0].comment.map((item,indd)=>(
                              <p key={indd}>
                                <span className={scss['imgs']}><img src={item.img} alt=""/></span>
                                <span className={scss['txts']}>{item.txt}</span>
                                <b className={scss['user']}>{item.user}</b>
                                <b className={scss['time']}>{this.formatTime(item.time)}</b>
                              </p>
                          )): this.state.data[0].good.map((item,indd)=>(
                              <p key={indd}>
                                <span className={scss['imgs']}><img src={item.img} alt=""/></span>
                                <span className={scss['txts']}>{item.txt}</span>
                                <b className={scss['user']}>{item.user}</b>
                                <b className={scss['time']}>{this.formatTime(item.time)}</b>
                              </p>
                          ))
                       }
                 </div>
                 
              </div>
                   

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
      callback(key) {
        console.log(key);
      }
      changeIndex(i){
         this.setState({
             ind:i
         }) 
         console.log(this.state.ind)
      }
}

export default messageBoardDetails;