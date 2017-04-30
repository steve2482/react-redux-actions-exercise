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
// fetch fewest guesses from api
export const FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
export const fetchFewestGuesses = (guesses) => ({
  type: FETCH_FEWEST_GUESSES,
  guesses
});
// save fewest guesses to api
export const SAVE_FEWEST_GUESSES = 'SAVE_FEWEST_GUESSES';
export const saveFewestGuesses = (guesses) => ({
  type: SAVE_FEWEST_GUESSES,
  guesses
});
// fetch fewest guesses function
export const getFewestGuesses = () => dispatch => {
  const url = 'http://localhost:8080/fewest-guesses';
  return fetch(url).then(response => {
    if (!response.ok) {
      const error = new Error('Something when wrong while fetching fewest guesses');
      console.log(error);
    }
    return response;
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    dispatch(fetchFewestGuesses(data.fewestGuesses));
  })
  .catch(error => console.log(error));
}

// export const sendNumberOfGuesses = guesses => dispatch => {

//   const url = 'http://localhost:8080/fewest-guesses';
//   $.ajax({
//     url: url,
//     type: 'POST',
//     data: JSON.stringify(guesses),
//     contentType: 'application/json',
//     success: () => {
//      getFewestGuesses();
//     }
//   })

// }