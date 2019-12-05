import React, { Component } from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';
import style from './index.less'
import IconZ62 from '../../images/recharge/z62.png'
import IconSbjb2 from '../../images/recharge/sbjb2.png'
import IconQdtq2 from '../../images/recharge/qdtq2.png'
import IconZx2 from '../../images/recharge/zx2.png'
import { getVipConfig,my } from '../../services/example'
import {goBack,toRecharge} from '../../utils/andohistoy'
import {setCookie,getCookie} from '../../utils/cookie'

let isIOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod')


export default class Recharge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthListActive:1,
            paymentType:100,
            datas:[],
            gjsum:0,
            nickName:'',
            vip:false,
            vipEndDate:'',
            headImg:'',
            isIOS:isIOS
        };
        this.handleClickMonthListActive = this.handleClickMonthListActive.bind(this);
        this.handleClickPaymentTypeActive = this.handleClickPaymentTypeActive.bind(this);
    }
    
    componentWillMount() {
        // this.forceUpdate();//强制刷新
        let token = getCookie('token')//获取cookie
        setCookie('token',token,10000000000)//设置cookie   setCookie('sex','男', 10);
        my().then(res=>{
            let {data} = res.data;
            this.setState({
                nickName:data.nickName,
                vip:data.vip,
                vipEndDate:data.vipEndDate,
                headImg:data.sysImg
            })

        }).catch(error=>{})
        var u = navigator.userAgent, app = navigator.appVersion;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if(!!isAndroid) this.setState({paymentType:100,platform:0});
        if(!!isIOS) this.setState({paymentType:300,platform:1});
        this.setState({paymentType:100,platform:2});

        getVipConfig().then(res=>{
            let {data} = res.data;
            console.log(22222,data)
            this.setState({
                datas:data,
                gjsum:data[0].discountMoney,
                monthListActive:data[0].id
            })
        }).catch(error=>console.log(error))
    }

    handleClickMonthListActive(id) {
        let paramas = this.state.datas.find((item,index)=>index==id);
        this.setState({
            monthListActive:paramas.id,
            gjsum:paramas.discountMoney
        })

    }

    handleClickPaymentTypeActive(id) {
        this.setState({
            paymentType:id
        })
    }
    handleCkickZhifu = ()=>{
        console.log('支付')
        // id=1&platform=1&payType=100
        let data = {
            id: this.state.monthListActive, //vip配置的ID
            platform:0,  //当前平台0:安卓 1:苹果 2:PC
            payType:this.state.paymentType //100:微信支付 200:支付宝支付 300:苹果支付
        }
        
        let paras = {
            action: "toRecharge",
            actionDetail: {
                id:this.state.monthListActive,//vip配置的ID
                payType: 100
            }
        }
        toRecharge(paras)
    }

    goBack = () => {
        goBack()
    }

    render() {
        let { monthListActive,paymentType,datas,gjsum,nickName,vip,vipEndDate,headImg,isIOS } = this.state;

        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                className='navbar'
                onLeftClick={this.goBack}
            >会员充值</NavBar>
            <div style={{height:"45px"}}></div>
            {/* 会员充值 */}
            <div className={style.notOpen}>
                <div className={style.headPort}>
                    <img src={headImg} alt=""/>
                </div>
                <div className={style.tip}>
                    <span>用户名{nickName}</span>
                    <p>{!vip ? "您还未开通会员" : `会员截止 `}<span style={{fontSize:"12px",fontWeight:"normal",color:"#3b3232"}}>{ vipEndDate}</span></p>
                </div>
            </div>
            <div className={style.monthVip}>
                <h3>付费开通</h3>
                <div className={style.months}>
                    <div className={style.monthList +' '+ (monthListActive==1 ? style.monthListActive : '')} onClick={this.handleClickMonthListActive.bind(this,0)}>
                        <p><span>1个月</span><span></span></p>
                        <p>￥{!!datas && datas[0] &&datas[0].discountMoney/100}</p>
                        <p className={!!datas[0] && !!datas[0].showOrigin ?'' : style.hide}>原价￥{!!datas && datas[0] && datas[0].originMoney/100}</p>
                    </div>
                    <div className={style.monthList +' '+ (monthListActive==2 ? style.monthListActive : '')} onClick={this.handleClickMonthListActive.bind(this,1)}>
                        <p><span>3个月</span><span></span></p>
                        <p>￥{!!datas && datas[1] && datas[1].discountMoney/100}</p>
                        <p className={!!datas[1] && !!datas[1].showOrigin ?'' : style.hide}>原价￥{!!datas && datas[1] &&datas[1].originMoney/100}</p>
                    </div>
                    <div className={style.monthList +' '+ (monthListActive==3 ? style.monthListActive : '')} onClick={this.handleClickMonthListActive.bind(this,2)}>
                        <p><span>6个月</span><span></span></p>
                        <p>￥{!!datas && datas[2] &&datas[2].discountMoney/100}</p>
                        <p className={!!datas[2] && !!datas[2].showOrigin ?'' : style.hide}>原价￥{!!datas && datas[2] &&datas[2].originMoney/100}</p>
                    </div>
                    <div className={style.monthList +' '+ (monthListActive==4 ? style.monthListActive : '')} onClick={this.handleClickMonthListActive.bind(this,3)}>
                        <p><span>12个月</span><span></span></p>
                        <p>￥{!!datas && datas[3] &&datas[3].discountMoney/100}</p>
                        <p className={!!datas[3] && !!datas[3].showOrigin ? '' : style.hide}>原价￥{!!datas && datas[3] &&datas[3].originMoney/100}</p>
                    </div>
                </div>
                <h3 className={(paymentType!=300 || !isIOS) ? '' : style.hide}>选择支付方式</h3>
                <p style={{display:(paymentType==300 || !isIOS)  ? 'none' : 'block'}} className={style.p1} onClick={this.handleClickPaymentTypeActive.bind(this,100)}><span>微信支付</span><span className={paymentType==100 ? style.paymentType : ''}></span></p>
                {/* <p style={{display:paymentType==300 ? 'none' : 'block'}} className={style.p2} onClick={this.handleClickPaymentTypeActive.bind(this,200)}><span>支付宝支付</span><span className={paymentType==200 ? style.paymentType : ''}></span></p> */}
            </div>

            <div className={style.privilege}>
                <div className={style.privilegeHead}>
                    <div className={style.lineBorder}></div>
                    <h3>会员特权</h3>
                </div>
                <div className={style.privilegeIcon}>
                    <div>
                        <img src={IconZ62} alt=""/>
                        <p>全场免广告</p>
                    </div>
                    {/* <div>
                        <img src={IconSbjb2} alt=""/>
                        <p>双倍金币</p>
                    </div>
                    <div>
                        <img src={IconQdtq2} alt=""/>
                        <p>签到特权</p>
                    </div> */}
                    <div>
                        <img src={IconZx2} alt=""/>
                        <p>尊享图标</p>
                    </div>

                </div>
            </div>
            {/* 温馨提示 */}
            <div className={style.tips}>
                <h6>温馨提示</h6>
                <p>1.购买即视为同意《有空看书会员服务协议》。</p>
                <p>2.支付完成后，服务在2小时内生效。</p>
                <p>3.其他内容待完善。</p>
            </div>
            <div style={{height:'70px'}}></div>
            {/* 立即支付 */}
            <div className={style.payment}>
                <div><span className={style.gj}>共计 </span><span> ￥{gjsum/100}</span></div>
                <Button onClick={this.handleCkickZhifu} className="btn" type="inline primary" size="large" inline>立即支付</Button>
            </div>


            

        </div>)
    }
}