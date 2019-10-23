import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Solutionrouter from './Solutionrouter'

import slide1 from '../../images/solution_parts_01.jpg'

export default class AutoParts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '行业解决方案',
                    txt2: '汽车零部件行业',
                    txt3: '质量追溯、订单跟踪、准时交付',
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
                                    <h2 className="product-details-content-title">汽车零部件行业解决方案</h2>
                                    <h3 className="product-details-content-view-title" style={{visibility: 'hidden'}}>汽车零部件行业解决方案</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <p style={{fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;汽车零部件行业需要同时满足多个主机厂的产品大批量需求，由于车型越来越多，故零部件的型号也随之庞杂。面对客户的精细化管理的需求，企业生产过程的统筹管理、灵活应变及质量管控尤为重要。</p>
                                    </div>

                                    <h3 className="product-details-content-view-title">行业挑战</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <ul className="details-content">
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 多种工艺，合理安排工艺路线;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 掌握车间实时生产动态;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 提高订单过程的控性;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 严格质量管理，实现追溯管理;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 提升产线柔性，向混线生产发展;</span></li>
                                        </ul>
                                    </div>

                                    <h3 className="product-details-content-view-title">解决方案</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{paddingLeft: '2%',fontSize: '20px'}}>企业管理</div>
                                        <ul className="details-content" style={{padding: '1% 2%'}}>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> ERP + WMS;</span></li>
                                        </ul>
                                        <div style={{paddingLeft: '2%',fontSize: '20px'}}>生产管理</div>
                                        <ul className="details-content" style={{padding: '1% 2%'}}>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> MES生产制造执行系统;</span></li>
                                        </ul>
                                        <div style={{paddingLeft: '2%',fontSize: '20px'}}>透明生产</div>
                                        <ul className="details-content" style={{padding: '1% 2%'}}>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 设备联网，数据采集、分析及展示;</span></li>
                                        </ul>
                                        <div style={{paddingLeft: '2%',fontSize: '20px'}}>质量追溯</div>
                                        <ul className="details-content" style={{padding: '1% 2%'}}>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 打通订单、采购、仓储到生产过程的全部数据;</span></li>
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