import { SEARCH_NEWS, LOGS_ERROR, SET_LOADING } from 'actions/types';

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
                news: [...action.payload.news],
                history: [action.payload.history, ...state.history],
                loading: false,
            };
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};
