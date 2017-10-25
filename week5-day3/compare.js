console.log(process.argv);

var arg1 = process.argv[2];
var arg2 = process.argv[3];

console.log("arg1: " + arg1);
console.log("arg2: " + arg2);

if(arg1 === arg2) {
	console.log("==> Same!");
}
else {
	console.log("==> Different!");
}

