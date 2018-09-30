const fizzbuzz = require("../src/fizzbuzz");
describe("Fizzbuzz", () => {
  test("1 should return number 1", function() {
    expect(fizzbuzz(1)).toEqual(1);
  });

  it("should return fizz when divisible by 3", function() {
    expect(fizzbuzz(3)).toEqual("fizz");
  });
  it("should return buzz when divisible by 5", () => {
    expect(fizzbuzz(5)).toEqual("buzz");
  });
  it("should return fizzbuzz when divisible by 15", () => {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
    expect(fizzbuzz(30)).toEqual("fizzbuzz");
    expect(fizzbuzz(1500)).toEqual("fizzbuzz");
  });
});
