const { V1, V2 } = require('./base');

// Use these function to implement `calculateV2`
const { fizzle, boggle } = V2;

// The Task:
// You need to recreate 'calculateV1' function as an
// asynchronous (callback based) function with the name `calculateV2`

// Functions `fizzle` and `boggle` are already implemented
// It does not need to know the implementation of these function,
// the only interface is important.

// The async version of the function should have the exact same behavior as the sync
// version, aside from using a callback instead of return value.

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
  return V1.boggle(input, qux) + qux;
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