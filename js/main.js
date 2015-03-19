$(document).ready(function() {

	var theater = new TheaterJS();

	// describre actors
	theater
		.describe("Greeting", .8, "#greeting")
		.describe("Bio", .8, "#short-bio");

	// write the scenario
	theater
		.write("Greeting:Hi, my name is Miguel Oliveira,", 600)
		.write("Bio:I'm a software engineer", 600);

});