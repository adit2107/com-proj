import React ,{ useEffect } from 'react';
import './App.css';

import {Route, Switch, Redirect} from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import {useDispatch, useSelector} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


const App = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser); 

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            }))
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }

      return function cleanup() {
        unsubscribeFromAuth();
      }
    })
  }, [dispatch])

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signIn' render={() => currentUser ? <Redirect to='/'/> : <SignInAndSignUp/>}/>
        </Switch>
      </div>
     
    );
}

export default App;
