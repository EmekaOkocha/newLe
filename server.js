const http = require("http");
const fille = require("fs");
const url = require("url");
//const server = http.createServer;
//server.listen=3000;
//res.writeHead(200, { 'Content-Type': 'text/html' });
//console.log("listening...")

function readF(){
/* let ff = fille.readFile("names.json",(error)=>{
    if (error){
        alert("file not found. kindly check the file name or contact your administrator.")
        console.log(error);
    }
    alert S("ff");
});*/
alertS("ff");
}
let apndData = function(){
let parsIt = JSON.parse(ff);
let writF = fille.appendFile("names.json", "Mark : 24",(err)=>{
    if(err){
    console.log("error")
    alert("oops! our first error");}
        else{alert("file written succesfully");
    }
});
}

/*function onRequest(request, response){
    response.writeHead(200,{'content-Type': text/plain});
}
const server = http.createServer;
server.listen=3000;
console.log("listening...")
fille.readFile("names.json", (err,data)=>{

}); */