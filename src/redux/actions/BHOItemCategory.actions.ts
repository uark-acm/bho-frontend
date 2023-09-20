import { Dispatch } from 'react';
import { Action } from './types';
import {
    Order,
    BHOItemCategory,
    BHOCreateItemCategoryRequest,
} from '@uark-acm/bho-data-models/lib';
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

export const createBHOItemCategory = (
    createCategoryRequest: BHOCreateItemCategoryRequest
) => {
    return async (dispatch: Dispatch<BHOItemCategoryAction>) => {
        dispatch({
            type: Action.CREATE_CATEGORY,
            payload: { status: 'loading' },
        });
        try {
            const data: BHOItemCategory[] = await (
                await fetch(`${rootURL}/categories`)
            ).json();
            dispatch({
                type: Action.CREATE_CATEGORY,
                payload: { status: 'success', data: data },
            });
        } catch (error) {
            dispatch({
                type: Action.CREATE_CATEGORY,
                payload: {
                    status: 'error',
                    errorMessage: (error as Error).message,
                },
            });
        }
    };
};
