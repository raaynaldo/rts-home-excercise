import { Provider } from 'react-redux';
import store from './store';
import News from 'containers/News';

const App = () => {
    return (
        <Provider store={store}>
            <div className='bg-gray-200'>
                <News />
            </div>
        </Provider>
    );
};

export default App;
