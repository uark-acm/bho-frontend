import BHOClient from "./BHOClient";
import { ClothingType, ItemCategory } from "./common";

export default interface CreateClothingItemRequest {
    type: ClothingType,
    category: ItemCategory,
    size?: string,
}

export default interface CreateOrderRequest {
    returnDateTime: Date,
    clientDetails: BHOClient,
}