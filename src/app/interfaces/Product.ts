import { Tag } from "./Tag";

export interface Product {
    description: String,
    imageUrl: String,
    price: Number,
    tags: Tag[]
}