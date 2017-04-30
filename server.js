const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');

app.use(express.static('public'));

let fewestGuesses = 10;
app.get('/fewest-guesses', (req, res) => {
	res.send(fewestGuesses);
});

app.post('/fewest-guesses', (req, res) => {
	if (req.numberOfGuesses < fewestGuesses) {
		fewestGuesses = req.numberOfGuesses + ' Guesses';
	};
});
