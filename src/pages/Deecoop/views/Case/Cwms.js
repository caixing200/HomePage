import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Caserouter from './Caserouter'

import slide1 from '../../images/case_management_01.jpg'

export default class Cwms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '客户案例',
                    txt2: 'WMS',
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
                                    <h2 className="product-details-content-title">WMS仓库管理系统</h2>

                                    <h3 style={{visibility: 'hidden'}}>某烟草集团仓储管理</h3>
                                    <h3 className="product-details-content-view-title">某烟草集团仓储管理</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{float: 'left',width: '58%',padding: '2%'}}>
                                            <img src={require('../../images/case_wms_01.jpg')} />
                                        </div>
                                        <div style={{float: 'left',width: '42%',padding: '2%'}}>
                                            <img src={require('../../images/case_wms_02.jpg')} />
                                        </div>
                                    </div>
                                    <div className="clearfix product-details-content-view-detail">
                                        <ul className="details-content">
                                            <li><span className="details-content-text"> RFID托盘管理;</span></li>
                                            <li><span className="details-content-text"> 电子货位管理系统;</span></li>
                                            <li><span className="details-content-text"> 叉车智能指挥系统;</span></li>
                                            <li><span className="details-content-text"> 智能门控系统;</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Caserouter />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}