import React, { Component } from 'react';
import { NavBar, Icon, WhiteSpace,Carousel,Button} from 'antd-mobile';
import style from './index.less'
import { inviteRecordCount, getInviteCodeAndImg } from '../../services/example';
import {goBack,toSharePassword} from '../../utils/andohistoy'
import {setCookie,getCookie} from '../../utils/cookie'
const creatHistory = require("history").createHashHistory;
const history = creatHistory();

const IconLest = require("../../images/invitefriends/椭圆3@2x.png");
const IconFlow = require("../../images/invitefriends/1-2-3@2x.png");


export default class InviteFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            manCount:0,
            coin:0,
            inviteCode:'',
            url:'',
            clicked: 'none',
            clicked1: 'none',
            clicked2: 'none',
            text:"",
            dialog:false,
            flag:false

        };
        this.close = this.close.bind(this)
    }
    
    componentDidMount() {
        inviteRecordCount().then(res=>{
            let {data} = res.data;
            this.setState({
                manCount:data.manCount,
                coin:data.coin,
                successInviteInfo:data.successInviteInfo
            },()=>{
                this.setState({
                    flag:true
                })
            })
        }).catch(error=>console.log(error))
        let token = getCookie('token')//获取cookie
        setCookie('token',token,10000000000)//设置cookie 

        getInviteCodeAndImg().then(res=>{
            let {code,data} = res.data;
            this.setState({
                inviteCode:data.inviteCode,
                url:data.url
            })
        }).catch(error=>console.log(error))
    }

  showShareActionSheet = () => {
      this.setState({
        dialog:true
      })
  }

  goBack = () => {
    goBack()
    // history.goBack();
}
handleClickCopy=()=> {
    let text = `[红包]下载【有空看书】\n[红包]免费阅读赚零花钱填我邀请码【${this.state.inviteCode}】！\n[红包]邀请人可得【1元】红包\n[红包]红包累计5元可提现\n[红包]复制此消息可自动填邀请码`
    console.log(text)
    let data = {
      action: "toSharePassword",
        actionDetail: {
            content: text,
        }
       }
    toSharePassword(data)
    this.setState({
        dialog:false
    })
}

    close(){
        this.setState({
            dialog:false
        })
    }

    render() {
        let {manCount,coin,inviteCode,dialog,successInviteInfo,flag} = this.state;
        return (
            <div className={style.content}>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.goBack}
            >邀请好友</NavBar>
            <div style={{height:"45px"}}></div>
            <div className={style.content_text}></div>
            <div className={style.content_text_parent}>
                <div className={style.noticeBar}>
                    <img src={IconLest} alt=""/>
                    <Carousel className="my-carousel"
                        vertical
                        dots={false}
                        dragging={false}
                        swiping={false}
                        autoplay={flag}
                        infinite
                        >
                        {
                            !!successInviteInfo && successInviteInfo.map(item=>{
                                return (
                                    <div className="v-item" key={item.key}>{item.key}获得{item.value}金币邀请奖励</div>
                                )
                            })
                        }
                    </Carousel>

                    <img src={IconLest} alt=""/>
                </div>
                <div className={style.flow}>
                    <p className={style.p1}>我的邀请码为</p>
                    <p className={style.p2}>{inviteCode}</p>
                    <p className={style.p3}>好友也可以在注册时直接填写邀请码</p>
                    <p className={style.p4}></p>
                    <div>
                        <img src={IconFlow} alt=""/>
                    </div>
                    <div className={style.flowText}>
                        <span>点击马上邀请， 分享给好友</span>
                        <span>好友通过二维码， 填写邀请码并下载app</span>
                        <span>好友注册登录并阅读 任意一本小说</span>
                    </div>
                    <Button onClick={this.showShareActionSheet}>马上邀请</Button>
                    <WhiteSpace />
                </div>
                <div className={style.my_invite}>
                    <div className={style.my_invite_content}>
                        <p>成功邀请人数</p>
                        <span>{manCount}</span>
                    </div>
                    <div className={style.my_invite_bor}></div>
                    <div className={style.my_invite_content}>
                        <p>累计获得金币</p>
                        <span>{coin}</span>
                    </div>
                </div>
                <div className={style.activity_rules}>
                    <div className={style.activity_rules_content}>
                        <p>1. 分享给好友，让好友通过你的分享下载注册，每邀请 一位好友，奖励1000金币</p>
                        <p>2.好友（新用户）通过二维码进入活动页输入邀请码，下 载app并登录，你的本次邀请奖励即可到账。</p>
                        <p>3. 邀请好友数量无上限，邀请越多奖励越多。</p>
                    </div>
                </div>
            </div>
            <div className={dialog ?  style.dialog : style.hide}>
                <span onClick={this.close}><Icon  type={'cross'} /></span>
                <p className={style.p1}>您的口令已生成</p>
                <p className={style.p2}>已帮你自动复制，选择好友粘贴给他吧</p>
                <div>
                    [红包]下载【有空看书】<br />
                    [红包]免费阅读赚零花钱<br />
                    [红包]填我邀请码【{inviteCode}】！<br />
                    [红包]邀请人可得【1元】红包<br />
                    [红包]红包累计5元可提现<br />
                    [红包]复制此消息可自动填邀请码
                </div>
                <button onClick={this.handleClickCopy}>去粘贴</button>

            </div>
            <div className={dialog ?  style.mode : style.hide}></div>
            </div>
            )
    }
}