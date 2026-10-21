import { getArt } from "./article.js";
export async function fetchArticle() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok)
        throw new Error('fetch failed');
    return await response.json();
}
export async function getArticle() {
    const response = getArt();
    return response;
}
//# sourceMappingURL=api.js.map