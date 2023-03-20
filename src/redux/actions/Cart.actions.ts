import { Action } from './types';
import { BHOItem } from '@uark-acm/bho-data-models/lib';

export const addToCart = (item: BHOItem) => ({
    type: Action.ADD_TO_CART,
    payload: { item },
});

export const removeFromCart = (item: BHOItem) => ({
    type: Action.REMOVE_FROM_CART,
    payload: { item },
});

export const incrementQuantity = (item: BHOItem) => {
    return {
        type: Action.INCREMENT_QUANTITY,
        payload: { item },
    };
};

export const decrementQuantity = (item: BHOItem) => {
    return {
        type: Action.DECREMENT_QUANTITY,
        payload: { item },
    };
};
