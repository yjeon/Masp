(function(){

    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyCuWAvUnbjSAGD7XqansTe2tUoqPORncl0",
    	authDomain: "masp-9a79d.firebaseapp.com",
    	databaseURL: "https://masp-9a79d.firebaseio.com",
    	storageBucket: "masp-9a79d.appspot.com",
    	messagingSenderId: "686393566018"
  	}; firebase.initializeApp(config);

    // HTML elements
  	const email       = document.getElementById('txtEmail').value;
  	const pass        = document.getElementById('txtPassword').value;
  	const btnLogIn    = document.getElementById('btnLogIn');
  	const btnSignUp   = document.getElementById('btnSignUp');
  	const btnLogOut   = document.getElementById('btnLogOut');
  	const auth        = firebase.auth();

  	//add login event
  	btnLogIn.addEventListener('click', e => {
		const promise = auth.signInWithEmailAndPassword(email,pass);
		promise.catch(e => console.log(e.message));
  	});

  	//Add Sign up
 	btnSignUp.addEventListener('click', e => {
		const promise = auth.createUserWithEmailAndPassword(email,pass);
		promise.catch(e => console.log(e.message));
  	});

 	btnLogOut.addEventListener('click', e => {
 		firebase.auth().signOut();
 	});

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);
			btnLogOut.classList.remove('hide');
		}
		else{
			console.log('not logged in');
			btnLogOut.classList.add('hide');
		}
	});
}());
