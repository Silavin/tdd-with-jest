// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

function sumOfArray(array) {
  return array.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
  });
}
function highestNumberInArray(array) {
  const value = Math.max(...array);
  return value;
}
function lowestNumberInArray(array) {
  const value = Math.min(...array);
  return value;
}

const sumWithoutHighestAndLowest = array => {
  return (
    sumOfArray(array) - highestNumberInArray(array) - lowestNumberInArray(array)
  );
};

module.exports = {
  sumWithoutHighestAndLowest,
  lowestNumberInArray,
  highestNumberInArray,
  sumOfArray
};
