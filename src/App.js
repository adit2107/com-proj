import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInAndSignUp}/>
      </Switch>
    </div>
   
  );
}

export default App;
