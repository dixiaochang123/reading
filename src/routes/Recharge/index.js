import React, { Component } from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';
import style from './index.less'

export default class Recharge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthListActive:1
        };
        this.handleClickMonthListActive = this.handleClickMonthListActive.bind(this);
    }

    handleClickMonthListActive(id) {
        console.log(id)
        this.setState({
            monthListActive:id
        })

    }

    render() {
        let { monthListActive } = this.state;
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
                <div className={style.months}>
                    <div className={style.monthList +' '+ (monthListActive==1 ? style.monthListActive : '')} onClick={this.handleClickMonthListActive.bind(this,1)}>
                        <p><span>1个月</span><span></span></p>
                        <p>￥10</p>
                        <p>原价￥12.8</p>
                    </div>
                    <div className={style.monthList +' '+ (monthListActive==2 ? style.monthListActive : '')} onClick={this.handleClickMonthListActive.bind(this,2)}>
                        <p><span>3个月</span><span></span></p>
                        <p>￥28</p>
                        <p>原价￥58</p>
                    </div>
                    <div className={style.monthList +' '+ (monthListActive==3 ? style.monthListActive : '')} onClick={this.handleClickMonthListActive.bind(this,3)}>
                        <p><span>6个月</span><span></span></p>
                        <p>￥60</p>
                        <p>原价￥78</p>
                    </div>
                    <div className={style.monthList +' '+ (monthListActive==4 ? style.monthListActive : '')} onClick={this.handleClickMonthListActive.bind(this,4)}>
                        <p><span>12个月</span><span></span></p>
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
            {/* 温馨提示 */}
            <div className={style.tips}>
                <h6>温馨提示</h6>
                <p>1.购买即视为同意《有空看书会员服务协议》。</p>
                <p>2.支付完成后，服务在2小时内生效。</p>
                <p>3.其他内容待完善。</p>
            </div>
            {/* 立即支付 */}
            <div className={style.payment}>
                <div><span className={style.gj}>共计</span><span>￥{10}</span></div>
                <Button className="btn" type="inline primary" size="large" inline>立即支付</Button>
            </div>


            

        </div>)
    }
}