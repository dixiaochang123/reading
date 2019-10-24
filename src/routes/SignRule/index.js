import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'
import {setCookie,getCookie} from '../../utils/cookie'
// import {goBack} from '../../utils/andohistoy'
const creatHistory = require("history").createHashHistory;
const history = creatHistory();

export default class SignRule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []

        };
    }

    componentDidMount() {
        let token = getCookie('token')//获取cookie
        setCookie('token',token,10000000000)//设置cookie   setCookie('sex','男', 10);

    }

    goBack = ()=> {
        // goBack()
        history.goBack();
    }

    

    render() {
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.goBack}
            >规则说明</NavBar>
            <div style={{height:"45px"}}></div>
            <div className={style.content_text}>
                <h1 className={style.signIn_rule}>签到规则</h1>
                <p className={style.signIn_rule_text}>用户登录“有空看书”APP账户后，根据个人需求酌情完成签到，累积获得相应规定天数的金币奖励，金币奖励达到规定数额可兑换提现。</p>
                <div className={style.signIn_rule_list}>
                    <h3>一、签到周期统计</h3>
                    <p>1.连续签到7天，第7天签到金币翻2倍。</p>
                    <p>2.连续签到满一个月，本月最后一天签到金币翻10倍。</p>
                    <p>3.签到奖励以自然月为准，跨月不累积翻倍。</p>
                    <p>4.满足连续签到条件后，金币奖励会按照签到规则予以发放。</p>
                </div>
            </div>


        </div>)
    }
}