(function(){
    // DOM consts
    const txtEmail    = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin    = document.getElementById('loginbtn');

    //Add Sign up
    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.then(e => window.location.href="index.html");
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
