'use script'
function yourName(){
    let username = prompt("What is your name");
    console.log("Hello" + "" + username);
document.write (username)
}

function getTime(){
let time = prompt("What hour is it? 0-23");
console.log("time of day")

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
document.write (message)
}

function getFavthing()
{
    

let favorite = prompt("What is your favorite thing to do")
 console.log(favorite)
 if (favorite==='travel'){
    return'Great Choice'
 }else {alert ("that is a poor choice, please try again")}
  favorite = prompt("What is your favorite thing to do")
  if (favorite==='travel'){
    return'Great Choice'
 }else {return "Bad Choice" }
  
}

function getSiblings()
{
    let siblings = prompt("how many siblings do you have?");
    console.log(siblings)
    let output = '';
for (let i = 0; i < siblings; i++){
    output += "<img src= '/hello-world/images/noa.jpg' width='100' height='100'/> "

}
document.write(output)
}
   
