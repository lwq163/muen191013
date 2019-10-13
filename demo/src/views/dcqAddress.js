import React, { Component } from 'react';
import Header from '../component/Header';
import "../css/dcq/dcqAddress.css";

class dcqAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="dcqAddressDiv">
                <Header title="电话和地址" flag={true} routers={this.props.history} />
                <main>
                    <div className="phoneDialog">
                        <p className="phoneAddressTitle">please tell me about you</p>
                        <p><span>地址</span><input type="text" /></p>
                        <p><span>电话</span><input type="text" /></p>
                        <div className="btns">
                            <button>取消</button>
                            <button onClick={()=>this.props.history.push("/home")}>确认</button>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default dcqAddress;