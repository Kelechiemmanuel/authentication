

// Fire base config
const firebaseConfig = {
    apiKey: "AIzaSyDE2E_A-V66I4GZltwvDXg6DYtSJiQbhB4",
    authDomain: "authentication2-d88e6.firebaseapp.com",
    projectId: "authentication2-d88e6",
    storageBucket: "authentication2-d88e6.appspot.com",
    messagingSenderId: "74946086388",
    appId: "1:74946086388:web:9a1ab4894ed2e2eb59a5a1"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup Function
let SignUpButton = document.getElementById("signup");

SignUpButton.addEventListener("click", (e) => {
e.preventDefault();
console.log("signup click");

var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");

auth
.createUserWithEmailAndPassword(email.value, password.value)
.then((userCredential) => {
    location.reload();
    //sign in
    var user = userCredential.use;
    console.log("user, user.mail");
})
.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("error code", errorCode);
    console.log("error message", errorMessage);
});

});


//sign function
let SignInButton = document.getElementById("signin");

SignInButton.addEventListener("click", (e) => {
e.preventDefault();
console.log("signin click");

var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");

auth
.signInWithEmailAndPassword(email.value, password.value)
.then((userCredential) => {
    location.reload();
    //sign in
    var user = userCredential.use;
    console.log("user, user.mail");
})
.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("error code", errorCode);
    console.log("error message", errorMessage);
});

});


//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
