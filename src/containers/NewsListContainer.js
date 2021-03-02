import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchResultList from 'components/SearchResultList';
import RecentSearchList from 'components/RecentSearchList';

const NewsListContainer = ({ news: { news, history } }) => {
    return (
        <div className='flex space-x-5'>
            <SearchResultList news={news} />
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
