import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const NewsList = ({ news: { news, loading } }) => {
    return (
        <div>
            NewsListContainer
            {news.map((n) => (
                <div>{n}</div>
            ))}
        </div>
    );
};

NewsList.prototype = {
    news: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    news: state.news,
});

export default connect(mapStateToProps)(NewsList);
