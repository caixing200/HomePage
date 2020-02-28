import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'


import slide1 from '../../images/service_04.jpg'

export default class Prices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '标准版企业管理系统',
                    txt2: '销售管理、采购管理、仓库管理、生产管理…',
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
                                    <h2 className="product-details-content-title">价格</h2>


                                    <div className="clearfix product-details-content-view-detail" style={{marginTop:'30px'}}>
                                        {/*<h3 style={{padding: '0 15px'}}>云上系统</h3>*/}
                                        <div className="row clearfix" style={{padding: '0 15px'}}>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding: '10px'}}>
                                                <div className="priceView" style={{borderColor:'rgb(56,96,138)'}}>
                                                    <div className="priceTitle">智造云管家（标准版SaaS企业管理系统）</div>
                                                    <div className="priceBox clearfix" style={{backgroundColor:'rgb(23,55,94)'}}>
                                                        <div className="hidden-xs priceSaasTxt">
                                                            <p>1用户</p>
                                                            <p>免费试用</p>
                                                            <i className="priceSaasLine"></i>
                                                        </div>
                                                        <div className="hidden-xs priceSaasTxt">
                                                            <p>5用户</p>
                                                            <p>3999元/年</p>
                                                            <i className="priceSaasLine"></i>
                                                        </div>
                                                        <div className="hidden-xs priceSaasTxt">
                                                            <p>10用户</p>
                                                            <p>5999元/年</p>
                                                            <i className="priceSaasLine"></i>
                                                        </div>
                                                        <div className="hidden-xs priceSaasTxt">
                                                            <p>50用户</p>
                                                            <p>10999元/年</p>
                                                            <i className="priceSaasLine"></i>
                                                        </div>
                                                        <div className="hidden-xs priceSaasTxt">
                                                            <p>不限用户</p>
                                                            <p>29999元/年</p>
                                                        </div>

                                                        <div className="visible-xs priceSaasTxt1">
                                                            <p>1用户</p>
                                                            <p>免费试用</p>
                                                            <i className="priceSaasLine"></i>
                                                        </div>
                                                        <div className="visible-xs priceSaasTxt1">
                                                            <p>5用户</p>
                                                            <p>3999元/年</p>
                                                            <i className="priceSaasLine"></i>
                                                        </div>
                                                        <div className="visible-xs priceSaasTxt1">
                                                            <p>10用户</p>
                                                            <p>5999元/年</p>
                                                            <i className="priceSaasLine"></i>
                                                        </div>
                                                        <div className="visible-xs priceSaasTxt1">
                                                            <p>50用户</p>
                                                            <p>10999元/年</p>
                                                            <i className="priceSaasLine"></i>
                                                        </div>
                                                        <div className="visible-xs priceSaasTxt1">
                                                            <p>不限用户</p>
                                                            <p>29999元/年</p>
                                                        </div>
                                                    </div>
                                                    <div className="priceTitle priceTitle1">包括：销售管理、采购管理、仓库管理、生产管理、看板管理等功能，并持续迭代</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="product-details-content-view-title" style={{visibility: 'hidden'}}>价格</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}