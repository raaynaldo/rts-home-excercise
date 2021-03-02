import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Box from 'components/Box';

const NewsList = ({ news: { news, history, loading } }) => {
    return (
        <div className='flex space-x-5'>
            <div>
                News List:
                {news.map((title, index) => (
                    <Box key={index}>{title}</Box>
                ))}
            </div>
            <div>
                Recent Search :
                {history.map((keyword, index) => (
                    <Box key={index}>{keyword}</Box>
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
