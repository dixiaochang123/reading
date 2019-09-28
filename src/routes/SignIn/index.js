import React, { Component } from 'react';
import { NavBar, Icon,Calendar } from 'antd-mobile';
import style from './index.less'
import { relative } from 'path';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gold_coin:20,
            seventh_days:7,
            dialogIsShow:true,
            show: true,
            config:{
                type: 'one',
                // pickTime: false
            }

        };
    }

    render() {
        let { dialogIsShow } = this.state;
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                rightContent={"签到规则"}
                className='navbar'
            >签到有礼</NavBar>
            {/* 签到规则跳转覆盖 */}
            <div className={style.onRightClick} onClick={()=>this.props.history.push('/signrule') }></div>
            <div style={{height:".36rem"}}></div>
            {/* 已连续签到 */}
            <div className={style.continuity}>
                <p>已连续签到</p>
                <p><span>0</span><span>0</span><span>{this.state.seventh_days}</span>天</p>
                <p>今日签到已获得{this.state.gold_coin}金币，连续签到{this.state.seventh_days}天金币翻倍</p>
            </div>
            {/* 弹框 */}
            <div style={{display:'none'}} className={dialogIsShow ? style.dialog : style.hide}>
                <p className={style.dialog_first_p}>签到成功！恭喜你获得</p>
                <p className={style.dialog_nth2_p}><span>20</span>积分</p>
                <button onClick={()=>this.setState({dialogIsShow:false})}>赚取更多积分</button>
            </div>
            <div style={{display:'none'}} className={dialogIsShow ? style.mode : style.hide}></div>
            <p className={style.tody}>2019年9月</p>
            <div className='calendars' style={{position:'relative'}}>
                <Calendar
                    {...this.state.config }
                    visible={this.state.show}
                    onCancel={()=>{this.setState({show:false})}}
                    defaultDate={new Date()}
                    initalMonths={1}
                    infiniteOpt={false}
                />

            </div>
            

        </div>)
    }
}