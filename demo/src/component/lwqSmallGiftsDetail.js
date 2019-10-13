import React, { Component } from 'react'
import Header from "./Header"
import Swiper from "swiper"
import { Icon } from 'antd';
import { observer, inject } from "mobx-react"
import { Button } from 'antd';
import { Badge } from 'antd';
import "../css/lwqSmallGiftsDetail/lwqSmallGiftsDetail.scss"
@inject("lwqvotedata")
@observer
class LwqSmallGiftsDetail extends Component {
    state = {
        isShow: false
    }
    render() {
        let { id, item, LwqSmallGifts } = this.props.lwqvotedata
        return (
            <>
                <Header title="小礼品详情" flag={true} routers={this.props.history}></Header>
                <section>
                    <div className="lwqSmallGiftsDetailmain">
                        {
                            LwqSmallGifts && LwqSmallGifts.map((item, index) => {
                                if (item.id == id) {
                                    return <dl key={index}>
                                        <dt>
                                            <img src={item.src} alt="" />
                                        </dt>
                                        <dd className="lwqSmallGiftsDetailinfo">
                                            <p className="lwqSmallGiftsDetailinfoprice">￥{item.price}</p>
                                            <p className="lwqSmallGiftsDetailinfotext">{item.describe}</p>
                                            <p className="lwqSmallGiftsDetailinfoBtn">
                                                <span><Icon type="shopping" />想要</span>
                                                <span onClick={this.handleLike.bind(this, item.like, item.id)}>
                                                    
                                                    {
                                                        this.state.isShow ? "" : <Icon type="like" />
                                                    }
                                                    {
                                                        this.state.isShow ? <Badge count={1}>
                                                            <Icon type="like" />
                                                        </Badge>
                                                        : ""
                                                    }
                                                    {item.like}
                                                </span>
                                            </p>
                                            <p className="deliver">
                                                <span>发货</span>
                                                <span>{item.address}</span>
                                                <span>|</span>
                                                <span>快递：</span>
                                                <span>免运费</span>
                                            </p>
                                        </dd>
                                    </dl>
                                } else {
                                    return ""
                                }
                            })
                        }
                    </div>
                </section>
                <footer>
                    <Button type="primary" className="btn" onClick={this.handleShop.bind(this, item)}>加入购物车</Button>
                </footer>
            </>
        )
    }
    handleLike(like) {
        this.setState({
            isShow: true
        })
        this.props.lwqvotedata.getLike(like)
    }
    handleShop(item) {
        let { history } = this.props
        history.push({ pathname: "/lwqShoppingCart" })
        this.props.lwqvotedata.getBuyList(item)
    }
}

export default LwqSmallGiftsDetail