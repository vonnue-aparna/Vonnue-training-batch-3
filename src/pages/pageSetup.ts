import type { Dispatch } from "../types/types.js";
import { debouncedSearch, search } from "../utils/debounce.js";
import { setupTheme } from "../utils/theme.js";

export function pageSetup(dispatch: Dispatch) {
    setupTheme()
    const searchField = document.querySelector('#search') as HTMLInputElement
    const searched = localStorage.getItem('searchEntry')
    const theme = localStorage.getItem('theme')
    const htmlElement = document.documentElement;
    const debounce = debouncedSearch()
    if(searched) {
        searchField.value = searched;
        search(searched, dispatch)
    }
    searchField?.addEventListener('input', (event: InputEvent) => {
        const target = event.target as HTMLInputElement;
        const value: string = target?.value;
        debounce(value, dispatch)
    })
}

