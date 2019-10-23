import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Caserouter from './Caserouter'

import slide1 from '../../images/case_management_01.jpg'

export default class Cmonitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '客户案例',
                    txt2: '企业设备监控工业云平台',
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
                                    <h2 className="product-details-content-title">企业设备监控工业云平台</h2>

                                    <h3 className="product-details-content-view-title" style={{visibility: 'hidden'}}>企业设备监控工业云平台</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{padding: '2%'}}>
                                            <img src={require('../../images/product_equipment_01.jpg')} />
                                        </div>
                                    </div>
                                    <h3 className="product-details-content-view-title">温州市文成县企业设备管理平台</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{float: 'left',width: '50%',padding: '2%'}}>
                                            <img src={require('../../images/case_equipment_01.jpg')} />
                                        </div>
                                        <div style={{float: 'left',width: '50%',padding: '2%'}}>
                                            <img src={require('../../images/case_equipment_02.jpg')} />
                                        </div>
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