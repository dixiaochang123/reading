import React, { Component } from 'react';
import {  Link } from 'dva/router';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'
import {getWelfareResult} from '../../services/example'
import {goBack,toShareDaily} from '../../utils/andohistoy'
import {setCookie,getCookie} from '../../utils/cookie'
import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
let vConsole = new VConsole() // 初始化
console.log(style)

export default class WelfareCentre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            readAwardCoinResults:[],
            signedTimes:0,
            coin:0,
            status:false

        };
        this.handleClickGoback = this.handleClickGoback.bind(this)
        this.handleClickGoback1 = this.handleClickGoback1.bind(this)
    }

    componentDidMount() {

        let token = getCookie('token')//获取cookie
        console.log(111111111,getCookie('token'))
        setCookie('token',token,10000000000)//设置cookie   setCookie('sex','男', 10);

        getWelfareResult().then(res=>{
            let {code,data} = res.data;
            let readAwardCoinResults = data.readAwardCoinResults;
            let signedTimes = !!data.signedTimes && data.signedTimes;
            let simpleUserResult = !!data.simpleUserResult && data.simpleUserResult;
            this.setState({
                readAwardCoinResults,
                signedTimes,
                coin:simpleUserResult.coin
            })
            console.log(222222,readAwardCoinResults)
        }).catch(error=>console.log(error))
    }

    goBack = () => {
        goBack()
    }

    handleClickGoback(status){
        let isIOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod')
        let isAndroid = navigator.userAgent.match('Android');
        if(!status) {
            if (isIOS) {
                // window.webkit.messageHandlers.jsCall.postMessage({
                //   "action": "toLoginIn",
                //   "data": {}
                // })
            } else if (isAndroid) {
                window.jsCall.toBookCity()
            }

        }

    }
    handleClickGoback1() {
        let status = false;
        this.handleClickGoback(status)
    }

    handleClickFx = ()=> {
        let params = {
            action: "toShareDaily",
            actionDetail: {
                showType: "1", //1:图文模式，2：大图模式，3：文本模式
                data:{
                    title: "标题",
                    imageUrl: "图片链接",
                    jumpUrl: "跳转链接",
                    content: "内容"
                }
            }
        }
        toShareDaily(params)
    }

    

    render() {
        const {readAwardCoinResults,signedTimes,coin,status} = this.state;
        return (<div className='content' className={style.content_max}>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.goBack}
            >福利中心</NavBar>
            <div className={style.content_text}>
                <div className={style.content_text_bg}>
                    <p>{coin}</p>
                    <p>我的金币</p>
                </div>
            </div>
            <div className={style.goSiginsParse}>
                <div className={style.goSigins + ' ' + style.goSiginsrius}>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10}>
                            <p className={style.p1}>你已累计签到{signedTimes}天</p>
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
                    {readAwardCoinResults.map((item,index)=>{
                        return (
                            <div key={item.content} className={style.goSigin + ' ' + style.flex　+ ' ' + style.ydrufzs}>
                                <div name={index} className={style.yd10 + ' '+ style.ydrufz}>
                                    <p className={style.p1}>{item.content.split(",")[0]}</p>
                                    <p className={style.p2}>{item.content.split(",")[1]}</p>
                                </div>
                                <div onClick={this.handleClickGoback.bind(this,item.status)} className={style.btnq +' '+ (!!item.status ? style.disabled : '')}>{!!item.status ? '已完成': '去阅读'　}</div>
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
                        <div className={style.btnq} onClick={this.handleClickGoback1}>去挑取</div>
                    </div>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10 + ' ' + style.yqhy}>
                            <p className={style.p1}>邀请好友</p>
                            <p className={style.p2}>1人/100金币</p>
                        </div>
                        <div className={style.btnq} onClick={this.handleClickGoback1}>去邀请</div>
                    </div>
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10 + ' ' + style.fbpl}>
                            <p className={style.p1}>发表评论</p>
                            <p className={style.p2}>不能低于15字/2金币</p>
                        </div>
                        <div className={style.btnq} onClick={this.handleClickGoback1}>去发表</div>
                    </div>
                    {/* <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10 + ' ' + style.jrsj}>
                            <p className={style.p1}>加入书架</p>
                            <p className={style.p2}>300金币</p>
                        </div>
                        <div className={style.btnq}>去加入</div>
                    </div> */}
                    <div className={style.goSigin + ' ' + style.flex}>
                        <div className={style.yd10 + ' ' + style.mrfx}>
                            <p className={style.p1}>每日分享</p>
                            <p className={style.p2}>1金币</p>
                        </div>
                        <div onClick={this.handleClickFx} className={style.btnq}>去分享</div>
                    </div>
                </div>
            </div>


        </div>)
    }
}