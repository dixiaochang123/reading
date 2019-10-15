import React, { Component } from 'react';
import { NavBar, Icon,Calendar } from 'antd-mobile';
import style from './index.less'
import { relative } from 'path';
import {signed,signData} from '../../services/example'
var dateHtmlp = "";
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gold_coin:20,
            seventh_days:0,
            seventh_days_10:0,
            seventh_days_100:0,
            signDatas:[],

            dialogIsShow:false,
            show: true,
            config:{
                type: 'one',
                // pickTime: false
            },
            dateHtml:'',
            visibility:"hidden"

        };
        this.handleClickSign = this.handleClickSign.bind(this)
        this.handleClickSignDay = this.handleClickSignDay.bind(this)
    }

    componentDidMount() {
        console.log('返回上一页')
        this.forceUpdate();//强制刷新
        this.signData();     
    }
    signData() {
        signData().then(res=>{
            let {code,data} = res.data;
            let signedTimes = data.signedTimes.toString();
            let seventh_days = signedTimes < 10 ? signedTimes : signedTimes.substr(signedTimes.length-1,1);
            let seventh_days_10 = signedTimes >=10 ? signedTimes.substr(signedTimes.length-2,1) : 0;
            let seventh_days_100 = signedTimes >=100 ? signedTimes.substr(0,1) : 0;
            this.setState({
                seventh_days:seventh_days,
                seventh_days_10:seventh_days_10,
                seventh_days_100:seventh_days_100,
                signDatas:data.signDatas
            })
        }).catch(error=>console.log(error))
    }
    // 判断是否闰年
    isLeap = (year) => {
        return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
    }

    handleClickSign() {
        signed().then(res=>{
            console.log(11,res)
            let {code,data,message} = res.data;
            console.log(code,data,message)
            if(code==200 || code==500) {
                this.setState({
                    visibility:'initial'
                })
            } else {
                this.setState({
                    visibility:'hidden'
                })
            }
        }).catch(error=>console.log(error))
        this.setState({
            dialogIsShow:true
        })
    }

    handleClickSignDay(value) {
        console.log(value)
        if(value==1 || value==2) return;
    }

    render() {
        let { dialogIsShow ,seventh_days_10,seventh_days_100,signDatas,visibility} = this.state;
        //获取当前时间
        let myDate = new Date();
        let year = myDate.getFullYear();//获取年
        let month = myDate.getMonth() + 1;//获取月，默认从0开始，所以要加一
        var myDay = myDate.getDate() // 获取当前日（1- 31）
        var weekend = myDate.getDay() //星期几

        let blank = weekend - (myDay % 7) + 1;
        if(blank<0) blank = 7 + blank;
        let blanks = [];
        for(var i = 0; i < blank; i++) {
            blanks.push(i)
        }
        let dateHtmlNull = blanks.map(item=>{
            return <li key={item}></li>
        })

        let dateHtmlp = signDatas.map(item=>{
            return <li onClick={this.handleClickSignDay.bind(this,item.value)} name={item.value} key={item.key}><p className={style.succe}>{item.key}</p></li>
        })
        let ulHtml = <ul><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li>{dateHtmlNull}{dateHtmlp}</ul>

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
                <p><span>{seventh_days_100}</span><span>{seventh_days_10}</span><span>{this.state.seventh_days}</span>天</p>
                <p style={{visibility:visibility}}>今日签到已获得{this.state.gold_coin}金币，连续签到{this.state.seventh_days}天金币翻倍</p>
            </div>
            {/* 弹框 */}
            <div className={dialogIsShow ? style.dialog : style.hide}>
                <p className={style.dialog_first_p}>签到成功！恭喜你获得</p>
                <p className={style.dialog_nth2_p}><span>20</span>积分</p>
                <button className={style.btn} onClick={()=>this.setState({dialogIsShow:false})}>赚取更多积分</button>
            </div>
            <div className={dialogIsShow ? style.mode : style.hide}></div>
            <p className={style.tody}>{year}年{month}月</p>
            <div className='calendars' style={{position:'relative'}}>
                {ulHtml}
            </div>
            <button className={style.btn1} onClick={this.handleClickSign}>签到领金币</button>

            

        </div>)
    }
}