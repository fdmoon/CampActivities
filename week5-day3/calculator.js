var operator = process.argv[2];

if(operator !== "algebra") {
	var value1 = parseFloat(process.argv[3]);
	var value2 = parseFloat(process.argv[4]);
	var result;

	switch(operator) {
		case "add":
			result = value1 + value2;
			break;
		case "subtract":
			result = value1 - value2;
			break;	
		case "multiply":
			result = value1 * value2;
			break;
		case "divide":
			result = value1 / value2;
			break;
		case "remainder":
			result = value1 % value2;
			break;
		case "exp":
			result = Math.pow(value1, value2);
			break;
	}

	console.log(result);
}
else {
	var equation = process.argv[3];

	// 4x+3=10
	var eq = equation.indexOf("=");
	if(eq !== -1) {
		var left = equation.substring(0, eq);				// 4x+3
		var right = parseFloat(equation.substring(eq+1));	// 10

		var op = left.indexOf("+");
		var l1 = left.substring(0, op);						// 4x
		var l2 = parseFloat(left.substring(op+1));			// 3

		var x = l1.indexOf("x");
		var n1 = parseFloat(l1.substring(0, x));			// 4

		var result = (right - l2) / n1;						// x = (10 - 3) / 4

		console.log(result);
	}
	else {
		console.log("Equation Syntax Error!");
	}
}

