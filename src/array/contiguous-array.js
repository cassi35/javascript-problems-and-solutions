/**
 * Max Contiguous Array with Equal Number of 0 and 1
 *
 * Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
 *
 * Example 1:
 *
 * Input: [0,1]
 * Output: 2
 *
 * Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
 *
 * Example 2:
 *
 * Input: [0,1,0]
 * Output: 2
 *
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 *
 * Note: The length of the given binary array will not exceed 50,000.
 */
console.clear()
const findMaxLength = nums => {
  const map = new Map(); // Para rastrear somas acumuladas
  map.set(0, -1); // Soma inicial como 0 no índice -1
  let maxLength = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1; // Converte 0 para -1 e mantém 1 como está

    if (map.has(sum)) {
      maxLength = Math.max(maxLength, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return maxLength;
};

// Exemplos
console.log(findMaxLength([0, 1])); // ➞ 2
console.log(findMaxLength([0, 1, 0])); // ➞ 2
console.log(findMaxLength([0, 1, 1, 0, 1, 1, 0, 0])); // ➞ 6
