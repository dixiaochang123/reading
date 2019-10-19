import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'
import history from '../../utils/history';
import {goBack} from '../../utils/andohistoy'

export default class SignRule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []

        };
    }
    goBack = ()=> {
        goBack()
    }

    

    render() {
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.goBack}
            >规则说明</NavBar>
            <div className={style.content_text}>
                <h1 className={style.signIn_rule}>签到规则</h1>
                <p className={style.signIn_rule_text}>参与签到的用户均需登录“有空看书”账户，根据连续 签到或累计签到的天数可获得奖励</p>
                <div className={style.signIn_rule_list}>
                    <h3>一、签到周期统计</h3>
                    <p>1.连续签到：此规则待定</p>
                </div>
                <div className={style.signIn_rule_list}>
                    <h3>一、签到周期统计</h3>
                    <p>1.每日签到可获得金币作为“基础奖励”。</p>
                    <p>2.连续签到满足条件是，可在“基础奖励”基础上叠加 获得“连续签到奖励”，奖励内容会。</p>
                </div>
            </div>


        </div>)
    }
}