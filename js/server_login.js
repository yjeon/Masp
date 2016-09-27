(function(){
    // DOM consts
    const txtEmail    = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin    = document.getElementById('loginbtn');

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
