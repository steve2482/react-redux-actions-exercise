const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('static', 'index.html'));
});

let fewestGuesses = 'N/A';
app.get('/fewest-guesses', (req, res) => {
	res.send(fewestGuesses);
});

app.post('/fewest-guesses', (req, res) => {
	if (req.numberOfGuesses < fewestGuesses) {
		fewestGuesses = req.numberOfGuesses + ' Guesses';
	};
});

app.listen(8080, () => {
	console.log('App is listening on port 8080');
});

