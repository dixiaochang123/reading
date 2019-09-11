import React,{Component} from 'react';
import LiteraryNews from '../LiteraryNews/index';
import { NavBar, Icon  } from 'antd-mobile';
import {
  Route,
  Link
} from 'react-router-dom';
import './index.less'
// import style from './index.less'
// const style = require('./index.less')

import IconFan2 from './../../images/fenx.svg'

console.log(style)

export default class Reader extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }


    render() {
        return (<div>

          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
              <img id='fx' alt="" src={IconFan2} key='1'  />
            ]}
          ></NavBar>
          <div className='footer'>
              <Link to={'/literarynews'}>ceshi</Link>
              <Route path='/literarynews' component={LiteraryNews}/>
          </div>


          </div>)
    }
}