import { useState } from 'react';
import { connect } from 'react-redux';
import { searchNews } from 'actions/newsAction';
import PropTypes from 'prop-types';

const SearchContainer = ({ searchNews }) => {
    const [historyActive, setHistoryActive] = useState(false);
    const [keyword, setKeyword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        searchNews(keyword);
        setKeyword('');
    };

    return (
        <div className='relative'>
            <form onSubmit={submitHandler}>
                <input
                    type='text'
                    className='h-10 px-4 border-2 border-gray-300 rounded-xl w-60'
                    placeholder='search news'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    // onBlur={() => setHistoryActive(false)}
                    // onFocus={() => setHistoryActive(true)}
                />
                <input type='submit' value='Search' className='btn' />
            </form>
            <div
                className={`absolute z-20 w-60 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800 ${
                    historyActive ? '' : 'hidden'
                }`}
            >
                <div className='block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white'>
                    your profile
                </div>
                <div className='block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white'>
                    Your projects
                </div>
            </div>
        </div>
    );
};

SearchContainer.propTypes = {
    searchNews: PropTypes.func.isRequired,
};

export default connect(null, { searchNews })(SearchContainer);
