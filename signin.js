let loading = document.getElementById("loading-div");
let loginEmail = document.getElementById('login-email');
let loginPassword = document.getElementById('login-password');

loading.style.display = "none";

function signupPage() {
    window.location.href = "signup.html";
}

let registeredUser = JSON.parse(localStorage.getItem("allUsers"));
console.log(registeredUser);


function login(ev) {
    ev.preventDefault();
    let authorizedUser = registeredUser.find((el)=> el.email == loginEmail.value && el.password == loginPassword.value);
    console.log(authorizedUser);
    loading.style.display = "block";

    if (!authorizedUser) {
        setTimeout(() => {
            loading.style.display = "none";
        }, 2900);
        setTimeout(() => {
            alert("User Information Incorrect");
        }, 3000);
    }
    else {
        localStorage.setItem("CU", JSON.stringify(authorizedUser));
        setTimeout(() => {
            loading.style.display = "none";
            location.href = "dashboard.html";
        }, 3000);
    }
}



