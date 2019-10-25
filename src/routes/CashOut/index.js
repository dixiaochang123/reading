import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'
import { extractConfig,my,extractMoney} from '../../services/example'
import {toBindPhoneNumber} from '../../utils/andohistoy'
import {setCookie,getCookie} from '../../utils/cookie'
const creatHistory = require("history").createHashHistory;
const history = creatHistory();

export default class CashOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active:1,
            dialogShow:false,
            data:[],
            coin:0,
            active_money:0,
            active_coin:0

        };
    }

    componentDidMount() {
        let token = getCookie('token')//获取cookie
        setCookie('token',token,10000000000)//设置cookie   setCookie('sex','男', 10);

        my().then(res=>{
            let {code,data} = res.data;
            this.setState({
                coin:data.coin
            })

        }).catch(error=>{})

        extractConfig().then(res=>{
            let {code,data} = res.data;
            console.log(data)
            this.setState({
                data,
                active_money:data[0].money,
                active_coin:data[0].coin
            })
        }).catch(error=>{})
    }

    handleClickCashOut= (id,money,coin)=> {
        this.setState({
            active:id,
            active_money:money,
            active_coin:coin
        })

    }
    
    handleClickGotx= ()=> {
        if(this.state.coin < this.state.active_coin) {
            this.setState({
                dialogShow:true
            })
        } else {
            this.setState({
                dialogShow:false
            },function() {
                // extractId=1&type=1
                let data = {
                    extractId:this.state.active,
                    type:0 //
                }
                extractMoney(data).then(res=>{
                    let {code,data} = res.data;
                    console.log('提现成功',code,data)
                    if(code==2) {// "请绑定手机号"
                    let params = {
                        action:"toBindPhoneNumber",
                        actionDetail:{
                            extractId:this.state.active,
                            type:0
                        }
                    }
                    toBindPhoneNumber(params)
                        
                    }
                    if(code==3) {//金币余额不足
                        this.setState({
                            dialogShow:true
                        })
                    }
                    if(code==4) {//请进行微信或支付宝授权
                        
                        
                    }

                    if(code==200) {
                        this.props.history.push('/cashoutrecord');
                    }
                }).catch(error=>{})
            })
        }
    }

    handleClose = ()=>{
        this.setState({
            dialogShow:false
        })
    }

    goTask = ()=> {
        window.jsCall.toBookCity()

    }

    goBack = () => {
        // goBack()
        history.goBack()
    }

    render() {
        let { active,dialogShow,data,coin,active_money,active_coin } = this.state;
        return (<div className={style.content}>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                className='navbar'
                onLeftClick={this.goBack}
            >金币提现</NavBar>
            <div style={{height:"45px"}}></div>
            {/* 金币金额 */}
            <div className={style.contentsub}>
                <div className={style.cashout_sub}>
                    <p>可提现金币</p>
                    <p>{coin}</p>
                </div>
                <div style={{height:"8px",backgroundColor:"#F8F8F8"}}></div>
                <div className={style.jbtx}>
                    <p>金币提现</p>
                    <p>提现规则:1000金币等于1元，每日阅读30分钟偶可开启提现功能</p>
                    <div className={style.txjes}>
                        {
                            data.map(item=>{
                                return(
                                    <div key={item.id} className={active == item.id ? style.active : ''} onClick={this.handleClickCashOut.bind(this,item.id,item.money,item.coin)}>
                                        <p>提现{item.money/100}元</p>
                                        <p>需{item.coin}金币</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <p onClick={()=>this.props.history.push('/cashoutrecord')}>提现记录<Icon type={'right'}/></p>

                </div>
                <div style={{height:"8px",backgroundColor:"#F8F8F8"}}></div>
                <div className={style.reminder}>
                    <p className={style.p1}>温馨提示</p>
                    <p className={style.p2}>1.提现申请将在1-3个工作日内完成审核，请耐心等待。</p>
                    <p className={style.p2}>2.金币无需转换成下您，可直接累计提现。</p>
                    <p className={style.p2}>3.可在”金币提现记录”中查看提现状态。</p>
                    <p className={style.p2}>4.本活动最终归属权归“有空看书”所有。</p>
                    <div className={style.btn}>
                        <button onClick={this.handleClickGotx}>去提现</button>
                    </div>
                </div>

                   
            </div>
            <div className={dialogShow ? style.dialog : style.hide}>
                <div className={style.div1}>
                    <p className={style.p1}>金币不足</p>
                    <p className={style.p2}>提现{active_money}元，需要{active_coin}金币，</p>
                    <p className={style.p2}>您的金币余额不足,快去做任务赚金币吧！</p>
                </div>
                <div className={style.div2}>
                    <span onClick={this.handleClose}>取消</span>
                    <span onClick={this.goTask}>去做任务</span>
                </div>

            </div>
            <div className={dialogShow ? style.mode : style.hide}></div>
            

        </div>)
    }
}