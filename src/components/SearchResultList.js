import Box from 'components/Box';
const SearchResultList = ({ news }) => {
    return (
        <div>
            Search Result:
            {news.map((title, index) => (
                <Box key={index}>{title}</Box>
            ))}
        </div>
    );
};

export default SearchResultList;
