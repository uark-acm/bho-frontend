import { Dispatch } from "react";
import { Action } from "./types";
import { Order, CreateOrderRequest } from '@uark-acm/bho-data-models/lib';
import Loadable from "../redux-config/loadable";
import { rootURL } from "../../config/endpoints";

type OrderAction = {
	type: Action;
	payload: Loadable<Order[]>;
};

export const fetchOrders = () => {
    return async (dispatch: Dispatch<OrderAction>) => {
        dispatch({type: Action.FETCH_ORDERS, payload: {status: 'loading'}});
        try {
            const data: Order[] = await (await fetch(`${rootURL}/orders`)).json();
            dispatch({type: Action.FETCH_ORDERS, payload: {status: 'success', data: data}});
        }
        catch(error){
            dispatch({type: Action.FETCH_ORDERS, payload: {status: 'error', errorMessage: (error as Error).message}})
        }
        
        //fetch from rootUrl/orders
    }
}

export const createOrders = (CreateOrderRequest: CreateOrderRequest) => {
    return async (dispatch: Dispatch<OrderAction>) => {
        dispatch({type: Action.CREATE_ORDER, payload: {status: 'loading'}});
        try {
            const data: Order[] = await (await fetch(`${rootURL}/orders`)).json();
            dispatch({type: Action.CREATE_ORDER, payload: {status: 'success', data: data}});
        }
        catch(error){
            dispatch({type: Action.CREATE_ORDER, payload: {status: 'error', errorMessage: (error as Error).message}})
        } 
    }
}