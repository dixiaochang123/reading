import React, { Component } from 'react';
import LiteraryNews from '../LiteraryNews/index';
import { NavBar, Icon, Picker,List } from 'antd-mobile';
// import {
//   Route,
//   Link
// } from 'react-router-dom';
// import './index.less'
import style from './index.less'

import IconMl from '../../images/read/ml2.png';
import IconYd from '../../images/read/yd2.png';
import IconBt from '../../images/read/bt2.png';
import IconSz from '../../images/read/sz2.png';

import { query, chapter_list, chapter_text } from '../../services/example';
let fs = require("fs");
console.log(fs)

export default class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content_text:'1你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，你好，',
      footer_show: false,
      catalog_show: false,
      catalog:{
        name:'从仙侠世界开始的转生',
        list:[]
      },
      active:0,
      dayAndNight:'夜读',
      dayAndNightStyle:{
        backgroundColor: "#F8F8F8",
        color: "#000"
      },
      sitting_show:false,
      content_textFontSize:14,
      bgActive:"1",
      FyActive:"1"

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickCatalog = this.handleClickCatalog.bind(this);
    this.handleClickModal = this.handleClickModal.bind(this);
    this.handleClickChapter = this.handleClickChapter.bind(this);//章节选中
    this.handleClickDayAndNight = this.handleClickDayAndNight.bind(this);//夜读 白天切换
    this.handleClickSitting = this.handleClickSitting.bind(this);//设置
    this.handleClickFontsize = this.handleClickFontsize.bind(this);//字体大小
    this.handleClickBg = this.handleClickBg.bind(this);//背景设置
    this.handleClickFy = this.handleClickFy.bind(this);//翻页效果切换
    this.handleClickSigh = this.handleClickSigh.bind(this);//报错
    this.onChangeSigh = this.onChangeSigh.bind(this);//报错

  }

  componentDidMount() {
    // query().then(res=>{
    //   console.log(res)
    // })
    let book_id = 1000001;
    chapter_list(book_id).then(res=>{
      let {code,data} = res.data;
      // console.log(code,data)
      // content_url: "https://www.youkongkanshu.com/huagerr/chapter/1000002_387_48361.txt"
      // id: 1000057
      // title: "第1章 引子"
      let catalog_list = data.map(item=>item.title)
      this.setState({
        catalog: {
          list:data,
          name:this.state.catalog.name
        } 
      })
    })
  }

  handleClick(event) {
    var e = event || window.event;
    e.persist();
    e.passive = false;
    // console.log(document.body.clientWidth,e.clientX)
    if (e.clientX <= 125) {
      console.log("上一页")
      this.setState({
        content_text: "呵呵，呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵"
      })
    }
    if (e.clientX > 125 && e.clientX < 250) {
      this.setState({
        footer_show: !this.state.footer_show,
        // catalog_show:!this.state.catalog_show
      })
    }
    if (e.clientX >= 250) {
      console.log("下一页")
      this.setState({
        content_text: "广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。广泛地是。"
      })
    }
    this.setState({
      sitting_show: false
    })
  }

  handleClickCatalog() {
    // let ch = document.getElementById('chapter').clientHeight;
    let chapter= document.getElementById("chapter");
    let oh = chapter.getElementsByTagName("p")[0].offsetHeight;
    document.getElementById('chapter').scrollTop = (this.state.chapterIdex-10)*oh-10;
    console.log(111111,document.getElementById('chapter').scrollTop)
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
    e.persist()
    console.log(e)
    this.setState({
      active:e.target.dataset.id,
      catalog_show: !this.state.catalog_show,
      chapterIdex: parseInt(e.target.dataset.index)
    },function() {

      // chapter_text().then(res=>{
      //   // let {code,data} = res.data;
      //   console.log(res)
      // })
    })

  }

  handleClickDayAndNight() {
    let dayAndNight = this.state.dayAndNight;
    let dayAndNightStyle = {
      backgroundColor: "#F8F8F8",
      color: "#000"
    }
    let dayAndNightStyle2 = {
      backgroundColor: "#000",
      color: "#fff"
    }
    this.setState({
      dayAndNight: dayAndNight=='夜读' ? '白天' :'夜读',
      dayAndNightStyle:dayAndNight=='夜读' ? dayAndNightStyle2 : dayAndNightStyle
    })
  }

  handleClickSitting() {
    this.setState({
      sitting_show:!this.state.sitting_show
    })
  }

  handleClickFontsize(e) {
    e.stopPropagation() // 能够阻止div.app的触发
    e.persist()
    if(e.target.id=="2") {
      this.setState({
        content_textFontSize: this.state.content_textFontSize+1
      })
    }
    if(e.target.id=="1") {
      this.setState({
        content_textFontSize: this.state.content_textFontSize-1
      })
    }
  }

  handleClickBg(e) {
    e.stopPropagation() // 能够阻止div.app的触发
    e.persist()
    switch(e.target.id) {
      case "1":
        this.setState({
          dayAndNightStyle: {
            backgroundColor: "#F8F8EC",
            color: "#222222"
          },
          bgActive:"1"
        })
      break;
      case "2":
        this.setState({
          dayAndNightStyle: {
            backgroundColor:"#F5E0BE",
            color: "#000"
          },
          bgActive:"2"
        })
      break;
      case "3":
        this.setState({
          dayAndNightStyle: {
            backgroundColor: "#DBE2C9",
            color: "#222222"
          },
          bgActive:"3"
        })
      break;
      case "4":
        this.setState({
          dayAndNightStyle: {
            backgroundColor: "#CCD9E4",
            color: "#222222"
          },
          bgActive:"4"
        })
      break;
      case "5":
        this.setState({
          dayAndNightStyle: {
            backgroundColor: "#151515",
            color: "#F1F1F1"
          },
          bgActive:"5"
        })
      break;
    }

  }

  handleClickFy(e) {
    e.stopPropagation() // 能够阻止div.app的触发
    e.persist()
    switch(e.target.id) {
      case "1":
        this.setState({
          FyActive:"1"
        })
      break;
      case "2":
        this.setState({
          FyActive:"2"
        })
      break;
      case "3":
        this.setState({
          FyActive:"3"
        })
      break;
    }

  }

  handleClickSigh() {

  }
  onChangeSigh(val) {
    console.log(val)
    
  }


  render() {
    let { content_text,footer_show, catalog, catalog_show,active,dayAndNight,dayAndNightStyle,sitting_show,content_textFontSize, bgActive,FyActive } = this.state;

    return (<div className="content">
      {/* <NavBar
        mode="light"
        icon={<Icon type="left" />}
        className='navbar'
      ></NavBar> */}
      <div className={style.content_text} style={dayAndNightStyle} onClick={this.handleClick}>
        <p style={{fontSize:content_textFontSize+'px'}}>{content_text}</p>
      </div>

      {/*  */}
      {/* <div class={style.sigh} onClick={this.handleClickSigh}></div> */}
      <Picker title="请选择错误类型" data={[{value:'错别字纠正',label:'错别字纠正'},{value:'段落错误',label:'段落错误'},{value:'章节报错',label:'章节报错'}]} onChange={this.onChangeSigh} cols={1} className="forss">
        <List.Item arrow="horizontal"><div class={style.sigh} onClick={this.handleClickSigh}></div></List.Item>
      </Picker>

      {/* 左侧目录 */}
      <div className={!catalog_show ? style.catalog : style.catalog_show}>
        <h2>{catalog.name}</h2>
        <div id="chapter"  className={style.chapter} onClick={this.handleClickChapter}>
          {
            catalog.list.map((item,index)=>{
              return (
                <p id={'chapter'+index} data-index={index} data-url={item.content_url} data-id={item.id} key={item.id} index={item.id} className={active==item.id ? style.active : ''}>{item.title}</p>
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
          <span><img src={IconMl} style={{width:"0.2rem",height:"0.17rem"}} alt=""/></span>
          <span>目录</span>
        </div>
        <div className={style.yd} onClick={this.handleClickDayAndNight}>
          <span><img src={ dayAndNight =='白天' ? IconBt :IconYd} style={{width:"0.225rem",height:"0.2rem"}} alt=""/></span>
          <span>{dayAndNight}</span>
        </div>
        <div className={style.sz} onClick={this.handleClickSitting}>
          <span><img src={IconSz} style={{width:"0.225rem",height:"0.2rem"}} alt=""/></span>
          <span>设置</span>
        </div>
      </div>

      <div className={sitting_show ? style.sitting_show : style.sitting_hide}>
        <div>
          <span className={style.firstName}>字号</span>
          <div className={style.zh} onClick={this.handleClickFontsize}>
            <span id="1">A-</span>
            <span id="2">A+</span>

          </div>
        </div>
        <div>
          <span className={style.firstName}>背景</span>
          <div className={style.bg} onClick={this.handleClickBg}>
            <span className={bgActive == "1" ? style.bgActive : ''} id="1"></span>
            <span className={bgActive == "2" ? style.bgActive : ''} id="2"></span>
            <span className={bgActive == "3" ? style.bgActive : ''} id="3"></span>
            <span className={bgActive == "4" ? style.bgActive : ''} id="4"></span>
            <span className={bgActive == "5" ? style.bgActive : ''} id="5"></span>
          </div>
        </div>
        <div>
          <span className={style.firstName}>翻页</span>
          <div className={style.fy} onClick={this.handleClickFy}>
            <span className={FyActive == "1" ? style.FyActive : ''} id="1">仿真</span>
            <span className={FyActive == "2" ? style.FyActive : ''} id="2">平移</span>
            <span className={FyActive == "3" ? style.FyActive : ''} id="3">上下</span>
          </div>
        </div>

      </div>


    </div>)
  }
}