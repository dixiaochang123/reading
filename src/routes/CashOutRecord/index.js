import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'
const creatHistory = require("history").createHashHistory;
const history = creatHistory();

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
                onLeftClick={()=>history.goBack()}
                className='navbar'
            >提现记录</NavBar>
            <div className={style.content}>
                <div className={style.list}>
                    <div className={style.left}>
                        <p>提现到支付宝</p>
                        <p className={style.p2}>2019-09-25  14:11</p>
                    </div>
                    <div className={style.right}>
                        <p>-10</p>
                        <p className={style.p2}>提现成功</p>
                    </div>
                </div>
                <div className={style.list}>
                    <div className={style.left}>
                        <p>提现到支付宝</p>
                        <p className={style.p2}>2019-09-25  14:11</p>
                    </div>
                    <div className={style.right}>
                        <p>-10</p>
                        <p className={style.p2}>提现成功</p>
                    </div>
                </div>

            </div>
            
                
            

        </div>)
    }
}