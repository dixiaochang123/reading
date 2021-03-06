import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import style from './index.less'
// import creatHistory from 'history/createHashHistory'
import {goBack} from '../../utils/andohistoy'
// import {setCookie,getCookie} from '../../utils/cookie'

export default class Reader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [{
                img: '',
                name: '三国演义',
                author: '罗贯中',
                time:'',
                introduce:'gfyudsagfuildsfldshjflkdhsjkfhdjlhfkldk'
            },{
                img: '',
                name: '三国演义',
                author: '罗贯中',
                time:'',
                introduce:'gfyudsagfuildsfldshjflkdhsjkfhdjlhfkldk'
            },{
                img: '',
                name: '三国演义',
                author: '罗贯中',
                time:'',
                introduce:'gfyudsagfuildsfldshjflkdhsjkfhdjlhfkldk'
            },{
                img: '',
                name: '三国演义',
                author: '罗贯中',
                time:'',
                introduce:'gfyudsagfuildsfldshjflkdhsjkfhdjlhfkldk'
            }]

        };
        // this.onLeftClick = this.onLeftClick.bind(this)
    }

    goBack = () => {
        goBack()
    }
    

    render() {
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.goBack}
            >文学新闻</NavBar>
            <div className='footer'>
                {
                    this.state.news.map((item,index)=>{
                        return (
                            <div key={index} style={{display:'flex'}}>
                                <div style={{width:'100px',height:'100px',border:'solid 1px red'}}>{item.img}</div>
                                <div>
                                    <span>{`${item.name}/${item.author}`}</span>
                                </div>
                            </div>
                        )
                    })
                }
                <p className={style.hh}>jjjjjjjjjjjjjjj</p>
          </div>


        </div>)
    }
}