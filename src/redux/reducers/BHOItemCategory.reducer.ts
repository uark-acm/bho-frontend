import { BHOItem, BHOItemCategory } from '@uark-acm/bho-data-models/lib';
import { AnyAction } from 'redux';
import { Action } from '../actions/types';

export interface BHOItemCategoryState {
    categories: BHOItemCategory[];
}

const DEFAULT_STATE: BHOItemCategoryState = {
    categories: [],
};

const BHOItemCategoryReducer = (state = DEFAULT_STATE, action: AnyAction) => {
    switch (action.type) {
        case Action.FETCH_CATEGORIES: {
            return { ...state, clothingItems: action.payload };
        }
        default:
            return state;
    }
};

export default BHOItemCategoryReducer;
