import React from 'react';
import './cart-icon.styles.scss';

import { SetCart } from '../../redux/cart/cart.actions';

import { useDispatch } from 'react-redux';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    const dispatch = useDispatch();

    return(
    <div className='cart-icon' onClick={() => dispatch(SetCart())}>
        <ShoppingBag className='shopping-bag'/>
        <span className='item-count'>0</span>
    </div>
    )
}

export default CartIcon;