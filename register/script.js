const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

const registerForm = document.getElementById("registerForm");
const registerUsername = document.getElementById("registerUsername");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");

loginForm.addEventListener("submit", function (e) {

    const email = loginEmail.value;
    const password = loginPassword.value;
    // Add your login logic here
    console.log("Login submitted:", email, password);
    loginForm.reset();
});

registerForm.addEventListener("submit", function (e) {

    const username = registerUsername.value;
    const email = registerEmail.value;
    const password = registerPassword.value;
    // Add your registration logic here
    console.log("Registration submitted:", username, email, password);
    registerForm.reset();
});
