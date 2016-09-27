(function(){
    // Initialize firebase
    const config = { 
        apiKey: "AIzaSyCuWAvUnbjSAGD7XqansTe2tUoqPORncl0",
        authDomain: "masp-9a79d.firebaseapp.com",
        databaseURL: "https://masp-9a79d.firebaseio.com",
        storageBucket: "masp-9a79d.appspot.com",
        messagingSenderId: "686393566018"
    }; firebase.initializeApp(config);

    // HTML elements
    const txtEmail    = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogIn    = document.getElementById('loginbtn');
    const btnLogOut   = document.getElementById('btnLogOut');

    // Asynchronously signs in using email and password
    btnLogIn.addEventListener('click', e => {
        const email   = txtEmail.value;
        const pass    = txtPassword.value;
        firebase.auth().signInWithEmailAndPassword(email,pass).catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
            throw error;
            if(error == null) throw 'great!';
        });
    });

    btnLogOut.addEventListener('click', e => {
     	firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
    	if(firebaseUser){
    		console.log(firebaseUser);
            console.log("here we go!");
            console.log(firebaseUser.email);
    		btnLogOut.classList.remove('hide');
    	}
    	else{
    		console.log('not logged in');
    		btnLogOut.classList.add('hide');
    	}
    });
}());
