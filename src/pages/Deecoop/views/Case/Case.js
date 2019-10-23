import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import {navindex, navstate} from '@/redux/actions/navIndex';

import Lazyload from '../../router/Lazyload';

import Cerpmes from 'bundle-loader?lazy&name=[name]!./Cerpmes'
import Cmachinenet from 'bundle-loader?lazy&name=[name]!./Cmachinenet'
import Cmonitoring from 'bundle-loader?lazy&name=[name]!./Cmonitoring'
import Coperation from 'bundle-loader?lazy&name=[name]!./Coperation'
import Cwms from 'bundle-loader?lazy&name=[name]!./Cwms'

class Case extends Component {
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
                    <Route path={`${this.props.match.path}/coperation`} component={Lazyload(Coperation)}/>
                    <Route path={`${this.props.match.path}/monitoring`} component={Lazyload(Cmonitoring)}/>
                    <Route path={`${this.props.match.path}/machineNet`} component={Lazyload(Cmachinenet)}/>
                    <Route path={`${this.props.match.path}/erp_mes`} component={Lazyload(Cerpmes)}/>
                    <Route path={`${this.props.match.path}/cwms`} component={Lazyload(Cwms)}/>
                    <Route component={Lazyload(Coperation)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Case);