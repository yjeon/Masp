import React, { Component } from 'react';
import Modal from 'react-modal';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCuWAvUnbjSAGD7XqansTe2tUoqPORncl0",
  authDomain: "masp-9a79d.firebaseapp.com",
  databaseURL: "https://masp-9a79d.firebaseio.com",
  storageBucket: "masp-9a79d.appspot.com",
  messagingSenderId: "686393566018"
}; firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    document.getElementById('sign-out-link').classList.remove('hidden');
    document.getElementById('sign-up-link').classList.add('hidden');
    document.getElementById('sign-in-link').classList.add('hidden');
    console.log("signed in");
  } else {
    document.getElementById('sign-out-link').classList.add('hidden');
    document.getElementById('sign-up-link').classList.remove('hidden');
    document.getElementById('sign-in-link').classList.remove('hidden');
    console.log("not signed in");
  }
});

document.getElementById('sign-out-link').addEventListener('click', e => {
  firebase.auth().signOut();
});

/*
const submit = document.getElementById('modal-sign-in-submit-button');
submit.addEventListener('click', e => {
  const email = document.getElementById('modal-sign-in-mail-input').value;
  const pass  = document.getElementById('modal-sign-in-password-input').value;
  const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});
*/

class SignInModalTrigger extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({open: true});
  }

  closeModal() {
    this.setState({open: false});
  }

  //this function sends data to firebase server
  submit() {
    var config = 'a';
  }

  render () {
    return (
      <div>
        <a className="navbar-items" onClick={this.openModal} href="#">Sign in</a>
        <Modal className="sign-in-modal" isOpen={this.state.open}>
          <h1 className="modal-title">Sign in</h1>
          <div className="modal-inner-form">
            <input className="modal-input" id="modal-sign-in-mail-input" type="email" placeholder="Enter your email here"/>
            <br />
            <br />
            <input className="modal-input" id="modal-sign-in-password-input" type="password" placeholder="Enter your password here" pattern="(?=.*[A-Z]).{6,}"/>
            <br />
            <br />
            <button className="modal-button" id="modal-sign-in-submit-button">Submit</button>
            <script type="text/javascript">
              document.getElementById('modal-sign-in-submit-button').innerHTML="Hi";
            </script>
            <br />
            <br />
            <button className="modal-button" onClick={this.closeModal}>Close</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignInModalTrigger;
