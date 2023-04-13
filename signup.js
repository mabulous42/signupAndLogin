let loading = document.getElementById("loading-div");
let fullName = document.getElementById("f-name");
let email = document.getElementById('user-email');
let password = document.getElementById('user-password');
let confirmPassword = document.getElementById('confirm-password');
let signUpMessage = document.getElementById('signup-msg');
loading.style.display = "none";



function loginPage() {
    window.location.href = "index.html";
}


let registeredUser = []
registeredUser = JSON.parse(localStorage.getItem("all_users"));

function signUp(ev) {
    ev.preventDefault();
    let my_users = {
        fullname: fullName.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }
    if (registeredUser === null) {
        registeredUser = [];
        registeredUser.push(my_users);
        localStorage.setItem("all_users", JSON.stringify(registeredUser));
    } else {
        registeredUser.push(my_users);
        localStorage.setItem("all_users", JSON.stringify(registeredUser));
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


// function signUp() {
//     if (password.value === confirmPassword.value && fullName.value != "" && email.value != "") {

//         let myObj = {
            
//         }
       

        
//     } else {
//         signUpMessage.innerHTML = `
//         <p id="failed-msg">Sign up failed!!!(Password does not matched) ${fullName}</p>
//         `
//         signUpMessage.innerHTML = 
//         "<p id='failed-msg'>" + "Sign up failed!!!(Password does not matched)" + fullName + "</p>"
        
//         setTimeout(() => {
//             signUpMessage.style.display = 'none';
//         }, 3000);
//     }
// }

