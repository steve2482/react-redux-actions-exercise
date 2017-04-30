import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import InputAndFeedback from './input-and-feedback';
import * as actions from '../actions/index';

import store from '../store';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.newGame = this.newGame.bind(this);
  }

  newGame() {
    this.props.dispatch(actions.newGame());
    this.props.dispatch(actions.randomNumber());
    console.log(store.getState());
  }

  render() {
    return (
      <div>
        <Header newGame={this.newGame}/>
        <InputAndFeedback />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  state: state
});

export default connect(mapStateToProps)(Game);