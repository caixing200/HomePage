import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Solutionrouter from './Solutionrouter'

import slide1 from '../../images/solution_tobacco_01.jpg'

export default class Tobacco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '行业解决方案',
                    txt2: '烟草行业',
                    txt3: '高效、精准的仓库管理',
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
                                    <h2 className="product-details-content-title">烟草行业解决方案</h2>
                                    <h3 className="product-details-content-view-title" style={{visibility: 'hidden'}}>烟草行业解决方案</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <p style={{fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;烟草行业对仓库作业有较高的效率及精度度的要求。由于烟草货值较大且保质期较短，故烟草企业对先进先出及精准、高效发货有严格的要求。</p>
                                    </div>

                                    <h3 className="product-details-content-view-title">行业挑战</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <ul className="details-content">
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 仓库发货慢，导致提货车辆排除严重;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 作业人员找不到货;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 作业人员无法确保先进先出;</span></li>
                                        </ul>
                                    </div>

                                    <h3 className="product-details-content-view-title">解决方案</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{paddingLeft: '2%',fontSize: '20px'}}>智能仓储管理系统WMS</div>
                                        <ul className="details-content">
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> RFID托盘管理;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 严格的批次管理;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 多层级的货位管理;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 作业提示（位置、批次、数量提示）;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 叉车智能导航系统;</span></li>
                                            <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 智能门控系统（错误提示，且大门不开）;</span></li>
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