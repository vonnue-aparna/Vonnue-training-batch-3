import { getArt } from "../api/article.js";
const articles = getArt();
export function debouncedSearch() {
    let timer;
    clearTimeout(timer);
    return function (entry, dispatch) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            search(entry, dispatch);
        }, 300);
    };
}
export function search(entry, dispatch) {
    const matched = [];
    articles.forEach(article => {
        if (article.title.includes(entry) || article.body.includes(entry)) {
            matched.push(article);
        }
    });
    localStorage.setItem('searchEntry', entry);
    dispatch({
        type: "SEARCH",
        payload: {
            articles: matched
        }
    });
}
//# sourceMappingURL=debounce.js.map