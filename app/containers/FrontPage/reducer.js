import { DISPATCH_ACTION } from './constants'

const initialState = {
    articles: []
}

export default function frontReducer(state = initialState, { type, data }) {
    switch (type) {
        case DISPATCH_ACTION:
            return {
                ...state,
                articles: data.articles
            };

        default:
            return state;
    }
}