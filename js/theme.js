document.getElementById("bluerect").addEventListener("click", changeThemeBlue);
document.getElementById("brownrect").addEventListener("click", changeThemeBrown);
document.getElementById("whiterect").addEventListener("click", changeThemeWhite);

function changeThemeBlue() {
    document.body.style.backgroundColor = "blue";
}
function changeThemeBrown() {
    document.body.style.backgroundColor = "brown";
}
function changeThemeWhite() {
    document.body.style.backgroundColor = "white";
}
