import React, { Component } from 'react';
import { NavBar, Icon, WhiteSpace,WingBlank, ActionSheet,Toast,Button} from 'antd-mobile';
import style from './index.less'
import { inviteRecordCount, getInviteCodeAndImg } from '../../services/example';
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

        };
    }
    componentDidMount() {
        inviteRecordCount().then(res=>{
            let {code,data} = res.data;
            this.setState({
                manCount:data.manCount,
                coin:data.coin,
            })
        }).catch(error=>console.log(error))

        getInviteCodeAndImg().then(res=>{
            let {code,data} = res.data;
//             inviteCode: 121
// url: "https://ti
            console.log(data)
            this.setState({
                inviteCode:data.inviteCode,
                url:data.url
            })
        }).catch(error=>console.log(error))
    }

    
dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));

  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataList,
      // title: 'title',
      message: '分享到',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        // Toast.info('closed after 1000ms');
        setTimeout(resolve, 1000);
      });
    });
  }

    

    render() {
        let {manCount,coin,inviteCode} = this.state;
        return (
            <WingBlank className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={()=>history.goBack()}
            >邀请好友</NavBar>
            <div className={style.content_text}></div>
            <div className={style.content_text_parent}>
                <div className={style.noticeBar}>
                    <img src={IconLest} alt=""/>
                    <span>188****2234获得1000金币邀请奖励</span>
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

            </WingBlank>)
    }
}