import React, { Component } from 'react';
import { NavBar, Icon, Flex } from 'antd-mobile';
import style from './index.less'
import creatHistory from 'history/createHashHistory'
const history = creatHistory();
console.log(style)

export default class SignRule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []

        };
    }

    

    render() {
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={()=>history.goBack()}
            >规则说明</NavBar>


        </div>)
    }
}