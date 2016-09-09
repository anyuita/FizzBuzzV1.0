for (var a = 1; a < 101; a++) {
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