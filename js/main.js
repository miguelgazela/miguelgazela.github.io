$(document).ready(function() {

	var theater = new TheaterJS();

	// describre actors
	theater.describe("Miguel", .8, "#products");

    setInterval(function (){
        // write the scenario
	theater
		.write("Miguel:Web Apps", 600)
		.write("Miguel:OSX Apps", 2000);
    }, 3000);

	

});