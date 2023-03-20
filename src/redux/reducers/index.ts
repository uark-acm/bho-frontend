import { combineReducers } from 'redux'
import CartReducer from './Cart.reducer'
import ClothingItemsReducer from './ClothingItems.reducer'
import OrdersReducer from './Orders.reducer'

export default combineReducers({
    clothingItems: ClothingItemsReducer,
    orders: OrdersReducer,
    cart: CartReducer,
})
