import React, { Component } from 'react'
import Header from "./Header"
import { observer, inject } from "mobx-react"
import "../mock/index"
import "../css/lwqSmallGifts/lwqSmallGifts.min.css"
@inject("lwqvotedata")
@observer
class LwqSmallGifts extends Component {
    state = {
        lwqSmallGiftsData: []
    }
    render() {
        let { lwqSmallGiftsData } = this.state
        return (
            <>
                <Header title="沐恩礼品" flag={true} routers={this.props.history}></Header>
                <section>
                    <div className="lwqSmallGiftslist">
                        {
                            lwqSmallGiftsData && lwqSmallGiftsData.map((ele, ind) => {
                                return <dl onClick={this.handleDetail.bind(this,ele.id,ele)} key={ind}>
                                    <dt>
                                        <img src={ele.src} alt="" />
                                    </dt>
                                    <dd>
                                        <p className="lwqname">{ele.name}</p>
                                        <p className="lwqdescribe">{ele.describe}</p>
                                        <p>
                                            <span className="lwqprice">￥{ele.price}</span>
                                            <span className="lwqperson">{ele.person}人付款</span>
                                        </p>
                                    </dd>
                                </dl>
                            })
                        }
                    </div>
                </section>
            </>
        )
    }
    componentDidMount() {
        this.props.lwqvotedata.getSmallGiftsSync("/api/smallgifts").then((res) => {
            this.setState({
                lwqSmallGiftsData: res
            })
        })
    } 
    handleDetail(id,ele) {
        let { history } = this.props
        history.push({ pathname: "/lwqSmallGiftsDetail"})
        this.props.lwqvotedata.getId(id,ele)
    }
}

export default LwqSmallGifts