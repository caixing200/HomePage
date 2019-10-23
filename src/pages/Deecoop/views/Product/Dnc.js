import React, {Component} from 'react';


import Banner from '@/components/Banner/Sbanner'
import Productrouter from './Productrouter'

import slide1 from '../../images/home-slide-4_iot.jpg'

export default class Dnc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerContents: [
                {
                    img: slide1,
                    txt1: '机床及设备联网管理',
                    txt2: '机床网络化编程管理',
                    txt3: '设备状态监控及分析',
                },
            ],
            isShow: false
        }
        this._anTimer = ''
    }
    componentDidMount() {
        clearTimeout(this._anTimer)
        this._anTimer = setTimeout(_=>{
            this.setState({
                isShow: true
            })
        })
    }

    render() {
        return (
            <div>
                <Banner contents={this.state.bannerContents}/>

                <div className="product-details">
                    <div className="auto-container">
                        <div className="row clearfix" style={{padding: '30px 0'}}>
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className={`product-details-content ${this.state.isShow?'product-details-animate':''}`}>
                                        <h2 className="product-details-content-title">DNC机床联网管理</h2>

                                        <h3 style={{visibility: 'hidden'}}>系统简介</h3>
                                        <h3 className="product-details-content-view-title">系统简介</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <p style={{fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DNC（Distributed Numerical Control）是以数控系统为基础，通过计算机以太网通讯技术实现数控机床与上层控制计算机集成连接，是制造企业实现数字化精益化生产的基础平台。</p>
                                        </div>

                                        <h3 className="product-details-content-view-title">企业痛点</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <ul className="details-content">
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 老旧数控机床内存有限，无法集中保存程序;</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 手工编程为主，需频繁删除内存程序才能保存新程序;</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 每台设备配置1台程序传输电脑增加投资成本;</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 使用磁盘、CF卡等拷贝加工程序，浪费工时;</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 单机传输，电脑频繁热插拔易烧坏串口主板;</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 传输软件互不通用和兼容、交互性差;</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 程序版本混乱，不易管理，浪费工时;</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 程序调用错误造成不良甚至导致撞机;</span></li>
                                                <li><span className="glyphicon glyphicon-record"> </span><span className="details-content-text"> 程序删除或遗失,需花费大量时间重新编写;</span></li>
                                            </ul>
                                            <div style={{padding: '2%'}}>
                                                <img src={require('../../images/product_dnc_01.png')} />
                                            </div>
                                        </div>

                                        <h3 className="product-details-content-view-title">解决方案</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <div style={{padding: '2%'}}>
                                                <img src={require('../../images/product_dnc_02.jpg')} />
                                            </div>
                                        </div>

                                        <h3 className="product-details-content-view-title">系统功能</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <div style={{padding: '2%'}}>
                                                <table className="table table-bordered table-striped">
                                                    <tr>
                                                        <th style={{textAlign: 'center'}}>编号</th>
                                                        <th style={{textAlign: 'center'}}>功能模块</th>
                                                        <th style={{textAlign: 'center'}}>功能描述</th>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>联网设备</td>
                                                        <td>支持一台服务器联网管理所有设备，联网数量不受限制，扩展方便。</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>设备兼容</td>
                                                        <td>FANUC、三菱、西门子、Brother、Haas、Okuma、Sodick等。</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>程序下载</td>
                                                        <td>操作人员直接在机床端即可实现远程下载程序。</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>在线加工</td>
                                                        <td>可实现边传输边加工，加工完成后程序将不存储在设备内存中。</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>版本管理</td>
                                                        <td>能自动实现对程序版本管理，确保下发至设备的程序是最新的；如需用老版本程序可将其置新后使用，还支持版本删除权限和版本备注的管理。</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>通讯传输</td>
                                                        <td>系统可支持双向传输功能，同时也可以通过权限控制，只允许现场操作人员实现单向传输功能。</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>程序锁定</td>
                                                        <td>针对机密或长期不用的程序，可选择锁定功能，锁定后任何操作都会被限制，如后续用到可以将其解锁后再使用。</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>文件共享</td>
                                                        <td>便于程序统一管理及维护，避免同一程序重复于不同文件夹，造成程序的混乱及服务器存储压力。通过该功能可让多台机床共用同一个程序。</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9</td>
                                                        <td>自动保存</td>
                                                        <td>服务器自动接收来自设备端回传的程序并实现自动命名保存。</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>在线编辑</td>
                                                        <td>无需下载到本地编辑后再上传至服务器的繁琐操作流程，有效提高用户的工作效率。</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>

                                        <h3 className="product-details-content-view-title">应用效果</h3>
                                        <div className="clearfix product-details-content-view-detail">
                                            <ul className="clearfix">
                                                <li style={{float: 'left',width: '50%'}}>
                                                    <div style={{width: '25%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_dnc_03.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '22px',margin: '10px 0'}}>管理维度</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>程序管理规范化</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>程序传输更可靠</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>车间管理一体化</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>工艺管理规范化</div>
                                                </li>
                                                <li style={{float: 'left',width: '50%'}}>
                                                    <div style={{width: '25%',margin: '0 auto'}}>
                                                        <div style={{width: '100%',height: '0',paddingBottom: '100%',overflow: 'hidden',margin: '0',position: 'relative'}}>
                                                            <img style={{width: '100%'}} src={require('../../images/product_dnc_04.png')} />
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign: 'center',fontSize: '22px',margin: '10px 0'}}>生产维度</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>订单生产高效完成</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>有效降低生产成本</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>生产资源优化提升</div>
                                                    <div style={{textAlign: 'center',fontSize: '16px'}}>整体生产效率的提升</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                            <Productrouter />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}