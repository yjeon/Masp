// Changes Sign in, Sign up to Welcome, Settings.
document.getElementById("loginbtn").addEventListener("click", removeSignup);
function removeSignup() {
    var signup = document.getElementById("signup");
     signup.style.visibility = "hidden";
    document.getElementById("modaltrigger").innerHTML = document.getElementById("");
    var logout = document.getElementById("btnLogOut");
    logout.style.display = "block";
}

$(function(){
	$('#loginform').submit(function(e){
		return false;
	});
	$('#modaltrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });

});




