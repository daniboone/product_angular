import { Product } from "./Product";

export interface Order {
    deliveryCity: String,
    deliveryName: String,
    deliveryStreet: String,
    deliveryState: String,
    deliveryZip: String,
    ccNumber: String,
    ccExpiration: String,
    ccCVV: String,
    products: Product[]
}