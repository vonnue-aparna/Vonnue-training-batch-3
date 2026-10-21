import { debouncedSearch, search } from "../utils/debounce.js";
import { setupTheme } from "../utils/theme.js";
export function pageSetup(dispatch) {
    setupTheme();
    const searchField = document.querySelector('#search');
    const searched = localStorage.getItem('searchEntry');
    const theme = localStorage.getItem('theme');
    const htmlElement = document.documentElement;
    const debounce = debouncedSearch();
    if (searched) {
        searchField.value = searched;
        search(searched, dispatch);
    }
    searchField?.addEventListener('input', (event) => {
        const target = event.target;
        const value = target?.value;
        debounce(value, dispatch);
    });
}
//# sourceMappingURL=pageSetup.js.map