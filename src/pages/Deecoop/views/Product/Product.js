import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import {navindex, navstate} from '@/redux/actions/navIndex';

import Lazyload from '../../router/Lazyload';

import Erp from 'bundle-loader?lazy&name=[name]!./Erp'
import Mes from 'bundle-loader?lazy&name=[name]!./Mes'
import Wms from 'bundle-loader?lazy&name=[name]!./Wms'
import Dnc from 'bundle-loader?lazy&name=[name]!./Dnc'
import Devicedata from 'bundle-loader?lazy&name=[name]!./DeviceData'
import Devicemanagement from 'bundle-loader?lazy&name=[name]!./DeviceManagement'
import Operation from 'bundle-loader?lazy&name=[name]!./Operation'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.navindex(this.props.location.pathname)
        $(function () {
            $(".scroll-to-target").click()
        })
    }

    render() {
        return (
            <div id="productView">
                <Switch>
                    <Route path={`${this.props.match.path}/erp`} component={Lazyload(Erp)}/>
                    <Route path={`${this.props.match.path}/mes`} component={Lazyload(Mes)}/>
                    <Route path={`${this.props.match.path}/wms`} component={Lazyload(Wms)}/>
                    <Route path={`${this.props.match.path}/dnc`} component={Lazyload(Dnc)}/>
                    <Route path={`${this.props.match.path}/deviceData`} component={Lazyload(Devicedata)}/>
                    <Route path={`${this.props.match.path}/deviceManagement`} component={Lazyload(Devicemanagement)}/>
                    <Route path={`${this.props.match.path}/operation`} component={Lazyload(Operation)}/>
                    <Route component={Lazyload(Erp)}/>
                </Switch>
                <div className="product-details">
                    <div className="services-section-three" style={{paddingTop: '40px'}}>
                        <div className="auto-container">
                            <div className="sec-title centered" style={{marginBottom: '10px'}}>
                                <h2>专业化的定制服务流程</h2>
                            </div>
                            <div className="row clearfix product-details-content-view-detail">
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>01</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>项目咨询</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>需求分析</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>02</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>上门拜访</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>沟通需求</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>调研现状</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>03</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>方案制定</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>沟通演示</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>方案调整</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>04</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>项目报价</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>商务洽谈</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>合同签订</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>05</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>项目实施</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>项目验收</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>06</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>售后服务</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);