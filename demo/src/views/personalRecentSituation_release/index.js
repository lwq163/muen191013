import React, { Component } from 'react';
import Style from "./style.module.scss"
import Header from "../../component/Header"
import  Imgs from "../personalRecentSituation_releaseimg/index"
import { Upload, Icon, Modal } from 'antd';
import 'antd/dist/antd.css';
import "../personalRecentSituation_releaseimg/style.css"
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class RecentSituationOfMuen extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            value:'',
            flag:false,
            previewVisible: false,
            previewImage: '',
            fileList: [
            ],
        };
    }

    
    handleCancel = () => {
        this.setState({ previewVisible: false })
    };

    handlePreview = async file => {
        if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
        }
        this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });


    render() {
        let {value,flag}=this.state
        const { previewVisible, previewImage, fileList } = this.state
        const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
        )
        return (
            <div className={Style['box']}>
                <Header title="个人生活" flag={true} routers={this.props.history} ></Header>
                <div className={Style['section']} >
                    <div className={Style['section_text']} >
                        <textarea rows="8" cols="55" value={value} onChange={this.change.bind(this)}></textarea>
                    </div>
                    <div className={Style['section_img']} >
                        {/* <Imgs /> */}
                        <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                        >
                        {fileList.length >= 6 ? null : uploadButton}
                        </Upload>
                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{  }} src={previewImage} />
                        </Modal>


                    </div> 
                </div>
                <div  className={Style['footer']}>
                    <div  className={Style['section_btn']}  onClick={this.clicks_fb.bind(this)}>
                        发布
                    </div>
                </div>
                {
                    flag?
                    <div  className={Style['footer_btns']}>
                        <div className={Style['section_fb']} >发布成功</div>
                    </div>
                    :''
                }
            </div>
        );
    }
    change(e){
        this.setState({
            value:e.target.value
        })
    }
    shangyieye(){
        let {history} =this.props
        history.go(-1)
    }
    clicks_fb(){
        this.setState({
            flag:!this.state.flag
        })
        
        let value =this.state.value;
        let list=[]

        this.state.fileList.map((item,index)=>{
            list.push(item.thumbUrl)
        })

        console.log(value,list)

        let {history} =this.props  //跳转个人近况

        setTimeout(()=>{
            this.setState({
                flag:false,
            })
            // history.push('/personalRecentSituation')
        },1500)

        

    }
}

export default RecentSituationOfMuen;