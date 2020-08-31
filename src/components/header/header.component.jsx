import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo_bake.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart/cart.component';

import {auth} from '../../firebase/firebase.utils'

import './header.styles.scss';

import {useSelector} from 'react-redux';

const Header = ({ currentUser }) => {
    const curUser = useSelector(state => state.user.currentUser);
    const cartState = useSelector(state => state.cart.hide);

    return (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' /> THE HOME BAKERY
        </Link>
        <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/shop'>
            CONTACT
        </Link>
        {
            curUser ? (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>) : (<Link className='option' to='/signIn'>SIGN IN</Link>)
        }  
        <CartIcon />
        </div>
        {
            cartState ? null: <Cart/>
        }
    </div>
)};

export default Header;