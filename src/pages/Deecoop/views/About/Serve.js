import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Aboutrouter from './Aboutrouter'

import slide1 from '../../images/about_us_01.jpg'

export default class Serve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setFontSize: '20px',
            bannerContents: [
                {
                    img: slide1,
                    txt1: '服务支持',
                    txt2: '',
                    txt3: '',
                },
            ],
            isShow: false
        }
        this._anTimer = ''
    }
    componentDidMount() {
        if($(window).width()<768){
            this.setState({
                setFontSize: '14px'
            })
        }
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
                                    <h2 className="product-details-content-title">服务支持</h2>
                                    <h3 className="product-details-content-view-title"
                                        style={{visibility: 'hidden'}}>服务支持</h3>
                                    <div className="clearfix product-details-content-view-detail">
                                        <div style={{padding: '2%'}} className="clearfix">
                                            <div style={{float: 'left',width: '33.3%'}}>
                                                <img style={{width: '100%'}} src={require('../../images/service_01.jpg')} />
                                                <div style={{backgroundColor:'rgb(0,176,80)',padding: '5%',height: '220px'}}>
                                                    <h3 style={{textAlign: 'center',fontSize: '20px',color: '#ffffff',marginBottom: '20px'}}>技术咨询</h3>
                                                    <p style={{
                                                        color: '#ffffff',
                                                        fontSize: this.state.setFontSize
                                                    }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为企业提供免费的智能制造转型升级的诊断、评估及咨询服务。</p>
                                                </div>
                                            </div>
                                            <div style={{float: 'left',width: '33.3%'}}>
                                                <img style={{width: '100%'}} src={require('../../images/service_02.jpg')} />
                                                <div style={{backgroundColor:'rgb(0,112,192)',padding: '5%',height: '220px'}}>
                                                    <h3 style={{textAlign: 'center',fontSize: '20px',color: '#ffffff',marginBottom: '20px'}}>产品服务</h3>
                                                    <div style={{
                                                        textAlign: 'center',
                                                        color: '#ffffff',
                                                        fontSize: this.state.setFontSize
                                                    }}>免费培训
                                                    </div>
                                                    <div style={{
                                                        textAlign: 'center',
                                                        color: '#ffffff',
                                                        fontSize: this.state.setFontSize
                                                    }}>版本更新
                                                    </div>
                                                    <div style={{
                                                        textAlign: 'center',
                                                        color: '#ffffff',
                                                        fontSize: this.state.setFontSize
                                                    }}>需求反馈
                                                    </div>
                                                    <div style={{
                                                        textAlign: 'center',
                                                        color: '#ffffff',
                                                        fontSize: this.state.setFontSize
                                                    }}>样板调研
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{float: 'left',width: '33.3%'}}>
                                                <img style={{width: '100%'}} src={require('../../images/service_03.jpg')} />
                                                <div style={{backgroundColor:'rgb(255,255,0)',padding: '5%',height: '220px'}}>
                                                    <h3 style={{textAlign: 'center',fontSize: '20px',color: '#000000',marginBottom: '20px'}}>售后服务</h3>
                                                    <div style={{
                                                        textAlign: 'center',
                                                        color: '#000000',
                                                        fontSize: this.state.setFontSize
                                                    }}>在线服务
                                                    </div>
                                                    <div style={{
                                                        textAlign: 'center',
                                                        color: '#000000',
                                                        fontSize: this.state.setFontSize
                                                    }}>热线支持
                                                    </div>
                                                    <div style={{
                                                        textAlign: 'center',
                                                        color: '#000000',
                                                        fontSize: this.state.setFontSize
                                                    }}>远程协助
                                                    </div>
                                                    <div style={{
                                                        textAlign: 'center',
                                                        color: '#000000',
                                                        fontSize: this.state.setFontSize
                                                    }}>现场服务
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Aboutrouter/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}