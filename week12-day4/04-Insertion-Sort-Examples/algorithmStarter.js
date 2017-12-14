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
// SOLUTION - Insertion Sort
// ================================================
var swap = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

insertionSort = (array) => {
  var currentValue;

  for(let i=0; i<array.length; i++) {
    currentValue = array[i];

    for(var j=i-1; j>=0; j--) {
      if(currentValue < array[j]) {
        array[j+1] = array[j];
      }
      else {
        break;
      }
    }
    array[j+1] = currentValue;
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
console.log(insertionSort(array).join(" "));
