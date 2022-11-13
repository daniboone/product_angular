import { Trend } from "../enums/Trend";

export interface Tag {
    id: String,
    name: String,
    trends: Trend
}