(function(){

    //Initialize firebase
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
    const btnSignUp   = document.getElementById('btnSignUp');

    const loginbtn    = document.getElementById('loginbtn');
    const btnLogout   = document.getElementById('btnLogOut');

    //Add Sign up
    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.then(e => window.location.href="");
        promise.catch(e => console.log(e.message));

    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
           
            btnLogOut.classList.remove('hide');
        }
        else{
            console.log('not logged in');
            btnLogOut.classList.add('hide');
            loginbtn.classList.remove('hide');
            btnSignUp.classList.remove('hide');
        }
    });

}());
