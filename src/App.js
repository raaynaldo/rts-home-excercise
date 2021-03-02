import { Provider } from 'react-redux';
import store from './store';
import NewsContainer from 'containers/NewsContainer';

const App = () => {
    return (
        <Provider store={store}>
            <div className='bg-gray-200'>
                <NewsContainer />
            </div>
        </Provider>
    );
};

export default App;
