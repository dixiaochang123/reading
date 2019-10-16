import React, { Component } from 'react';
import {  Link } from 'dva/router';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'
import {getWelfareResult} from '../../services/example'
// import creatHistory from 'history/createHashHistory'  getWelfareResult
const creatHistory = require("history").createHashHistory;
const history = creatHistory();
console.log(style)

export default class WelfareCentre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            readAwardCoinResults:[]

        };
    }

    componentDidMount() {
        getWelfareResult().then(res=>{
            let {code,data} = res.data;
            let readAwardCoinResults = data.readAwardCoinResults;
            this.setState({
                readAwardCoinResults
            })
            console.log(222222,readAwardCoinResults)
        }).catch(error=>console.log(error))
    }

    

    render() {
        const {readAwardCoinResults} = this.state;
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
                <div className={style.goSigins + ' ' + style.goSiginsrius}>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10}>
                            <p className={style.p1}>你已累计签到3天</p>
                            <p className={style.p2}>查看今日日签<Icon type={'right'} /></p>
                        </div>
                        {/* <div className={style.btnq}>去签到</div> */}
                        <div className={style.btnq}><Link to={'/signin'}>去签到</Link></div>
                    </div>
                </div>
                <div className={style.goSigins + ' ' + style.goSiginsrius}>
                    <div className={style.goSigin + ' ' + style.flex + ' ' +style.ydrw}>
                        <p>阅读任务</p>
                    </div>
                    {readAwardCoinResults.map(item=>{
                        return (
                            <div key={item.content} className={style.goSigin + ' ' + style.flex}>
                                <div className={style.yd10 + ' '+ style.ydrufz}>
                                    <p className={style.p1}>{item.content.split(",")[0]}</p>
                                    <p className={style.p2}>{item.content.split(",")[1]}</p>
                                </div>
                                <div className={style.btnq +' '+ (!!item.status ? style.disabled : '')}>{!!item.status ? '已完成': '去阅读'　}</div>
                            </div>
                        )
                    })}
                </div>
                <div className={style.goSigins + ' ' + style.goSiginsrius}>
                    <div className={style.goSigin + ' ' + style.flex + ' ' +style.ydrw}>
                        <p className={style.ydrw}>日常任务</p>
                    </div>
                    <div style={{display:'none'}} className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10}>
                            <p className={style.p1}>挑取小说文章错别字</p>
                            <p className={style.p2}>1字/100金币</p>
                        </div>
                        <div className={style.btnq}>去挑取</div>
                    </div>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10 + ' ' + style.yqhy}>
                            <p className={style.p1}>邀请好友</p>
                            <p className={style.p2}>1人/200金币</p>
                        </div>
                        <div className={style.btnq}>去邀请</div>
                    </div>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10 + ' ' + style.fbpl}>
                            <p className={style.p1}>发表评论</p>
                            <p className={style.p2}>1条/20金币</p>
                        </div>
                        <div className={style.btnq}>去发表</div>
                    </div>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10 + ' ' + style.jrsj}>
                            <p className={style.p1}>加入书架</p>
                            <p className={style.p2}>300金币</p>
                        </div>
                        <div className={style.btnq}>去加入</div>
                    </div>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10 + ' ' + style.mrfx}>
                            <p className={style.p1}>每日分享</p>
                            <p className={style.p2}>500金币</p>
                        </div>
                        <div className={style.btnq}>去分享</div>
                    </div>
                </div>
            </div>


        </div>)
    }
}