import React, { Component } from 'react';
import Header from "../component/Header";
import "../css/dcq/mineorder.css"

class MineOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="mineOrder">
                <Header title="购物车" flag={true} routers={this.props.history} />
                <main>
                    <ul className="shop">
                        <li></li>
                    </ul>
                </main>
                <footer>
                    <span>已选2件</span>
                    <span>合计：263</span>
                    <button>去付款</button>
                </footer>
            </div>
        );
    }
}

export default MineOrder;