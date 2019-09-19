import React,{Component} from 'react';
import LiteraryNews from '../LiteraryNews/index';
import { NavBar, Icon, Flex } from 'antd-mobile';
import {
  Route,
  Link
} from 'react-router-dom';
import './index.less'
import style from './index.less'

import IconFan2 from './fenx.svg'

console.log(style)

export default class Reader extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
      var e = event || window.event;
      e.persist();
      e.passive =false;
      // console.log(document.body.clientWidth,e.clientX)
      if(e.clientX<=125) {
        console.log("上一页")
      }
      if(e.clientX>125 && e.clientX<250) {
        console.log(e.clientX)
      }
      if(e.clientX>=250) {
        console.log("下一页")
      }
    }


    render() {
        return (<div className="content">
          <NavBar
                mode="light"
                icon={<Icon type="left" />}
                className='navbar'
            ></NavBar>
          <div className="content_text" onClick={this.handleClick}>
            <p>你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</p>
          </div>

          <div className="catalog">
            <h1>从仙侠世界开始的转生</h1>

          </div>

          <div className={style.footer}>
              {/* <Link to={'/literarynews'}>ceshi</Link>
              <Route path='/literarynews' component={LiteraryNews}/> */}
              <div className={style.ml}>
                <span>ee</span>
                <span>目录</span>
              </div>
              <div className={style.yd}>
                <span>ee</span>
                <span>夜读</span>
              </div>
              <div className={style.sz}>
                <span>ee</span>
                <span>设置</span>
              </div>
          </div>


          </div>)
    }
}