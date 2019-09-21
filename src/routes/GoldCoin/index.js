import React, { Component } from 'react';
import { NavBar, Icon, Flex } from 'antd-mobile';
import style from './index.less'

export default class GoldCoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinNub:862,
            coinTody:20,
            coinAll:2000,
            icondetailsList:[{
                name:'日常签到',
                time:'2019-09-17 17:41',
                goldsub:'+20金币'
            },{
                name:'每日分享',
                time:'2019-09-17 17:41',
                goldsub:'+20金币'
            },{
                name:'挑取小说文章错别字',
                time:'2019-09-17 17:41',
                goldsub:'+20金币'
            },{
                name:'加入书架',
                time:'2019-09-17 17:41',
                goldsub:'+20金币'
            }]

        };
    }

    render() {
        let { coinNub,coinTody,coinAll,icondetailsList } = this.state;
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                className='navbar'
            >我的金币</NavBar>
            {/* 金币金额 */}
            <div className={style.contentsub}>
                <div className={style.mygold}>
                    <p className={style.jbye}>金币余额</p>
                    <h1>{coinNub}</h1>
                    <div className={style.todyAndAll}>
                        <div>
                            <span>今日金币</span>
                            <p>{coinTody}</p>
                        </div>
                        <div>
                            <span>累计获得</span>
                            <p>{coinAll}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.icondetails}>
                <h3>金币详情</h3>
                <div className={style.icondetailsAll}>
                    {
                        icondetailsList.map(item=>{

                            return (<div className={style.icondetailsList}>
                                <div>
                                    <span className={style.icondetailsListName}>{item.name}</span>
                                    <p className={style.icondetailsListdate}>{item.time}</p>
                                </div>
                                <div className={style.icondetailsListgold}>{item.goldsub}</div>
                            </div>)
                        })
                    }

                </div>
                <p className={style.tip}>金币详情只显示最近50条的记录</p>
            </div>

            <button className={style.btn}>金币提现</button>

            

        </div>)
    }
}