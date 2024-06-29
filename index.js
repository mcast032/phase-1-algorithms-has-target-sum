// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   //iterate through each # in the array
// for (let i = 0; i < array.length; i++){ //n steps
// // for the current num, identify a complement that adds to the tarfe ( comp = target - num)
//   const complement = target - array[i]
//   //iterate thought the rest of the array 
//   for(let j = i + 1; j < array.length; j++){ //n * n
//     //check if any num is our complement
//     //if so return true
//     if(array[j] === complement)return true

//   }
// }

// return false

//   //itterate thru each # in the array for the current num, identify if a complement that adds to the target (comp = target - num)
// //iterate through the rest of the arry check if any number is our complent if so return true. if i reach the end of the arrray return false
// }

// function hasTargetSum(array, target) {
//   // create an object to keep track of all the numbers we've seen
//   const seenNumbers = {};
//   // iterate over the array of numbers
//   for (const number of array) {
//     // for the current number, identify a complementary number that adds to our target
//     // (for example: if our number is 2, and the target is 5, the complementary number is 3)
//     const complement = target - number;
//     // check if any of the keys in our object is the complement to the current number
//     // if so, return true
//     if (seenNumbers[complement]) return true;
//     // save the current number as the key on our object so we can check it later against other numbers
//     seenNumbers[number] = true;
//   }
//   // if we reach the end of the array, return false
//   return false;
// }
function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here

  //run time : 0(n^2)
    Space : O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
