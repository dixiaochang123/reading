import React, { Component } from 'react';
import { NavBar, Icon,Calendar } from 'antd-mobile';
import style from './index.less'
import { relative } from 'path';
var dateHtmlp = "";
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gold_coin:20,
            seventh_days:7,
            dialogIsShow:true,
            show: true,
            config:{
                type: 'one',
                // pickTime: false
            },
            days_per_month:31,
            dateHtml:''

        };
    }

    componentDidMount() {

        //获取当前时间
        var myDate = new Date();
        var year = myDate.getFullYear();//获取年
        var month = myDate.getMonth() + 1;//获取月，默认从0开始，所以要加一
        var myDay = myDate.getDate() // 获取当前日（1- 31）
        var weekend = myDate.getDay() //星期几

        // this.setState({
        //     days_per_month: new Array(31, 28 + this.isLeap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
        // })
        let days_per_month = new Array(31, 28 + this.isLeap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        //从后台获取签到日期
        let signDate = [0,1,2,3,4,5,6,7,8,9,,18,19,23,24,25,26,27,28,29,30,31]; 
        let dateHtml = "<li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li>";
        let blank = weekend - (myDay % 7) + 1;
        if(blank<0) blank = 7 + blank; 
        console.log('blank',blank)
        let blanks = []
        for(var i = 0; i < blank; i++) {
            blanks.push(i)
            dateHtml += "<li></li>";
        }
        console.log('blanks',blanks)
        var dateHtmlp = "";
        for(var j = 1; j <= days_per_month[month - 1]; j++) {
            for(var n = 1; n < signDate.length; n++) {
                if(j == signDate[n]) {
                    dateHtmlp = "<p class='succe'>" + j + "<i></i></p>";
                    break
                } else {
                    if(j < signDate[signDate.length - 1]) {
                        dateHtmlp = "<p class='failed'>" + j + "<i></i></p>";
                    } else {
                        dateHtmlp = "<p>" + j + "<i></i></p>";
                    }
                }
            }
            dateHtml += "<li>" + dateHtmlp + "</li>";
        }
        this.setState({
            dateHtml:dateHtml
        })
        // console.log(document.getElementsByClassName('calendars')[0],urlHtml)
        let calendars = document.getElementsByClassName('calendars')[0];
        console.log(calendars)
                
    }

    isLeap = (year) => {
        return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
    }

    render() {
        let { dialogIsShow ,days_per_month} = this.state;
        //获取当前时间
        let myDate = new Date();
        let year = myDate.getFullYear();//获取年
        let month = myDate.getMonth() + 1;//获取月，默认从0开始，所以要加一
        var myDay = myDate.getDate() // 获取当前日（1- 31）
        var weekend = myDate.getDay() //星期几

        //从后台获取签到日期
        var signDate = [0,1,2,3,4,5,6,7,8,9,,18,19,23,24,25,26,27,28,29,30,31];
        let blank = weekend - (myDay % 7) + 1;
        if(blank<0) blank = 7 + blank;
        let blanks = [];
        for(var i = 0; i < blank; i++) {
            blanks.push(i)
        }
        let dateHtmlNull = blanks.map(item=>{
            return <li key={item}></li>
        })
        let hehe = []
        for(var j = 1; j <= days_per_month[month - 1]; j++) {
            hehe.push(j)
        }
        let hj = hehe.map(item=>{
            return <p className={style.succe}>{item}</p>;
            // return signDate.key(key=>{
            //     if(item == key) {
            //         return <p className={style.succe}>{item}</p>;
            //     } else {
            //         if(item < signDate[signDate.length - 1]) {
            //             return <p className={style.succe}>{item} <i></i></p>;
            //         } else {
            //             return  <p>{j}<i></i></p>;
            //         }
            //     }
            // })
        })
        let ulHtml = <ul><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li>{dateHtmlNull}{hj}</ul>
        console.log(hehe,hj)













        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                rightContent={"签到规则"}
                className='navbar'
            >签到有礼</NavBar>
            {/* 签到规则跳转覆盖 */}
            <div className={style.onRightClick} onClick={()=>this.props.history.push('/signrule') }></div>
            <div style={{height:".36rem"}}></div>
            {/* 已连续签到 */}
            <div className={style.continuity}>
                <p>已连续签到</p>
                <p><span>0</span><span>0</span><span>{this.state.seventh_days}</span>天</p>
                <p>今日签到已获得{this.state.gold_coin}金币，连续签到{this.state.seventh_days}天金币翻倍</p>
            </div>
            {/* 弹框 */}
            <div style={{display:'none'}} className={dialogIsShow ? style.dialog : style.hide}>
                <p className={style.dialog_first_p}>签到成功！恭喜你获得</p>
                <p className={style.dialog_nth2_p}><span>20</span>积分</p>
                <button onClick={()=>this.setState({dialogIsShow:false})}>赚取更多积分</button>
            </div>
            <div style={{display:'none'}} className={dialogIsShow ? style.mode : style.hide}></div>
            <p className={style.tody}>{year}年{month}月</p>
            <div className='calendars' style={{position:'relative'}}>
                {/* <ul className={style.ulthml} dangerouslySetInnerHTML={{__html: dateHtml}}></ul> */}
                {ulHtml}
            </div>
            

        </div>)
    }
}