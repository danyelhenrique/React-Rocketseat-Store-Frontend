import React from 'react';

import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

import Routes from './routes';

import GlobalStyles from './styles/global';

import Header from './components/Header';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyles />
                <Header />
                <Routes />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
