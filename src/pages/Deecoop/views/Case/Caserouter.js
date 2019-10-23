import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {navindex, navstate} from 'actions/navIndex';
import { setClass } from '@/utils/utils'


class Caserouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hidden-xs hidden-sm col-md-4 col-lg-4">
                <h3 className="product-details-btn-title">客户案例</h3>
                <ul className="product-details-btn-list">
                    <li className={`product-details-btns ${setClass('/case/coperation',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/case/coperation">企业运营管理工业云平台</Link></li>
                    <li className={`product-details-btns ${setClass('/case/monitoring',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/case/monitoring">企业设备监控工业云平台</Link></li>
                    <li className={`product-details-btns ${setClass('/case/machineNet',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/case/machineNet">机床联网</Link></li>
                    <li className={`product-details-btns ${setClass('/case/erp_mes',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/case/erp_mes">ERP、MES</Link></li>
                    <li className={`product-details-btns ${setClass('/case/cwms',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/case/cwms">WMS仓库管理系统</Link></li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Caserouter);