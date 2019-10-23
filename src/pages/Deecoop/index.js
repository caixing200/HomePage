import React, {Component} from 'react';
import Navrouter from './router/router';


//css
import './css/style.css'
import './css/responsive.css'
import './css/reset.css'


import logoWhite from './images/logo-white.png'
import logoBlack from './images/logo-black.png'
import gonganImg from './images/gongan.png'

import Headers from '@/components/Homepage/Headers';
import Footers from '@/components/Homepage/Footers';

import {reScript} from "../../utils/script";

export default class Homepage extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $(function () {
            reScript($)
        })
    }


    render(){
        return (
            <div className="page-wrapper">
                <div className="preloader"></div>
                <Headers logoWhite={logoWhite} logoBlack={logoBlack}/>
                <Navrouter />
                <Footers logoWhite={logoWhite} gonganImg={gonganImg}/>
            </div>
        )
    }
}