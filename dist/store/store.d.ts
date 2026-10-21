import type { Action, State } from "../types/types.js";
export declare function createStore<S extends State, A extends Action>(intialState: S, reducer: (state: S, action: A) => S): {
    getState: () => S;
    dispatch: (action: A) => void;
    subscribe: (callback: () => void) => void;
};
//# sourceMappingURL=store.d.ts.map