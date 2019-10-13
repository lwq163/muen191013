import React, { Component } from 'react';
import Style from "./style.module.scss"
import Header from "../../component/Header"
import Footer from '../../component/Footer';
import testStore from "../../mobx/index"
import {observer} from "mobx-react"
import Section from "../../component/recentSituationOfMuenlist/index"
@observer
class RecentSituationOfMuen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={Style['box']}>
                <Header title="沐恩动态" flag={true} routers={this.props.history} />
                <Section muenDynamicsList={testStore.testStore.muenDynamicsList} />
                <Footer routers={this.props.history}  />
            </div>
        );
    }
    xiangqing(){
        let {history} =this.props
        history.push('/recentSituationOfMuenDetails')
    }
    shangyieye(){
        let {history} =this.props
        history.go(-1)
    }
    xihuan(e){
        e.stopPropagation()
        console.log("喜欢")
    }
    xinxi(e){
        e.stopPropagation()
        console.log("信息")
    }
    dianzan(e){
        e.stopPropagation()
        console.log("点赞")
    }
    componentDidMount(){
        testStore.testStore.getmuenDynamicsList()
    }
}

export default RecentSituationOfMuen;