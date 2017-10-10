var fib = [];

// Your Biggest Profit function
var printFib = function(n) {
    if(n > 0){
        if(fib.length<=1){
            fib.push(1);
        }
        else{
            fib.push(fib[fib.length-1] + fib[fib.length-2]);
        }
        return printFib(n-1);
    }
    else{
        console.log("Done");
    }
};
// A Call to your Biggest Profit function.
printFib(10)
console.log(fib)	

