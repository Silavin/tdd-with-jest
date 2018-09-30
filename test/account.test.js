const account = require("../src/account");

describe("Account", () => {
  it("should be able to add to the current balance", () => {
    account.deposit(300);
    expect(account.getBalance()).toEqual(800);
    account.deposit(200);
    expect(account.getBalance()).toEqual(1000);
    account.deposit(500);
    expect(account.getBalance()).toEqual(1500);
  });
  it("should be able to deduct to the current balance", () => {
    account.withdraw(300);
    expect(account.getBalance()).toEqual(1200);
    account.withdraw(200);
    expect(account.getBalance()).toEqual(1000);
    account.withdraw(500);
    expect(account.getBalance()).toEqual(500);
  });
});
