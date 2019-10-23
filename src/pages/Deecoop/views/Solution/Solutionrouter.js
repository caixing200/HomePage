import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {navindex, navstate} from 'actions/navIndex';
import { setClass } from '@/utils/utils'


class Solutionrouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hidden-xs hidden-sm col-md-4 col-lg-4">
                <h3 className="product-details-btn-title">解决方案</h3>
                <ul className="product-details-btn-list">
                    <li className={`product-details-btns ${setClass('/solution/pump',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/solution/pump">泵阀行业解决方案</Link></li>
                    <li className={`product-details-btns ${setClass('/solution/autoParts',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/solution/autoParts">汽车零部件行业解决方案</Link></li>
                    <li className={`product-details-btns ${setClass('/solution/tobacco',this.props.navIndex._path)?'isCurrent':''}`}><Link to="/solution/tobacco">烟草行业解决方案</Link></li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Solutionrouter);