import React, { Component } from 'react';
import { NavBar, Icon, Modal } from 'antd-mobile';
import style from './index.less'
import {  Link } from 'dva/router';
import {  getCoinLog } from '../../services/example';
import {goBack} from '../../utils/andohistoy'
import {setCookie,getCookie} from '../../utils/cookie'

const alert = Modal.alert;

export default class GoldCoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinNub:862,
            coinTody:20,
            coinAll:2000,
            coinLogs:[],
            simpleUserResult:{
                coin:0,
                todayCoin:0,
                totalCoin:0
            },
            dialogShow:false

        };
    }
    componentDidMount() {
        let token = getCookie('token')//获取cookie
        setCookie('token',token,10000000000)//设置cookie   setCookie('sex','男', 10);

        getCoinLog().then(res=>{
            let {data} = res.data;
            console.log(data)
            if(!!data) {

                this.setState({
                    coinLogs:data.coinLogs,
                    simpleUserResult:data.simpleUserResult
                })
            }
        }).catch(error=>console.log(error))
    }

    goBack = () => {
        goBack()
    }

    goldGoout = () => {
        // this.setState({
        //     dialogShow:true
        // })

    }

    render() {
        let { simpleUserResult,coinLogs,dialogShow } = this.state;
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                className='navbar'
                onLeftClick={this.goBack}
            >我的金币</NavBar>
            <div style={{height:"45px"}}></div>
            {/* 金币金额 */}
            <div className={style.contentsub}>
                <div className={style.mygold}>
                    <p className={style.jbye}>金币余额</p>
                    <h1>{!!simpleUserResult && !!simpleUserResult.coin && simpleUserResult.coin ||0}</h1>
                    <div className={style.todyAndAll}>
                        <div>
                            <span>今日金币</span>
                            <p>{!!simpleUserResult && !!simpleUserResult.todayCoin && simpleUserResult.todayCoin || 0}</p>
                        </div>
                        <div>
                            <span>累计获得</span>
                            <p>{!!simpleUserResult && !!simpleUserResult.totalCoin && simpleUserResult.totalCoin || 0}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.icondetails}>
                <h3>金币详情</h3>
                <div className={style.icondetailsAll}>
                    {
                        !!coinLogs && coinLogs.map(item=>{

                            return (<div className={style.coinLogs}>
                                <div>
                                    <span className={style.coinLogsName}>{item.method}</span>
                                    <p className={style.coinLogsdate}>{item.createTime}</p>
                                </div>
                                <div className={style.coinLogsgold}>{item.type == 0 ? '-': '+' }{item.coin}</div>
                            </div>)
                        })
                    }

                </div>
                <p className={style.tip}>金币详情只显示最近50条的记录</p>
                <button className={style.btn}><Link to={'/cashout'}>金币提现</Link></button>
                {/* <button className={style.btn} onClick={this.goldGoout}>金币提现</button> */}
            </div>

            <div className={dialogShow ? style.dialog : style.hide}>
                <p>温馨提示</p>
                <p>有空看书感谢您的关注，因应用市场 审核原因，提现功能暂缓开放。预计 于2020年1月15日前可开通提现功能， 敬请期待。</p>
                <p>所有用户提现开通后可<span style={{color:"#FF6514"}}>双倍领取福利。</span></p>
                <button className={style.btn1} onClick={()=>this.setState({dialogShow:false})}>我知道了</button>

            </div>
            <div className={dialogShow ? style.mode : style.hide}></div>


            

        </div>)
    }
}