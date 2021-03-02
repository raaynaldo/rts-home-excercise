import { SEARCH_NEWS, ADD_HISTORY_NEWS } from './types';

// search news from API by user input
export const searchNews = (keyword) => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch(
            `http://hn.algolia.com/api/v1/search?query=${keyword}`
        );
        const data = await res.json();

        dispatch({
            type: SEARCH_NEWS,
            payload: data,
        });
        addHistoryNews();
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText,
        });
    }
};

// Add search history
export const addHistoryNews = (keyword) => (dispatch) => {
    try {
        dispatch({
            type: SEARCH_NEWS,
            payload: keyword,
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText,
        });
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
