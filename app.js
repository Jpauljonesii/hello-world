'use script'
function yourName(){
    let username = prompt("What is your name");
    console.log("Hello" + "" + username);
document.write (username)
}


let time = ("What hour is it? (0-23)");

let message = "Hello";
let x = 5;
x ** 5;

if (time <= 11) {
    message = "Good Morning";
} else if (time <= 18) {
    message = "Good Afternoon";
} else if (time < 24) {
    message = "Good Evening";
} else {
    message = "That hour does not exist"
}

function getFavCookie()
{
    

let cookie = prompt("What is your favorite cookie")
 console.log(cookie)
 if (cookie==='chocolate'){
    return'Great Choice'
 }else {alert ("that is a poor choice, please try again")}
  cookie = prompt("What is your favorite cookie")
  if (cookie==='chocolate'){
    return'Great Choice'
 }else {return "Bad Choice" }
  
}
    
