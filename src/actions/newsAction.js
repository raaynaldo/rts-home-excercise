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
        // addHistoryNews(keyword);
        dispatch({
            type: SEARCH_NEWS,
            payload: {
                news: data.hits.map((news) => news.title),
                history: keyword,
            },
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
    console.log('loading');
    return {
        type: SET_LOADING,
    };
};
