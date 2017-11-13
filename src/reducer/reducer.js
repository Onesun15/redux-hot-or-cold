import {ADD_GUESS, UPDATE_FEEDBACK, TOGGLE_MODAL, NEW_GAME} from '../actions/action';



const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
}

export const addGuessReducer = ((state=initialState, action) => {
  if(action.type === ADD_GUESS) {
    return Object.assign({}, state, {
        guesses: [...state.guesses, action.guess]
    })
  }
  if(action.type === UPDATE_FEEDBACK) {
    return Object.assign({}, state, {
      feedback: action.feedback
    })
  }
  return state;

});