//Add number to state.guesses
//Update feedback changes state.feedback
//New game click, resets state to intial state
//Toggle action of modal true or false

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
  type: ADD_GUESS,
  guess
});

export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export const updateFeedback = feedback => ({
  type: UPDATE_FEEDBACK,
  feedback
});

// export const TOGGLE_MODAL = 'TOGGLE_MODAL';
// export const toggleModal = toggle => ({
//   type: TOGGLE_MODAL,
//   toggle
// });

// export const NEW_GAME = 'NEW_GAME';
// export const newGame = () => ({
//   type: NEW_GAME
// });
