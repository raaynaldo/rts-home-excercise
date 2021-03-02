import {
    SEARCH_NEWS,
    ADD_HISTORY_NEWS,
    SET_LOADING,
    LOGS_ERROR,
} from 'actions/types';

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
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
