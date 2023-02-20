import { Order } from '@uark-acm/bho-data-models/lib'
import { AnyAction } from 'redux'
import { Action } from '../actions/types'
import Loadable from '../redux-config/loadable'

export interface OrdersState {
    orders: Loadable<Order[]>
}

const DEFAULT_STATE: OrdersState = {
    orders: { status: 'loading' },
}

const OrdersReducer = (state = DEFAULT_STATE, action: AnyAction) => {
    switch (action.type) {
        case Action.FETCH_ORDERS:
            return { ...state, orders: action.payload }
        // your logic here
        case Action.CREATE_ORDER:
            // your logic here
            return { ...state, orders: action.payload }
        default:
            return state
    }
}

export default OrdersReducer
