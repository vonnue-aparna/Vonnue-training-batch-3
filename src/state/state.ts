import { getArt } from "../api/article.js";
import type { State } from "../types/types.js";

export const initialState: State = {
    articles: getArt()
}