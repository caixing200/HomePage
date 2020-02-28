import React, {Component} from 'react';

import {connect} from 'react-redux'
import {navindex, navstate} from '@/redux/actions/navIndex';

import Banner from '@/components/Banner/Sbanner'


import slide1 from '../../images/service_04.jpg'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '申请试用',
                    txt2: 'ERP、MES、WMS定制',
                    txt3: '',
                },
            ],
            isShow: false,
            roles:['a','b','c','d'],
            companyUserCount: 1,
            year: 1,
            cost: '试用',
            costObj: {
                '1':{
                    '1': '试用'
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
            securityCode : '',
            securityCodeKey: '',
            tempSecurityCode : '',
            name: '',
            email: '',
            mobile: '',

            codeState: true,
            securityCodeState : true,
            nameState: true,
            emailState: true,
            mobileState: true,

            //responeState
            pageState: 0,
            second: 60,

            //dialog
            dialogTxt: ''
        }
        this._anTimer = ''
        this.base_url = 'https://web.ouhaicloud.com/'
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
    }

    componentDidMount() {
        this.props.navindex(this.props.location.pathname)
        $(function () {
            $(".scroll-to-target").click()
        })
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
        if(this.state.code){
            const text = new RegExp(this.reg.en)
            if(!text.test(this.state.code)){
                console.log(1,this.state.code)
                this.setState({
                    codeState: false,
                })
                return
            }else {
                this.setState({
                    codeState: true,
                })
            }
        }else {
            this.setState({
                codeState: false,
            })
            return;
        }
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
            if(this.state.securityCode !== this.state.tempSecurityCode){
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

        $.post(
            `${this.base_url}system/companyApplication`,
            {
                name: this.state.name,
                code: this.state.code,
                mobile: this.state.mobile,
                securityCode: this.state.securityCode,
                securityCodeKey: this.state.securityCodeKey,
                email: this.state.email,
                roleKey: 'a,b,c,d',
                companyUserCount: this.state.companyUserCount,
                year: this.state.year,
            },
            function (res) {
                if(res.code === 0){
                    clearInterval(that.secondTimer)
                    that.setState({
                        pageState: that.state.companyUserCount == 1?1:2
                    })
                }else {
                    that.changeSecurityCode()
                    that.setState({
                        dialogTxt: res.msg
                    })
                    $('#myModal').modal('toggle')
                }
            }
        )





        if (event.preventDefault){
            event.preventDefault();
        }
        else{
            event.returnValue=false;
        }
    }

    nameChange(event){
        this.setState(
            {
                name: event.target.value
            }
        )
    }
    codeChange(event){
        this.setState(
            {
                code: event.target.value
            }
        )
    }
    codeRule(e){
        const that = this
        that.setState({
            dialogTxt: ''
        })
        if(this.state.code){
            $.post(
                `${this.base_url}system/checkExistCompanyCode`,
                {
                    code:this.state.code
                },
                function (res) {
                    if(res.code === 0){
                        that.setState({
                            dialogTxt: '此账号可以使用'
                        })
                        $('#myModal').modal('toggle')
                    }else {
                        that.setState({
                            dialogTxt: res.msg
                        })
                        $('#myModal').modal('toggle')
                    }
                }
            )
        }else {
            that.setState({
                dialogTxt: '请输入企业英文简称'
            })
            $('#myModal').modal('toggle')
        }

        if (e.preventDefault){
            e.preventDefault();
        }
        else{
            e.returnValue=false;
        }
    }
    securityCodeChange(event){
        this.setState(
            {
                securityCode: event.target.value
            }
        )
    }
    mobileChange(e){
        this.setState({
            mobile: e.target.value
        })
    }

    changeSecurityCode(e){
        const that = this
        $.post(
            `${this.base_url}system/userLogin/createSecurityCode`,
            function (res) {
                if(res.code == 0){
                    that.setState({
                        securityCodeState: true,
                        securityCode: '',
                        tempSecurityCode : res.result.securityCode,
                        securityCodeKey: res.result.securityCodeKey,
                        second: that.state.second
                    })
                }
            }
        )
    }

    emailChange(e){
        this.setState({
            email: e.target.value
        })
    }

    goSaas(){
        window.open(this.base_url)
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
                                                                <span className="registerTitle">套餐</span><span>：</span>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-9 reset-col">
                                                                <button type="button" className={`btn btn-default ${this.state.roles[0]==='a'?'active':''}`} disabled="disabled" onClick={_ => this.selectRole('a')}>销售</button>
                                                                <button type="button" className={`btn btn-default ${this.state.roles[1]==='b'?'active':''}`} disabled="disabled" style={{marginLeft:'2%'}} onClick={_ => this.selectRole('b')}>采购</button>
                                                                <button type="button" className={`btn btn-default ${this.state.roles[2]==='c'?'active':''}`} disabled="disabled" style={{marginLeft:'2%'}} onClick={_ => this.selectRole('c')}>仓库</button>
                                                                <button type="button" className={`btn btn-default ${this.state.roles[3]==='d'?'active':''}`} disabled="disabled" style={{marginLeft:'2%'}} onClick={_ => this.selectRole('d')}>生产计划</button>
                                                            </div>
                                                        </div>
                                                        <div style={{paddingTop:'60px'}}>
                                                            <div className="col-xs-12 col-sm-3 reset-col">
                                                                <span className="registerTitle">用户数</span><span>：</span>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-9 reset-col">
                                                                <button type="button" style={{width:'54px'}} className={`btn btn-default ${this.state.companyUserCount===1?'active':''}`} onClick={_ => this.selectCount(1)}>1</button>
                                                                <button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.companyUserCount===5?'active':''}`}  onClick={_ => this.selectCount(5)}>5</button>
                                                                <button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.companyUserCount===10?'active':''}`}  onClick={_ => this.selectCount(10)}>10</button>
                                                                <button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.companyUserCount===50?'active':''}`}  onClick={_ => this.selectCount(50)}>50</button>
                                                                <button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.companyUserCount>50?'active':''}`}  onClick={_ => this.selectCount(9999)}>&gt;50</button>
                                                            </div>
                                                        </div>
                                                        <div style={{paddingTop:'60px'}}>
                                                            <div className="col-xs-12 col-sm-3 reset-col">
                                                                <span className="registerTitle">时间</span><span>：</span>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-9 reset-col">
                                                                <button type="button" style={{width:'54px'}} className={`btn btn-default ${this.state.year===1?'active':''}`} disabled={`${this.state.companyUserCount===1?'disabled':''}`} onClick={_ => this.selectYear(1)}>1年</button>
                                                                <button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.year===2?'active':''}`} disabled={`${this.state.companyUserCount===1?'disabled':''}`} onClick={_ => this.selectYear(2)}>2年</button>
                                                                <button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.year===3?'active':''}`} disabled={`${this.state.companyUserCount===1?'disabled':''}`} onClick={_ => this.selectYear(3)}>3年</button>
                                                                <button type="button" style={{width:'54px',marginLeft:'2%'}} className={`btn btn-default ${this.state.year>3?'active':''}`} disabled={`${this.state.companyUserCount===1?'disabled':''}`} onClick={_ => this.selectYear(9999)}>无限</button>
                                                            </div>
                                                        </div>
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
                                                            <div className={`form-group ${this.state.nameState?'':'has-error'}`}>
                                                                <label className="col-sm-3 control-label registerFormTitle">企业名称</label>
                                                                <div className="col-sm-9">
                                                                    <input type="text"
                                                                           className="form-control"
                                                                           value={this.state.name}
                                                                           placeholder="请输入您的企业名称"
                                                                           onChange={e=>this.nameChange(e)}/>
                                                                </div>
                                                            </div>
                                                            <div className={`form-group ${this.state.codeState?'':'has-error'}`}>
                                                                <label className="col-sm-3 hidden-xs control-label registerFormTitle">企业简称</label>
                                                                <label className="visible-xs col-xs-12 control-label">企业简称</label>
                                                                <div className="col-sm-7 col-xs-9">
                                                                    <input type="text"
                                                                           className="form-control"
                                                                           placeholder="请输入英文作为登录账号"
                                                                           value={this.state.code}
                                                                           onChange={e=>this.codeChange(e)}/>
                                                                </div>
                                                                <div className="col-sm-2 col-xs-3" style={{textAlign: 'right'}}>
                                                                    <button className="btn btn-default" onClick={e=>this.codeRule(e)}>验 证</button>
                                                                </div>
                                                            </div>
                                                            <div className={`form-group ${this.state.mobileState?'':'has-error'}`}>
                                                                <label className="col-sm-3 control-label registerFormTitle">手机号</label>
                                                                <div className="col-sm-9">
                                                                    <input type="text"
                                                                           className="form-control"
                                                                           placeholder="请输入您的手机号"
                                                                           value={this.state.mobile}
                                                                           onChange={e=>this.mobileChange(e)}/>
                                                                </div>
                                                            </div>
                                                            <div className={`form-group ${this.state.securityCodeState?'':'has-error'}`}>
                                                                <label className="col-sm-3 hidden-xs control-label registerFormTitle">验证码</label>
                                                                <label className="visible-xs col-xs-12 control-label">验证码</label>
                                                                <div className="col-sm-6 col-xs-7">
                                                                    <input type="text"
                                                                           className="form-control"
                                                                           value={this.state.securityCode }
                                                                           placeholder="请输入验证码"
                                                                           onChange={e=>this.securityCodeChange(e)}/>
                                                                </div>
                                                                <div className="col-sm-3 col-xs-5">
                                                                    <input type="text" className="form-control resetRegisterFormInput"
                                                                           title="点击更换验证码"
                                                                           value={this.state.tempSecurityCode }
                                                                           readOnly={true}
                                                                           placeholder="获取验证码"
                                                                           onClick={event => this.changeSecurityCode(event)}/>
                                                                </div>
                                                            </div>
                                                            <div className={`form-group ${this.state.emailState?'':'has-error'}`}>
                                                                <label className="col-sm-3 control-label registerFormTitle">联系邮箱</label>
                                                                <div className="col-sm-9">
                                                                    <input type="text"
                                                                           className="form-control"
                                                                           placeholder="便于您接收账号信息"
                                                                           value={this.state.email}
                                                                           onChange={event => this.emailChange(event)}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group visible-xs">
                                                                <div className="col-sm-3 control-label" style={{textAlign:'center'}}>
                                                                    <button type="submit" className="btn btn-lg btn-warning" onClick={event => this.handleSubmit(event)}>申 请
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="registerFormBtnView hidden-xs">
                                                                <button type="submit" className="btn btn-warning btn-lg registerFormBtn" onClick={event => this.handleSubmit(event)}>申 请
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="visible-xs registerFormTopBorder"></div>
                                                </div>
                                                <div className="hidden-xs registerFormEmpty"></div>
                                                <div className="hidden-xs registerFormleftBorder"></div>
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
                                                    <p>试用账号：{`${this.state.code}admin`}</p>
                                                    <p>初始密码：手机号后6位</p>
                                                    <p style={{visibility: 'hidden'}}>1</p>
                                                    <p>详细信息已发送至邮箱，请注意查收。</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="register-result-btn">
                                            <button type="button" className="btn btn-warning btn-lg" onClick={event => this.goSaas(event)}>进入登录页面</button>
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
                                                        <p>订购时间：{this.state.year}年</p>
                                                        <p>套餐用户：{this.state.companyUserCount}</p>
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
                <div className="product-details">
                    <div className="services-section-three" style={{paddingTop: '40px'}}>
                        <div className="auto-container">
                            <div className="sec-title centered" style={{marginBottom: '10px'}}>
                                <h2>专业化的定制服务流程</h2>
                            </div>
                            <div className="row clearfix product-details-content-view-detail">
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>01</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>项目咨询</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>需求分析</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>02</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>上门拜访</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>沟通需求</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>调研现状</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>03</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>方案制定</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>沟通演示</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>方案调整</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>04</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>项目报价</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>商务洽谈</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>合同签订</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>05</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>项目实施</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>项目验收</div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2" style={{padding: '2%'}}>
                                    <div style={{textAlign: 'center',fontSize: '3em',padding: '10px 0'}}>06</div>
                                    <div style={{textAlign: 'center',fontSize: '16px'}}>售后服务</div>
                                </div>
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

const mapStateToProps = (state) => {
    return {
        navIndex: state.navIndex
    }
};

const mapDispatchToProps = {
    navindex, navstate
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);