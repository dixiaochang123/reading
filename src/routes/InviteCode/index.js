import React, { Component } from 'react';
import { NavBar, Icon} from 'antd-mobile';
import style from './index.less'
import {  getInviteCodeAndImg } from '../../services/example';
import {goBack} from '../../utils/andohistoy'
import {setCookie,getCookie} from '../../utils/cookie'

export default class Inviteode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            inviteCode:'',
            url:''

        };
    }

    componentDidMount() {
        let token = getCookie('token')//获取cookie
        setCookie('token',token,10000000000)//设置cookie   setCookie('sex','男', 10);

        getInviteCodeAndImg().then(res=>{
            let {code,data} = res.data;
            this.setState({
                inviteCode:data.inviteCode,
                url:data.url
            })
        }).catch(error=>console.log(error))
    }

    goBack = () => {
        goBack()
    }

    render() {
        let {inviteCode,url} = this.state;
        return (
            <div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.goBack}
            >邀请好友</NavBar>
            <div className={style.content_all}>
                <div className={style.content_placeholder}></div>
                <div className={style.content_text}>
                    <p className={style.p1}>邀请码</p>
                    <p className={style.p2}>{inviteCode}</p>
                    <p className={style.p3}>长按复制</p>
                    <div className={style.code}>
                        <img src={url} alt=""/>
                    </div>
                    <p className={style.p4}>长按识别二维码</p>

                </div>

            </div>

            </div>)
    }
}