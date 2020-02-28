import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {navindex, navstate} from '../../redux/actions/navIndex';

// import logoWhite from '@/static/Homepage/images/logo-white.png'


class Header extends Component{
    constructor(props) {
        super(props);
    }
    getBasePath(pathStr){
        if(!pathStr) return '/'
        return '/' + pathStr.split('/')[1]
    }
    goSaas(){
        window.open('http://web.deecoop.cn')
    }
    render(){
        return (
            <div className="main-header">
                <div className="main-box">
                    <div className="auto-container">
                        <div className="outer-container clearfix">
                            <div className="logo-box" style={{padding: "35px 0"}}>
                                <div className="logo"><a><img src={this.props.logoWhite} style={{width: "300px"}}/></a>
                                </div>
                            </div>
                            <div className="nav-outer clearfix">
                                <div className="main-menu">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                                data-target=".navbar-collapse">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div className="navbar-collapse collapse clearfix">
                                        <ul className="navigation clearfix">
                                            <li className={`${this.getBasePath(this.props.navIndex._path) == '/'?'current':''}`}><Link to="/">首页</Link></li>
                                            <li className={`dropdown ${this.getBasePath(this.props.navIndex._path) == '/product'?'current':''}`}>
                                                <Link to="/product">产品</Link>
                                                <ul>
                                                    <li><Link to="/product/operation">标准版SaaS企业管理系统</Link></li>
                                                    <li><Link to="/product/erp">ERP及定制</Link></li>
                                                    <li><Link to="/product/mes">MES制造执行系统及定制</Link></li>
                                                    <li><Link to="/product/wms">WMS仓库管理系统及定制</Link></li>
                                                    <li><Link to="/product/dnc">DNC机床联网管理</Link></li>
                                                    <li><Link to="/product/deviceData">设备数据采集与分析</Link></li>
                                                    <li><Link to="/product/deviceManagement">设备管理云平台</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`dropdown ${this.getBasePath(this.props.navIndex._path) == '/solution'?'current':''}`}><Link to="/solution">解决方案</Link>
                                                <ul>
                                                    <li><Link to="/solution/pump">泵阀行业解决方案</Link></li>
                                                    <li><Link to="/solution/autoParts">汽车零部件行业解决方案</Link></li>
                                                    <li><Link to="/solution/tobacco">烟草行业解决方案</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`dropdown ${this.getBasePath(this.props.navIndex._path) == '/case'?'current':''}`}><Link to="/case">案例</Link>
                                                <ul>
                                                    <li><Link to="/case/coperation">企业运营管理工业云平台</Link></li>
                                                    <li><Link to="/case/monitoring">企业设备监控工业云平台</Link></li>
                                                    <li><Link to="/case/machineNet">机床联网</Link></li>
                                                    <li><Link to="/case/erp_mes">ERP、MES</Link></li>
                                                    <li><Link to="/case/cwms">WMS仓库管理系统</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`dropdown ${this.getBasePath(this.props.navIndex._path) == '/price'?'current':''}`}><Link to="/price">价格与注册</Link>
                                                <ul>
                                                    <li><Link to="/price/prices">标准版企业管理系统</Link></li>
                                                    <li><Link to="/price/custom">定制企业信息化系统</Link></li>
                                                    <li><Link to="/price/register">申请试用</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`dropdown ${this.getBasePath(this.props.navIndex._path) == '/about'?'current':''}`}><Link to="/about">关于我们</Link>
                                                <ul>
                                                    <li><Link to="/about/enterprise">企业简介</Link></li>
                                                    <li><Link to="/about/product">产品架构</Link></li>
                                                    <li><Link to="/about/serve">服务支持</Link></li>
                                                </ul>
                                            </li>
                                            <li onClick={event => this.goSaas(event)}><Link to={`${this.getBasePath(this.props.navIndex._path)}`}>登录</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="outer-box" style={{paddingBottom: '14px'}}>
                                    <div className="social-icon-one"
                                         style={{color: '#FFFFFF',fontWeight: 600,paddingLeft: '10px',borderLeft: '2px solid rgba(255,255,255,0.2)'}}>
                                        <a><span className="icon fa fa-phone"></span></a><span> &nbsp;189-8979-2655</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-container clearfix">
                            <div className="logo-box pull-left">
                                <div className="logo" style={{padding:'20px 0px 15px'}}><a><img src={this.props.logoBlack} style={{width: "300px"}}/></a>
                                </div>
                            </div>
                            <div className="nav-outer clearfix">
                                <div className="main-menu">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                                data-target=".navbar-collapse">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div className="navbar-collapse collapse clearfix">
                                        <ul className="navigation clearfix">
                                            <li className={`${this.getBasePath(this.props.navIndex._path) == '/'?'current':''}`}><Link to="/">首页</Link></li>
                                            <li className={`dropdown ${this.getBasePath(this.props.navIndex._path) == '/product'?'current':''}`}>
                                                <Link to="/product">产品</Link>
                                                <ul>
                                                    <li><Link to="/product/operation">标准版SaaS企业管理系统</Link></li>
                                                    <li><Link to="/product/erp">ERP及定制</Link></li>
                                                    <li><Link to="/product/mes">MES制造执行系统及定制</Link></li>
                                                    <li><Link to="/product/wms">WMS仓库管理系统及定制</Link></li>
                                                    <li><Link to="/product/dnc">DNC机床联网管理</Link></li>
                                                    <li><Link to="/product/deviceData">设备数据采集与分析</Link></li>
                                                    <li><Link to="/product/deviceManagement">设备管理云平台</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`dropdown ${this.getBasePath(this.props.navIndex._path) == '/solution'?'current':''}`}><Link to="/solution">解决方案</Link>
                                                <ul>
                                                    <li><Link to="/solution/pump">泵阀行业解决方案</Link></li>
                                                    <li><Link to="/solution/autoParts">汽车零部件行业解决方案</Link></li>
                                                    <li><Link to="/solution/tobacco">烟草行业解决方案</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`dropdown ${this.getBasePath(this.props.navIndex._path) == '/case'?'current':''}`}><Link to="/case">案例</Link>
                                                <ul>
                                                    <li><Link to="/case/coperation">企业运营管理工业云平台</Link></li>
                                                    <li><Link to="/case/monitoring">企业设备监控工业云平台</Link></li>
                                                    <li><Link to="/case/machineNet">机床联网</Link></li>
                                                    <li><Link to="/case/erp_mes">ERP、MES</Link></li>
                                                    <li><Link to="/case/cwms">WMS仓库管理系统</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`dropdown ${this.getBasePath(this.props.navIndex._path) == '/price'?'current':''}`}><Link to="/price">价格与注册</Link>
                                                <ul>
                                                    <li><Link to="/price/prices">标准版企业管理系统</Link></li>
                                                    <li><Link to="/price/custom">定制企业信息化系统</Link></li>
                                                    <li><Link to="/price/register">申请试用</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`dropdown ${this.getBasePath(this.props.navIndex._path) == '/about'?'current':''}`}><Link to="/about">关于我们</Link>
                                                <ul>
                                                    <li><Link to="/about/enterprise">企业简介</Link></li>
                                                    <li><Link to="/about/product">产品架构</Link></li>
                                                    <li><Link to="/about/serve">服务支持</Link></li>
                                                </ul>
                                            </li>
                                            <li onClick={event => this.goSaas(event)}><Link to={`${this.getBasePath(this.props.navIndex._path)}`}>登录</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="outer-box" style={{paddingTop: '12px',marginLeft: '0',marginTop: '0'}}>
                                    <div className="social-icon-one"
                                         style={{color: '#000',fontWeight: 600,paddingLeft: '10px',borderLeft: '2px solid rgba(255,255,255,0.2)'}}>
                                        <a><span className="icon fa fa-phone"></span></a><span> &nbsp;189-8979-2655</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navIndex: state.navIndex
    }
};

const mapDispatchToProps = {
    navindex, navstate
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);