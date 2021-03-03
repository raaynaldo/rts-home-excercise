import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchResultList from 'components/SearchResultList';
import RecentSearchList from 'components/RecentSearchList';
import Loader from 'react-loader-spinner';

const NewsListContainer = ({ news: { news, history, loading } }) => {
    return (
        <div className='flex space-x-5'>
            {loading ? (
                <Loader type='Bars' color='#60a5fa' height={100} width={100} />
            ) : (
                <SearchResultList news={news} />
            )}
            <RecentSearchList history={history} />
        </div>
    );
};

NewsListContainer.prototype = {
    news: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    news: state.news,
});

export default connect(mapStateToProps)(NewsListContainer);
