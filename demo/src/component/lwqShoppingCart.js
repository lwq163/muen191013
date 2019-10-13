import React, { Component } from 'react'
import Header from "./Header"
import { Button } from 'antd';
import { observer, inject } from "mobx-react"
import "../css/lwqShoppingCart/lwqShoppingCart.min.css"

@inject("lwqvotedata")
@observer
class LwqShoppingCart extends Component {
    render() {
        let { buylist,totalcount,totalprice } = this.props.lwqvotedata
        return (
            <>
                <Header title="购物车" flag={true} routers={this.props.history}></Header>
                <section>
                    <div className="lwqSmallGiftslist">
                        {
                            buylist && buylist.map((item, index) => {
                                return <dl key={index}>
                                    <dt>
                                        <img src={item.src} alt="" />
                                    </dt>
                                    <dd>
                                        <div className="lwqname">{item.name}</div>
                                        <div className="lwqprice">
                                            <span>￥{item.price}</span>
                                            <div>
                                                <button onClick={this.handleChangeNum.bind(this,false,index,item.num,item.price)}>-</button>
                                                <span>{item.num}</span>
                                                <button onClick={this.handleChangeNum.bind(this,true,index,item.num,item.price)}>+</button>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            })
                        }
                    </div>
                </section>
                <footer>
                    <span className="num">已选{totalcount}件</span>
                    <span className="totalprice">合计：</span>
                    <span className="price">￥{totalprice}</span>
                    <Button type="primary" className="btn">告诉管理员</Button>
                </footer>
            </>
        )
    }
    handleChangeNum(isBool,index,num,price,e){
        if(isBool){
            num++
            this.props.lwqvotedata.AddNum(index,num,price)
        } else{
            if(num > 0){
                num--
                this.props.lwqvotedata.DeleteNum(index,num,price)
            } else {
                return ""
            }
        } 
    }
}
export default LwqShoppingCart