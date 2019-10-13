import React, { Component } from 'react';
import "../css/dcq/header.css"
import "../static/font/fonts/iconfont.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <header className="dcqHeader">
                {
                    this.props.flag ? <i className="routeGoBack iconfont icon-xiangzuo" onClick={this.handleRouter.bind(this,this.props.routers)}></i> : <></>
                }
                {this.props.title}
            </header>
        );
    }
    handleRouter(routers){
        console.log(routers)
        // console.log(routers.go(-1))
        routers.go(-1)
    }
}

export default Header;