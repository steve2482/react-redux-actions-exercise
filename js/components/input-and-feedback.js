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
    console.log(this.props.state)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.state.hotOrCold === 'CORRECT!!') {
      this.props.dispatch(actions.sendNumberOfGuesses(nextProps.state.numberOfGuesses));
    }
  }

  userGuess(e) {
    e.preventDefault();
    const guess = this.guessInput.value;
    this.props.dispatch(actions.guessNumber(guess));
    this.props.dispatch(actions.trackGuess(guess));
    this.props.dispatch(actions.eachGuess());
    this.props.dispatch(actions.hotCold());
  } 

  render() {
    const guesses =  this.props.state.eachGuess.map((eachGuess, index) => {
      return <NumberItem number={eachGuess} key={index} />
    });

    return (
      <div>
        <p className='feedback'>{this.props.state.hotOrCold}</p>
        <form>
          <input id='userGuess' type='text' ref={ref => this.guessInput = ref} placeholder='Enter Your Guess' />
          <button onClick={this.userGuess}>Guess</button>
        </form>
        <p className='amount-of-guesses'>Guess #<span className='count'>{this.props.state.numberOfGuesses}</span></p>
        <div className='history'>
          <ul>
            {guesses}
          </ul>
        </div>
        <p className='best'>Best Score: {this.props.state.fewestGuesses}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  state: state
});

export default connect(mapStateToProps)(InputAndFeedback);