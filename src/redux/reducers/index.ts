import { combineReducers } from 'redux'
import ClothingItemsReducer from './ClothingItems.reducer'
import OrdersReducer from './Orders.reducer'

export default combineReducers({
    clothingItems: ClothingItemsReducer,
    orders: OrdersReducer,
})
