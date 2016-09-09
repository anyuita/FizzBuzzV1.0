for (var a = 1; a < 101; a++) {
	if (a % 3 === 0 && a % 5 === 0) {
		document.write("fizz buzz");
	}
	else if (a % 3 === 0) {
		document.write("fizz");
	}
	else if (a % 5 === 0) {
		document.write("buzz");
	}
	else {
		document.write(a);
	}
}