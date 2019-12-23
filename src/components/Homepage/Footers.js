import React, {Component} from 'react';

export default class Footers extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isFooterFixed: false,
            navbarIndex: 0,
        }
    }
    render(){
        return(
            <div className={`main-footer ${this.state.isFooterFixed?'fixedFooter':''}`}>
                <div className="auto-container">
                    <div className="widgets-section">
                        <div className="row clearfix">
                            <div className="column col-xs-12">
                                <div className="footer-widget logo-widget">
                                    <div className="logo">
                                        <a><img src={this.props.logoWhite} style={{width:'300px'}}/></a>
                                    </div>
                                    <div className="widget-content">
                                        <div className="text" style={{fontSize: '20px'}}>顶智智能技术有限公司</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">


                            <div className="column col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-widget logo-widget">
                                    <div className="widget-content">
                                        <div className="text">浙江运营中心</div>
                                        <div className="text">浙江省温州市瓯海区朝阳新街225号<br/>华中科技大学温州先进制造技术研究院4F</div>
                                        <div className="text hidden-md hidden-lg">电话：0577-86005011</div>
                                        <div className="text hidden-md hidden-lg"><span style={{visibility: 'hidden'}}>电话：</span>18989792655</div>
                                    </div>
                                </div>
                            </div>



                            <div className="column col-md-2 col-sm-6 col-xs-12">
                                <div className="footer-widget logo-widget">
                                    <div className="widget-content">
                                        <div className="text">上海办事处</div>
                                        <div className="text">上海市杨浦区黄兴路1778号东方蓝海国际广场1栋16F</div>
                                        <div className="text hidden-md hidden-lg">电话：13601660655</div>
                                    </div>
                                </div>
                            </div>


                            <div className="column col-md-2 col-sm-6 col-xs-12">
                                <div className="footer-widget logo-widget">
                                    <div className="widget-content">
                                        <div className="text">南京办事处</div>
                                        <div className="text">南京市秦淮区秦虹小区康安里9栋</div>
                                        <div className="text hidden-md hidden-lg">电话：13770349882</div>
                                    </div>
                                </div>
                            </div>


                            <div className="column col-md-2 col-sm-6 col-xs-12">
                                <div className="footer-widget logo-widget">
                                    <div className="widget-content">
                                        <div className="text">华中运营中心</div>
                                        <div className="text">武汉市洪山区光谷大道3号未来之光7栋510室</div>
                                        <div className="text hidden-md hidden-lg">电话：18989792655</div>
                                    </div>
                                </div>
                            </div>


                            <div className="column col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-widget logo-widget">
                                    <div className="widget-content">
                                        <div className="text">实验展示中心</div>
                                        <div className="text">华中科技大学&nbsp;&nbsp;自动化学院<br/>武汉市洪山区珞喻路1037号</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row clearfix hidden-xs hidden-sm">


                            <div className="column col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-widget logo-widget">
                                    <div className="widget-content">
                                        <div className="text" style={{marginBottom: 0}}>电话<span className="hidden-lg hidden-sm hidden-xs">:</span><span className="hidden-md">：</span>0577-86005011</div>
                                        <div className="text"><span style={{visibility: 'hidden'}}>电话<span className="hidden-lg hidden-sm hidden-xs">:</span><span className="hidden-md">：</span></span>18989792655</div>
                                    </div>
                                </div>
                            </div>



                            <div className="column col-md-2 col-sm-6 col-xs-12">
                                <div className="footer-widget logo-widget">
                                    <div className="widget-content">
                                        <div className="text"><span style={{whiteSpace:'nowrap'}}>电话</span><span className="hidden-lg hidden-sm hidden-xs">:</span><span className="hidden-md">：</span>13601660655</div>
                                    </div>
                                </div>
                            </div>


                            <div className="column col-md-2 col-sm-6 col-xs-12">
                                <div className="footer-widget logo-widget">
                                    <div className="widget-content">
                                        <div className="text"><span style={{whiteSpace:'nowrap'}}>电话</span><span className="hidden-lg hidden-sm hidden-xs">:</span><span className="hidden-md">：</span>13770349882</div>
                                    </div>
                                </div>
                            </div>


                            <div className="column col-md-2 col-sm-6 col-xs-12">
                                <div className="footer-widget logo-widget">
                                    <div className="widget-content">
                                        <div className="text"><span style={{whiteSpace:'nowrap'}}>电话</span><span className="hidden-lg hidden-sm hidden-xs">:</span><span className="hidden-md">：</span>18989792655</div>
                                    </div>
                                </div>
                            </div>


                            <div className="column col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-widget logo-widget">
                                    <div className="widget-content">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer-bottom" style={{paddingTop: 0}}>
                    <div className="auto-container">


                        <div className="copyright" style={{borderTop: 'none',marginTop:this.state.navbarIndex===0?'30px':'0'}}>
                        <div>
                            <div style={{display: 'inline-block'}}>
                                <p style={{float:'left',height:'20px',lineHeight:'20px',margin: 0}}>顶智智能技术有限公司</p>
                            </div>
                            <div style={{display: 'inline-block',margin: '0 20px'}}>
                                <a target="_blank" href="http://www.beian.miit.gov.cn/" style={{display:'inline-block',textDecoration:'none',height:'20px',lineHeight:'20px'}}><p style={{float:'left',height:'20px',lineHeight:'20px',margin: 0, color:'#939393'}}>浙ICP备17012753号-1</p></a>
                            </div>
                            <div style={{display: 'inline-block'}}>
                                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33030402000643" style={{display:'inline-block',textDecoration:'none',height:'20px',lineHeight:'20px'}}><img src={this.props.gonganImg} style={{float:'left'}}/><p style={{float:'left',height:'20px',lineHeight:'20px',margin: '0px 0px 0px 5px', color:'#939393'}}>浙公网安备 33030402000643号</p></a>
                            </div>
                        </div>
                        <div>Copyright © 2019 <a>Deecoop Technologies</a> All rights reserved.</div>

                    </div>

                </div>
            </div>
            </div>
        )
    }
}