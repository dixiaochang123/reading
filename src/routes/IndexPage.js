import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Route, Link } from 'dva/router';
import Products from './Products';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/products.js</code> and save to reload.</li>
        {/* <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li> */}
        <li><Link to={'/products'}>进入阅读器</Link></li>
      </ul>
      
      <Route path='/products' component={Products}/>
      
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
