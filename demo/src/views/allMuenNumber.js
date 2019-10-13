import React, { Component } from 'react';
import Header from '../component/Header';
import "../css/dcq/dcqAllMuenNumber.css"
import testStore from '../mobx';
import {observer} from "mobx-react"

@observer
class allMuenNumber extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        return (
            <div className="allMuenNumber">
                <Header title="所有沐恩成员" flag={true} routers={this.props.history} />
                <main>
                    <ul>
                        {
                            testStore.testStore.numberData && testStore.testStore.numberData.map((item,index)=>(
                                <li key={index}>
                                    <div className="numberImg">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="numberMsg">
                                        <p>{item.name}</p>
                                        <p className="numbermessage">{item.numberMessage}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </main>
            </div>
        );
    }
    componentDidMount(){
        testStore.testStore.getnumberData()
    }
}

export default allMuenNumber;