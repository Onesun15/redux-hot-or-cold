import {ADD_GUESS, UPDATE_FEEDBACK, TOGGLE_MODAL, NEW_GAME} from '../actions/action';



const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  modalToggle: false
}

export const addGuessReducer = ((state=initialState, action) => {
  if(action.type === ADD_GUESS) {
    return Object.assign({}, state, {
        guesses: [...state.guesses, action.guess]
    })
  }
  if(action.type === UPDATE_FEEDBACK) {
    
    const difference = Math.abs(action.guess - state.correctAnswer);
    let feedback;

    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
      feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    }
    else {
      feedback = 'You got it!';
    }
    
    return Object.assign({}, state, {feedback})
  }
  if(action.type === TOGGLE_MODAL) {
    return Object.assign({}, state, {
      modalToggle: !state.modalToggle
    })
  }
  if(action.type === NEW_GAME) {
    return Object.assign({}, initialState, {
      correctAnswer: action.correctAnswer,
    })
  }

  return state;

});