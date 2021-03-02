import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const NewsList = ({ news: { news, loading } }) => {
    return (
        <div>
            NewsListContainer
            <div>
                {news.map((title, index) => (
                    <div key={index}>{title}</div>
                ))}
            </div>
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
