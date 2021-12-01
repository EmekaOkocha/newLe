let move =5;
let intt;
let changge= false;
function time(){
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sec = date.getSeconds();

    let currentTime =hr +":"+ mn +":"+ sec;
    let h3 = document.getElementById("timerP");
    let tt = setTimeout(function(){time()}, 1000);
    h3.innerHTML= currentTime;
}
time();
function scrollImage(){
    let srcImg = document.getElementById("d2");
    //srcImg.style.position = "relative";
    //srcImg.style.left = (move + 5)+"px";
    //intt = setInterval(scrollImage,5);
}
//scrollImage();
function rectt(){
    let can = getElementById("canntt");
  //  can.innerHTML="our Canvas starts here."
    let renCan = can.getContext("2D");
    renCan.fillStyle= "rgb(255,0,0)";
    renCan.fillRect(20,20,80,40);
//  renCan.strokeRect(30,50.120,100);
}
var imgObj = null;
function init(){
 imgObj = document.getElementById("cann");
 imgObj.style.position= 'relative'; 
 imgObj.style.left = '0px'; 
}
function moveRight(){
 imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';

}
window.onload = init;


let userData={
    "Username":"emeka",
    "password":"mark"
}
let username;
let password;

let tt = function(){
    let datte = new Date();
    let t= document.getElementById("timerP");
    t.innerHTML="Today is: " + datte;
    var ourTime;
    alert("you have been updated with the most current date as " + datte)
    
    }
function signedIn(){
  //  const fs = require("fs");
    let username = document.getElementById("fnm");
    let password = document.getElementById("unm");
    let a = username.value;
    let b = password.value;
    let jsonFile;
    let stringifyFile;
    if(a ==="" || b ===""){
        alert("invalid username or password");
    }
    else{
  /*      jsonFile = [{b:a}];
        stringifyFile = JSON.stringify(jsonFile);
        fs.appendfile */
        alert("You are now logged in as " + a);
    }
}
/*let calculateBmi = function(){
let name= document.getElementById("bminame").value;
let mail= document.getElementById("bmimail").value;
//let age= getElementById("bmiage");
if (name ==="" || mail ===""){
    alert("kindly fill all required fields");
    name="";
}
else{
    alert("mr "+ name +" "+"your body mass index is");
    } 

}*/
let signUpp = function(){
        let fn= document.getElementById("fnm").value;
        let un= document.getElementById("unm").value;
        let pw= document.getElementById("pwd").value;
   // let em= document.getElementById("em").value;
    //let age= getElementById("bmiage");
    if (fn ==="" || un ==="" || pw ===""){
        alert("Oga kindly fill all required fields");
   //    name="";
    }
    else{
        alert("mr "+ fn +" "+"your account has been created successfully");
        }
    
    }
    
function sideM(){
    let menu = document.getElementById("aa");
    let men = document.getElementById("as");
    if(changge === false){
        men.style.width="150px";
        menu.style.visibility= "visible";
            changge= true;
    }
    else if(changge === true){
        men.style.width= "50px";
        menu.style.visibility= "hidden";
        changge= false;
    }
    
}