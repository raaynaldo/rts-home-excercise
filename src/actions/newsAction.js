import { SEARCH_NEWS, LOGS_ERROR } from './types';

// search news from API by user input
export const searchNews = (keyword) => async (dispatch) => {
    try {
        const res = await fetch(
            `https://hn.algolia.com/api/v1/search?query=${keyword}`
        );
        const data = await res.json();
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
