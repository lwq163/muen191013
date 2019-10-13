import React, { Component } from 'react';
import "./style.scss"
import 'antd/dist/antd.css';
import Chat from 'chat-react';

class RecentSituationOfMuen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue: '',
            messages: [{
                timestamp: 1545925494422,
                userInfo: {
                    avatar: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3962805517,413692801&fm=26&gp=0.jpg",
                    name: "游客1544365758856",
                    userId: "1544365758856"
                },
                value: "hello~"
            },  {
                timestamp: 1545925534218,
                userInfo: {
                    avatar: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3962805517,413692801&fm=26&gp=0.jpg",
                    name: "游客1544365758856",
                    userId: "1544365758856"
                },
                value: "😀",
                error: true //设置消息状态为失败，显示错误状态图标
            }],
            timestamp: new Date().getTime()
         };
    }
    render() {
        const {inputValue, messages, timestamp} = this.state;
        const userInfo = {
            avatar: "http://img.binlive.cn/6.png",
            userId: "59e454ea53107d66ceb0a598",
            name: 'ricky'
        };
        return (
            <div className='box'>
               <Chat
                    ref={el => this.chat = el}
                    className="my-chat-box"
                    dataSource={messages}
                    userInfo={userInfo}
                    value={inputValue}
                    sendMessage={this.sendMessage}
                    timestamp={timestamp}
                    placeholder="请输入"
                    messageListStyle={{width: '100%', height: '100%'}}
                />
            </div>
        );
    }
    setInputfoucs = () => {
        this.chat.refs.input.inputFocus();  //set input foucus
    }
    setScrollTop = () => {
        this.chat.refs.message.setScrollTop(1200);  //set scrollTop position
    }
    sendMessage = (v) => {
        const {value} = v;
        if (!value) return;
        const {messages = []} = this.state;
        messages.push(v);
        this.setState({messages, timestamp: new Date().getTime(), inputValue: ''});
    }
}

export default RecentSituationOfMuen;