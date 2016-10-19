import React, { Component } from 'react';
import Modal from 'react-modal';

class SignUpModalTrigger extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal () {
    this.setState({open: true});
  }

  closeModal () {
    this.setState({open: false});
  }

  render () {
    return (
      <div>
        <a className="navbar-items" onClick={this.openModal} href="#">Sign up</a>
        <Modal className="sign-up-modal" isOpen={this.state.open}>
          <h1 className="modal-title">Sign Up</h1>
          <div className="modal-inner-form">
            <input className="modal-input" id="modal-sign-up-mail-input" type="email" placeholder="Enter your email here"/>
            <br />
            <br />
            <input className="modal-input" id="modal-sign-up-password-input" type="password" placeholder="Enter your password here" pattern="(?=.*[A-Z]).{6,}"/>
            <br />
            <br />
            <button className="modal-button">Submit</button>
            <br />
            <br />
            <button className="modal-button" onClick={this.closeModal}>Close</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignUpModalTrigger;
