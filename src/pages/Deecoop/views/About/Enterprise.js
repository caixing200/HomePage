import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Aboutrouter from './Aboutrouter'

import slide1 from '../../images/about_us_01.jpg'

export default class Enterprise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '关于我们',
                    txt2: '',
                    txt3: '',
                },
            ],
            isShow: false
        }
        this._anTimer = ''
    }
    componentDidMount() {
        clearTimeout(this._anTimer)
        this._anTimer = setTimeout(_=>{
            this.setState({
                isShow: true
            })
        })
    }

    render() {
        return (
            <div>
                <Banner contents={this.state.bannerContents}/>

                <div className="product-details">
                    <div className="auto-container">
                        <div className="row clearfix" style={{padding: '30px 0'}}>
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className={`product-details-content ${this.state.isShow?'product-details-animate':''}`}>
                                    <h2 className="product-details-content-title">企业简介</h2>
                                    <h3 className="product-details-content-view-title" style={{visibility: 'hidden'}}>企业简介</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <p style={{fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顶智智能是华中科技大学温州先进制造技术研究院下属团队，主要成员均来自于华中科技大学自动化学院，是一家为企业提供信息化、数字化、智能化管理系统的高科技公司。</p>
                                        <p style={{fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司为客户定制开发信息化管理系统（ERP、MES、WMS、CRM、SCM等）并提供数字化工厂的整体规划与工程实施，通过数字化、信息化、智能化技术提升客户企业综合效率，为其实现高质量转型升级提供有效技术支持。</p>
                                        <div style={{paddingTop: '20px',textAlign: 'center',fontSize: '16px'}}>
                                            <p style={{fontSize: '18px',color: '#000'}}>企业背景</p>
                                            <ul>
                                                <li>华中科技大学温州先进制造技术研究院核心团体</li>
                                                <li>温州市智能制造研究院创始单位</li>
                                                <li>温州市瓯海区领军型人才创新团队</li>
                                                <li>武汉市RFID生产力促进中心合作单位</li>
                                                <li>台州玉环市智能化改造工程服务单位</li>
                                                <li>温州瓯海区智能化改造工程服务单位</li>
                                                <li>温州文成县智能化改造工程服务单位</li>
                                                <li>温州洞头区智能化改造工程服务单位</li>
                                                <li>福建福鼎市智能化改造工程服务单位</li>
                                            </ul>
                                        </div>
                                        <div style={{paddingTop: '20px',textAlign: 'center',fontSize: '16px'}}>
                                            <p style={{fontSize: '18px',color: '#000'}}>企业定位</p>
                                            <ul>
                                                <li>企业信息化系统供应商</li>
                                                <li>数字化工厂解决方案供应商</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Aboutrouter />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}