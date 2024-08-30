function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // To store the numbers we've seen

  for (const number of array) {
    const complement = target - number; // The number we need to find

    // Check if the complement exists in the seen numbers
    if (seenNumbers.has(complement)) {
      return true; // We found a pair that adds up to the target
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  return false; // No pairs found that add up to the target
}

/* 
  Big O time complexity: O(n)
  - The function iterates through the array once, checking for complements in a Set.
  - This provides average constant time complexity for lookups.

  Big O space complexity: O(n)
  - In the worst case, we store all numbers in the Set.
*/

/* 
  Pseudocode:
  1. Initialize an empty Set called seenNumbers.
  2. For each number in the array:
     a. Calculate the complement (target - number).
     b. If the complement is in seenNumbers, return true.
     c. Add the current number to seenNumbers.
  3. If no pairs are found, return false.
*/

/*
  Explanation:
  - The function uses a Set to keep track of numbers we've seen as we iterate through the array.
  - For each number, we calculate its complement with respect to the target.
  - If the complement is in the Set, we return true, indicating a pair exists.
  - If we finish the loop without finding a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // Additional test cases
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 15, 3, 7], 17)); // 10 + 7

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 5)); // No elements

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 9)); // 4 + 5
}

module.exports = hasTargetSum;
