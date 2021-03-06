# Scheduling-Engine
A javascript engine for scheduling alerts and content with built in auto-display/removal logic.

## Getting Started
### Installation
Add the latest Scheduling Engine files to the header of your site.

```html
<script src="scheduling_engine.js"></script>
<script type="text/javascript">
window.onload = function(){
	// Set the start and end dates/times (MM/DD/YY & HH/MM/SS)
	dateCheck = scheduleEngine("January 1, 2019 11:59:00", "January 1, 2019 12:00:00");
	
	// Identifies the target DOM element where the message should be appended
	var id = 'alert';
	// Message to be displayed
	var message = document.createTextNode("This is a test message.");
	// Expiration message to be displayed
	var expirationMessage = document.createTextNode("This message has expired.");
	
	// Checks for condition to be true
	if (dateCheck == 1) {
		document.getElementById(id).appendChild(message); // Set ID to the targeted element
	} else {
		document.getElementById(id).appendChild(expirationMessage); // Set ID to the targeted element
	}
};
</script>

<div id="alert"></div>
```

For deployment use the minified version instead:

```html
<script src="scheduling_engine.min.js"></script>
```
### Create a DOM element
Add an HTML element in the `<body>` of your site. This will be used later to connect the schedule engine logic to the DOM.

```html
<div id="alert"></div>
```

### Set start and end dates
Start and end dates are set in the MM/DD/YY and HH/MM/SS formats. Search for the `scheduleEngine` function and set the `sDate` and `eDate`.

```html
dateCheck = scheduleEngine("January 1, 2018 11:59:00", "January 1, 2018 12:00:00");
```
### Connect the logic to the DOM
In the `dateCheck` conditional statement change `#alert` to the ID you assigned to your DOM element.

```html
document.getElementById(id).appendChild(message); // Set ID to the targeted element
```

Once done publish your changes and enjoy!

### Expired Content
Want to add a message or alternative content if you've reached the expiration date? Just add the following code onto the `dateCheck` conditional statement.

```html
else {
	document.getElementById(id).appendChild(expirationMessage); // Set ID to the targeted element
}
```

The final result should look something like this:
```html
// Checks for condition to be true
if (dateCheck == 1) {
	document.getElementById(id).appendChild(message); // Set ID to the targeted element
} else {
	document.getElementById(id).appendChild(expirationMessage); // Set ID to the targeted element
}
```

## Demo

See the demo on <a href="https://jsfiddle.net/q09f4kj7/">JSFiddle</a>.

## Browser Support

*Supported Browsers* : Chrome, Firefox, Safari, Opera, Edge, IE7+.

## License

The source code can be found on [github](https://github.com/peterburdette/Scheduling-Engine/tree/master/scheduling-engine) and is licensed under the [MIT](http://opensource.org/licenses/mit-license.php) license.

Developed by [Peter Burdette](https://www.linkedin.com/in/peter-burdette-76976552)
