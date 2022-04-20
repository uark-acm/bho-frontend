import { combineReducers } from "redux";
import ClothingItemsReducer from "./ClothingItems.reducer";
export default combineReducers({clothingItems: ClothingItemsReducer});
