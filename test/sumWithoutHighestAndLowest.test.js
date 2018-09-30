const {
  sumWithoutHighestAndLowest,
  lowestNumberInArray,
  highestNumberInArray,
  sumOfArray
} = require("../src/sumWithoutHighestAndLowest.js");

// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

// test cases
let sampleArray;
let sampleArray2;
beforeEach(() => {
  sampleArray = [6, 2, 1, 8, 10];
  sampleArray2 = [1, 1, 11, 2, 3];
});
describe("Sum Of Array", () => {
  it("should give the sum of an array", () => {
    expect(sumOfArray(sampleArray)).toEqual(27);
    expect(sumOfArray(sampleArray2)).toEqual(18);
  });
  it("should give the max number of an array", () => {
    expect(highestNumberInArray(sampleArray)).toEqual(10);
    expect(highestNumberInArray(sampleArray2)).toEqual(11);
  });
  it("should give the min number of an array", () => {
    expect(lowestNumberInArray(sampleArray)).toEqual(1);
    expect(lowestNumberInArray(sampleArray2)).toEqual(1);
  });
  it("should give the sum of an array exluding the highest and lowest values", () => {
    expect(sumWithoutHighestAndLowest(sampleArray)).toEqual(16);
    expect(sumWithoutHighestAndLowest(sampleArray2)).toEqual(6);
  });
});
