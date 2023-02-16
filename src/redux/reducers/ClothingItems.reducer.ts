import { BHOItem } from '@uark-acm/bho-data-models/lib';
import { AnyAction } from 'redux';
import { Action } from '../actions/types';
import Loadable from '../redux-config/loadable';

export interface ClothingItemsState {
	clothingItems: Loadable<BHOItem[]>;
}

const DEFAULT_STATE: ClothingItemsState = {
	clothingItems: { status: 'loading' },
};

const ClothingItemsReducer = (state = DEFAULT_STATE, action: AnyAction) => {
    switch(action.type)
    {
        case Action.FETCH_CLOTHING_ITEMS:
            return { ...state, clothingItems: action.payload };
        case Action.CREATE_CLOTHING_ITEM:
            // your logic here
            break;
        default:
            return state;
    }
}

export default ClothingItemsReducer;