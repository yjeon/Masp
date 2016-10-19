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
