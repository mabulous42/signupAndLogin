let loading = document.getElementById("loading-div");
let loginEmail = document.getElementById('login-email');
let loginPassword = document.getElementById('login-password');
let loginMessage = document.getElementById('login-msg');

loading.style.display = "none";

function signupPage() {
    window.location.href = "signup.html";
}

let allUser = JSON.parse(localStorage.getItem("all_users"));
console.log(allUser);

function login(ev) {
    ev.preventDefault();
    let authorizedUser = allUser.find((user_list) => user_list.email == loginEmail.value);
    console.log(authorizedUser);
    
    loading.style.display = "block";



    // setTimeout(() => {
    //     loading.style.display = "none";
    //     location.href = "dashboard.html";
    // }, 3000);

    // setTimeout(() => {
    //     loading.style.display = "none";

    //     let authorizedUser = registeredUser.find((user) => user.email === loginEmail.value && user.password === loginPassword.value);
    //     let userNotFound = registeredUser.find((user) => user.email !== loginEmail.value && user.password !== loginPassword.value);
    //     let emailOrPass = registeredUser.find((user) => user.email !== loginEmail.value || user.password !== loginPassword.value);
    //     console.log("You are authorized: " + authorizedUser);

    //     if (authorizedUser) {
    //         // logging in to dashboard
    //         window.location.href = "dashboard.html";

    //         window.localStorage.setItem('currentUser', JSON.stringify(authorizedUser));
    //     }
    //     else if (userNotFound) {
    //         loginMessage.innerHTML = `
    //           <p id="login-failed-msg">User Not Found</p>
    //         `
    //         setTimeout(() => {
    //             loginMessage.style.display = "none";
    //         }, 3000);
    //     }
    //     else if (emailOrPass) {
    //         loginMessage.innerHTML = `
    //               <p id="login-failed-msg">Incorrect email or password.</p>
    //             `
    //         setTimeout(() => {
    //             loginMessage.style.display = "none";
    //         }, 3000);
    //     }




    // }, 3000);
}



