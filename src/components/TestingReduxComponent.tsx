import { ClothingItem } from "@uark-acm/bho-data-models/lib";
import { FunctionComponent, useEffect } from "react"
import { fetchClothingItems } from "../redux/actions/ClothingItems.actions";
import { ClothingItemsState } from "../redux/reducers/ClothingItems.reducer";
import { useAppDispatch, useAppSelector } from "../redux/redux-config/hooks";
import Loadable from "../redux/redux-config/loadable";

type TestingReduxComponentProps = {}

const TestingReduxComponent: FunctionComponent<TestingReduxComponentProps> = (props: TestingReduxComponentProps) => {
    const dispatch = useAppDispatch();
    const clothingItems: Loadable<ClothingItem[]> = useAppSelector<ClothingItemsState>(
        (state) => state.clothingItems
    ).clothingItems;

    useEffect(() => {
        if (!clothingItems.data) {
            dispatch(fetchClothingItems());
        }
    }, [dispatch]);

    switch(clothingItems.status)
    {
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

    return <></>;
}

export default TestingReduxComponent;