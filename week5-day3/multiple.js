var number = parseInt(process.argv[2]);
var base;

if(process.argv[3] !== undefined) {
	base = parseInt(process.argv[3]);
}
else {
	base = 6;
}

// ================================
// Method #1
// ================================
var result = 0;

for(var i=0; i<=number; i+=base) {
	console.log(i);
	result += i;
}

console.log("Result1 = " + result);

// ================================
// Method #2
// ================================
var n = Math.floor(number / base);
var sum = 0;

for(var j=1; j<=n; j++) {
	sum += (j*base);
}

console.log("Result2 = " + result);

