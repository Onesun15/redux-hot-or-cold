import React from 'react';
import {connect} from 'react-redux'
import {addGuess, updateFeedback} from '../actions/action'
import store from '../store'
import './guess-form.css';

export class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(addGuess(value));
        this.props.dispatch(updateFeedback(value));
        this.input.value = '';
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                {/* <label htmlFor="userGuess">Enter your Guess</label> */}
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder='Enter your guess' required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

export default connect()(GuessForm)
