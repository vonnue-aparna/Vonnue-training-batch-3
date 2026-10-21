import { getArt } from "../api/article.js";
import type { Article, Dispatch } from "../types/types.js";

const articles = getArt()

export function debouncedSearch() {
    let timer: any;
    clearTimeout(timer)
    return function (entry: string, dispatch: Dispatch) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            search(entry, dispatch)
        }, 300)
    }
}

export function search(entry: string, dispatch: Dispatch) {
    const matched: Article[] = []
    articles.forEach(article => {
        if(article.title.includes(entry) || article.body.includes(entry)) {
            matched.push(article)
        }
    });
    localStorage.setItem('searchEntry', entry)
    dispatch({
        type:"SEARCH",
        payload: {
            articles: matched
        }
    })

}