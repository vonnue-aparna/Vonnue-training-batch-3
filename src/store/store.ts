import type { Action, State } from "../types/types.js";

export function createStore<S extends State, A extends Action>(intialState: S, reducer: (state: S, action: A) => S) {
    let state: S = intialState
    const subscribers: Set<() => void> = new Set();
    function getState() {
        return state
    }
    function dispatch(action: A) {
        state = reducer(state, action)
        localStorage.setItem('state', JSON.stringify(state))
        subscribers.forEach(subscriber => subscriber())
    }
    function subscribe(callback: () => void) {
        subscribers.add(callback)
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}