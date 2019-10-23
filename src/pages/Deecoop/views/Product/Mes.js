import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Productrouter from './Productrouter'

import slide1 from '../../images/home-slide-2_mes.jpg'

export default class Mes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: 'MES制造执行系统',
                    txt2: '生产计划的分解执行',
                    txt3: '生产过程的实时监管',
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
                                        <h2 className="product-details-content-title">MES制造执行系统及定制</h2>

                                        <h3 style={{visibility: 'hidden'}}>为企业带来什么</h3>
                                        <h3 className="product-details-content-view-title">为企业带来什么</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <ul className="cellView clearfix">
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_mes_02.png')} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '22px',margin: '10px 0'}}>生产计划</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>合理安排及调整生产计划，提高整体生产效率。</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_mes_03.png')} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '22px',margin: '10px 0'}}>生产现场</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>生产过程透明化，保障生产有序进行。</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_mes_04.png')} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '22px',margin: '10px 0'}}>生产物料</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>严控生产物料的数量、位置及状态，有效降低存货成本。</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%',marginTop: '10%'}} src={require('../../images/product_mes_05.png')} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '22px',margin: '10px 0'}}>制造决策</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>依据真实运营数据，精准驱动理性决策。</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_mes_06.png')} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '22px',margin: '10px 0'}}>质量追溯</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>实时记录生产全流程质量状态，有效控制缺陷数量。</div>
                                                </li>
                                                <li className="cellBox">
                                                    <div style={{width: '35%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_mes_07.png')} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '22px',margin: '10px 0'}}>协同管理</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>打破各环节的数据黑箱，减少沟通成本，提升运营效率。</div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h3 className="product-details-content-view-title">相关功能</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <div style={{padding: '2%'}}>
                                                <div><img src={require('../../images/product_mes_01.png')} alt=""/></div>
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