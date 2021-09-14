function findFirstDuplicate(arr) {
 //iterate through array
 for (let i=0;i<arr.length-1;i++){
   //compare value to value before it
   if (arr[i]==arr[i-1]){
     return arr[i]
   } else {
      return -1
   }
 }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 6");
  console.log("=>", findFirstDuplicate([2,3,6,6,1]));

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

//given an array. find the first value that has already shown up in the array and return that value.
//if there are no duplicate values return -1. 

//I tried to solve this by iterating through the array with a for loop, using i to represent the index of each value. (for (let i=0;i<arr.length-1;i++){})...
//Then I tried to see if each value as i increased (arr[i]) was equal to arr[i-1]. This did not work.
