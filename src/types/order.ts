import BHOClient from "./BHOClient";

export default interface Order {
    id: number,
    pickupDateTime: Date,
    returnDateTime: Date,
    clientDetails: BHOClient,
}