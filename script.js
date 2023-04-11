document.getElementById("login-box").style.display = "none";
let loading = document.getElementById("loading-div");
let loadingL = document.getElementById("loading-divL");
let fullName = document.getElementById('f-name');
let email = document.getElementById('user-email');
let signUpMessage = document.getElementById('signup-msg');
let password = document.getElementById('user-password');
let confirmPassword = document.getElementById('confirm-password');

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

let myObj;


let registeredUser = []

function signUp() {
    if (password.value === confirmPassword.value && fullName.value != "" && email.value != "") {
        
        myObj = {
            fullname: fullName.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value
        }
        
        registeredUser.push(myObj); //Add the object(user details) to registeredUser
        localStorage.setItem('member', JSON.stringify(registeredUser));
        
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
        <p id="failed-msg">Sign up failed!!!</p>
        `
        setTimeout(() => {
            signUpMessage.style.display = 'none';
        }, 3000);
    }


}

function login() {
    loading.style.display = "block";
    setTimeout(() => {
        // document.getElementById("sign-up-box").style.display = "none";
        // document.getElementById("login-box").style.display = "block";
        loading.style.display = "none";

    }, 3000);
}

let getter = "";
function getUserInfo() {
   getter = JSON.parse(localStorage.getItem('member'));
   console.log(getter);
}
getUserInfo();


