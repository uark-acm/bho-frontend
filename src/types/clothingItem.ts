import { ClothingType, ItemCategory, Status } from "./common";

export default interface ClothingItem {
    type: ClothingType,
    category: ItemCategory,
    status: Status,                         //this will indicate if the item is checked out, packed, or just returned
    description: string,
    id: number,
    size?: string,
    orderId?: number,                       //this will be null / undefined if there is not item checked out
}