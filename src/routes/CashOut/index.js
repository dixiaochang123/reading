import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'

export default class CashOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active:1,
            dialogShow:false

        };
    }

    handleClickCashOut= (id)=> {
        this.setState({
            active:id
        })

    }
    
    handleClickGotx= ()=> {
        this.setState({
            dialogShow:true
        },function() {

        })
    }

    handleClose = ()=>{
        this.setState({
            dialogShow:false
        })
    }

    goTask = ()=> {

    }

    render() {
        let { active,dialogShow } = this.state;
        return (<div className='content1'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                className='navbar'
            >金币提现</NavBar>
            {/* 金币金额 */}
            <div className={style.contentsub}>
                <div className={style.cashout_sub}>
                    <p>可提现金币</p>
                    <p>{862}</p>
                </div>
                <div className={style.jbtx}>
                    <p>金币提现</p>
                    <p>提现规则:1000金币等于1元，每日阅读30分钟偶可开启提现功能</p>
                    <div className={style.txjes}>
                        <div className={active == 1 ? style.active : ''} onClick={this.handleClickCashOut.bind(this,1)}>
                            <p>提现1元</p>
                            <p>需1000金币</p>
                        </div>
                        <div className={active == 10 ? style.active : ''} onClick={this.handleClickCashOut.bind(this,10)}>
                            <p>提现10元</p>
                            <p>需10000金币</p>
                        </div>
                        <div className={active == 50 ? style.active : ''} onClick={this.handleClickCashOut.bind(this,50)}>
                            <p>提现50元</p>
                            <p>需50000金币</p>
                        </div>
                        <div className={active == 100 ? style.active : ''} onClick={this.handleClickCashOut.bind(this,100)}>
                            <p>提现100元</p>
                            <p>需100000金币</p>
                        </div>
                    </div>
                    <p onClick={()=>this.props.history.push('/cashoutrecord')}>提现记录<Icon type={'right'}/></p>

                </div>
                <div className={style.reminder}>
                    <p className={style.p1}>温馨提示</p>
                    <p className={style.p2}>1.提现申请将在1-3个工作日内完成审核，请耐心等待。</p>
                    <p className={style.p2}>2.金币无需转换成下您，可直接累计提现。</p>
                    <p className={style.p2}>3.可在”金币提现记录”中查看提现状态。</p>
                    <p className={style.p2}>4.本活动最终归属权归“有空看书”所有。</p>
                    <div className={style.btn}>
                        <button onClick={this.handleClickGotx}>去提现</button>
                    </div>
                </div>

                   
            </div>
            <div className={dialogShow ? style.dialog : style.hide}>
                <div className={style.div1}>
                    <p className={style.p1}>金币不足</p>
                    <p className={style.p2}>提现1元，需要1000金币，</p>
                    <p className={style.p2}>您的金币余额不足,快去做任务赚金币吧！</p>
                </div>
                <div className={style.div2}>
                    <span onClick={this.handleClose}>取消</span>
                    <span onClick={this.goTask}>去做任务</span>
                </div>

            </div>
            <div className={dialogShow ? style.mode : style.hide}></div>
            

        </div>)
    }
}