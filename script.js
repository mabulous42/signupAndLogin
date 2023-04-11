document.getElementById("login-box").style.display = "none";
let loading = document.getElementById("loading-div");
loadingL = document.getElementById("loading-divL");

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

function signUp() {
    loadingL.style.display = "block";
    setTimeout(() => {
        // document.getElementById("sign-up-box").style.display = "block";
        // document.getElementById("login-box").style.display = "none";
        loadingL.style.display = "none";
    }, 3000);
}

function login() {
    loading.style.display = "block";
    setTimeout(() => {
        // document.getElementById("sign-up-box").style.display = "none";
        // document.getElementById("login-box").style.display = "block";
        loading.style.display = "none";

    }, 3000);
}