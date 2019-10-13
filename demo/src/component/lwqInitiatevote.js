import React, { Component } from 'react'
import Header from "./Header"
import { Icon } from 'antd';
import { Button } from 'antd';
import { Select } from 'antd';
import { DatePicker } from 'antd';
import { Input } from 'antd';
import { Alert } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import { observer, inject } from "mobx-react"
import "../css/lwqInitiatevote/lwqInitiatevote.min.css"

const { Option } = Select;

const { TextArea } = Input;

@inject("lwqvotedata")
@observer
class LwqInitiatevote extends Component {
    state = {
        question: "",
        describe: "",
        option: "",
        multiplesele:"",
        anonymous:"",
        date: "",
        time: "",
        isShow: false,
    }
    render() {
        let voteoption = this.props.lwqvotedata.voteoption
        const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

        return (
            <>
                <Header title="发起投票" flag={true} routers={this.props.history}></Header>
                <section>
                    <div className="lwqtitle">
                        <h4>标题：</h4>
                        <Input placeholder="请输入标题" value={this.state.question} onChange={this.handleGetQuestion.bind(this)} />
                    </div>

                    <div className="lwqdescribe">
                        <h4>描述：</h4>
                        <TextArea rows={4} placeholder="说点什么……" onChange={this.handleGetDescribe.bind(this)} />
                    </div>

                    <div className="lwqInitiatevoteform">
                        <ul>
                            {
                                voteoption && voteoption.map((ele, ind) => {
                                    return <li key={ind}>
                                        <div>
                                            <span>选项{ind + 1}：</span>
                                            <span ref="text">{ele.option}</span>
                                        </div>
                                        <Icon type="minus-circle" theme="twoTone" onClick={this.handleDeleteOption.bind(this, ind)} />
                                    </li>
                                })
                            }
                        </ul>
                        <div className="lwqInitiatevoteinp">
                            <Input ref="opt" placeholder="请输入选项内容最长输入20个字" value={this.state.option} onChange={this.handleGetOption.bind(this)} />
                            <Icon type="plus-circle" theme="twoTone" onClick={this.handleAddOption.bind(this)} />
                        </div>

                        <div className="lwqsel">
                            <span>请选择单选多选：</span>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder=""
                                optionFilterProp="children"
                                onChange={this.handleGetMultiplesele.bind(this)}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="1">单选</Option>
                                <Option value="2">多选</Option>
                            </Select>
                        </div>

                        <div className="lwqanonymous">
                        <span>是否匿名：</span>
                            <Select
                                showSearch
                                style={{ width: 120 }}
                                optionFilterProp="children"
                                onChange={this.handleGetAnonymous.bind(this)}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="1">是</Option>
                                <Option value="2">否</Option>
                            </Select>
                        </div>
                        <div className="lwqClosingdate">
                            <span>截止日期：</span>
                            <DatePicker onChange={this.handleClosingDate.bind(this)} />
                        </div>
                        <div className="lwqtime">
                            <span>请选择时间：</span>
                            <TimePicker onChange={this.handleGetTime.bind(this)} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                        </div>
                    </div>

                    <div className="lwqbtn">
                        <Button type="primary" onClick={this.handleisShow.bind(this,voteoption)} style={{ margin: "10% 41%" }}>发布</Button>
                    </div>
                        {
                            this.state.isShow ? <div  className="footer_btns">
                                <div className="section_fb" >发布成功</div>
                            </div> : ""
                        }
                </section>
            </>
        )
    }
    //获取标题
    handleGetQuestion(e) {
        this.setState({
            question: e.target.value
        })
    }
    //获取描述
    handleGetDescribe(e){
        this.setState({
            describe: e.target.value
        })
    }
    //获取选项内容
    handleGetOption(e) {
        this.setState({
            option: e.target.value
        })
    }
    //添加选项
    handleAddOption() {
        this.props.lwqvotedata.Addoptions({ option: this.state.option, numberVotes: 0 })
        //清空输入框内容
        this.setState({
            option: ""
        })
    }
    //删除单条选项
    handleDeleteOption(ind) {
        this.props.lwqvotedata.Deleteoptions(ind)
    }
    //单选多选
    handleGetMultiplesele(value) {
        this.setState({
            multiplesele: value
        })
    }
    //是否匿名
    handleGetAnonymous(value) {
        this.setState({
            anonymous: value
        })
    }
    //获取截止日期
    handleClosingDate(time, timeString) {
        this.setState({
            date: timeString
        })
    }
    //获取时间
    handleGetTime(date, dateString){
        this.setState({
            time: dateString
        })
    }
    //点击发布
    handleisShow(voteoption) {
        let voteDate = `${this.state.date} ${this.state.time}`
        let obj = {
            userId: 1,
            question: this.state.question,
            describe: this.state.describe,
            voteDate: voteDate,
            anonymous: this.state.anonymous,
            multiplesele: this.state.multiplesele,
            options: [...voteoption],
        }
        this.props.lwqvotedata.InitiateavoteAsync(obj)
        this.setState({
            isShow: true
        })

        setTimeout(() => {
            let { history } = this.props
            history.push({ pathname: "/lwqvote" })
        }, 1000)
    }
}
export default LwqInitiatevote