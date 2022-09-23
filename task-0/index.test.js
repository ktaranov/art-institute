const Task1 = require('./task1');
const Task2 = require('./task2');

describe('task 1', () => {
  [2.5, 2, 5.6, 10].forEach(t => {
    it(`with ${t} as input`, (cb) => {
      Task1.calculateV2(t, r => {
        expect(r).toBe(Task1.calculateV1(t));
        cb();
      });
    }, 200);
    // The error `Exceeded timeout of 200 ms for a test`
    // tells the async does not work, the tests are correct.
  });
});

describe('task 2', () => {
  [2.5, 2, 5.6, 10].forEach(t => {
    it(`with ${t} as input`, (cb) => {
      Task2.calculateV2(t, r => {
        expect(r).toBe(Task2.calculateV1(t));
        cb();
      });
    }, 200);
  })
});
