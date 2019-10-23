import React, {Component} from 'react';
import {connect} from 'react-redux'

import Banner from '@/components/Banner/Sbanner'
import slide1 from '@/pages/Deecoop/images/home-slide-1_erp.jpg'


class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '',
                    txt2: '',
                    txt3: '',
                },
            ]
        }
    }
    componentDidMount(){

    }
    render() {
        return (
            <div style={{textAlign: 'center',height: this.props.loadingHeight._height || 1200}}>
                <div style={{position:'relative',height: this.props.loadingHeight._bannerHeight || 300,overflow:'hidden'}}>
                    <Banner contents={this.state.bannerContents} />
                    <div className="loading-cover"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loadingHeight: state.loadingHeight
    }
};

export default connect(mapStateToProps)(Loading);