let tt = function(){
    let datte = new Date();
    let t= document.getElementById("timerP");
    t.innerHTML="Today is: " + datte;
    var ourTime;
    alert("you have been updated with the most current date as" + datte)
    
    }

let calculateBmi = function(){
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
}
let signUpp = function(){
        let fn= document.getElementById("fnm").value;
        let un= document.getElementById("unm").value;
        let pw= document.getElementById("pwd").value;
   // let em= document.getElementById("em").value;
    //let age= getElementById("bmiage");
    if (fn ==="" || un ==="" || pw ===""){
        alert("kindly fill all required fields");
   //    name="";
    }
    else{
        alert("mr "+ fn +" "+"your account has been created successfully");
        }
    }

let CancelB =function(){
console.log("hello world")
    
}