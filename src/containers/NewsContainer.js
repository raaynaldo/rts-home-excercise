import NewsListContainer from 'containers/NewsListContainer';
import SearchContainer from './SearchContainer';

const NewsContainer = () => {

    return (
        <div className='flex flex-col items-center h-screen pt-5'>
            <SearchContainer />
            <NewsListContainer />
        </div>
    );
};

export default NewsContainer;
