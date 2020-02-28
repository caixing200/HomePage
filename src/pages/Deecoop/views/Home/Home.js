import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter } from 'react-router';
import {navindex, navstate} from '@/redux/actions/navIndex';

import Banner from '@/components/Banner/Banner'

import slide1 from '../../images/home-slide-1_erp.jpg'
import slide2 from '../../images/home-slide-2_mes.jpg'
import slide3 from '../../images/home-slide-3_wms.jpg'
import slide4 from '../../images/home-slide-4_iot.jpg'

import home_product1 from '../../images/home_product_1.jpg'
import home_product2 from '../../images/home_product_2.jpg'
import home_product3 from '../../images/home_product_3.jpg'
import home_product4 from '../../images/home_product_4.jpg'

import home_logo_erp from '../../images/home-logo-erp.png'
import home_logo_mes from '../../images/home-logo-mes.png'
import home_logo_wms from '../../images/home-logo-wms.png'
import home_logo_iot from '../../images/home-logo-iot.png'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '各行业ERP及管理系统的定制开发',
                    txt2: '为企业自有管理流程量身定制',
                    txt3: '完全贴合企业实际工作场景',
                },
                {
                    img: slide2,
                    txt1: 'MES制造执行系统',
                    txt2: '生产计划的分解执行',
                    txt3: '生产过程的实时监管',
                },
                {
                    img: slide3,
                    txt1: '智能仓储管理',
                    txt2: '精准的行为监督与控制',
                    txt3: '真正实现简单化管理、高效率作业',
                },
                {
                    img: slide4,
                    txt1: '机床及设备联网管理',
                    txt2: '机床网络化编程管理',
                    txt3: '设备状态监控及分析',
                },
            ]
        };
        this.qrcodeHtml = `<div class="qrcode"></div>`
    }

    navbar(index) {
        console.log(index)
    }
    componentDidMount(){
        this.props.navindex(this.props.location.pathname)
        $(function () {
            $(".scroll-to-target").click()
            $('[data-toggle="popover"]').popover()
            $(window).scroll(_=>{
                $('[data-toggle="popover"]').popover('hide')
            })
        })
    }
    goLogin(){
        this.props.history.push('/price/register');
    }

    render() {
        return (
            <div>
                <Banner contents={this.state.bannerContents}/>

                <div className="market-page-section">
                    <div className="auto-container">

                        <div className="row clearfix">

                            <div className="market-block-four col-md-3 col-sm-6 col-xs-12">
                                <div className="inner-box" onClick={()=>{this.navbar('1-1')}}>
                                    <div className="image">
                                        <a><img src={home_product1} /></a>
                                    </div>
                                    <div className="lower-content">
                                        <div className="icon-box">
                                            <img src={home_logo_erp} style={{width: '50px'}}/>
                                        </div>
                                        <h3>ERP及管理系统<br/>为各类企业订制开发</h3>
                                        <div className="text">为企业量身打造</div>
                                        <div className="text">满足企业自有管理流程</div>
                                    </div>
                                </div>
                            </div>

                            <div className="market-block-four col-md-3 col-sm-6 col-xs-12">
                                <div className="inner-box" onClick={()=>{this.navbar('1-2')}}>
                                    <div className="image">
                                        <a><img src={home_product2} /></a>
                                    </div>
                                    <div className="lower-content">
                                        <div className="icon-box">
                                            <img src={home_logo_mes} style={{width: '50px'}}/>
                                        </div>
                                        <h3>MES<br/>制造执行系统</h3>
                                        <div className="text">生产计划的分解执行</div>
                                        <div className="text">生产过程的实时监控</div>
                                    </div>
                                </div>
                            </div>

                            <div className="market-block-four col-md-3 col-sm-6 col-xs-12">
                                <div className="inner-box" onClick={()=>{this.navbar('1-3')}}>
                                    <div className="image">
                                        <a><img src={home_product3} /></a>
                                    </div>
                                    <div className="lower-content">
                                        <div className="icon-box">
                                            <img src={home_logo_wms} style={{width: '50px'}}/>
                                        </div>
                                        <h3>WMS<br/>智能仓储管理</h3>
                                        <div className="text">精准的行为监控与控制</div>
                                        <div className="text">简单管理、高效作业</div>
                                    </div>
                                </div>
                            </div>

                            <div className="market-block-four col-md-3 col-sm-6 col-xs-12">
                                <div className="inner-box" onClick={()=>{this.navbar('1-5')}}>
                                    <div className="image">
                                        <a><img src={home_product4}/></a>
                                    </div>
                                    <div className="lower-content">
                                        <div className="icon-box">
                                            <img src={home_logo_iot} style={{width: '50px'}} />
                                        </div>
                                        <h3>IoT<br/>机联网</h3>
                                        <div className="text">网络化编程管理</div>
                                        <div className="text">设备数据采集与分析</div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="services-section-three">
                    <div className="auto-container">
                        <div className="sec-title centered">
                            <h2>我们的服务</h2>
                            <div className="separator"></div>
                        </div>
                        <div className="row clearfix">
                            <div className="services-block-three col-md-3 col-sm-6 col-xs-12">
                                <div className="inner-box">
                                    <h3><a style={{cursor: 'default'}}>企业信息化系统开发</a></h3>
                                    <div className="text">我们提供ERP、MES、WMS、CRM、SCM等企业管理信息化系统的标准化产品及定制开发服务…</div>
                                    <a style={{display: 'none'}} className="read-more">Read More <span className="icon flaticon-right-arrow-1"></span></a>
                                </div>
                            </div>

                            <div className="services-block-three col-md-3 col-sm-6 col-xs-12">
                                <div className="inner-box">
                                    <h3><a style={{cursor: 'default'}}>数字化工厂解决方案</a></h3>
                                    <div className="text">提供数字化工厂及车间的项目咨询（免费）、设计、实施及交付的全流程服务…</div>
                                    <a style={{display: 'none'}} className="read-more">Read More <span className="icon flaticon-right-arrow-1"></span></a>
                                </div>
                            </div>

                            <div className="services-block-three col-md-3 col-sm-6 col-xs-12">
                                <div className="inner-box">
                                    <h3><a style={{cursor: 'default'}}>设备自动化改造</a></h3>
                                    <div className="text">传统制造型企业内有大量老旧生产设备，我们为企业提供自动化增效改造服务…</div>
                                    <a style={{display: 'none'}} className="read-more">Read More <span className="icon flaticon-right-arrow-1"></span></a>
                                </div>
                            </div>

                            <div className="services-block-three col-md-3 col-sm-6 col-xs-12">
                                <div className="inner-box">
                                    <h3><a style={{cursor: 'default'}}>设备数据采集与分析</a></h3>
                                    <div className="text">我们提供从设备联网到编程管理、数据采集、分析、维修、保养等设备管理全流程服务…</div>
                                    <a style={{display: 'none'}} className="read-more">Read More <span className="icon flaticon-right-arrow-1"></span></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="leftNar">
                    <div style={{height:'100%',position: 'relative'}}>
                        <div className="leftNarBtn" onClick={event => this.goLogin(event)}>
                            <div className="leftNarBtnTxt">
                                <div>申请</div>
                                <div>试用</div>
                            </div>
                        </div>
                        <div className="leftNarBtn"
                             data-trigger="hover"
                             data-container="body"
                             data-toggle="popover"
                             data-placement="left"
                             data-content="189-8979-2655">
                            <div className="leftNarBtnTxt">
                                <div>咨询</div>
                                <div>电话</div>
                            </div>
                        </div>
                        <div className="leftNarBtn"
                             data-trigger="hover"
                             data-html="true"
                             data-container="body"
                             data-toggle="popover"
                             data-placement="left"
                             data-content={this.qrcodeHtml}>
                            <div className="leftNarBtnTxt">
                                <div>微信</div>
                                <div>咨询</div>
                            </div>
                        </div>
                        <div className="leftNarBorder1"></div>
                        <div className="leftNarBorder2"></div>
                    </div>
                </div>
                <div className="footerNar hidden-xs">
                    <div style={{height:'100%',position: 'relative'}}>
                        <div className="footerNarBtn">
                            <div className="footerNarBtnTxt">
                                <span className="glyphicon glyphicon-earphone marginR"></span>
                                <span>189-8979-2655</span>
                            </div>
                        </div>
                        <div className="footerNarBtn">
                            <div className="footerNarBtnTxt"
                                 data-trigger="hover"
                                 data-html="true"
                                 data-container="body"
                                 data-toggle="popover"
                                 data-placement="top"
                                 data-content={this.qrcodeHtml}>
                                <span className="weixin marginR"></span>
                                <span>微信咨询</span>
                            </div>
                        </div>
                        <div className="footerNarBtn">
                            <div className="footerNarBtnTxt"  onClick={event => this.goLogin(event)}>
                                <span className="glyphicon glyphicon-plus-sign marginR"></span>
                                <span>申请试用</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navIndex: state.navIndex
    }
};

const mapDispatchToProps = {
    navindex, navstate
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));