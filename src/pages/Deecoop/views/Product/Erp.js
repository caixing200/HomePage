import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Productrouter from './Productrouter'

import slide1 from '../../images/home-slide-1_erp.jpg'
import productErp1 from '../../images/product_erp_01.jpg'
import productErp2 from '../../images/product_erp_02.jpg'
import productErp3 from '../../images/product_erp_03.jpg'
import productErp4 from '../../images/product_erp_04.jpg'
import productErp5 from '../../images/product_erp_05.png'
import productErp6 from '../../images/product_erp_06.png'
import productErp7 from '../../images/product_erp_07.png'
import erpsheet1 from '../../images/erp_sheet_01.jpg'
import erpsheet2 from '../../images/erp_sheet_02.jpg'
import erpsheet3 from '../../images/erp_sheet_03.jpg'
import erpsheet4 from '../../images/erp_sheet_04.jpg'

export default class Erp extends Component {
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
                                    <h2 className="product-details-content-title">ERP及定制</h2>

                                    <h3 style={{visibility: 'hidden'}}>灵活选择产品布署</h3>
                                    <h3 className="product-details-content-view-title">灵活选择产品布署</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{float: 'left',width: '33.3%',padding: '2%'}}>
                                            <div><img src={productErp2} /></div>
                                            <div style={{textAlign: 'center',marginTop: '10px'}}
                                                 className="details-content-text">公有云账户租用
                                            </div>
                                        </div>
                                        <div style={{float: 'left',width: '33.3%',padding: '2%'}}>
                                            <div><img src={productErp3} /></div>
                                            <div style={{textAlign: 'center',marginTop: '10px'}}
                                                 className="details-content-text">企业私有云
                                            </div>
                                        </div>
                                        <div style={{float: 'left',width: '33.3%',padding: '2%'}}>
                                            <div><img src={productErp4} /></div>
                                            <div style={{textAlign: 'center',marginTop: '10px'}}
                                                 className="details-content-text">企业内网布署
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="product-details-content-view-title">全面解决企业管理问题</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{float: 'left',width: '50%',padding: '2%'}}>
                                            <p className="details-content-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;打通企业经营的销售、仓储、采购、生产等经营管理环节，为中、小、微企业提供一站式的管理服务，助力企业提升综合竞争力。</p>
                                        </div>
                                        <div style={{float: 'left',width: '50%',padding: '2%'}}>
                                            <div><img src={productErp1} alt=""/></div>
                                        </div>
                                    </div>

                                    <h3 className="product-details-content-view-title">销售管理</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{float: 'left',width: '52%',padding: '2%',marginRight: '2%'}}>
                                            <img src={productErp5} alt=""/>
                                        </div>
                                        <ul className="details-content">
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 实时监控订单的完成进度;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 多维度分析销售订单的各项数据（可按需求为客户免费定制开发）;</span>
                                            </li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 同一商品支持不同计量模式的转换（例：封箱带的计量单位“卷”、“箱”、“公斤”、“平方”;</span>
                                            </li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 支持先计量后计价的销售模式（例：接单时按“根”，结账时按“吨”）;</span>
                                            </li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 订单的发货及退货管理;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 应收款及开票管理;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> ...</span></li>
                                        </ul>
                                    </div>

                                    <h3 className="product-details-content-view-title">采购管理</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{float: 'right',width: '52%',padding: '2%',marginLeft: '2%'}}>
                                            <img src={productErp6} alt=""/>
                                        </div>
                                        <ul className="details-content">
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 可对库存商品进行齐套分析;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 实时监控采购计划及订单的完成进度;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 支持采购收货与仓库入库数据的联动;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 支持采购退货与应付款数据的联动;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 采购收票管理;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> ...</span></li>
                                        </ul>
                                    </div>

                                    <h3 className="product-details-content-view-title">仓库管理</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{float: 'left',width: '52%',padding: '2%',marginRight: '2%'}}>
                                            <img src={productErp7} alt=""/>
                                        </div>
                                        <ul className="details-content">
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 出库、入库、移库、盘点等功能;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 可自定义多层级的仓库（库、区、排、列、层、号）;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> 支持虚拟库对其他部门及外部货品进行管理;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span
                                                className="details-content-text"> ...</span></li>
                                        </ul>
                                    </div>

                                    <h3 className="product-details-content-view-title">丰富的报表功能（可按需定制）</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{padding: '2%'}}>
                                                <img src={erpsheet1} alt=""/>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{padding: '2%'}}>
                                                <img src={erpsheet2} alt=""/>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{padding: '2%'}}>
                                                <img src={erpsheet3} alt=""/>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{padding: '2%'}}>
                                                <img src={erpsheet4} alt=""/>
                                            </div>
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