import React,{Component} from 'react';
import LiteraryNews from '../LiteraryNews/index';
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
    }


    render() {
        return (<div>
          <div className={style.footer}>
              <Link to={'/literarynews'}>ceshi</Link>
              <Route path='/literarynews' component={LiteraryNews}/>
          </div>


          </div>)
    }
}