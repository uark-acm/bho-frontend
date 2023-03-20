import { BHOItem, Order } from '@uark-acm/bho-data-models/lib';
import { FunctionComponent, useEffect } from 'react';
import { fetchClothingItems } from '../redux/actions/ClothingItems.actions';
import { fetchOrders } from '../redux/actions/Orders.actions';
import { ClothingItemsState } from '../redux/reducers/ClothingItems.reducer';
import { OrdersState } from '../redux/reducers/Orders.reducer';
import { useAppDispatch, useAppSelector } from '../redux/redux-config/hooks';
import Loadable from '../redux/redux-config/loadable';

type TestingReduxComponentProps = {};

const TestingReduxComponent: FunctionComponent<TestingReduxComponentProps> = (
    props: TestingReduxComponentProps
) => {
    const dispatch = useAppDispatch();
    const clothingItems: Loadable<BHOItem[]> =
        useAppSelector<ClothingItemsState>(
            (state) => state.clothingItems
        ).clothingItems;

    const orders: Loadable<Order[]> = useAppSelector<OrdersState>(
        (state) => state.orders
    ).orders;

    useEffect(() => {
        if (!clothingItems.data) {
            dispatch(fetchClothingItems());
        }
    }, [dispatch]);

    switch (clothingItems.status) {
        case 'loading':
            console.log('loading clothing items');
            break;
        case 'success':
            console.log('success clothing items');
            console.log(clothingItems.data);
            break;
        case 'error':
            console.log('error clothing items');
            console.log(clothingItems.errorMessage);
            break;
    }

    useEffect(() => {
        if (!orders.data) {
            dispatch(fetchOrders());
        }
    }, [dispatch]);

    switch (orders.status) {
        case 'loading':
            console.log('loading orders');
            break;
        case 'success':
            console.log('success  orders');
            console.log(orders.data);
            break;
        case 'error':
            console.log('error orders');
            console.log(orders.errorMessage);
            break;
    }

    return <></>;
};

export default TestingReduxComponent;
