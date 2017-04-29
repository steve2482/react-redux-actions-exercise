// guess a nmber
export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = number => ({
  type: GUESS_NUMBER,
  number
});
// generate a new random number
export const RANDOM_NUMBER = 'RANDOM_NUMBER';
export const randomNumber = () => ({
  type: RANDOM_NUMBER,
});
// keep track of each guess
export const TRACK_GUESS = 'TRACK_GUESS';
export const trackGuess = number => ({
  type: TRACK_GUESS,
  number
});
// user hot or cold
export const HOT_COLD = 'HOT_COLD';
export const hotCold = () => ({
  type: HOT_COLD,
});
// keep track of number of guesses
export const EACH_GUESS = 'EACH_GUESS';
export const eachGuess = () => ({
  type: EACH_GUESS,
});
// start a new game
export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME,
});
// update fewest guesses
export const FEWEST_GUESSES = 'FEWEST_GUESSES';
export const fewestGuesses = () => ({
	type: FEWEST_GUESSES,
  number
});