import { BHOItem, BHOItemCategory } from '@uark-acm/bho-data-models/lib';
import { AnyAction } from 'redux';
import { Action } from '../actions/types';
import Loadable from '../redux-config/loadable';

export interface BHOItemCategoryState {
    categories: Loadable<BHOItemCategory[]>;
}

const DEFAULT_STATE: BHOItemCategoryState = {
    categories: { status: 'loading' },
};

const BHOItemCategoryReducer = (state = DEFAULT_STATE, action: AnyAction) => {
    switch (action.type) {
        case Action.FETCH_CATEGORIES: {
            return { ...state, categories: action.payload };
        }
        default:
            return state;
    }
};

export default BHOItemCategoryReducer;
