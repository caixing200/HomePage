import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {navindex, navstate} from 'actions/navIndex';
import { setClass } from '@/utils/utils'


class Productrouter extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="hidden-xs hidden-sm col-md-4 col-lg-4">
                <h3 className="product-details-btn-title">产品中心</h3>
                <ul className="product-details-btn-list">
                    <li className={`product-details-btns ${setClass('/product/erp',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/product/erp">ERP及定制</Link></li>
                    <li className={`product-details-btns ${setClass('/product/mes',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/product/mes">MES制造执行系统及定制</Link></li>
                    <li className={`product-details-btns ${setClass('/product/wms',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/product/wms">WMS仓库管理系统及定制</Link></li>
                    <li className={`product-details-btns ${setClass('/product/dnc',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/product/dnc">DNC机床联网管理</Link></li>
                    <li className={`product-details-btns ${setClass('/product/deviceData',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/product/deviceData">设备数据采集与分析</Link></li>
                    <li className={`product-details-btns ${setClass('/product/deviceManagement',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/product/deviceManagement">设备管理云平台</Link></li>
                    <li className={`product-details-btns ${setClass('/product/operation',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/product/operation">企业运营管理云平台</Link></li>
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Productrouter);