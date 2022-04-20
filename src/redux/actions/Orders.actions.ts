import { Dispatch } from "react";
import { Action } from "./types";
import { Order, CreateOrderRequest } from '@uark-acm/bho-data-models/lib';
import Loadable from "../redux-config/loadable";
import { rootURL } from "../../config/endpoints";

type OrderAction = {
	type: Action;
	payload: Loadable<Order[]>;
};

export const fetchClothingItems = () => {
    return async (dispatch: Dispatch<OrderAction>) => {
        //fetch from rootUrl/orders
    }
}

export const createClothingItems = (CreateOrderRequest: CreateOrderRequest) => {
    return async (dispatch: Dispatch<OrderAction>) => {

    }
}