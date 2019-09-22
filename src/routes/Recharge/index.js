import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'

export default class Recharge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthListActive:1
        };
        this.handleClickMonthListActive = this.handleClickMonthListActive.bind(this);
    }

    handleClickMonthListActive(e) {

    }

    render() {
        // let {  } = this.state;
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                className='navbar'
            >会员充值</NavBar>
            {/* 会员充值 */}
            <div className={style.notOpen}>
                <div className={style.headPort}></div>
                <div className={style.tip}>
                    <span>用户名{12314}</span>
                    <p>您还未开通会员</p>
                </div>
            </div>
            <div className={style.monthVip}>
                <h3>付费开通</h3>
                <div className={style.months} onClick={this.handleClickMonthListActive}>
                    <div id="1" className={style.monthList +' '+ style.monthListActive}>
                        <p>
                            <span>1个月</span>
                            <span></span>
                        </p>
                        <p>￥10</p>
                        <p>原价￥12.8</p>
                    </div>
                    <div id="2" className={style.monthList}>
                        <p>
                            <span>3个月</span>
                            <span></span>
                        </p>
                        <p>￥28</p>
                        <p>原价￥58</p>
                    </div>
                    <div id="3" className={style.monthList}>
                        <p>
                            <span>6个月</span>
                            <span></span>
                        </p>
                        <p>￥60</p>
                        <p>原价￥78</p>
                    </div>
                    <div id="4" className={style.monthList}>
                        <p>
                            <span>12个月</span>
                            <span></span>
                        </p>
                        <p>￥168</p>
                        <p>原价￥208</p>
                    </div>
                </div>
            </div>

            <div className={style.privilege}>
                <div className={style.privilegeHead}>
                    <div className={style.lineBorder}></div>
                    <h3>会员特权</h3>
                </div>
                <div className={style.privilegeIcon}>
                    <div>
                        <img src="" alt=""/>
                        <p>全场免广告</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <p>双倍金币</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <p>签到特权</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <p>尊享图标</p>
                    </div>

                </div>
            </div>


            

        </div>)
    }
}