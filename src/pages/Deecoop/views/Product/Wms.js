import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Productrouter from './Productrouter'

import slide1 from '../../images/home-slide-3_wms.jpg'

export default class Wms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '智能仓储管理',
                    txt2: '精准的行为监督与控制',
                    txt3: '真正实现简单化管理、高效率作业',
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
                                        <h2 className="product-details-content-title">WMS仓库管理系统及定制</h2>

                                        <h3 style={{visibility: 'hidden'}}>产品优势</h3>
                                        <h3 className="product-details-content-view-title">产品优势</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <div style={{float: 'right',width: '40%',padding: '2%'}}>
                                                <img src={require('../../images/product_wms_01.png')}/>
                                            </div>
                                            <ul className="details-content">
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 自定义多仓库管理（成品库、原料库、第三方仓库、危险品库…）</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 货位多层级管理（库-区-排-列-层-号）</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 仓库作业智能提示（货品信息、位置信息、数量、批次等）</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 真正做到先进先出，减少企业存货损失</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 丰富的报表分析功能（可按需定制）</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 功能高度灵活、可配置，行业适用性广</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 数字化系统管理，有效提升作业效率</span></li>
                                            </ul>
                                        </div>

                                        <h3 className="product-details-content-view-title">系统功能</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <ul className="cellView clearfix">
                                                <li className="cellBox">
                                                    <div style={{width: '25%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '110%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_02.png')}/>
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>入库管理</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '25%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '110%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_03.png')}/>
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>出库管理</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '25%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '110%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_04.png')}/>
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>库存管理</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '25%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '110%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_05.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>任务管理</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '25%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '110%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_06.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>分析报表</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '25%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '110%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_07.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>盘点管理</div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h3 className="product-details-content-view-title">相关功能展示</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <div style={{float: 'left',width: '70%',padding: '2%'}}>
                                                <img src={require('../../images/product_wms_17.png')} />
                                            </div>
                                            <div style={{float: 'left',width: '30%',padding: '1%'}}>
                                                <img src={require('../../images/product_wms_18.png')} />
                                            </div>
                                        </div>

                                        <h3 className="product-details-content-view-title">适用行业</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <ul className="cellView clearfix">
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_08.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>商品流通</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_09.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>生产制造</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_10.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>电子商务</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_11.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>三方物流</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_12.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>食品餐饮</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_13.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>服装时尚</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_14.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>母婴用品</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_15.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>医药卫生</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_wms_16.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '18px',margin: '10px 0'}}>金融质押</div>
                                                </li>
                                            </ul>
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