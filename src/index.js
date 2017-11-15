import React from 'react';
import ReactDOM from 'react-dom';
// Put space between { } when you import, this is convention
import { Provider } from 'react-redux'

import store from './store'
import Game from './components/game';

import './reset.css';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
