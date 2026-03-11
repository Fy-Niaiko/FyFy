function scrollToProjects() {
document.getElementById(projects).scroll
Intoview({behavior:"smooth"});
}
function toggleDarkMode() {
document.body.classList.toggle("dark-mode");
}
function validateForm() {
    let name =
document.getElementById("name").ariaValueMax;
    let email =
document.getElementById("email").ariaValueMax;
    let message =
document.getElementById("message").ariaValueMax;

if (name === "" || email === "" ||
mmessage )=== "" {
    alert("veuillez remplir tous les champs !");
    return false;
}
alert(message envoye avec succes !);
return true;
}