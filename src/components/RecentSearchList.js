import Box from 'components/Box';
const RecentSearch = ({ history }) => {
    return (
        <div>
            Recent Search :
            {history.map((keyword, index) => (
                <Box key={index}>{keyword}</Box>
            ))}
        </div>
    );
};

export default RecentSearch;
