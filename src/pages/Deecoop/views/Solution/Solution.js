import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import {navindex, navstate} from '@/redux/actions/navIndex';

import Lazyload from '../../router/Lazyload';

import AutoParts from 'bundle-loader?lazy&name=[name]!./AutoParts'
import Pump from 'bundle-loader?lazy&name=[name]!./Pump'
import Tobacco from 'bundle-loader?lazy&name=[name]!./Tobacco'

class Solution extends Component {
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
            <div>
                <Switch>
                    <Route path={`${this.props.match.path}/pump`} component={Lazyload(Pump)}/>
                    <Route path={`${this.props.match.path}/autoParts`} component={Lazyload(AutoParts)}/>
                    <Route path={`${this.props.match.path}/tobacco`} component={Lazyload(Tobacco)}/>
                    <Route component={Lazyload(Pump)}/>
                </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Solution);