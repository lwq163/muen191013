import React, { Component } from 'react'
import { findDomNode } from 'react-router-dom';
import Header from "./Header"
import { Icon } from 'antd';
import { Avatar } from 'antd';
import { Progress } from 'antd';
import { Button } from 'antd';
import { Checkbox } from 'antd';
import { observer, inject } from "mobx-react"
import "../css/lwqvotedetail/lwqvotedetail.min.css"
@inject("lwqvotedata")
@observer
class Lwqvotedetail extends Component {
    render() {
        let id = this.props.location.query.id
        let data = this.props.location.query.item
        let lwqvoteData = this.props.lwqvotedata.lwqvoteData
        return (
            <div>
                <Header title="投票详情" flag={true} routers={this.props.history}>
                    <span>统计</span>
                </Header>
                <section>
                    {
                        data ? <dl className="lwqsectiontop">
                            <dt>
                                <img src={data.HeadPortrait} alt="" />
                            </dt>
                            <dd>
                                <p className="lwqname">{data.name}</p>
                                <p className="lwqvotetabinfo">截止到{data.time}</p>
                                <h4>{data.question}</h4>
                            </dd>
                        </dl> : ""
                    }
                    <div className="lwqsectioncenter">
                        {
                            lwqvoteData && lwqvoteData.map((item, index) => {
                                if (item.id == id) {
                                    return item.options && item.options.map((ele, ind) => {
                                        return <div key={ind}>
                                            <Checkbox onChange={this.onChange.bind(this, ele.SpeedProgress, id, ind)}>{ele.text}</Checkbox>
                                            <Progress
                                                strokeColor={{
                                                    '0%': '#108ee9',
                                                    '100%': '#87d068',
                                                }}
                                                percent={ele.SpeedProgress}
                                            />
                                        </div>
                                    })
                                } else {
                                    return ""
                                }
                            })
                        }
                    </div>
                    <Button type="primary">提交</Button>
                </section>
            </div>
        )
    }
    handleinitia() {
        let { history } = this.props
        history.push({ pathname: "/lwqInitiatevote", query: { "id": "123" } })
    }
    onChange(SpeedProgress, id, ind, e) {
        let isSelec = e.target.checked;
        this.props.lwqvotedata.SpeedProgress = SpeedProgress
        this.props.lwqvotedata.changeSpeedProgress(isSelec, id, ind)
    }
}
export default Lwqvotedetail
