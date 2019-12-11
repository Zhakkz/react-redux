import React, {Component} from 'react';
import { Route,  Switch} from 'react-router-dom'
import { HomePage, CartPage } from '../pages'
import ShopHeader from '../shop-header'
import Spinner from '../spinner'

import {withBookstoreService} from '../hoc'

const App = ({bookstoreService}) => {
  console.log(bookstoreService.getBooks());
  
    return (
      <main role='main' className='container'>
        <ShopHeader numItems={4} total={100}/>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </main>
    );
}

export default withBookstoreService()(App)