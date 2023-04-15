let loading = document.getElementById("loading-div");
let fullName = document.getElementById("f-name");
let email = document.getElementById('user-email');
let password = document.getElementById('user-password');
let confirmPassword = document.getElementById('confirm-password');
let signUpMessage = document.getElementById('signup-msg');
let passHide = document.getElementById('pass-hide');
let passShow = document.getElementById('pass-show');
let c_hidePass = document.getElementById('c-pass-hide');
let c_showPass = document.getElementById('c-pass-show');
loading.style.display = "none";
// passHide.style.display = "none";
// c_hidePass.style.display = "none";



function loginPage() {
    window.location.href = "index.html";
}



let registeredUser = JSON.parse(localStorage.getItem("allUsers"));

function signUp(ev) {
    ev.preventDefault();

    if (fullName.value === "" || email.value === "" || password.value === "") {
        alert("Please fill all the neccessary details")
    } else if (password.value.length < 8) {
        alert("Password must be at least 8 characters long")
    } else if (password.value !== confirmPassword.value) {
        alert("Password does not matched")
    } else {
        let my_users = {
            fullname: fullName.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value
        }
        if (registeredUser === null) {
            registeredUser = [];
            registeredUser.push(my_users);
            localStorage.setItem("allUsers", JSON.stringify(registeredUser));
        } else {
            registeredUser.push(my_users);
            localStorage.setItem("allUsers", JSON.stringify(registeredUser));
        }
        signUpMessage.innerHTML = `
            <p id="success-msg">Sign up successful!!!</p>
            `
        loading.style.display = "block";

        setTimeout(() => {
            window.location.href = "index.html";
            loading.style.display = "none";
            signUpMessage.style.display = 'none';
        }, 3000);

        fullName.value = "";
        email.value = "";
        password.value = "";
        confirmPassword.value = "";
    }
}

// function showPass() {
//     if (passShow.style.display = "block") {
//         password.type = "text";
//         passHide.style.display = "block";
//         passShow.style.display = "none";

//     } 
// }

// function hidePass() {
//     if (passShow.style.display = "none") {
//         password.type = "password";
//         passHide.style.display = "none";
//         passShow.style.display = "block";

//     }
// }


