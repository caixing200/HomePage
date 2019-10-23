import React, {Component} from 'react';


import Deecoop from '../pages/Deecoop/index';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // count: 0,
            envType: process.env.ENV_TYPE
        }
    }

    componentDidMount() {
        // const { store } = this.context;
        // const state = store.getState();
        // console.log(state)
    }

    // componentDidMount(){
    //     console.log(123)
    // }

    // _handleClick() {
    //     this.setState({
    //         count: ++this.state.count
    //     });
    // }

    render() {
        if(this.state.envType === 'deecoop'){
            return <Deecoop />
        }
        return null
        // return (
        //     <div>
        //         this is home~<br/>
        //         当前计数：{this.state.count}，{process.env.ENV_TYPE}<br/>
        //         <button onClick={() => this._handleClick()}>自增</button>
        //     </div>
        // )
    }
}