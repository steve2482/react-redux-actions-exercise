const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));

let fewestGuesses = 10;
app.get('/fewest-guesses', (req, res) => {
	res.status(200).json(fewestGuesses);
});

app.post('/fewest-guesses', (req, res) => {
	if (req.numberOfGuesses < fewestGuesses) {
		fewestGuesses = req.numberOfGuesses + ' Guesses';
	};
});

app.listen(3000, function() {
	console.log('App is listening on port 3000');
});