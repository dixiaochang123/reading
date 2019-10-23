import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';//首页
import Products from './routes/Products';//新建页

import Reader from './routes/Reader/index';//阅读器
import OlympicSpirit from './routes/OlympicSpirit/index';//奥运
import LiteraryNews from './routes/LiteraryNews/index';//文学
import SignIn from './routes/SignIn/index';//签到
import SignRule from './routes/SignRule/index';//签到规则
import GoldCoin from './routes/GoldCoin/index';//我的金币
import Recharge from './routes/Recharge/index';//会员充值
import InviteFriends from './routes/InviteFriends/index';//邀请好友
import InviteCode from './routes/InviteCode/index';//邀请好友二维码
import CashOut from './routes/CashOut/index';//提现
import CashOutRecord from './routes/CashOutRecord/index';//提现记录
import WelfareCentre from './routes/WelfareCentre/index';//福利中心

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/" exact component={SignIn} />
        <Route path="/reader" exact component={Reader} />
        <Route path="/olympicspirit" exact component={OlympicSpirit} />
        <Route path="/literarynews" exact component={LiteraryNews} />
        <Route path="/products" exact component={Products} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signrule" exact component={SignRule} />
        <Route path="/goldcoin" exact component={GoldCoin} />
        <Route path="/recharge" exact component={Recharge} />
        <Route path="/invitefriends" exact component={InviteFriends} />
        <Route path="/invitecode" exact component={InviteCode} />
        <Route path="/cashout" exact component={CashOut} />
        <Route path="/cashoutrecord" exact component={CashOutRecord} />
        <Route path="/welfarecentre" exact component={WelfareCentre} />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
