var signUpModal =
    (<div>
    <h4>Sign Up</h4>
    <label htmlFor="email">Email : </label>
    <input id = "txtEmail" type="email" placeholder="Enter Email here"/>
    <br/><br/>
    <label htmlFor="password">Password : </label>
    <input id = "txtPassword" type="password" placeholder="with one uppercase letter" pattern="(?=.*[A-Z]).{6,}"/>
    <button id="btnSignUp" className="btn btn-secondary">Sign up</button>
    </div>);

var signInModal =
    (<div>
     <h4>Sign In</h4>
     <label htmlFor="email">Email : </label>
     <input id = "txtEmail" type="email" placeholder="Enter Email here"/>
     <br/><br/>
     <label htmlFor="password">Password : </label>
     <input id = "txtPassword" type="password" placeholder="with one uppercase letter" pattern="(?=.*[A-Z]).{6,}"/>
     <button id="loginbtn" className="btn btn-secondary">Sign in</button>
     </div>);

ReactDOM.render(
    signUpModal,
    document.getElementById('signUpContainer')
);

ReactDOM.render(
    signInModal,
    document.getElementById('signInContainer')
);
