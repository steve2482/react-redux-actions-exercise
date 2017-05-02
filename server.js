const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

let fewestGuesses = 10;
app.get('/fewest-guesses', (req, res) => {
	res.status(200).json(fewestGuesses);
});

app.post('/fewest-guesses', (req, res) => {
	console.log('line 17',req.body.numberOfGuesses, fewestGuesses);
	if (req.body.numberOfGuesses < fewestGuesses) {
		fewestGuesses = req.body.numberOfGuesses;
	};
	console.log(fewestGuesses);
	res.status(200).json(fewestGuesses);
});

app.listen(3000, function() {
	console.log('App is listening on port 3000');
});