import React from 'react';
import store from '../store';
import * as actions from '../actions/index';
import NumberItem from './number';
import {connect} from 'react-redux';

export class InputAndFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.userGuess = this.userGuess.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(
      actions.getFewestGuesses()
    );
  }

  userGuess(e) {
    e.preventDefault();
    const guess = this.guessInput.value;
    store.dispatch(actions.guessNumber(guess));
    store.dispatch(actions.trackGuess(guess));
    store.dispatch(actions.eachGuess());
    store.dispatch(actions.hotCold());
  }



  render() {
    const guesses = store.getState().eachGuess.map((eachGuess, index) => {
      return <NumberItem number={eachGuess} key={index} />
    });

    return (
      <div>
        <p className='feedback'>{store.getState().hotOrCold}</p>
        <form>
          <input id='userGuess' type='text' ref={ref => this.guessInput = ref} placeholder='Enter Your Guess' />
          <button onClick={this.userGuess}>Guess</button>
        </form>
        <p className='amount-of-guesses'>Guess #<span className='count'>{store.getState().numberOfGuesses}</span></p>
        <div className='history'>
          <ul>
            {guesses}
          </ul>
        </div>
        <p className='best'>Best Score: {store.getState().fewestGuesses}</p>
      </div>
    );
  }
}

export default connect()(InputAndFeedback);