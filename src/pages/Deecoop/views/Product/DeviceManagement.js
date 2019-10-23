import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Productrouter from './Productrouter'

import slide1 from '../../images/home-slide-4_iot.jpg'

export default class DeviceManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '机床及设备联网管理',
                    txt2: '机床网络化编程管理',
                    txt3: '设备状态监控及分析',
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
                                        <h2 className="product-details-content-title">设备管理云平台</h2>

                                        <h3 style={{visibility: 'hidden'}}>平台价值</h3>
                                        <h3 className="product-details-content-view-title" style={{marginBottom: '24px'}}>平台价值</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <ul className="clearfix">
                                                <li style={{float: 'left',width: '33.3%'}}>
                                                    <div style={{width: '25%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_platform_equipment_01.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',marginTop: '10px'}} className="details-content-text">设备管理</div>
                                                </li>
                                                <li style={{float: 'left',width: '33.3%'}}>
                                                    <div style={{width: '25%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_platform_equipment_02.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',marginTop: '10px'}} className="details-content-text">数据分析</div>
                                                </li>
                                                <li style={{float: 'left',width: '33.3%'}}>
                                                    <div style={{width: '25%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_platform_equipment_03.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',marginTop: '10px'}} className="details-content-text">效率提升</div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h3 className="product-details-content-view-title">全面的设备管理</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <p style={{fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;针对设备日常管理，云平台提供了远程监控、故障管理、设备维保等功能，通过设备数据采集，用户可以分析多维度的设备业务运营能力，帮助企业实现高效的运营管理。</p>
                                            <div style={{padding: '2%'}}>
                                                <div><img src={require('../../images/product_platform_equipment_04.png')} /></div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <Productrouter />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}