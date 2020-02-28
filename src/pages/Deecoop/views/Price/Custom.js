import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'


import slide1 from '../../images/service_04.jpg'

export default class Custom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '定制企业信息化系统',
                    txt2: 'ERP、MES、WMS等企业信息化系统定制',
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
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className={`product-details-content ${this.state.isShow?'product-details-animate':''}`}>
                                    <h2 className="product-details-content-title">定制企业信息化系统</h2>


                                    <div className="clearfix product-details-content-view-detail">
                                        <h3 style={{padding: '0 15px',visibility: 'hidden'}}>定制系统</h3>
                                        <div className="row clearfix" style={{padding: '0 15px'}}>
                                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" style={{padding: '10px'}}>
                                                <div className="priceView">
                                                    <div className="priceTitle">ERP定制</div>
                                                    <div className="priceBox clearfix">
                                                        <div className="priceTxt">
                                                            <p>买断</p>
                                                            <p>9.99万</p>
                                                        </div>
                                                        <div className="priceTxt">
                                                            <p>租用</p>
                                                            <p>3.69万/年</p>
                                                        </div>
                                                        <div className="priceLine"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" style={{padding: '10px'}}>
                                                <div className="priceView">
                                                    <div className="priceTitle">MES定制</div>
                                                    <div className="priceBox clearfix">
                                                        <div className="priceTxt">
                                                            <p>买断</p>
                                                            <p>15.99万</p>
                                                        </div>
                                                        <div className="priceTxt">
                                                            <p>租用</p>
                                                            <p>5.69万/年</p>
                                                        </div>
                                                        <div className="priceLine"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" style={{padding: '10px'}}>
                                                <div className="priceView">
                                                    <div className="priceTitle">WMS定制</div>
                                                    <div className="priceBox clearfix">
                                                        <div className="priceTxt">
                                                            <p>买断</p>
                                                            <p>13.99万</p>
                                                        </div>
                                                        <div className="priceTxt">
                                                            <p>租用</p>
                                                            <p>4.69万/年</p>
                                                        </div>
                                                        <div className="priceLine"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p style={{textAlign: 'center',color: '#848484',fontSize: '16px'}}>产品免费升级且不限用户数，价格含定制开发费，不含硬件费用</p>
                                    </div>

                                    <h3 className="product-details-content-view-title">定制项目实施费用</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <p style={{textAlign: 'center',color: '#000',fontSize: '30px'}}>10,000 ~ 50,000</p>
                                        <p style={{textAlign: 'center',color: '#848484'}}>根据项目实施的时间长短定价</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-details">
                    <div className="services-section-three" style={{paddingTop: '40px'}}>
                        <div className="auto-container">
                            <div className="sec-title centered" style={{marginBottom: '10px'}}>
                                <h2>专业化的定制服务流程</h2>
                            </div>
                            <div className="row clearfix product-details-content-view-detail">
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>01</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>项目咨询</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>需求分析</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>02</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>上门拜访</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>沟通需求</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>调研现状</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>03</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>方案制定</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>沟通演示</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>方案调整</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>04</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>项目报价</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>商务洽谈</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>合同签订</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>05</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>项目实施</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>项目验收</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>06</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>售后服务</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}