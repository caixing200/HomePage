import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Caserouter from './Caserouter'

import slide1 from '../../images/case_management_01.jpg'

export default class Cmachinenet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '客户案例',
                    txt2: '机床联网',
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
                                    <h2 className="product-details-content-title">机床联网</h2>

                                    <h3 style={{visibility: 'hidden'}}>温州某阀门生产企业</h3>
                                    <h3 className="product-details-content-view-title">温州某阀门生产企业</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{paddingLeft: '2%',fontSize: '20px'}}>痛点与需求</div>
                                        <ul className="details-content">
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 数控车床加工程序传输与管理;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 机床数据采集;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 可视化看板;</span></li>
                                        </ul>
                                        <div style={{paddingLeft: '2%',fontSize: '20px'}}>解决方案</div>
                                        <ul className="details-content">
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 数控车床加工程序传输与管理;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 机床数据采集;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 可视化看板;</span></li>
                                        </ul>
                                        <div style={{padding: '2%'}}>
                                            <img src={require('../../images/case_equipment_03.jpg')} />
                                        </div>
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