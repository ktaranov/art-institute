/**
 * Hi, it's just a code to make things spinning.
 *
 * Please DO NOT change this code, this code is only for testing purposes.
 *
 * Please take a look at the `task1.js` and `task2.js` files where the Homework should be done.
 */

function randomNum(from, to) {
  return Math.random() * (to - from) + from;
}

/**
 * Please Note:
 * The internal implementation of fizzle and boggle does not matter.
 * The implementation of V1 and V2 are the same,
 * the only difference - V2 is asynchronous.
 */

const V1 = {
  /**
   * Fizzle fn.
   * @param {number} a1 Any number.
   * @return {number} Some number.
   */
  fizzle(a1) {
    return a1 * 3.2
  },
  /**
   * Boggle fn.
   *
   * @param {number} a1 Any number.
   * @param {number} a2 Any number.
   * @return {number} Some number.
   */
  boggle(a1, a2) {
    return (a1 * 2.2 + a2 * 1.2) / (a2 - a1 + 2);
  }
};

const V2 = {
  /**
   * Fizzle async fn.
   * @param {number} a1
   * @param {Function} cb
   */
  fizzle(a1, cb) {
    setTimeout(() => {
      cb(a1 * 3.2);
    }, randomNum(10, 70));
  },
  /**
   * Boggle async fn.
   * @param {number} a1
   * @param {number} a2
   * @param {Function} cb
   */
  boggle(a1, a2, cb) {
    setTimeout(() => {
      cb((a1 * 2.2 + a2 * 1.2) / (a2 - a1 + 2));
    }, randomNum(10, 70));
  }
};

module.exports = { V1, V2 };
