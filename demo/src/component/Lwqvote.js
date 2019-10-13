import React, { Component } from 'react'
import Header from "./Header"
import { Tabs } from 'antd';
import "../css/vote/vote.scss"
import { observer, inject } from "mobx-react"
import iScroll from 'iscroll'
import ReactIScroll from 'react-iscroll';

const { TabPane } = Tabs;
function callback(key) {
   
}

@inject("lwqvotedata")
@observer
class Lwqvote extends Component {
    state = {
        // refresh: false,
        lwqvotedata: [],
        getDefaultProps: function () {
            return ({
                options: {
                    mouseWheel: true,
                    scrollbars: true,
                    freeScroll: true,
                    momentum: false
                }
            })
        },
        onScrollStart: function () {
            
        },
    }
    render() {

        var i = 0, len = 5;
        let { lwqvotedata,getDefaultProps, onScrollStart} = this.state
        for (i; i < len; i++) {
            lwqvotedata.push(<dl key={i}>Row {i + 1}</dl>)
        }
        let { options } = getDefaultProps()
        let ScrollStart = onScrollStart()
        console.log(lwqvotedata,"投票列表")
        return (
            <>
                <Header title="投票" flag={true} routers={this.props.history}> </Header>
                <span className="Initiateavote" onClick={this.handleinti.bind(this)}>发起投票</span>
                <section className="wrapper">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="全部" key="1">
                            <div style={{ height: '100vh' }}>
                                <ReactIScroll iScroll={iScroll}
                                    options={options}
                                    onScrollStart={ScrollStart}>
                                    <div>
                                        {
                                            lwqvotedata && lwqvotedata.map((ele, ind) => {
                                                return <dl className="lwqdl" key={ind} onClick={this.handlevoteDetail.bind(this,ele.id,ele)}>
                                                    <dt className="lwqdt">
                                                        <img src={ele.HeadPortrait} alt="" />
                                                    </dt>
                                                    <dd className="lwqdd">
                                                        <p className="lwqvotetabinfo1">
                                                            <span>{ele.name}</span>
                                                            <span>截止到{ele.time}</span>
                                                        </p>
                                                        <p className="lwqvotetabinfo2">
                                                            <span>{ele.question}</span>
                                                            <span>{ele.checkBox}</span>
                                                        </p>
                                                    </dd>
                                                </dl>
                                            })
                                        }
                                    </div>
                                    <div>Long content...</div>
                                    <a className="#" onClick={this.onSomethingClick}>Back to top</a>
                                </ReactIScroll>   
                            </div>
                        </TabPane>
                        <TabPane tab="已结束" key="2">
                            <div style={{ height: '100vh' }}>
                                <ReactIScroll iScroll={iScroll}
                                    options={options}
                                    onScrollStart={ScrollStart}>
                                    <div>
                                        {
                                            lwqvotedata && lwqvotedata.map((ele, ind) => {
                                                return <dl className="lwqdl" key={ind}>
                                                    <dt className="lwqdt">
                                                        <img src={ele.HeadPortrait} alt="" />
                                                    </dt>
                                                    <dd className="lwqdd">
                                                        <p className="lwqvotetabinfo1">
                                                            <span>{ele.name}</span>
                                                            <span>截止到{ele.time}</span>
                                                        </p>
                                                        <p className="lwqvotetabinfo2">
                                                            <span>{ele.question}</span>
                                                            <span>{ele.checkBox}</span>
                                                        </p>
                                                    </dd>
                                                </dl>
                                            })
                                        }
                                    </div>

                                </ReactIScroll>
                            </div>

                        </TabPane>
                        <TabPane tab="正在进行" key="3">
                            <div style={{ height: '100vh' }}>
                                <ReactIScroll iScroll={iScroll}
                                    options={options}
                                    onScrollStart={ScrollStart}>
                                    <div>
                                        {
                                            lwqvotedata && lwqvotedata.map((ele, ind) => {
                                                return <dl className="lwqdl" key={ind}>
                                                    <dt className="lwqdt">
                                                        <img src={ele.HeadPortrait} alt="" />
                                                    </dt>
                                                    <dd className="lwqdd">
                                                        <p className="lwqvotetabinfo1">
                                                            <span>{ele.name}</span>
                                                            <span>截止到{ele.time}</span>
                                                        </p>
                                                        <p className="lwqvotetabinfo2">
                                                            <span>{ele.question}</span>
                                                            <span>{ele.checkBox}</span>
                                                        </p>
                                                    </dd>
                                                </dl>
                                            })
                                        }
                                    </div>

                                </ReactIScroll>
                            </div>
                        </TabPane>
                    </Tabs>
                </section>
            </>
        )
    }
    componentDidMount() {
        new iScroll('.wrapper', {
            mouseWheel: true,
            scrollbars: true
        })
        this.props.lwqvotedata.getvoteSync("/lwqvotelist").then((data) => {
            this.setState({
                lwqvotedata: data
            })
        })
    }
    handlevoteDetail(id,ele) {
        let { history } = this.props
        history.push({ pathname: "/lwqvotedetail", query: { "id": id,"item":ele } })
    }
    handleinti() {
        let { history } = this.props
        history.push({ pathname: "/lwqInitiatevote", query: { "id": "123" } })
    }
}

export default Lwqvote