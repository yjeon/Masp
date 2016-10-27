import React, { Component } from 'react';
import Modal from 'react-modal';
import firebase from 'firebase';
import axios from 'axios';


//var firebase = require('firebase');

class SignInModalTrigger extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submit = this.submit.bind(this);
  }

  openModal() {
    this.setState({open: true});
  }

  closeModal() {
    this.setState({open: false});
  }

  //this function sends data to firebase server
  submit() {
    
    const email  = document.getElementById('modal-sign-in-mail-input').value;
    const pass   = document.getElementById('modal-sign-in-password-input').value;
    const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

    //axios.get('http://localhost:5000/signin');

    
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        this.setState({open: false});
        axios.post('https://vast-scrubland-16990.herokuapp.com/signin', {
          user: firebaseUser
          })
          .then(function (response) {
           console.log(response.data);
           alert("All previous addresses searched: \n" + response.data);
          })
          .catch(function (response) {
          console.log(response);
          });

        console.log("hi");

      }
    });
  }

  render () {
    return (
      <div>
        <a
          id="sign-in-open-modal"
          className="navbar-items"
          onClick={this.openModal}
          href="#"
        >Sign in</a>
        <Modal
          className="sign-in-modal"
          isOpen={this.state.open}>
          <h1
            className="modal-title"
        >Sign in</h1>
          <div
            className="modal-inner-form">
            <input
              className="modal-input"
              id="modal-sign-in-mail-input"
              type="email"
              placeholder="Enter your email here"/>
            <br />
            <br />
            <input
              className="modal-input"
              id="modal-sign-in-password-input"
              type="password"
              placeholder="Enter your password here"
              pattern="(?=.*[A-Z]).{6,}"/>
            <br />
            <br />
            <button
              className="modal-button"
              id="modal-sign-in-submit-button"
              onClick={this.submit}
            >Submit</button>
            <br />
            <br />
            <button
              className="modal-button"
              id="modal-sign-in-close-button"
              onClick={this.closeModal}
            >Close</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignInModalTrigger;
