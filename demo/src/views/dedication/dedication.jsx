import React, { Component } from 'react';
import "./dedication.scss"
import 'antd/dist/antd.css';
import { Icon,Radio} from 'antd';
import Header from "../../component/Header"
class dedication extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           value:"0" 
         };
    }
    render() {
        return (
             <div className="root">
                 <Header title="奉献" flag={true} routers={this.props.history} />
                 <p>沐恩家人</p> 
                 <span className='spans'>---  沐恩  ---</span>
                 <div>
                    <Radio.Group defaultValue="0" buttonStyle="solid" onChange={(defaultValue)=>this.changeValue(defaultValue)} className="radio">
                        <Radio.Button value="0">微信</Radio.Button>
                        <Radio.Button value="1">支付宝</Radio.Button>
                    </Radio.Group>
                </div>

                 <div className="box">
                     
                     <img src={this.state.value === "0" ? "https://qr.api.cli.im/qr?data=%E7%9C%9F%E5%82%BB%E4%BA%86%3F&level=H&transparent=0&bgcolor=%23FFFFFF&forecolor=&blockpixel=12&marginblock=2&logourl=%2F%2Fstatic.clewm.net%2Fcli%2Fimages%2Fbeautify%2Flogo%2Ficon1.png%3Fv%3D20170417&size=400&text=&logoshape=no&fontsize=30&fontfamily=msyh.ttf&fontcolor=&incolor=&outcolor=&qrcode_eyes=&background=images%2Fbackground%2Fbg16.png&wper=0.78&hper=0.78&tper=0.11&lper=0.11&eye_use_fore=1&qrpad=10&kid=bizcliim&time=1564365750&key=8bdd5258bdf6f9d40c96fa246ab24c2c" : "https://qr.api.cli.im/qr?data=%E5%8F%AF%E8%83%BD%E6%98%AF%E7%9C%9F%E5%82%BB%E4%BA%86&level=H&transparent=0&bgcolor=%23FFFFFF&forecolor=&blockpixel=12&marginblock=2&logourl=%2F%2Fstatic.clewm.net%2Fcli%2Fimages%2Fbeautify%2Flogo%2Ficon6.png%3Fv%3D20170417&size=400&text=&logoshape=no&fontsize=30&fontfamily=msyh.ttf&fontcolor=&incolor=&outcolor=&qrcode_eyes=&background=images%2Fbackground%2Fbg16.png&wper=0.78&hper=0.78&tper=0.11&lper=0.11&eye_use_fore=1&qrpad=10&kid=bizcliim&time=1564365617&key=7941274799bd7728554f7025e16a35dc" } alt=""/>
                     
                     
                 </div>

                 <b><Icon type="arrow-up" />点击保存二维码</b>
             </div>
        );
    }   

      changeValue(i){
            this.setState({
                value:i.target.value 
            })
            console.log(this.state.value)
      }
}

export default dedication;