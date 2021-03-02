import { Provider } from 'react-redux';
import store from './store';
import NewsContainer from 'containers/NewsContainer';

const App = () => {
    return (
        <Provider store={store}>
            <NewsContainer />
        </Provider>
    );
};

export default App;
