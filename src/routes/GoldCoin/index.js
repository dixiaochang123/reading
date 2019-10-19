import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'
import {  Link } from 'dva/router';
import {  getCoinLog } from '../../services/example';
import {goBack} from '../../utils/andohistoy'
import {setCookie,getCookie} from '../../utils/cookie'

export default class GoldCoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinNub:862,
            coinTody:20,
            coinAll:2000,
            coinLogs:[],
            simpleUserResult:{

            }

        };
    }
    componentDidMount() {
        let token = getCookie('token')//获取cookie
        console.log(111111111,getCookie('token'))
        alert(getCookie('token'))
        setCookie('token',token,10000000000)//设置cookie   setCookie('sex','男', 10);
        
        getCoinLog().then(res=>{
            let {code,data} = res.data;
            console.log(data)
            this.setState({
                coinLogs:data.coinLogs,
                simpleUserResult:data.simpleUserResult
            })
        }).catch(error=>console.log(error))
    }

    goBack = () => {
        goBack()
    }

    render() {
        let { simpleUserResult,coinLogs } = this.state;
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                className='navbar'
                onLeftClick={this.goBack}
            >我的金币</NavBar>
            {/* 金币金额 */}
            <div className={style.contentsub}>
                <div className={style.mygold}>
                    <p className={style.jbye}>金币余额</p>
                    <h1>{simpleUserResult.coin}</h1>
                    <div className={style.todyAndAll}>
                        <div>
                            <span>今日金币</span>
                            <p>{simpleUserResult.todayCoin}</p>
                        </div>
                        <div>
                            <span>累计获得</span>
                            <p>{simpleUserResult.totalCoin}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.icondetails}>
                <h3>金币详情</h3>
                <div className={style.icondetailsAll}>
                    {
                        coinLogs.map(item=>{

                            return (<div className={style.coinLogs}>
                                <div>
                                    <span className={style.coinLogsName}>{item.method}</span>
                                    <p className={style.coinLogsdate}>{item.fromDate}</p>
                                </div>
                                <div className={style.coinLogsgold}>+{item.coin}</div>
                            </div>)
                        })
                    }

                </div>
                <p className={style.tip}>金币详情只显示最近50条的记录</p>
                <button className={style.btn}><Link to={'/cashout'}>金币提现</Link></button>
            </div>


            

        </div>)
    }
}