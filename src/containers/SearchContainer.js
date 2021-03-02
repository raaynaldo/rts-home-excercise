import { useState } from 'react';
import { connect } from 'react-redux';
import { searchNews } from 'actions/newsAction';
import PropTypes from 'prop-types';

const SearchContainer = ({ searchNews }) => {
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
                />
                <input type='submit' value='Search' className='btn' />
            </form>
        </div>
    );
};

SearchContainer.propTypes = {
    searchNews: PropTypes.func.isRequired,
};

export default connect(null, { searchNews })(SearchContainer);
