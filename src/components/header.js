import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export class Header extends React.Component  {
    state = {
        showInfoModal: false
    };

    toggleInfoModal() {
        this.setState({
            showInfoModal: !this.state.showInfoModal
        });
    }


  _getInfoModal = () => {
    if (this.props.modalToggle) {
      return <InfoModal onClose={() => this.toggleInfoModal()} />
    }

    return null
  }


  // Render is really bad for side effects 
  render() {
        return (
            <header>
                <TopNav onInfo={() => this.toggleInfoModal()}
                    onNewGame={this.props.onNewGame} />
                {this._getInfoModal()}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};

export default Header
