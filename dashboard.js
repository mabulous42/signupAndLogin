let displayMessage = document.getElementById('welcome');

let loggedInUser = JSON.parse(localStorage.getItem('currentUser'));

displayMessage.innerHTML = `
<h1>Hello, ${loggedInUser.fullname}!</h1>
`

function logOut(params) {
    window.location.href = "index.html";
}
