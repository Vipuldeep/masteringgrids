// prompt("prompt test");

// alert("alert test");

// function sayhello() {
//     alert("hello");
// }

// sayhello();

// function multiply(a, b) {
//     if (a > 2 || b > 5) {
//         return("nooooo");
//     }
//     else {
//         return a*b;
//     }
// }

// multiply(3, 9);

// var user = {
//     name: "vipul",
//     age: 24
// };

var database = [
    {
    username: "vipul",
    password: "1234"
    }
];

var newsFeed = [
    {
        username: "nawal",
        timeline: "so boring"
    },
    {
        username: "kawal",
        timeline: "not so boring"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if(user === database[0].username && pass === database[0].password) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if(isUserValid(username, password)) {
        console.log("newsFeed");
    }
    else {
        alert("try again");
    }
} 

var userNamePrompt = prompt("whats your name");
var passwordPrompt = prompt("whats your password");


signIn(userNamePrompt, passwordPrompt);