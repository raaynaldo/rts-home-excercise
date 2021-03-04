import { SEARCH_NEWS, LOGS_ERROR, SET_LOADING } from './types';

// search news from API by user input
export const searchNews = (keyword) => async (dispatch) => {
    try {
        dispatch(setLoading());

        const res = await fetch(
            `https://hn.algolia.com/api/v1/search?query=${keyword}`
        );
        const data = await res.json();
        dispatch({
            type: SEARCH_NEWS,
            payload: {
                news: data.hits.map((news) => ({
                    title: news.title,
                    url: news.url,
                })),
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

export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
