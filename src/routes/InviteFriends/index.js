import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'
const creatHistory = require("history").createHashHistory;
const history = creatHistory();

const IconLest = require("../../images/invitefriends/椭圆3@2x.png");

export default class InviteFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []

        };
    }

    

    render() {
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={()=>history.goBack()}
            >邀请好友</NavBar>
            <div className={style.content_text}>
                <div className={style.noticeBar}>
                    <img src={IconLest} alt=""/>
                    <span>188****2234获得1000金币邀请奖励</span>
                    <img src={IconLest} alt=""/>

                </div>
            </div>
            <div className={style.flow}></div>


        </div>)
    }
}