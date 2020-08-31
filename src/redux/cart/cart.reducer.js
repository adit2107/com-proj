import {CartActions} from './cart.types';

const INITIAL_STATE = {
    hide: true
}

export const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CartActions.SET_CART_STATE:
            return {
                ...state,
                hide: !state.hide
            }
        default:
            return state;
    }
}

export default CartReducer;