import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Solutionrouter from './Solutionrouter'

import slide1 from '../../images/solution_vale_01.jpg'

export default class Pump extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '行业解决方案',
                    txt2: '泵阀行业',
                    txt3: '小批量、多品种、机加工',
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
                                    <h2 className="product-details-content-title">泵阀行业解决方案</h2>

                                    <h3 className="product-details-content-view-title" style={{visibility: 'hidden'}}>泵阀行业解决方案</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <p style={{fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;泵阀行业以订单生产模式为主，产品种类繁多，生产模式一般为小批量多品种，对企业订单保质、保量、按时交付的能力有较高要求。</p>
                                    </div>

                                    <h3 className="product-details-content-view-title">行业挑战</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <ul className="details-content">
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 保证订单按时、保质交付;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 实时掌握生产情况;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 及时响应车间突发问题;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 提高订单任务可控性;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 提高生产效率，降低生产成本;</span></li>
                                        </ul>
                                    </div>

                                    <h3 className="product-details-content-view-title">解决方案</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{paddingLeft: '2%',fontSize: '20px'}}>生产过程</div>
                                        <ul className="details-content" style={{padding: '1% 2%'}}>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> DNC数控机床一元化编程管理;</span></li>
                                        </ul>
                                        <div style={{paddingLeft: '2%',fontSize: '20px'}}>透明生产</div>
                                        <ul className="details-content" style={{padding: '1% 2%'}}>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 数控机床数据采集、分析及展示;</span></li>
                                        </ul>
                                        <div style={{paddingLeft: '2%',fontSize: '20px'}}>生产管理</div>
                                        <ul className="details-content" style={{padding: '1% 2%'}}>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> MES生产制造执行系统;</span></li>
                                        </ul>
                                        <div style={{paddingLeft: '2%',fontSize: '20px'}}>企业管理</div>
                                        <ul className="details-content" style={{padding: '1% 2%'}}>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> ERP + WMS;</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Solutionrouter />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}