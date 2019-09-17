import React, { Component } from 'react';
import { NavBar, Icon, Flex } from 'antd-mobile';
import style from './index.less'
import creatHistory from 'history/createHashHistory'
const history = creatHistory();

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gold_coin:20,
            seventh_days:7

        };
        // this.onRightClick = this.onRightClick.bind(this)
    }

    

    render() {
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={()=>history.goBack()}
                rightContent={"签到规则"}
                className='navbar'
            >签到有礼</NavBar>
            {/* 签到规则跳转覆盖 */}
            <div className={style.onRightClick} onClick={()=>this.props.history.push('/signrule') }></div>
            {/* 已连续签到 */}
            <div className={style.continuity}>
                <p>已连续签到</p>
                <p><span>0</span><span>0</span><span>{this.state.seventh_days}</span>天</p>
                <p>今日签到已获得{this.state.gold_coin}金币，连续签到{this.state.seventh_days}天金币翻倍</p>
                <span className={style.radius}></span>
                <span className={style.radius}></span>
                <span className={style.radius}></span>
            </div>
            <p className={style.tody}>2019年9月</p>

        </div>)
    }
}