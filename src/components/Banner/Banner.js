import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadingheight,bannerheight} from "../../redux/actions/loadingHeight";

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const that= this
        $(function () {
            const bannerEl = $('#carousel-example-generic')
            bannerEl.carousel({
                interval:6000,
                wrap: true
            });

            that.props.bannerheight(bannerEl.height())
            that.props.loadingheight($('#main-body').height())


        })


    }

    render() {
        return (
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    {
                        this.props.contents.map((v,i)=>
                            <div className={`item ${i===0?'active':''}`} key={i}>
                                <a  className="pc_imgBox hidden-xs" style={{backgroundImage: `url(${v.img})`}}></a>
                                <a  className="m_imgBox hidden-lg hidden-md hidden-sm"><img src={v.img} /></a>
                                <div className="bannerTxtView">
                                    <div className="bannerTxtBox">
                                        <p className="bannerTxt1">{v.txt1}</p>
                                        <p className="bannerTxt2">{v.txt2}</p>
                                        <p className="bannerTxt2">{v.txt3}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
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

const mapDispatchToProps = {
    loadingheight,
    bannerheight
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);