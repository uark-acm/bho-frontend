import { Dispatch } from "react";
import { Action } from "./types";
import { ClothingItem, CreateClothingItemRequest } from '@uark-acm/bho-data-models/lib';
import Loadable from "../redux-config/loadable";
import { rootURL } from "../../config/endpoints";

type ClothingItemAction = {
	type: Action;
	payload: Loadable<ClothingItem[]>;
};

export const fetchClothingItems = () => {
    return async (dispatch: Dispatch<ClothingItemAction>) => {
        dispatch({type: Action.FETCH_CLOTHING_ITEMS, payload: {status: 'loading'}});
        try {
            const data: ClothingItem[] = await (await fetch(`${rootURL}/clothingItems`)).json();
            dispatch({type: Action.FETCH_CLOTHING_ITEMS, payload: {status: 'success', data: data}});
        }
        catch(error){
            dispatch({type: Action.FETCH_CLOTHING_ITEMS, payload: {status: 'error', errorMessage: (error as Error).message}})
        }

    }
}

export const createClothingItems = (createClothingItemRequest: CreateClothingItemRequest) => {
    return async (dispatch: Dispatch<ClothingItemAction>) => {

    }
}