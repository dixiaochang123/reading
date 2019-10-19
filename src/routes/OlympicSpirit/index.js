import React, { Component } from 'react';
import { NavBar, Icon, Carousel } from 'antd-mobile';
import {goBack} from '../../utils/andohistoy'
import {setCookie,getCookie} from '../../utils/cookie'
// import './index.less'
// import style from './index.less'
// const style = require('./index.less')

import refresh from './refresh.svg'

export default class Reader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        }
    }

    componentDidMount() {
        let token = getCookie('token')//获取cookie
        console.log(111111111,getCookie('token'))
        alert(getCookie('token'))
        setCookie('token',token,10000000000)//设置cookie   setCookie('sex','男', 10);
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    goBack = () => {
        goBack()
    }


    render() {
        return (<div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.goBack}
            >奥运精神</NavBar>
            {/* 轮播 */}
            <Carousel
                autoplay={true}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}>
                {this.state.data.map(val => (
                    <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                ))}
            </Carousel>
            {/* 访谈视频 */}
            <div className='videos'>
                <h1 className="videos_header"><span>访谈视频</span><span>换一换</span><span><img id='fx' alt="" src={refresh} /></span></h1>
                <div>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}>
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
            </div>
            {/* 文学新闻 */}
            <div>
                <h1 className="videos_header"><span>文学新闻</span><span>查看更多</span></h1>
                <div>

                </div>
            </div>
            {/* 期刊杂志 */}
            <div>
                懒加载
            </div>


        </div>)
    }
}