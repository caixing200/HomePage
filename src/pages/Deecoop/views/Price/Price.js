import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import {navindex, navstate} from '@/redux/actions/navIndex';

import Lazyload from '../../router/Lazyload';


import Prices from 'bundle-loader?lazy&name=[name]!./Prices'
import Custom from 'bundle-loader?lazy&name=[name]!./Custom'
import Register from 'bundle-loader?lazy&name=[name]!./Register'

class Price extends Component {
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
                    <Route path={`${this.props.match.path}/prices`} component={Lazyload(Prices)}/>
                    <Route path={`${this.props.match.path}/custom`} component={Lazyload(Custom)}/>
                    <Route path={`${this.props.match.path}/register`} component={Lazyload(Register)}/>
                    <Route component={Lazyload(Prices)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Price);