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

        // Asynchronously signin userf
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
        //writeUserData(txtEmail);
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
            $('#modaltrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });
    	}
    	else{
    		console.log('not logged in');
    		btnLogOut.classList.add('hide');
        }
    });


    const database = firebase.database();
    const userEmail = document.getElementById('txtEmail');
    
    function writeUserData(userEmail){
        var firebaseRef = database.ref();
        var em = userEmail.value;
        firebaseRef.child("email").push().set(em);
    }


    const goButton = document.getElementById('go');
    const search = document.getElementById('mapSearch1');
    goButton.addEventListener('click', e => {
        writeSearchData(search);
    });

    //TODO: if it is not a location, make it not save into.
    function writeSearchData(search){
        var firebaseRef = database.ref();
        var searchVar = search.value;
        firebaseRef.child("search").push().set(searchVar);
    };


    const dbRefObject = database.ref().child('search');
    
    dbRefObject.on('value', snap =>{
        console.log(snap.val());

        const li = document.createElement('li');
        li.innerText = snap.val();
        //console.log(' hello');
        //ul.appendChild(li);
    });

    










}());

var data1 = [4, 8, 15, 16, 23, 42];
//var data1 = li;

    d3.select(".chart")
      .selectAll("div")
        .data(data1)
      .enter().append("div")
        .style("width", function(d) 
               { return d * 10 + "px"; })
        .text(function(d) { return d; });

    function showDiv() {
       document.getElementById('c').style.display = "block";
    }


