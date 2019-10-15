import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'
// import creatHistory from 'history/createHashHistory'
const creatHistory = require("history").createHashHistory;
const history = creatHistory();
console.log(style)

export default class WelfareCentre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []

        };
    }

    

    render() {
        return (<div className='content' className={style.content_max}>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={()=>history.goBack()}
            >福利中心</NavBar>
            <div className={style.content_text}>
                <div className={style.content_text_bg}>
                    <p>862</p>
                    <p>我的金币</p>
                </div>
            </div>
            <div className={style.goSigins}>
                <div className={style.goSigin + ' ' + style.flex}>
                    <div>
                        <p>你已累计签到3天</p>
                        <p>查看今日日签</p>
                    </div>
                    <div>去签到</div>
                </div>

            </div>


        </div>)
    }
}