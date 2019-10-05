import React, { Component } from 'react';
import LiteraryNews from '../LiteraryNews/index';
import { NavBar, Icon, Picker,List } from 'antd-mobile';
// import {
//   Route,
//   Link
// } from 'react-router-dom';
import style from './index.less'

import IconMl from '../../images/read/ml2.png';
import IconYd from '../../images/read/yd2.png';
import IconBt from '../../images/read/bt2.png';
import IconSz from '../../images/read/sz2.png';

import { query, chapter_list, chapter_text } from '../../services/example';
import { node } from 'prop-types';
let http = require("http");
console.log(http)

export default class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content_text:'',
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
      FyActive:"1",
      errtypeShow:false,
      wrongFont:false,//错别字纠正弹框

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
    this.handleClickCloseErr = this.handleClickCloseErr.bind(this);//报错弹框取消
    this.handleClickErrSelectd = this.handleClickErrSelectd.bind(this);//报错弹框取消

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
    document.addEventListener("selectionchange", function(e) {
      console.log(e); 
    });
  }

  handleClick(event) {
    var e = event || window.event;
    e.persist();
    e.passive = false;
    // console.log(document.body.clientWidth,e.clientX)
    this.setState({
      wrongFont:false,
      footer_show: !this.state.footer_show,
    })
    if (e.clientX <= 125) {
      console.log("上一页")
    }
    if (e.clientX > 125 && e.clientX < 250) {
      this.setState({
        footer_show: !this.state.footer_show,
        // catalog_show:!this.state.catalog_show
        // wrongFont:false
      })
    }
    if (e.clientX >= 250) {
      console.log("下一页")
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
      // fetch
      chapter_text(e.target.dataset.url).then(res=>{
        let {code,data} = res.data;
        // console.log(data)
        // mainfunctiondescription.replace('     ', '\n'); style={{textIndent:'1em'}}
        // let dataNew = data.split('↵↵').map((item,index )=> (<p key={index} style={{fontSize:this.state.content_textFontSize+'px'}}>{item}</p>));
        // let dataNew = data.replace(/[\n\r]/g,'<br>')
        let dataNew=data.replace(/\r+/g,"<br>");
        dataNew = dataNew.replace(/<br><br>/g,"<br>")
        // encodeURI(data),
        console.log(dataNew)

        this.setState({
          content_text:dataNew
        })
      })
      let url = `http://develop-ykks-book.cn-bj.ufileos.com/${e.target.dataset.url}`;
      // jQuery
      // $.get(url,function(res){
      //   console.log(res);
      // });
      // Node
      // let a = 1;
      // http.get(url, function (res) {
      //   res.on('data', function (data) {
      //     console.log(data)
      //   });
      //   res.on('end', function () {
      //     // console.log(html);
      //   });
      // }).on('error', function () {
      //   console.log('获取数据错误',this);
      // });
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
    this.setState({
      footer_show:!this.state.footer_show,
      errtypeShow:true
    })

  }
  onChangeSigh(val) {
    console.log(val)
    
  }
  handleClickCloseErr() {
    this.setState({
      errtypeShow:false
    })


  }
  handleClickErrSelectd(e) {
    e.persist()
    console.log(e.target.id)
    switch(e.target.id) {
      case "1":
        this.setState({
          wrongFont:true
        })
      break;
    }
    this.setState({
      errtypeShow:false
    })

  }


  render() {
    let { content_text,footer_show, catalog, catalog_show,active,dayAndNight,dayAndNightStyle,sitting_show,content_textFontSize, bgActive,FyActive,errtypeShow,wrongFont } = this.state;

    return (<div className="content">
      {/* <NavBar
        mode="light"
        icon={<Icon type="left" />}
        className='navbar'
      ></NavBar> */}
      <div className={style.content_text} style={dayAndNightStyle} onClick={this.handleClick}>
        <p style={{fontSize:content_textFontSize+'px',lineHeight: '25px',textIndent:'1em'}} dangerouslySetInnerHTML={{ __html: content_text}}></p>
        {/* {content_text} */}
      </div>

      {/*  */}
      <div className={!footer_show ? style.sighHide : style.sighShow} onClick={this.handleClickSigh}></div>
      {/* 报错类型选择框弹出 */}
      <div className={errtypeShow ? style.errtypeShow : style.errtypeHide}>
        <div className={style.erroption}>
          <h3>请选择错误类型</h3>
          <div className={style.option} onClick={this.handleClickErrSelectd}>
            <p id="1">错别字纠正</p>
            <p id="2">段落错误</p>
            <p id="3">章节报错</p>
          </div>
        </div>
        <p onClick={this.handleClickCloseErr}>取消</p>
      </div>
      <div className={errtypeShow ? style.modal : style.hide} onClick={this.handleClickErrSelectd}></div>
      {/* 错别字纠正 */}
      <div className={ !wrongFont ? style.wrongFont_hide : style.wrongFont_show}>
        <div>
          <p className={style.wrongtip}>错别字为</p>
          <div className={style.fontNew}>
            <textarea name="" id="" ></textarea>
          </div>
        </div>
        <div>
          <p className={style.wrongtip}>更正为</p>
          <div className={style.fontNew}>
            <textarea name="" id="" ></textarea>
          </div>
        </div>

      </div>

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

      {/* 蒙层 */}
      <div className={catalog_show ? style.modal : style.hide} onClick={this.handleClickModal}></div>

      <div className={!footer_show ? style.footer : style.footer_show}>
        {/* <Link to={'/literarynews'}>ceshi</Link>
              <Route path='/literarynews' component={LiteraryNews}/> */}
        <div className={style.ml} onClick={this.handleClickCatalog}>
          <span><img src={IconMl} style={{width:"20px",height:"17px"}} alt=""/></span>
          <span>目录</span>
        </div>
        <div className={style.yd} onClick={this.handleClickDayAndNight}>
          <span><img src={ dayAndNight =='白天' ? IconBt :IconYd} style={{width:"22.5px",height:"20px"}} alt=""/></span>
          <span>{dayAndNight}</span>
        </div>
        <div className={style.sz} onClick={this.handleClickSitting}>
          <span><img src={IconSz} style={{width:"22.5px",height:"20px"}} alt=""/></span>
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