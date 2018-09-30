const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

// write test cases to ensure firstNonConsecutiveNumber() works as expected

describe("NonConsectuiveNumbers", () => {
  it("should ", () => {
    expect(firstNonConsecutiveNumber([1, 3])).toEqual(3);
    expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toEqual(4);
    expect(firstNonConsecutiveNumber([-1, 0, 1, -10])).toEqual(-10);
    expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toEqual(null);
  });
});
