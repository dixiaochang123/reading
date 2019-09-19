import React, { Component } from 'react';
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
      footer_show: false,
      catalog_show: false,
      catalog:{
        name:'从仙侠世界开始的转生',
        list:[{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'},{text:'第1章 大梦一场十二载1'}]
      },
      active:0,
      dayAndNight:'夜读',
      dayAndNightStyle:{
        backgroundColor: "#F8F8F8",
        color: "#000"
      }

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickCatalog = this.handleClickCatalog.bind(this);
    this.handleClickModal = this.handleClickModal.bind(this);
    this.handleClickChapter = this.handleClickChapter.bind(this);//章节选中
    this.handleClickDayAndNight = this.handleClickDayAndNight.bind(this);//夜读 白天切换
    this.handleClickSitting = this.handleClickSitting.bind(this);//设置
  }

  handleClick(event) {
    var e = event || window.event;
    e.persist();
    e.passive = false;
    // console.log(document.body.clientWidth,e.clientX)
    if (e.clientX <= 125) {
      console.log("上一页")
    }
    if (e.clientX > 125 && e.clientX < 250) {
      console.log(e.clientX)
      this.setState({
        footer_show: !this.state.footer_show,
        // catalog_show:!this.state.catalog_show
      })
    }
    if (e.clientX >= 250) {
      console.log("下一页")
    }
  }

  handleClickCatalog() {
    this.setState({
      footer_show: !this.state.footer_show,
      catalog_show: !this.state.catalog_show
    })
  }

  handleClickModal() {
    this.setState({
      catalog_show: !this.state.catalog_show
    })
  }

  handleClickChapter(e) {
    // e.stopPropagation() // 能够阻止div.app的触发
    // e.nativeEvent.stopImmediatePropagation(); // 能够阻止document的触发
    // e.nativeEvent.stopPropagation(); // 什么都阻止不了
    this.setState({
      active:e.target.id,
      catalog_show: !this.state.catalog_show
    })
  }

  handleClickDayAndNight() {
    let dayAndNight = this.state.dayAndNight;
    let dayAndNightStyle = {
      backgroundColor: "#F8F8F8",
      color: "#000"
    }
    let dayAndNightStyle1 = {
      backgroundColor: "#000",
      color: "#fff"
    }
    this.setState({
      dayAndNight: dayAndNight=='夜读' ? '白天' :'夜读',
      dayAndNightStyle:dayAndNight=='夜读' ? dayAndNightStyle1 : dayAndNightStyle
    })
  }

  handleClickSitting() {
    
  }


  render() {
    let { footer_show, catalog, catalog_show,active,dayAndNight,dayAndNightStyle } = this.state;
    return (<div className="content">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        className='navbar'
      ></NavBar>
      <div className={style.content_text} style={dayAndNightStyle} onClick={this.handleClick}>
        <p>1你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</p>
      </div>

      {/* 左侧目录 */}
      <div className={!catalog_show ? style.catalog : style.catalog_show}>
        <h1>{catalog.name}</h1>
        <div className={style.chapter} onClick={this.handleClickChapter}>
          {
            catalog.list.map((item,index)=>{
              return (
                <p key={index} id={index} className={active==index ? style.active : ''}>{item.text}</p>
              )
            })
          }
        </div>

      </div>
      <div className={catalog_show ? style.modal : style.hide} onClick={this.handleClickModal}></div>

      <div className={!footer_show ? style.footer : style.footer_show}>
        {/* <Link to={'/literarynews'}>ceshi</Link>
              <Route path='/literarynews' component={LiteraryNews}/> */}
        <div className={style.ml} onClick={this.handleClickCatalog}>
          <span>ee</span>
          <span>目录</span>
        </div>
        <div className={style.yd} onClick={this.handleClickDayAndNight}>
          <span>ee</span>
          <span>{dayAndNight}</span>
        </div>
        <div className={style.sz} onClick={this.handleClickSitting}>
          <span>ee</span>
          <span>设置</span>
        </div>
      </div>

      <div className={style.sitting}>
        <div>
          <span className={style.firstName}>字号</span>
          <div className={style.zh}>
            <span>A-</span>
            <span>A+</span>

          </div>
        </div>
        <div>
          <span className={style.firstName}>背景</span>
          <div className={style.bg}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </div>
        </div>
        <div>
          <span className={style.firstName}>翻页</span>
          <div>
            <span>仿真</span>
            <span>平移</span>
            <span>上下</span>
          </div>
        </div>

      </div>


    </div>)
  }
}