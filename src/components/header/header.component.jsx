import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo_bake.svg'

import {auth} from '../../firebase/firebase.utils'

import './header.styles.scss';

import {useSelector} from 'react-redux';

const Header = ({ currentUser }) => {
    const curUser = useSelector(state => state.user.currentUser);

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
        </div>
    </div>
)};

export default Header;