export interface State {
    articles: Article[];
}
export type Action = {
    type: "SEARCH";
    payload: {
        articles: Article[];
    };
};
export interface Article {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export type Dispatch = (action: Action) => void;
//# sourceMappingURL=types.d.ts.map