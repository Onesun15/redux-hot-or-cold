import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { addGuess, updateFeedback, toggleModal, newGame } from './actions/action'

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

store.dispatch(addGuess(5));
console.log(store.getState());
store.dispatch(addGuess(15));
console.log(store.getState());

store.dispatch(updateFeedback('You are cold'));
console.log(store.getState());
store.dispatch(updateFeedback('You are hot'));
console.log(store.getState());

store.dispatch(toggleModal());
console.log(store.getState());
store.dispatch(toggleModal());
console.log(store.getState());

store.dispatch(newGame());
console.log(store.getState());