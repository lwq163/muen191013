import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from "../component/Footer"
import "../css/dcq/dcqMine.css"
import testStore from "../mobx/index"
import {observer} from "mobx-react"

@observer
class DcqMine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setBoolean:false,
            text:""
         };
    }
    render() {
        let {dcqPersonData,setBoolean,text} = this.state;
        return (
            <div className="dcqMainDiv">
                <Header title="我的" flag={true} routers={this.props.history} ></Header>
                <main>
                    <div className="mineMessage">
                        <div className="mineHeadImg">
                            {
                                dcqPersonData 
                                ? <img src={dcqPersonData[0].imgUrl} alt="" />
                                : <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564461273980&di=293b8284a1dd8722fb58f50d548dcbee&imgtype=0&src=http%3A%2F%2Fstatic.open-open.com%2Fnews%2FuploadImg%2F20160119%2F20160119103648_339.gif" alt="" />
                            }
                        </div>
                        <div className="nameIntrodruce">
                            <p className="mineName">
                                {
                                    dcqPersonData 
                                    ? dcqPersonData[1].msgText
                                    : ""
                                }
                            </p>
                            {
                                dcqPersonData 
                                ? <div className="mineIntrodruce">{ setBoolean ? <input type="text" onChange={e=>this.handleSetData(e)} value={text} /> : dcqPersonData[4].msgText}</div> : <></>
                            }
                        </div>
                        <div className="mineEdit" onClick={this.handleOn}>
                            <i className="iconfont icon-bianji1"></i>
                        </div>
                    </div>
                    <div className="mineList">
                        <ul>
                            {
                                testStore.testStore.dcqMineRouterList && testStore.testStore.dcqMineRouterList.map((item,index)=>(
                                    <li key={index} onClick={()=>this.props.history.push(item.path)}>
                                        <p>{item.name}</p>
                                        <i className="iconfont icon-chevron-thin-right"></i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </main>
                <Footer routers={this.props.history} defaultIndex={4} />
            </div>
        );
    }
    componentDidMount(){
        testStore.testStore.getdcqPersonData()
        testStore.testStore.getdcqMineRouterList()
        testStore.testStore.getdcqPersonDatas().then(res=>{
            this.setState({
                dcqPersonData:res
            })
        })
    }
    handleOn=()=>{
        if(this.state.setBoolean === false){
            this.setState({
                text:this.state.dcqPersonData[4].msgText,
                setBoolean:true
            })
        }else{
            testStore.testStore.setdcqPersonData(false,4,this.state.text)
            this.setState({
                text:this.state.dcqPersonData[4].msgText,
                setBoolean:false,
                dcqPersonData:testStore.dcqPersonData
            })
        }
    }
    handleSetData=(e)=>{
        this.setState({
            text:e.currentTarget.value
        })
    }
}

export default DcqMine;