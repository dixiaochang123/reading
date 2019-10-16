import React, { Component } from 'react';
import { Route, Link } from 'dva/router';
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
            <div className={style.goSiginsParse}>
                <div className={style.goSigins}>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10}>
                            <p className={style.p1}>你已累计签到3天</p>
                            <p className={style.p2}>查看今日日签<Icon type={'right'} /></p>
                        </div>
                        {/* <div className={style.btnq}>去签到</div> */}
                        <div className={style.btnq}><Link to={'/signin'}>去签到</Link></div>
                    </div>
                </div>
                <div className={style.goSigins}>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <p>阅读任务</p>
                    </div>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10}>
                            <p className={style.p1}>阅读10分钟</p>
                            <p className={style.p2}>20金币</p>
                        </div>
                        <div className={style.btnq}>去阅读</div>
                    </div>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10}>
                            <p className={style.p1}>阅读30分钟</p>
                            <p className={style.p2}>50金币</p>
                        </div>
                        <div className={style.btnq}>领金币</div>
                    </div>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10}>
                            <p className={style.p1}>阅读60分钟</p>
                            <p className={style.p2}>100金币</p>
                        </div>
                        <div className={style.btnq}>已完成</div>
                    </div>
                </div>
                <div className={style.goSigins}>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <p>阅读任务</p>
                    </div>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10}>
                            <p className={style.p1}>阅读10分钟</p>
                            <p className={style.p2}>20金币</p>
                        </div>
                        <div className={style.btnq}>去阅读</div>
                    </div>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10}>
                            <p className={style.p1}>阅读30分钟</p>
                            <p className={style.p2}>50金币</p>
                        </div>
                        <div className={style.btnq}>领金币</div>
                    </div>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10}>
                            <p className={style.p1}>阅读60分钟</p>
                            <p className={style.p2}>100金币</p>
                        </div>
                        <div className={style.btnq}>已完成</div>
                    </div>
                </div>
            </div>


        </div>)
    }
}