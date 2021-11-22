function changeColor(){
	let bb = false;
	if(bb === true){
	document.getElementById("sideB").style.width="50px";
	document.getElementById("sideB").style.overflow="hidden";
	}

	let cc = 0;
	let aa = document.querySelector(".sideB");
	//if (bb === false){
	//aa.style.width ="80px";
	document.getElementById("ppp").innerHTML="Hello World";
	document.getElementById("sideB").style.width="200px";
	cc++;
	
	//(function(){
//	if
	var clock = document.getElementById('clock');
 	let clockTime;
	var currentTime = new Date();
 
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";
	clockTime = "hours + minutes + seconds";
	clock.innerText = currentTime;
//	alert(" you have been updated with the current date and time.");
	bb = true;
	return bb;
	
}