import React from 'react';

import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './store';

import Routes from './routes';

import history from './services/history';

import GlobalStyles from './styles/global';

import Header from './components/Header';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <GlobalStyles />
                <ToastContainer autoClose={3000} />
                <Header />
                <Routes />
            </Router>
        </Provider>
    );
}

export default App;
