var userInput = parseInt(prompt("Please choose a integer"));
while (isNaN(userInput)) {
	alert("Please make sure your answer is an integer");
	var userInput = parseInt(prompt("Please choose a integer"));
}

countTo100Fizzily(userInput);
function countTo100Fizzily (valueOfUserNumber) {
	for (var a = 1; a < valueOfUserNumber; a++) {
		if (a % 3 === 0 && a % 5 === 0) {
			document.write("<p>fizz buzz</p>");
		}
		else if (a % 3 === 0) {
			document.write("<p>fizz</p>");
		}
		else if (a % 5 === 0) {
			document.write("<p>buzz</p>");
		}
		else {
			document.write("<p>" + a + "</p>");
		}
	}
}