import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Productrouter from './Productrouter'

import slide1 from '../../images/home-slide-1_erp.jpg'

export default class Operation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '适用于制造业的运营管理云平台',
                    txt2: 'ERP+WMS+MES',
                    txt3: '帮助中小企业实现低成本信息化管理',
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
                                        <h2 className="product-details-content-title">标准版SaaS企业管理系统</h2>

                                        <h3 className="product-details-content-view-title" style={{visibility: 'hidden'}}>标准版SaaS企业管理系统</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <div style={{float: 'left',width: '33.3%',padding: '2%'}}>
                                                <div style={{textAlign: 'center'}}><img style={{display: 'inline-block'}} src={require('../../images/product_platform_management_01.png')} /></div>
                                                <div style={{textAlign: 'center'}} className="details-content-text">低成本信息化</div>
                                            </div>
                                            <div style={{float: 'left',width: '33.3%',padding: '2%'}}>
                                                <div style={{textAlign: 'center'}}><img style={{display: 'inline-block'}} src={require('../../images/product_platform_management_02.png')} /></div>
                                                <div style={{textAlign: 'center'}} className="details-content-text">打通数据孤岛</div>
                                            </div>
                                            <div style={{float: 'left',width: '33.3%',padding: '2%'}}>
                                                <div style={{textAlign: 'center'}}><img style={{display: 'inline-block'}} src={require('../../images/product_platform_management_03.png')} /></div>
                                                <div style={{textAlign: 'center'}} className="details-content-text">实时数据监控</div>
                                            </div>
                                        </div>

                                        <h3 className="product-details-content-view-title">融合多个管理系统，全面解决管理需求</h3>

                                        <h1 style={{marginBottom: '20px',textAlign: 'center'}}>ERP + WMS + MES</h1>

                                        <h3 className="product-details-content-view-title" style={{marginTop: '35px'}}>多维数据分析，助力理性决策</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <div style={{float: 'left',width: '50%', padding: '1%'}}>
                                                <div><img src={require('../../images/product_platform_management_04.png')} /></div>
                                            </div>
                                            <div style={{float: 'left',width: '50%', padding: '1%'}}>
                                                <div><img src={require('../../images/product_platform_management_05.png')} /></div>
                                            </div>
                                            <div style={{float: 'left',width: '50%', padding: '1%'}}>
                                                <div><img src={require('../../images/product_platform_management_06.png')} /></div>
                                            </div>
                                            <div style={{float: 'left',width: '50%', padding: '1%'}}>
                                                <div><img src={require('../../images/product_platform_management_07.png')} /></div>
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