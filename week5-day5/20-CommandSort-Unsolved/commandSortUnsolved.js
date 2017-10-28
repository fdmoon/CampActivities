// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var numbers = process.argv.slice(2, process.argv.length);

// console.log(numbers);

console.log(numbers.sort(sortNums));

function sortNums(a, b) {
	return (a-b);
}

// for(var i=0; i<numbers.length; i++) {
// 	for(var j=i+1; j<numbers.length; j++) {
// 		if(numbers[i] > numbers[j]) {
// 			var temp = numbers[i];
// 			numbers[i] = numbers[j];
// 			numbers[j] = temp;
// 		}
// 	}
// }

// console.log(numbers);

