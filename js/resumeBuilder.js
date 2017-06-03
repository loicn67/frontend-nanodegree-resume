
var awesomeThoughts = "I am Loic and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

console.log(awesomeThoughts);
console.log(funThoughts);

var name = "Loic Nonnenmacher";
var role = "Web Developper";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Loic",
	"role" : "Web Developper",
	"contact info" : "loic@nonnenmacher.co.uk",
	"picture URL" : "images/me.jpg",
	"welcome message" : "Web developper in the learning.",
	"skills" : "Enthusiast, Customer-service, JS, People"
}

$("#header").append(bio.name);

