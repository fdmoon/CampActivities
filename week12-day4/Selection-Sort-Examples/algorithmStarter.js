// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function selectionSort(items) {

  // FILL IN YOUR CODE HERE
  // Use the above swap function when you are ready to start swapping elements in the array.
  var newArray = [];
  var smallerValue;
  var smallerIndex;
  var isChanged = false;

  for(let i=0; i<array.length; i++) {
    smallerValue = array[i];
    smallerIndex = i;

    isChanged = false;
    
  	for(let j=i+1; j<array.length; j++) {
  		if(smallerValue > array[j]) {
  			smallerValue = array[j];
		  	smallerIndex = j;
			  isChanged = true;
  		}
    }
    
  	if(isChanged) {
  		swap(array, i, smallerIndex);
  	}
  }

  return array;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));
