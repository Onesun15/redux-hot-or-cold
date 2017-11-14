import React from 'react';
import {connect} from 'react-redux'
import {toggleModal, newGame} from '../actions/action'
import store from '../store'

import './top-nav.css';

export class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        this.props.dispatch(newGame());
        console.log(store.getState())
        }

    onInfo(event) {
        event.preventDefault();
        this.props.dispatch(toggleModal());
        }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={event => this.onInfo(event)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={event => this.onNewGame(event)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav)