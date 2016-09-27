(function(){

    // Initialize firebase
    const config = { 
        apiKey: "AIzaSyCuWAvUnbjSAGD7XqansTe2tUoqPORncl0",
        authDomain: "masp-9a79d.firebaseapp.com",
        databaseURL: "https://masp-9a79d.firebaseio.com",
        storageBucket: "masp-9a79d.appspot.com",
        messagingSenderId: "686393566018"
    };

    firebase.initializeApp(config);

    // HTML elements
    const txtEmail    = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const loginbtn    = document.getElementById('loginbtn');
    const btnSignUp   = document.getElementById('btnSignUp');
    const btnLogOut   = document.getElementById('btnLogOut');

    //add login event
    loginbtn.addEventListener('click', e => {
    	//get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Asynchronously signin user
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
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
            document.getElementById('modaltrigger').style.visibility('visible');
        }
    });
}());


