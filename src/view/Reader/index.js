import React,{Component} from 'react';
import { NavBar, Icon  } from 'antd-mobile';
import style from './index.less'

import IconFan2 from './../../images/fenx.svg'

console.log(IconFan2)

export default class Reader extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }


    render() {
        return (<div className={style.content}>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
              <img id='fx' alt="" src={IconFan2} key='1'  />
            ]}
          ></NavBar>
          <div className={style.footer}>
              wwwwwwwwwwwwww
          </div>


          </div>)
    }
}