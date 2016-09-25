// Changes Sign in, Sign up to Welcome, Settings.
document.getElementById("loginbtn").addEventListener("click", removeSignup);
function removeSignup() {
    var signup = document.getElementById("signup");
    signup.href = "";
    signup.innerHTML = "";
    signup.id = "";
    document.getElementById("modaltrigger").innerHTML = "Welcome";
}

$(function(){
	$('#loginform').submit(function(e){
		return false;
	});
	$('#modaltrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });
});
