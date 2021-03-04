import Box from 'components/Box';
const SearchResultList = ({ news }) => {
    return (
        <div>
            Search Result:
            {news.map((news, index) => (
                <Box key={index}>
                    <a
                        href={news.url}
                        className='text-blue-600'
                        target='_blank'
                    >
                        {news.title}
                    </a>
                </Box>
            ))}
        </div>
    );
};

export default SearchResultList;
