import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Caserouter from './Caserouter'

import slide1 from '../../images/case_management_01.jpg'

export default class Cerpmes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '客户案例',
                    txt2: 'ERP、MES',
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
                                    <h2 className="product-details-content-title">ERP、MES</h2>

                                    <h3 style={{visibility: 'hidden'}}>温州某汽车零部件企业MES系统</h3>
                                    <h3 className="product-details-content-view-title">温州某汽车零部件企业MES系统</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{padding: '2%'}}>
                                            <img src={require('../../images/case_mes_02.jpg')} />
                                        </div>
                                        <div style={{paddingLeft: '2%',fontSize: '20px'}}>需求</div>
                                        <div style={{padding: '2%'}}>
                                            <img src={require('../../images/case_mes_01.jpg')} />
                                        </div>
                                        <ul className="details-content clearfix">
                                            <li style={{float: 'left',width: '33.3%'}}><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 设备管理;</span></li>
                                            <li style={{float: 'left',width: '33.3%'}}><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 生产排程;</span></li>
                                            <li style={{float: 'left',width: '33.3%'}}><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 过程管理;</span></li>
                                            <li style={{float: 'left',width: '33.3%'}}><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 模具管理;</span></li>
                                            <li style={{float: 'left',width: '33.3%'}}><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 工装管理;</span></li>
                                            <li style={{float: 'left',width: '33.3%'}}><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 检具管理;</span></li>
                                            <li style={{float: 'left',width: '33.3%'}}><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 物料管理;</span></li>
                                            <li style={{float: 'left',width: '33.3%'}}><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 能耗管理;</span></li>
                                            <li style={{float: 'left',width: '33.3%'}}><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 看板管理;</span></li>
                                            <li style={{float: 'left',width: '33.3%'}}><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 文档管理;</span></li>
                                            <li style={{float: 'left',width: '33.3%'}}><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 报表分析;</span></li>
                                            <li style={{float: 'left',width: '33.3%'}}><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 系统对接;</span></li>
                                        </ul>
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