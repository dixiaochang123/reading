import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'
import { extractMoneyLog } from '../../services/example'
import Item from 'antd/lib/list/Item';
import {goBack} from '../../utils/andohistoy'
const creatHistory = require("history").createHashHistory;
const history = creatHistory();

export default class CashOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]

        };
    }

    componentDidMount() {
        let data = {
            page:1,
            pageSize:50
        }
        extractMoneyLog(data).then(res=>{
            let {code,data} = res.data;
            console.log(data)
            this.setState({
                data
            })

        }).catch(error=>{})
    }

    goBack = () => {
        goBack()
    }

    render() {
        let { data } = this.state;
        return (<div className='content1'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.goBack}
                className='navbar'
            >提现记录</NavBar>
            <div className={style.content}>
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index} className={style.list}>
                                <div className={style.left}>
                                    <p>{item.type}</p>
                                    <p className={style.p2}>{item.date}</p>
                                </div>
                                <div className={style.right}>
                                    <p>-{item.money}</p>
                                    <p className={style.p2}>{item.status}</p>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
            
                
            

        </div>)
    }
}