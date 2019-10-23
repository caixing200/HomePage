import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import {navindex, navstate} from '@/redux/actions/navIndex';

import Lazyload from '../../router/Lazyload';


import Aproduct from 'bundle-loader?lazy&name=[name]!./Aproduct'
import Enterprise from 'bundle-loader?lazy&name=[name]!./Enterprise'
import Serve from 'bundle-loader?lazy&name=[name]!./Serve'

class About extends Component {
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
                    <Route path={`${this.props.match.path}/enterprise`} component={Lazyload(Enterprise)}/>
                    <Route path={`${this.props.match.path}/product`} component={Lazyload(Aproduct)}/>
                    <Route path={`${this.props.match.path}/serve`} component={Lazyload(Serve)}/>
                    <Route component={Lazyload(Enterprise)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);