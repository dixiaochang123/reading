import React, { Component } from 'react';
import { NavBar, Icon, Flex } from 'antd-mobile';
import style from './index.less'
import creatHistory from 'history/createHashHistory'
const history = creatHistory();

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []

        };
        // this.onRightClick = this.onRightClick.bind(this)
    }

    

    render() {
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={()=>history.goBack()}
                rightContent={"签到规则"}
                className='navbar'
            >签到有礼</NavBar>
            <div className={style.onRightClick} onClick={()=>this.props.history.push('/signrule') }></div>


        </div>)
    }
}