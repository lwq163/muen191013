import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import testStore from "../mobx/index"
import "../css/dcq/dcqHome.css"
import { observer } from "mobx-react"
import "../static/font/fonts/iconfont.css";
import { Carousel, Icon } from 'antd';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Section from "../component/recentSituationOfMuenlist"

@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="dcqHomeDiv">
                <Header title="沐恩muen" flag={false} routers={this.props.history} />
                <main>
                    <div className="bannerSwiper">
                        <Carousel effect="fade">
                            <div>
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563896337996&di=65930e5a9a5fe8924f9903e95759665b&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0b7b02087bf40ad15a962c0b592c11dfa8ecceec.jpg" alt="" />
                            </div>
                            <div>
                                <img src="http://img3.imgtn.bdimg.com/it/u=2406073580,3672659945&fm=26&gp=0.jpg" alt="" />
                            </div>
                            <div>
                                <img src="http://img3.imgtn.bdimg.com/it/u=3780451434,750163885&fm=26&gp=0.jpg" alt="" />
                            </div>
                            <div>
                                <img src="http://pic1.win4000.com/wallpaper/2017-12-02/5a224e1203c40.jpg" alt="" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="homeList">
                        <ul>
                            {
                                testStore.testStore.dcqHomeData && testStore.testStore.dcqHomeData.map((item, index) =>
                                    <li key={index} onClick={this.handleRouterPush.bind(this,item.path)}>
                                        <i className={`iconfont icon-${item.iconfonts}`}></i>
                                        <NavLink to={item.path} >
                                            {item.tit}
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="moonRecent">
                        <div className="moonRecentTitle">
                            <p><i className="iconfont icon-zixun"></i>沐恩动态</p>
                            <span onClick={() => this.props.history.push("/recentSituationOfMuen")}>查看全部<i className="iconfont icon-chevron-thin-right"></i></span>
                        </div>
                        <ul className="moonRecentList">
                            <li>
                                <dl className='section_dltop'>
                                    <dt>
                                        <img src="http://img2.imgtn.bdimg.com/it/u=2705304326,1100186784&fm=26&gp=0.jpg" alt="" />
                                    </dt>
                                    <dd>
                                        <h3>沐恩</h3>
                                        <p>28分钟前</p>
                                    </dd>
                                </dl>
                                <h4>团契十三周年啦</h4>
                                <dl className='section_dlbottom'>
                                    <dt>
                                        <img src="http://img0.imgtn.bdimg.com/it/u=4062905256,3623457166&fm=26&gp=0.jpg" alt="" />
                                    </dt>
                                    <dd>
                                        <p>
                                            <Icon className='section_dlbottom_Icon_Left' type="heart" />
                                            <span>15</span>
                                        </p>
                                        <p>
                                            <Icon className='section_dlbottom_Icon_Left' type="solution" />
                                            <span>0</span>
                                        </p>
                                        <p>
                                            <Icon className='section_dlbottom_Icon_Left' type="like" />
                                            <span>0</span>
                                        </p>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className='section_dltop'>
                                    <dt>
                                        <img src="http://img2.imgtn.bdimg.com/it/u=2705304326,1100186784&fm=26&gp=0.jpg" alt="" />
                                    </dt>
                                    <dd>
                                        <h3>沐恩</h3>
                                        <p>28分钟前</p>
                                    </dd>
                                </dl>
                                <h4>团契十三周年啦</h4>
                                <dl className='section_dlbottom'>
                                    <dt>
                                        <img src="http://img0.imgtn.bdimg.com/it/u=4062905256,3623457166&fm=26&gp=0.jpg" alt="" />
                                    </dt>
                                    <dd>
                                        <p>
                                            <Icon className='section_dlbottom_Icon_Left' type="heart" />
                                            <span>15</span>
                                        </p>
                                        <p>
                                            <Icon className='section_dlbottom_Icon_Left' type="solution" />
                                            <span>0</span>
                                        </p>
                                        <p>
                                            <Icon className='section_dlbottom_Icon_Left' type="like" />
                                            <span>0</span>
                                        </p>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className='section_dltop'>
                                    <dt>
                                        <img src="http://img2.imgtn.bdimg.com/it/u=2705304326,1100186784&fm=26&gp=0.jpg" alt="" />
                                    </dt>
                                    <dd>
                                        <h3>沐恩</h3>
                                        <p>28分钟前</p>
                                    </dd>
                                </dl>
                                <h4>团契十三周年啦</h4>
                                <dl className='section_dlbottom'>
                                    <dt>
                                        <img src="http://img0.imgtn.bdimg.com/it/u=4062905256,3623457166&fm=26&gp=0.jpg" alt="" />
                                    </dt>
                                    <dd>
                                        <p>
                                            <Icon className='section_dlbottom_Icon_Left' type="heart" />
                                            <span>15</span>
                                        </p>
                                        <p>
                                            <Icon className='section_dlbottom_Icon_Left' type="solution" />
                                            <span>0</span>
                                        </p>
                                        <p>
                                            <Icon className='section_dlbottom_Icon_Left' type="like" />
                                            <span>0</span>
                                        </p>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <div className="groupSituation">
                        <div className="groupSituationTitle">
                            <p><i className="iconfont icon-fenlei-xuanzhong"></i>个人动态</p>
                            <span onClick={() => this.props.history.push("/personalRecentSituation")}>查看全部<i className="iconfont icon-chevron-thin-right"></i></span>
                        </div>
                        <Section muenDynamicsList={testStore.testStore.muenDynamicsList} />
                    </div>
                </main>
                <Footer routers={this.props.history} />
            </div>
        );
    }
    componentDidMount() {
        testStore.testStore.getdcqHomeData()
        testStore.testStore.getdcqHomeGroupData()
        testStore.testStore.getmuenDynamicsList()
    }
    handleRouterPush(path){
        this.props.history.push(path)
    }
}

export default Home;