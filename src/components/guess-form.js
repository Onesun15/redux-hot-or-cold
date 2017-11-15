import React from 'react';
import { connect } from 'react-redux'

import { addGuess, updateFeedback } from '../actions/action'
import './guess-form.css';

// Controlled input must be the one and almost the only way for play with input value in react
// REF is one of the worst thing you can do

// 1. a state for keep track of the value
// 2. onChange for change the state value

export class GuessForm extends React.Component {
  state = {
    input: ''
  }
    onGuess(event) {
        event.preventDefault();
        this.props.dispatch(addGuess(this.state.input));
        this.props.dispatch(updateFeedback(this.state.input));
      this.setState({ input: '' })
    }

  _onChange = e => {
    if (isNaN(e.target.value)) {
      return
    }
    this.setState({ input: e.target.value })
  }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                {/* <label htmlFor="userGuess">Enter your Guess</label> */}
                <input onChange={this._onChange} value={this.state.input} type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder='Enter your guess' required
                    />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

export default connect()(GuessForm)
