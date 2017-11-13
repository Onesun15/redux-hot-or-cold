import { createStore } from 'redux';
import { addGuessReducer } from './reducer/reducer';

export default createStore(addGuessReducer);