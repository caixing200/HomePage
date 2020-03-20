import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'


import slide1 from '../../images/service_04.jpg'
import qrcode from '../../images/qrcode.png'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '申请试用',
                    txt2: '智造云管家（标准版SaaS企业管理系统）',
                    txt3: '包括：销售管理、采购管理、仓库管理、生产管理、看板管理等功能',
                },
            ],
            isShow: false,
            roles:['a','b','c','d'],
            companyUserCount: 1,
            year: 1,
            cost: '试用',
            costObj: {
                '1':{
                    '1': '免费试用'
                },
                '5':{
                    '1': '￥3999',
                    '2': '￥7299',
                    '3': '￥10299',
                    '9999': '￥16999',
                },
                '10':{
                    '1': '￥5999',
                    '2': '￥10999',
                    '3': '￥15999',
                    '9999': '￥23999',
                },
                '50':{
                    '1': '￥10999',
                    '2': '￥19999',
                    '3': '￥28999',
                    '9999': '￥43999',
                },
                '9999':{
                    '1': '￥29999',
                    '2': '￥53999',
                    '3': '￥76999',
                    '9999': '￥119999',
                },
            },
            code: '',
            ruledCode:'',
            securityCode : '',
            securityCodeKey: '',
            tempSecurityCode : '',
            name: '',
            email: '',
            mobile: '',

            codeChangeState: false,
            codeState: true,
            securityCodeState : true,
            nameState: true,
            emailState: true,
            mobileState: true,

            //responeState
            pageState: 0,
            second: 60,

            //dialog
            dialogTxt: '',

            //canvas
            hascanvas: true,
        }
        this._anTimer = ''
        this.base_url = 'https://web.deecoop.cn/'
        this.reg = {
            code: `^[A-Za-z0-9]$`,
            number: `\\d$`,
            mobile: `^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$`,
            email: `[\\w!#$%&'*+/=?^_\`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_\`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?`,
            url: `[a-zA-z]+:\\/\\/[^\\s]*`,
            zh: `^[\\u4e00-\\u9fa5]+$`,
            en: `^[A-Za-z]+$`,
            text: `^[A-Za-z\\u4e00-\\u9fa5]+&`,
            identity: `^(\\d{6})(\\d{4})(\\d{2})(\\d{2})(\\d{3})([0-9]|X|x)$`,
            float: `^(-?\\d+)(\\.\\d+)?$`,
            int: `^-?\\d+$`,
        }
        this.secondTimer = ''
        this.userKey = ''
        this.qrcode = qrcode
    }

    componentDidMount() {
        clearTimeout(this._anTimer)
        this._anTimer = setTimeout(_=>{
            this.setState({
                isShow: true
            })
            this.changeSecurityCode()
            this.secondTimer = setInterval(_=>{
                this.changeSecurityCode()
            },(this.state.second-1)*1000)
        })
    }
    componentWillUnmount() {
        clearInterval(this.secondTimer)
    }

    selectRole(role){
        console.log(role)
    }
    selectCount(num){
        if(num === 1){
            this.setState({
                companyUserCount: num,
                year: num,
            })
        }else {
            this.setState({
                companyUserCount: num
            })
        }
    }
    selectYear(num){
        this.setState({
            year: num
        })
    }

    handleSubmit(event){
        const that = this
        //提交
        if(this.state.name){
            this.setState({
                nameState: true,
            })
        }else {
            this.setState({
                nameState: false,
            })
            return;
        }
        // if(this.state.code){
        //     const text = new RegExp(this.reg.en)
        //     if(!text.test(this.state.code)){
        //         this.setState({
        //             codeState: false,
        //         })
        //         return
        //     }else {
        //         this.setState({
        //             codeState: true,
        //         })
        //     }
        // }else {
        //     this.setState({
        //         codeState: false,
        //     })
        //     return;
        // }
        if(this.state.mobile){
            const text = new RegExp(this.reg.mobile)
            if(!text.test(this.state.mobile)){
                this.setState({
                    mobileState: false,
                })
                return
            }else {
                this.setState({
                    mobileState: true,
                })
            }
        }else {
            this.setState({
                mobileState: false,
            })
            return;
        }
        if(this.state.securityCode){
            if(this.state.securityCode != this.state.tempSecurityCode){
                this.setState({
                    securityCodeState: false,
                })
                return
            }else {
                this.setState({
                    securityCodeState: true,
                })
            }
        }else {
            this.setState({
                securityCodeState: false,
            })
            return;
        }
        if(this.state.email){
            const text = new RegExp(this.reg.email)
            if(!text.test(this.state.email)){
                this.setState({
                    emailState: false,
                })
                return
            }else {
                this.setState({
                    emailState: true,
                })
            }
        }else {
            this.setState({
                emailState: false,
            })
            return;
        }

        // that.setState({
        //     dialogTxt: '正在创建账户...'
        // })
        // $('#myModal').modal('show')
        if($('.preloader').length){
            $('.preloader').show()
        }
        this.userKey = ''
        $.post(
            `${this.base_url}system/companyTryApplication`,
            {
                name: this.state.name,
                mobile: this.state.mobile,
                securityCode: this.state.securityCode,
                securityCodeKey: this.state.securityCodeKey,
                email: this.state.email,
            },
            function (res) {
                if(res.code === 0){
                    clearInterval(that.secondTimer)
                    setTimeout(function () {
                        if($('.preloader').length){
                            $('.preloader').hide()
                        }
                        that.userKey = res.result.userKey
                        that.setState({
                            pageState: that.state.companyUserCount == 1?1:2,
                            code: res.result.userCode
                        })
                    },2000)
                }else {
                    if($('.preloader').length){
                        $('.preloader').hide()
                    }
                    that.changeSecurityCode()
                    that.setState({
                        dialogTxt: res.msg
                    })
                    $('#myModal').modal('show')
                }
            }
        )
    }

    nameChange(event){
        this.setState(
            {
                name: event.target.value
            }
        )
    }
    nameRule(e){
        if(!e.target.value){
            this.setState({
                nameState: false,
            })
        }else {
            this.setState({
                nameState: true,
            })
        }
    }
    codeChange(event){
        this.setState(
            {
                code: event.target.value,
                codeChangeState: true
            }
        )
    }
    codeRule(e){
        const that = this
        const tempStr = e.target.value
        if(tempStr){
            const text = new RegExp(this.reg.en)
            if(!text.test(tempStr)){
                this.setState({
                    codeState: false,
                })
                return;
            }else {
                this.setState({
                    codeState: true,
                    codeChangeState: false
                })
            }
        }else {
            this.setState({
                codeState: false,
            })
            return;
        }
        if(this.state.code && this.state.code != this.state.ruledCode){
            $.post(
                `${this.base_url}system/checkExistCompanyCode`,
                {
                    code:this.state.code
                },
                function (res) {
                    if(res.code === 0){
                        that.setState({
                            ruledCode: that.state.code,
                            codeState: true
                        })
                        // $('#myModal').modal('toggle')
                    }else {
                        that.setState({
                            codeState: false,
                            ruledCode: that.state.code,
                        })
                    }
                }
            )
        }else if(!this.state.code){
            that.setState({
                codeState: false,
            })
        }

    }
    securityCodeChange(event){
        this.setState(
            {
                securityCode: event.target.value,
                securityCodeState: event.target.value == this.state.tempSecurityCode
            }
        )
    }
    securityCodeRule(event){
        if(this.state.securityCode){
            if(this.state.securityCode != this.state.tempSecurityCode){
                this.setState({
                    securityCodeState: false,
                })
            }else {
                this.setState({
                    securityCodeState: true,
                })
            }
        }else {
            this.setState({
                securityCodeState: false,
            })
        }
    }
    mobileChange(e){
        this.setState({
            mobile: e.target.value,
            mobileState: e.target.value?new RegExp(this.reg.mobile).test(e.target.value):false
        })
    }
    mobileRule(e){
        if(this.state.mobile){
            const text = new RegExp(this.reg.mobile)
            if(!text.test(this.state.mobile)){
                this.setState({
                    mobileState: false,
                })
            }else {
                this.setState({
                    mobileState: true,
                })
            }
        }else {
            this.setState({
                mobileState: false,
            })
        }
    }

    changeSecurityCode(e){
        const that = this
        $.post(
            `${this.base_url}system/userLogin/createSecurityCode`,
            function (res) {
                if(res.code == 0){
                    that.drawPic(res.result.securityCode)
                    that.setState({
                        securityCodeState: true,
                        securityCode: '',
                        tempSecurityCode : res.result.securityCode.toLowerCase(),
                        securityCodeKey: res.result.securityCodeKey,
                        second: that.state.second
                    })
                }
            }
        )
    }

    drawPic(txt) {
        const canvas = document.getElementById("canvas")
        const width = canvas.width
        const height = canvas.height
        const ctx = canvas.getContext('2d')
        ctx.textBaseline = 'bottom'

        /**生成一个随机数**/
        function randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        }

        /**生成一个随机色**/
        function randomColor(min, max) {
            var r = randomNum(min, max)
            var g = randomNum(min, max)
            var b = randomNum(min, max)
            return "rgb(" + r + "," + g + "," + b + ")"
        }

        /**绘制背景色**/
        ctx.fillStyle = randomColor(180, 240); //颜色若太深可能导致看不清
        ctx.fillRect(0, 0, width, height);
        /**绘制文字**/
        const str = txt;
        for(let i = 0; i < 4; i++) {
            const txt = str[i];
            ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
            ctx.font = randomNum(18, 30) + 'px SimHei'; //随机生成字体大小
            let x = 5 + i * 20; //2 25 45 65
            let y = randomNum(25, 30);
            let deg = randomNum(-30, 30);
            //修改坐标原点和旋转角度
            ctx.translate(x, y);
            ctx.rotate(deg * Math.PI / 180);
            ctx.fillText(txt, 0, 0);
            //恢复坐标原点和旋转角度
            ctx.rotate(-deg * Math.PI / 180);
            ctx.translate(-x, -y);
        }
        /**绘制干扰线**/
        // for(let i = 0; i < 8; i++) {
        // 	ctx.strokeStyle = randomColor(40, 180);
        // 	ctx.beginPath();
        // 	ctx.moveTo(randomNum(0, width), randomNum(0, height));
        // 	ctx.lineTo(randomNum(0, width), randomNum(0, height));
        // 	ctx.stroke();
        // }
        /**绘制干扰点**/
        //				for(let i = 0; i < 100; i++) {
        //					ctx.fillStyle = randomColor(0, 255);
        //					ctx.beginPath();
        //					ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
        //					ctx.fill();
        //				}
    }

    emailChange(e){
        this.setState({
            email: e.target.value,
            emailState: e.target.value?new RegExp(this.reg.email).test(e.target.value):false
        })
    }
    emailRule(e){
        if(this.state.email){
            const text = new RegExp(this.reg.email)
            if(!text.test(this.state.email)){
                this.setState({
                    emailState: false,
                })
            }else {
                this.setState({
                    emailState: true,
                })
            }
        }else {
            this.setState({
                emailState: false,
            })
        }
    }

    goSaas(){

        window.open(`${this.base_url}?userKey=${this.userKey}`)
        // window.open(`http://localhost:9528/?userKey=${this.userKey}`)
    }

    canvasSupport() {
        return !!document.createElement('canvas').getContext;
    }



    render() {
        return (
            <div>
                <Banner contents={this.state.bannerContents}/>
                <div className="product-details">
                    <div className="auto-container">
                        <div className="row clearfix" style={{padding: '30px 0'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {
                                    this.state.pageState === 0 &&
                                    <div className={`product-details-content ${this.state.isShow?'product-details-animate':''}`}>
                                        <h2 className="product-details-content-title" style={{textAlign: 'center',marginBottom:'15px',color: 'rgb(68,114,196)'}}>申请试用</h2>
                                        <div className="clearfix product-details-content-view-detail">
                                            <div className="row clearfix" style={{padding: '0 15px'}}>
                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{padding: '10px'}}>
                                                    <div className="registerView">
                                                        <div>
                                                            <div className="col-xs-12 col-sm-3 reset-col">
                                                                <span className="registerTitle">功能</span><span>：</span>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-9 reset-col">销售、采购、仓库、生产等模块
                                                                {/*<button type="button" className={`btn btn-default ${this.state.roles[0]==='a'?'active':''}`} disabled="disabled" onClick={_ => this.selectRole('a')}>销售</button>*/}
                                                                {/*<button type="button" className={`btn btn-default ${this.state.roles[1]==='b'?'active':''}`} disabled="disabled" style={{marginLeft:'2%'}} onClick={_ => this.selectRole('b')}>采购</button>*/}
                                                                {/*<button type="button" className={`btn btn-default ${this.state.roles[2]==='c'?'active':''}`} disabled="disabled" style={{marginLeft:'2%'}} onClick={_ => this.selectRole('c')}>仓库</button>*/}
                                                                {/*<button type="button" className={`btn btn-default ${this.state.roles[3]==='d'?'active':''}`} disabled="disabled" style={{marginLeft:'2%'}} onClick={_ => this.selectRole('d')}>生产计划</button>*/}
                                                            </div>
                                                        </div>
                                                        <div style={{paddingTop:'60px'}}>
                                                            <div className="col-xs-12 col-sm-3 reset-col">
                                                                <span className="registerTitle">用户数</span><span>：</span>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-9 reset-col">
                                                                <button type="button" style={{width:'54px'}} disabled="disabled" className={`btn btn-default ${this.state.companyUserCount===1?'active':''}`} onClick={_ => this.selectCount(1)}>1</button>
                                                                {/*<button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.companyUserCount===5?'active':''}`}  onClick={_ => this.selectCount(5)}>5</button>*/}
                                                                {/*<button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.companyUserCount===10?'active':''}`}  onClick={_ => this.selectCount(10)}>10</button>*/}
                                                                {/*<button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.companyUserCount===50?'active':''}`}  onClick={_ => this.selectCount(50)}>50</button>*/}
                                                                {/*<button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.companyUserCount>50?'active':''}`}  onClick={_ => this.selectCount(9999)}>&gt;50</button>*/}
                                                            </div>
                                                        </div>
                                                        {/*<div style={{paddingTop:'60px'}}>*/}
                                                        {/*    <div className="col-xs-12 col-sm-3 reset-col">*/}
                                                        {/*        <span className="registerTitle">时间</span><span>：</span>*/}
                                                        {/*    </div>*/}
                                                        {/*    <div className="col-xs-12 col-sm-9 reset-col">*/}
                                                        {/*        <button type="button" style={{width:'54px'}} className={`btn btn-default ${this.state.year===1?'active':''}`} disabled={`${this.state.companyUserCount===1?'disabled':''}`} onClick={_ => this.selectYear(1)}>1年</button>*/}
                                                        {/*        <button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.year===2?'active':''}`} disabled={`${this.state.companyUserCount===1?'disabled':''}`} onClick={_ => this.selectYear(2)}>2年</button>*/}
                                                        {/*        <button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.year===3?'active':''}`} disabled={`${this.state.companyUserCount===1?'disabled':''}`} onClick={_ => this.selectYear(3)}>3年</button>*/}
                                                        {/*        <button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.year>3?'active':''}`} disabled={`${this.state.companyUserCount===1?'disabled':''}`} onClick={_ => this.selectYear(9999)}>无限</button>*/}
                                                        {/*    </div>*/}
                                                        {/*</div>*/}
                                                        <div style={{paddingTop:'60px'}}>
                                                            <div className="col-xs-12 col-sm-3 reset-col">
                                                                <span className="registerTitle">费用</span><span>：</span>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-9 reset-col">
                                                                <span className="registerCost">{this.state.costObj[this.state.companyUserCount][this.state.year]}</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 clearfix" style={{padding: '10px'}}>
                                                    <div className="registerLeftEmpty hidden-xs"></div>
                                                    <div className="registerForm">
                                                        <form className="form-horizontal">
                                                            <div className={`form-group ${this.state.name?'has-success':this.state.nameState?'':'has-error'} has-feedback`}>
                                                                <label className="col-sm-4 control-label registerFormTitle">企业名称</label>
                                                                <div className="col-sm-8 inputRuleStrView">
                                                                    <input type="text"
                                                                           id="inputSuccess1"
                                                                           aria-describedby="inputSuccess1Status"
                                                                           className="form-control"
                                                                           value={this.state.name}
                                                                           placeholder="请输入您的企业名称"
                                                                           onChange={e=>this.nameChange(e)}
                                                                           onBlur={e=>this.nameRule(e)}/>
                                                                    {
                                                                        this.state.name && <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                                                    }
                                                                    {
                                                                        !this.state.name && !this.state.nameState && <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
                                                                    }
                                                                    <span id="inputSuccess1Status" className="sr-only">(success)</span>
                                                                    <div className={`inputRuleStrBox ${this.state.nameState?'':'inputRuleStrBoxShow'}`}>请输入企业名称</div>
                                                                </div>
                                                            </div>
                                                            {/*<div className={`form-group ${this.state.code?(this.state.codeState?'has-success':'has-error'):(this.state.codeState?'':'has-error')} has-feedback`}>*/}
                                                            {/*    <label className="col-sm-4 hidden-xs control-label registerFormTitle">企业简称</label>*/}
                                                            {/*    <label className="visible-xs col-xs-12 control-label">企业简称</label>*/}
                                                            {/*    <div className="col-sm-8 inputRuleStrView">*/}
                                                            {/*        <input type="text"*/}
                                                            {/*               id="inputSuccess2"*/}
                                                            {/*               aria-describedby="inputSuccess2Status"*/}
                                                            {/*               className="form-control"*/}
                                                            {/*               placeholder="请输入英文作为登录账号"*/}
                                                            {/*               value={this.state.code}*/}
                                                            {/*               onChange={e=>this.codeChange(e)}*/}
                                                            {/*               onBlur={e=>this.codeRule(e)}/>*/}
                                                            {/*        {*/}
                                                            {/*            this.state.code && this.state.codeState && <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>*/}
                                                            {/*        }*/}
                                                            {/*        {*/}
                                                            {/*            this.state.code && !this.state.codeState && <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>*/}
                                                            {/*        }*/}
                                                            {/*        <span id="inputSuccess2Status" className="sr-only">(success)</span>*/}
                                                            {/*        {*/}
                                                            {/*            this.state.code && !this.state.codeState && !this.state.codeChangeState && <div className={`inputRuleStrBox ${this.state.codeState?'':'inputRuleStrBoxShow'}`}>该简称重复，不可使用</div>*/}
                                                            {/*        }*/}
                                                            {/*        {*/}
                                                            {/*            this.state.code && !this.state.codeState && this.state.codeChangeState && <div className={`inputRuleStrBox ${this.state.codeState?'':'inputRuleStrBoxShow'}`}>仅可输入英文简称</div>*/}
                                                            {/*        }*/}
                                                            {/*        {*/}
                                                            {/*            !this.state.code && !this.state.codeState && <div className={`inputRuleStrBox inputRuleStrBoxShow`}>请输入企业简称</div>*/}
                                                            {/*        }*/}

                                                            {/*    </div>*/}
                                                            {/*</div>*/}
                                                            <div className={`form-group ${this.state.mobile?(this.state.mobileState?'has-success':'has-error'):(this.state.mobileState?'':'has-error')} has-feedback`}>
                                                                <label className="col-sm-4 control-label registerFormTitle">手机号</label>
                                                                <div className="col-sm-8 inputRuleStrView">
                                                                    <input type="text"
                                                                           id="inputSuccess3"
                                                                           aria-describedby="inputSuccess3Status"
                                                                           className="form-control"
                                                                           placeholder="请准确填写以便我们提供服务"
                                                                           value={this.state.mobile}
                                                                           onChange={e=>this.mobileChange(e)}
                                                                           onBlur={e=>this.mobileRule(e)}/>
                                                                    {
                                                                        this.state.mobile && this.state.mobileState && <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                                                    }
                                                                    {
                                                                        this.state.mobile && !this.state.mobileState && <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
                                                                    }
                                                                    {
                                                                        !this.state.mobile && !this.state.mobileState && <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
                                                                    }
                                                                    <span id="inputSuccess3Status" className="sr-only">(success)</span>
                                                                    {
                                                                        !this.state.mobile && !this.state.mobileState && <div className={`inputRuleStrBox inputRuleStrBoxShow`}>请输入手机号</div>
                                                                    }
                                                                    {
                                                                        this.state.mobile && !this.state.mobileState && <div className={`inputRuleStrBox inputRuleStrBoxShow`}>手机号不正确</div>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className={`form-group ${this.state.securityCode?(this.state.securityCodeState?'has-success':'has-error'):(this.state.securityCodeState?'':'has-error')} has-feedback`}>
                                                                <label className="col-sm-4 hidden-xs control-label registerFormTitle">验证码</label>
                                                                <label className="visible-xs col-xs-12 control-label">验证码</label>
                                                                <div className="col-sm-5 col-xs-7">
                                                                    <input type="text"
                                                                           id="inputSuccess4"
                                                                           aria-describedby="inputSuccess4Status"
                                                                           className="form-control"
                                                                           value={this.state.securityCode}
                                                                           placeholder="请输入验证码"
                                                                           onChange={e=>this.securityCodeChange(e)}
                                                                           onBlur={event => this.securityCodeRule(event)}/>
                                                                    {
                                                                        this.state.securityCode && this.state.securityCodeState && <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                                                    }
                                                                    {
                                                                        this.state.securityCode && !this.state.securityCodeState && <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
                                                                    }
                                                                    {
                                                                        !this.state.securityCode && !this.state.securityCodeState && <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
                                                                    }
                                                                    <span id="inputSuccess4Status" className="sr-only">(success)</span>
                                                                    {
                                                                        !this.state.securityCode && !this.state.securityCodeState && <div className={`inputRuleStrBox inputRuleStrBoxShow`}>请输入验证码</div>
                                                                    }
                                                                    {
                                                                        this.state.securityCode && !this.state.securityCodeState && <div className={`inputRuleStrBox inputRuleStrBoxShow`}>验证码不正确</div>
                                                                    }
                                                                </div>
                                                                <div className="col-sm-3 col-xs-5">
                                                                    {this.state.hascanvas &&
                                                                    <canvas className="resetRegisterFormCanvas" id="canvas" width="83" height="32" onClick={event => this.changeSecurityCode(event)} title="点击更换验证码"></canvas>
                                                                    }
                                                                    {!this.state.hascanvas &&
                                                                    <input type="text" className="form-control resetRegisterFormInput"
                                                                           title="点击更换验证码"
                                                                           value={this.state.tempSecurityCode }
                                                                           readOnly={true}
                                                                           placeholder="获取验证码"
                                                                           onClick={event => this.changeSecurityCode(event)}/>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className={`form-group ${this.state.email?(this.state.emailState?'has-success':'has-error'):(this.state.emailState?'':'has-error')} has-feedback`}>
                                                                <label className="col-sm-4 control-label registerFormTitle">联系邮箱</label>
                                                                <div className="col-sm-8">
                                                                    <input type="text"
                                                                           id="inputSuccess5"
                                                                           aria-describedby="inputSuccess5Status"
                                                                           className="form-control"
                                                                           placeholder="便于您接收账号信息"
                                                                           value={this.state.email}
                                                                           onChange={event => this.emailChange(event)}
                                                                           onBlur={event => this.emailRule(event)}/>
                                                                    {
                                                                        this.state.email && this.state.emailState && <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                                                    }
                                                                    {
                                                                        this.state.email && !this.state.emailState && <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
                                                                    }
                                                                    {
                                                                        !this.state.email && !this.state.emailState && <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
                                                                    }
                                                                    <span id="inputSuccess5Status" className="sr-only">(success)</span>
                                                                    {
                                                                        !this.state.email && !this.state.emailState && <div className={`inputRuleStrBox inputRuleStrBoxShow`}>请输入邮箱</div>
                                                                    }
                                                                    {
                                                                        this.state.email && !this.state.emailState && <div className={`inputRuleStrBox inputRuleStrBoxShow`}>邮箱不正确</div>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="form-group visible-xs visible-sm">
                                                                <div className="col-sm-3 control-label" style={{textAlign:'center'}}>
                                                                    <button type="button" className="btn btn-lg btn-warning" onClick={event => this.handleSubmit(event)}>申 请
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="registerFormBtnView hidden-xs">
                                                                <button type="button" className="btn btn-warning btn-lg registerFormBtn" onClick={event => this.handleSubmit(event)}>申 请
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="visible-xs registerFormTopBorder"></div>
                                                </div>
                                                <div className="hidden-xs registerFormEmpty"></div>
                                                <div className="hidden-xs hidden-sm registerFormleftBorder"></div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    this.state.pageState === 1 &&
                                    <div className={`product-details-content ${this.state.pageState === 1?'product-details-animate':''}`}>
                                        <div className="register-result">
                                            <div className="register-ok"></div>
                                            <div className="register-result-text">恭喜，申请成功！</div>
                                        </div>
                                        <div style={{paddingTop:'30px',textAlign:'center'}}>
                                            <div style={{display: 'inline-block'}}>
                                                <div className="result-tag">
                                                    账号信息
                                                    <div className="result-tag-before"></div>
                                                    <div className="result-tag-after"></div>
                                                </div>
                                                <div className="hidden-xs" style={{display: 'inline-block',width:'500px',height:'1px'}}></div>
                                            </div>

                                            <div className="result-view">
                                                <div style={{display: 'inline-block',textAlign:'left'}}>
                                                    <p>企业名称：{this.state.name}</p>
                                                    <p>注册手机号：{this.state.mobile}</p>
                                                    <p>企业管理员登录账号：{this.state.code}</p>
                                                    <p>初始密码：注册手机号后6位</p>
                                                    <div className="register-result-btn">
                                                        <span style={{marginRight:'20px'}}>系统登录网址：web.deecoop.cn</span>
                                                        <button type="button" className="btn btn-warning btn-sm" onClick={event => this.goSaas(event)}>进入登录页面</button>
                                                    </div>
                                                    <p style={{visibility: 'hidden',fontSize:'12px'}}>1</p>
                                                    <p>详细信息已发送至您登记的邮箱：{this.state.email}，请注意查收。</p>
                                                    <p style={{visibility: 'hidden',fontSize:'12px'}}>1</p>
                                                    <p>如有任何问题，欢迎随时咨询：189-8979-2655</p>
                                                    <p>或扫描下方二维码添加微信</p>
                                                    <div>
                                                        <img src={this.qrcode}  style={{width:'180px',height:'180px'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    this.state.pageState === 2 &&
                                    <div className={`product-details-content ${this.state.pageState === 2?'product-details-animate':''}`}>
                                        <div className="register-result">
                                            <div className="register-ok"></div>
                                            <div className="register-result-text">恭喜，申请成功！</div>
                                        </div>
                                        <div style={{paddingTop:'30px'}}>
                                            <div className="col-sm-1 hidden-xs"></div>
                                            <div className="col-sm-10 col-xs-12">
                                                <div>
                                                    <div className="result-tag">
                                                        订购信息
                                                        <div className="result-tag-before"></div>
                                                        <div className="result-tag-after"></div>
                                                    </div>
                                                </div>
                                                <div className="buy-view">
                                                    <div className="col-sm-2 hidden-xs"></div>
                                                    <div className="col-sm-9 col-xs-12 reset-buy-view">
                                                        <p>订购套餐：销售、采购、仓库、生产计划</p>
                                                        <p>订购时间：{this.state.year>3?'永久':`${this.state.year}年`}</p>
                                                        <p>套餐用户：{this.state.companyUserCount>50?'无限制':this.state.companyUserCount}</p>
                                                        <p>账号：{this.state.code}admin</p>
                                                        <p>初始密码：手机号后6位</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="result-tag">
                                                        付款信息
                                                        <div className="result-tag-before"></div>
                                                        <div className="result-tag-after"></div>
                                                    </div>
                                                </div>
                                                <div className="buy-view">
                                                    <div className="col-sm-2 hidden-xs"></div>
                                                    <div className="col-sm-9 col-xs-12 reset-buy-view">
                                                        <p>企业名称：浙江顶智智能技术有限公司</p>
                                                        <p>开户银行：工商银行温州瓯海支行火车站分理处</p>
                                                        <p>银行账户：1203227809200060605</p>
                                                        <p><span style={{fontWeight: '700'}}>付款金额：</span><span className="registerCost">{this.state.costObj[this.state.companyUserCount][this.state.year]}</span></p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="result-tag">
                                                        温馨提示
                                                        <div className="result-tag-before"></div>
                                                        <div className="result-tag-after"></div>
                                                    </div>
                                                </div>
                                                <div className="buy-view">
                                                    <div className="col-sm-2 hidden-xs"></div>
                                                    <div className="col-sm-9 col-xs-12 reset-buy-view">
                                                        <p>您有10天体验时间，请尽快按照付款信息付费，以免账号停用！</p>
                                                        <p>详细信息已发送至邮箱，请注意查收。</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="register-result-btn">
                                            <button type="button" className="btn btn-warning btn-lg" onClick={event => this.goSaas(event)}>进入登录页面</button>
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade bs-example-modal-sm" id="myModal" tabIndex="-1" role="dialog"
                     aria-labelledby="mySmallModalLabel">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">提示</h4>
                            </div>
                            <div className="modal-body">
                                {this.state.dialogTxt}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}