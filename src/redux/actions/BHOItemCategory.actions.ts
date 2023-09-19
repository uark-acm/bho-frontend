import { Dispatch } from 'react';
import { Action } from './types';
import { Order, BHOItemCategory } from '@uark-acm/bho-data-models/lib';
import Loadable from '../redux-config/loadable';
import { rootURL } from '../../config/endpoints';

type BHOItemCategoryAction = {
    type: Action;
    payload: Loadable<BHOItemCategory[]>;
};

export const fetchBHOItemCategories = () => {
    return async (dispatch: Dispatch<BHOItemCategoryAction>) => {
        dispatch({
            type: Action.FETCH_CATEGORIES,
            payload: { status: 'loading' },
        });
        try {
            const data: BHOItemCategory[] = await (
                await fetch(`${rootURL}/categories`)
            ).json();
            console.log('CATEGORIES: ', data);
            dispatch({
                type: Action.FETCH_CATEGORIES,
                payload: { status: 'success', data: data },
            });
        } catch (error) {
            dispatch({
                type: Action.FETCH_CATEGORIES,
                payload: {
                    status: 'error',
                    errorMessage: (error as Error).message,
                },
            });
        }

        //fetch from rootUrl/orders
    };
};

/*
export const createBHOItemCategory = (CreateOrderRequest: CreateOrderRequest) => {
    return async (dispatch: Dispatch<OrderAction>) => {
        dispatch({ type: Action.CREATE_ORDER, payload: { status: 'loading' } });
        try {
            const data: Order[] = await (
                await fetch(`${rootURL}/orders`)
            ).json();
            dispatch({
                type: Action.CREATE_ORDER,
                payload: { status: 'success', data: data },
            });
        } catch (error) {
            dispatch({
                type: Action.CREATE_ORDER,
                payload: {
                    status: 'error',
                    errorMessage: (error as Error).message,
                },
            });
        }
    };
};
*/
