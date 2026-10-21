export function page(state, dispatch) {
    const page = document.createElement('div');
    page.classList.add('article-grid');
    state.articles.forEach(article => {
        const articlediv = document.createElement('div');
        articlediv.classList.add("article", "card");
        const h3 = document.createElement('h3');
        h3.textContent = article.title;
        const p = document.createElement('p');
        p.textContent = article.body;
        const favBtn = document.createElement('button');
        favBtn.classList.add('fav-btn');
        favBtn.textContent = 'Favorite';
        articlediv.append(h3, p, favBtn);
        page.append(articlediv);
    });
    page.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('fav-btn')) {
            if (target.style.backgroundColor == 'red') {
                target.style.backgroundColor = 'white';
            }
            else {
                target.style.backgroundColor = 'red';
            }
        }
    });
    return page;
}
//# sourceMappingURL=page.js.map