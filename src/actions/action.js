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

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME,
  correctAnswer: Math.round(Math.random() * 100)
});
