import React, { Component } from 'react';
import { NavBar, Icon, WhiteSpace,WingBlank, ActionSheet,Toast,Button} from 'antd-mobile';
import style from './index.less'
const creatHistory = require("history").createHashHistory;
const history = creatHistory();

const IconLest = require("../../images/invitefriends/椭圆3@2x.png");
const IconFlow = require("../../images/invitefriends/1-2-3@2x.png");

export default class Inviteode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],

        };
    }


    

    render() {
        return (
            <div className='content'>
            {/* <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={()=>history.goBack()}
            >邀请好友</NavBar> */}
            <div className={style.content_all}>
                <div className={style.content_placeholder}></div>
                <div className={style.content_text}>
                    <p className={style.p1}>邀请码</p>
                    <p className={style.p2}>YK1244566</p>
                    <p className={style.p3}>长按复制</p>
                    <div className={style.code}></div>
                    <p className={style.p4}>长按识别二维码</p>

                </div>

            </div>

            </div>)
    }
}