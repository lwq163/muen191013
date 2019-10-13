import React, { Component } from 'react';
import testStore from "../mobx/index"
import {observer} from "mobx-react"
import "../css/dcq/footer.css"

@observer
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            footerRouteDefaultIndex: props.defaultIndex ? props.defaultIndex : 0
         };
    }
    render() {
        let {footerRouteDefaultIndex} = this.state
        return (
            <footer className="dcqFooter">
                    <ol>
                        {
                            testStore.testStore.dcqFooterData && testStore.testStore.dcqFooterData.map((item,index)=>
                                <li key={index} onClick={this.clickFooterRouter.bind(this,item.path,index)} className={index === footerRouteDefaultIndex ?'clickColor': ""}>
                                    <i className={`iconfont icon-${item.iconfonts}`}></i>
                                    <a>{item.tit}</a>
                                </li>
                            )
                        }
                    </ol>
                </footer>
        );
    }
    componentDidMount(){
        testStore.testStore.getdcqFooterData()
    }
    clickFooterRouter=(path,index)=>{
        this.props.routers.push(path);
        this.setState({
            footerRouteDefaultIndex:index
        })
    }
}

export default Footer;