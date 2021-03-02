import {
    SEARCH_NEWS,
    ADD_HISTORY_NEWS,
    SET_LOADING,
    LOGS_ERROR,
} from './types';

// search news from API by user input
export const searchNews = (keyword) => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch(
            `http://hn.algolia.com/api/v1/search?query=${keyword}`
        );
        const data = await res.json();
        console.log(data.hits.map((news) => news.title));
        dispatch({
            type: SEARCH_NEWS,
            payload: data.hits.map((news) => news.title),
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
            type: ADD_HISTORY_NEWS,
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
