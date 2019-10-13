import React, { Component } from 'react';
import Header from '../component/Header';
import { Upload, message, Modal } from 'antd';
import "../css/dcq/MineSetting.css"
import testStore from "../mobx/index"
import {observer} from "mobx-react"


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
  
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

@observer
class MineSetting extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dialogDivBoolean:false,
            text:"",
            clickInd:0
         };
    }
    render() {
        return (
            <div className="dcqMineSetting">
                <Header title="个人信息" flag={true}  routers={this.props.history} />
                <main>
                    <ul className="dcqMineSettingList">
                        {
                            testStore.testStore.dcqPersonData && testStore.testStore.dcqPersonData.map((item,index)=>(
                                <li key={index}>
                                    <p className="leftTitle">{item.title}<span>{item.tips}</span></p>
                                    <div className="rightMsg">
                                        <div className="messagePer">
                                            {
                                                item.imgUrl ? 
                                                (
                                                    <div className="imgPushFile">
                                                        <Upload
                                                            name="avatar"
                                                            listType="picture-card"
                                                            className="avatar-uploader"
                                                            showUploadList={false}
                                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                            beforeUpload={beforeUpload}
                                                            onChange={this.handleChange}
                                                        >
                                                            <img src={item.imgUrl} alt="avatar" style={{ width: '100%' }} />
                                                        </Upload>
                                                    </div>
                                                ) : 
                                                <span onClick={this.handleSetText.bind(this,index)}>{item.msgText}</span>
                                            }
                                        </div>
                                        <i className="iconfont icon-chevron-thin-right"></i>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </main>
                <Modal
                    title="信息更改"
                    visible={this.state.dialogDivBoolean}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    className="modalSetText"
                >
                    <input type="text" className="setText" value={this.state.text} onChange={e=>this.handleGetText(e)} />
                </Modal>
            </div>
        );
    }
    handleGetText=(e)=>{
        console.log(e.currentTarget.value)
        this.setState({
            text:e.currentTarget.value
        })
    }
    handleSetText(index){
        this.setState({
            dialogDivBoolean:!this.state.dialogDivBoolean,
            text:testStore.testStore.dcqPersonData[index].msgText,
            clickInd:index
        })
        
    }
    handleOk = e => {
        testStore.testStore.setdcqPersonData(false,this.state.clickInd,this.state.text)
        this.setState({
            dialogDivBoolean: false
        });
    };
    
    handleCancel = e => {
        this.setState({
            dialogDivBoolean: false
        });
    };
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>{
                // console.log(this.state.personData)
                testStore.testStore.setdcqPersonData(true,imageUrl)
                this.setState({
                    loading: false
                })
            });
        }
    }
    componentDidMount(){
        testStore.testStore.getdcqPersonData()
    }
}

export default MineSetting;