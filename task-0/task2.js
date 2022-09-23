const { V1, V2 } = require('./base');

// Use these function to implement `calculateV2`
const { fizzle, boggle } = V2;

// The Task:
// The same goal as in the first task, but the implementation logic is different.

// The interface of the functions
// V1:
//     fizzle(number): number
//     boggle(number, number): number
// V2:
//     fizzle(number, Callback): void
//     boggle(number, number, Callback): void

/**
 * Calculate for the sync API v1.
 * @param {number} input
 * @return {number}
 */
function calculateV1(input) {
  let qux = V1.fizzle(input);
  if (qux < input) qux += V1.boggle(input, qux);
  return qux;
}

/**
 * Calculate for the async API v2.
 * @param {number} input
 * @param {Function} cb
 * @return {void}
 */
function calculateV2(input, cb) {
  // Please use `fizzle` and `boggle` functions
  // to implement async version for API v2.
  // They are already exposed and ready to use.
}

module.exports = { calculateV1, calculateV2 };