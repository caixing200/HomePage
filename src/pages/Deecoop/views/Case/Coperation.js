import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Caserouter from './Caserouter'

import slide1 from '../../images/case_management_01.jpg'

export default class Coperation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '客户案例',
                    txt2: '企业运营管理云平台',
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
                                    <h2 className="product-details-content-title">企业运营管理工业云平台</h2>

                                    <h3 className="product-details-content-view-title" style={{visibility: 'hidden'}}>企业运营管理工业云平台</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{padding: '2%'}}>
                                            <img src={require('../../images/case_management_02.jpg')} />
                                        </div>
                                    </div>

                                    <h3 className="product-details-content-view-title">温州市瓯海区工业云平台-云上企业</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <p style={{fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;瓯海区工业云平台于2019年1月上线，是温州市瓯海区政府为区内中小制造型企业量身打造的运营管理信息化公共服务平台。</p>
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