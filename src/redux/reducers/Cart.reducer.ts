import { BHOItem } from '@uark-acm/bho-data-models/lib';
import { AnyAction } from 'redux';
import { Action } from '../actions/types';

export interface Cart {
    item: BHOItem;
    quantity: number;
}

export interface CartState {
    cart: Cart[];
}

const DEFAULT_STATE: CartState = {
    cart: [],
};

const CartReducer = (state = DEFAULT_STATE, action: AnyAction) => {
    switch (action.type) {
        case Action.ADD_TO_CART: {
            const itemToAdd = action.payload.item;
            const itemInCartIndex = state.cart.findIndex(
                (item) => item.item.id === itemToAdd.id
            );
            if (itemInCartIndex !== -1) {
                const updatedCart = [...state.cart];
                updatedCart[itemInCartIndex].quantity++;
                return { ...state, cart: updatedCart };
            } else {
                const newItem = { item: { ...itemToAdd }, quantity: 1 };
                return { ...state, cart: [...state.cart, newItem] };
            }
        }
        case Action.REMOVE_FROM_CART: {
            const itemToRemove = action.payload.item;
            const updatedCart = state.cart.filter(
                (item) => item.item.id !== itemToRemove.id
            );
            return { ...state, cart: updatedCart };
        }
        case Action.INCREMENT_QUANTITY: {
            const item = action.payload.item;
            const updatedCart = [...state.cart];
            const cartItem = updatedCart.find(
                (cart) => cart.item.id === item.id
            );
            if (cartItem) {
                cartItem.quantity++;
            }
            return { ...state, cart: updatedCart };
        }
        case Action.DECREMENT_QUANTITY: {
            const item = action.payload.item;
            const updatedCart = [...state.cart];
            const cartItem = updatedCart.find(
                (cart) => cart.item.id === item.id
            );
            if (cartItem) {
                if (cartItem.quantity === 1) {
                    cartItem.quantity = 1;
                } else {
                    cartItem.quantity--;
                }
            }
            return { ...state, cart: updatedCart };
        }
        default:
            return state;
    }
};

export default CartReducer;
