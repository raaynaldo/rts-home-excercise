import { SEARCH_NEWS, ADD_HISTORY_NEWS } from './types';

const initialState = {
    news: [],
    history: [],
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_NEWS:
            return {
                ...state,
                news: [...state.news, action.payload],
                loading: false,
            };
        case ADD_HISTORY_NEWS:
            return {
                ...state,
                history: [...state.news, action.payload],
            };
    }
};
