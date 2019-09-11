import React, { Component } from 'react';
import { NavBar, Icon, Flex } from 'antd-mobile';
import './index.less'
import creatHistory from 'history/createHashHistory'
const history = creatHistory();

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
    

    render() {
        return (<div className='content'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={()=>history.goBack()}
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
          </div>


        </div>)
    }
}