let displayMessage = document.getElementById('welcome');

let loggedInUser = JSON.parse(localStorage.getItem('currentUser'));

displayMessage.innerHTML = `
<h1>Hello, ${loggedInUser.fullname}!</h1>
`

function logOut(params) {
    window.location.href = "index.html";
}

// if (isset($_SESSION['email'])) {
//     header("location:index.html");
// }

// session_start();
// if (!isset($_SESSION['username'])) {
//   //redirect to where people who are not logged in should be.
//   window.location.href = "index.html";
// } else {
//   //access to the page.
//   window.location.href = "dashboard.html";
// }