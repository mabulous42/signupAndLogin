let userName = document.getElementById('user-name');

let loggedInUser = JSON.parse(localStorage.getItem("CU"));
console.log(loggedInUser);

userName.innerHTML = loggedInUser.fullname;


if (!loggedInUser) {
    window.location.href = "index.html";
}
function logOut() {
    localStorage.removeItem("CU");
    window.location.href = "index.html";
}
