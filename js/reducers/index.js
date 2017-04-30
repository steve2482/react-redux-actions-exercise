import * as actions from '../actions/index';
import update from 'immutability-helper';

const gameState = {
	randomNumber: null,
	guess: null,
	eachGuess: [],
	numberOfGuesses: 0,
	hotOrCold: 'Hot or Cold',
  fewestGuesses: 'N/A'
};

export const guessNumberReducer = (state=gameState, action) => {
  if (action.type === actions.NEW_GAME) {
    const newGameState = state;
    return newGameState;
  }
  else if (action.type === actions.RANDOM_NUMBER) {
    const newGameState = update(state, {randomNumber: {$set: (Math.floor(Math.random() * 100) + 1)}});
    return newGameState;
  }
  else if (action.type === actions.GUESS_NUMBER) {
    const newGameState = update(state, {guess: {$set: action.number}});
    return newGameState;
  }
  else if (action.type === actions.TRACK_GUESS) {
    const newGameState = update(state, {eachGuess: {$push: [action.number]}});
    return newGameState;
  }
  else if (action.type === actions.EACH_GUESS) {
    const newGameState = update(state, {numberOfGuesses: {$set: state.numberOfGuesses + 1}});
    return newGameState;
  }
  else if (action.type === actions.HOT_COLD) {
    if (Math.abs(state.guess - state.randomNumber) === 0) {
      const newGameState = update(state, {hotOrCold: {$set: 'CORRECT!!'}});
      return newGameState;
    }
    else if (Math.abs(state.guess - state.randomNumber) <= 5) {
      const newGameState = update(state, {hotOrCold: {$set: 'Hot'}});
      return newGameState;
    }
    else if (Math.abs(state.guess - state.randomNumber) <= 10) {
      const newGameState = update(state, {hotOrCold: {$set: 'Warm'}});
      return newGameState;
    }
    else {
      const newGameState = update(state, {hotOrCold: {$set: 'Cold'}});
      return newGameState;
    }
  }
  // need to create reducers for fetching and saving fewest guesses
  else if (action.type === actions.FETCH_FEWEST_GUESSES) {
    const newGameState = update(state, {fewestGuesses: {$set: action.guesses}});
    console.log('State(after fetching fewest guesses:', newGameState);
    return newGameState;
  }
  // else if (action.type === actions.SAVE_FEWEST_GUESSES) {

  // }
  console.log('State(reducers/index):', state);
  return state;
}