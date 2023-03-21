import { BHOItem } from '@uark-acm/bho-data-models/lib';
import { AnyAction } from 'redux';
import { Action } from '../actions/types';

export interface CartState {
    cart: BHOItem[];
}

const DEFAULT_STATE: CartState = {
    cart: [],
};

const CartReducer = (state = DEFAULT_STATE, action: AnyAction) => {
    switch (action.type) {
        case Action.ADD_TO_CART: {
            const itemToAdd = action.payload.item;
            const itemInCartIndex = state.cart.findIndex(
                (item) => item.id === itemToAdd.id
            );
            if (itemInCartIndex !== -1) {
                return state;
            } else {
                return { ...state, cart: [...state.cart, itemToAdd] };
            }
        }
        case Action.REMOVE_FROM_CART: {
            const itemToRemove = action.payload.item;
            const updatedCart = state.cart.filter(
                (item) => item.id !== itemToRemove.id
            );
            return { ...state, cart: updatedCart };
        }
        default:
            return state;
    }
};

export default CartReducer;
