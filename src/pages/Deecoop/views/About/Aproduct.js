import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Aboutrouter from './Aboutrouter'

import slide1 from '../../images/about_us_01.jpg'

export default class Aproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '关于我们',
                    txt2: '',
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
                                    <h2 className="product-details-content-title">产品架构</h2>

                                    <h3 className="product-details-content-view-title" style={{visibility: 'hidden'}}>产品架构</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{padding: '2%'}}>
                                            <img src={require('../../images/tech_01.jpg')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Aboutrouter />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}