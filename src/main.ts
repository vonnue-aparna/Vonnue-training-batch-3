import { page } from "./pages/page.js";
import { pageSetup } from "./pages/pageSetup.js";
import { initialState } from "./state/state.js";
import { createStore } from "./store/store.js";
import type { Action, State } from "./types/types.js";

function reducer(state: State, action: Action): State {
    if(action.type == "SEARCH") {
        return {
            articles: action.payload.articles
        }
    }
    return state
}

const store = createStore(initialState, reducer)

export function render() {
    const app = document.querySelector("#app")
    const state = store.getState()
    app?.replaceChildren(page(state, store.dispatch))
}

store.subscribe(render)
pageSetup(store.dispatch)
render()