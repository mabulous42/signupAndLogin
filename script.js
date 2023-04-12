document.getElementById("login-box").style.display = "none";
let loading = document.getElementById("loading-div");
let loadingL = document.getElementById("loading-divL");
let fullName = document.getElementById('f-name');
let email = document.getElementById('user-email');
let signUpMessage = document.getElementById('signup-msg');
let password = document.getElementById('user-password');
let confirmPassword = document.getElementById('confirm-password');
let loginEmail = document.getElementById('login-email');
let loginPassword = document.getElementById('login-password');

loading.style.display = "none";
loadingL.style.display = "none";

function loginPage() {

    document.getElementById("sign-up-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
}


function signUpPage() {
    document.getElementById("sign-up-box").style.display = "block";
    document.getElementById("login-box").style.display = "none";

}



let registeredUser = JSON.parse(localStorage.getItem('member'));

function signUp() {
    if (password.value === confirmPassword.value && fullName.value != "" && email.value != "") {

        let myObj = {
            fullname: fullName.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value
        }
        // console.log(myObj.fullname);
        if (registeredUser == null) {
            registeredUser = [];
            registeredUser.push(myObj); //Add the object(user details) to registeredUser
            localStorage.setItem('member', JSON.stringify(registeredUser));
        } else {
            registeredUser.push(myObj); //Add the object(user details) to registeredUser
            localStorage.setItem('member', JSON.stringify(registeredUser));
        }


        signUpMessage.innerHTML = `
        <p id="success-msg">Sign up successful!!!</p>
        `
        loading.style.display = "block";
        setTimeout(() => {
            document.getElementById("sign-up-box").style.display = "none";
            document.getElementById("login-box").style.display = "block";
            loading.style.display = "none";
            signUpMessage.style.display = 'none';
        }, 3000);

        fullName.value = "";
        email.value = "";
        password.value = "";
        confirmPassword.value = "";
    } else {
        signUpMessage.innerHTML = `
        <p id="failed-msg">Sign up failed!!!(Password does not matched)</p>
        `
        setTimeout(() => {
            signUpMessage.style.display = 'none';
        }, 3000);
    }
}


function login() {
    loading.style.display = "block";

    setTimeout(() => {
        loading.style.display = "none";

        let registeredUsers = JSON.parse(localStorage.getItem('member'));
        console.log("User info: " + registeredUsers.fullName);

        let authorizedUser = registeredUsers.find((user) => user.email === loginEmail.value);
        console.log("You are authorized: " + authorizedUser);

        if (authorizedUser) {
            // Redirect to the dashboard page
            window.location.href = "dashboard.html";

            window.localStorage.setItem('currentUser', JSON.stringify(authorizedUser));
        } else {
            logInMessage.innerHTML = `
              <p id="failed-msg">Login failed! Please check your email and password.</p>
            `;
            setTimeout(() => {
                logInMessage.style.display = "none";
            }, 3000);
        }

    }, 3000);
}






