import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Productrouter from './Productrouter'

import slide1 from '../../images/home-slide-4_iot.jpg'

export default class DeviceData extends Component {
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
                                        <h2 className="product-details-content-title">设备数据采集与分析</h2>

                                        <h3 style={{visibility: 'hidden'}}>系统简介</h3>
                                        <h3 className="product-details-content-view-title">系统简介</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <p style={{fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过连接设备控制系统的数据接口，实时采集设备的运行、待机、报警、产量等数据，通过移动信号、Wifi或有线局域网，将数据传输到管理系统，经过对数据的清洗、处理、分析，让用户通过APP、WEB、电子看板等方式，以数字、文字、图形、表格等方式查看设备的实时、历史、统计、分析等数据信息。</p>
                                            <div style={{padding: '2%'}}>
                                                <div><img src={require('../../images/product_equipment_01.jpg')} /></div>
                                            </div>
                                        </div>

                                        <h3 className="product-details-content-view-title">部分功能展示</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <div style={{padding: '2%'}}>
                                                <div><img src={require('../../images/product_equipment_02.jpg')} /></div>
                                            </div>
                                            <div style={{padding: '20px 0 5px 0',textAlign: 'center',fontSize: '20px'}}>设备产量及工作效率对比</div>
                                            <div style={{padding: '2%'}}>
                                                <div><img src={require('../../images/product_equipment_04.png')} /></div>
                                            </div>
                                            <div style={{padding: '20px 0 5px 0',textAlign: 'center',fontSize: '20px'}}>员工与设备效率关联对比</div>
                                            <div style={{padding: '2%'}}>
                                                <div><img src={require('../../images/product_equipment_05.png')} /></div>
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