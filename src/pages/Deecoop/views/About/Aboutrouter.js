import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {navindex, navstate} from 'actions/navIndex';
import { setClass } from '@/utils/utils'


class Aboutrouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hidden-xs hidden-sm col-md-4 col-lg-4">
                <h3 className="product-details-btn-title">关于我们</h3>
                <ul className="product-details-btn-list">
                    <li className={`product-details-btns ${setClass('/about/enterprise',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/about/enterprise">企业简介</Link></li>
                    <li className={`product-details-btns ${setClass('/about/product',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/about/product">产品架构</Link></li>
                    <li className={`product-details-btns ${setClass('/about/serve',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/about/serve">服务支持</Link></li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Aboutrouter);