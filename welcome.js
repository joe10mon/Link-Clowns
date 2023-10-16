// function time() {
// 	var date = new Date();
// 	var hours = date.getHours();
// 	var minutes = date.getMinutes().toString();
// 	var ante;
// 	var greeting;
// 	var dd = date.getDate().toString();
// 	var userName = "User";

// 	if (hours < 12) {
// 		ante = "AM";
// 		greeting = "Morning";
// 	} else if (hours === 12 && hours >= 3) {
// 		ante = "PM";
// 		greeting = "Afternoon";
// 	} else {
// 		ante = "PM";
// 		greeting = "Evening";
// 	}

// 	if (hours === 0) {
// 		hours = 12;
// 	} else if (hours !== 12) {
// 		hours = hours % 12;
// 	}

// 	if (minutes.length < 2) {
// 		minutes = "0" + minutes;
// 	}

// 	if (dd.length < 2) {
// 		dd = "0" + dd;
// 	}

// 	Date.prototype.monthNames = [
// 		"January", "February", "March", "April", "May", "June", "July",
// 		"August", "September", "October", "November", "December"
// 	];

// 	Date.prototype.weekNames = [
// 		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
// 	];

// 	Date.prototype.getMonthName = function() {
// 		return this.monthNames[this.getMonth()];
// 	};

// 	Date.prototype.getWeekName = function() {
// 		return this.weekNames[this.getDay()];
// 	};

// 	$("#time").html(hours + ":" + minutes + " " + ante);
// 	$("#day").html(date.getWeekName() + ", " + date.getMonthName() + " " + dd);
// 	$("#greeting").html("Good " + greeting + ", " + userName + ".");
	
// } 
// time();
// setInterval(time, 1000);

// var date = new Date();
// var options = { weekday: "long", month: "long", day: "2-digit" };
// var formattedDate = date.toLocaleDateString("en-US", options);
// // Find the "current_date" div and set its innerHTML
// document.getElementById("current_date").innerHTML = formattedDate;

var date = new Date();
var optionsDate = { weekday: "long", month: "long", day: "2-digit" };
var optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true };

var formattedDate = date.toLocaleDateString("en-US", optionsDate);
var formattedTime = date.toLocaleTimeString("en-US", optionsTime);

// Store the time in a separate variable
var timeString = formattedTime;

var dateTimeString = formattedDate 
// Find the "current_date" div and set its innerHTML
document.getElementById("current_date").innerHTML = dateTimeString;
document.getElementById("current_time").innerHTML = timeString;

// Now you have the time stored in the variable "timeString"
console.log("Time:", timeString);

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get the username parameter from the URL
var username = getParameterByName("username");

// Display a welcome message with the username
if (username) {
	document.getElementById("greeting").innerHTML = "Good Afternoon, " + username + ".";
} else {
	document.getElementById("greeting").innerHTML = "Good Afternoon, User.";
}