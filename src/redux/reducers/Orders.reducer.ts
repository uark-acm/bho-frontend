import { ClothingItem, Order } from '@uark-acm/bho-data-models/lib';
import { AnyAction } from 'redux';
import { Action } from '../actions/types';
import Loadable from '../redux-config/loadable';

export interface OrdersState {
	orders: Loadable<Order[]>;
}

const DEFAULT_STATE: OrdersState = {
	orders: { status: 'loading' },
};

const OrdersReducer = (state = DEFAULT_STATE, action: AnyAction) => {
    switch(action.type)
    {
        case Action.FETCH_CLOTHING_ITEMS:
            // your logic here
            break;
        case Action.CREATE_CLOTHING_ITEM:
            // your logic here
            break;
        default:
            return state;
    }
}

export default OrdersReducer;