export function createStore(intialState, reducer) {
    let state = intialState;
    const subscribers = new Set();
    function getState() {
        return state;
    }
    function dispatch(action) {
        state = reducer(state, action);
        localStorage.setItem('state', JSON.stringify(state));
        subscribers.forEach(subscriber => subscriber());
    }
    function subscribe(callback) {
        subscribers.add(callback);
    }
    return {
        getState,
        dispatch,
        subscribe
    };
}
//# sourceMappingURL=store.js.map