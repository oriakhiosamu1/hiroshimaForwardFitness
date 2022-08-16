/* Oriakhi Osamudiamen
February 13th
My Function List
*/

//Thank you alert
function tyAlert() {
	alert("Thank you for your interest in our fitness club. We will contact you soon.")
}	

//Burpees video window
function burpees() {
	window.open("scripts/burpees.html", "_blank", "width=610, height=360");
}

//Plank video window
function plank() {
	window.open("scripts/plank.html", "_blank", "width=610, height=360");
}

//Mountain climber video window
function mtnClimber() {
	window.open("scripts/mtn.html", "_blank", "width=610, height=360");
}	

var btn= document.getElementById("button");
var ul= document.getElementById("ul");

btn.onclick= function(){
	if(ul.style.display=="none"){
		ul.style.display="block";
	}else{
		ul.style.display="none";
	}
}	