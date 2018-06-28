function scheduleEngine(sDate, eDate) {
	// Declaring Variables
	var d = new Date(); // Pulls current date/time
	var s = new Date(sDate); // User entered start date/time
	var e = new Date(eDate); // User entered end date/time
	var dateCheck = 0;
	
	// Checks for the current date
	if (d >= s && d <= e) {
		dateCheck++;
	}
	return dateCheck;
}