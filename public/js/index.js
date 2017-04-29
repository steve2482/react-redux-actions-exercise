require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Game from './components/game';

import * as actions from './actions/index';
import store from './store';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Game />
		</Provider>,
		document.getElementById('app'))
});

store.dispatch(actions.randomNumber());
