import Calculator from "../lib/calculator.js";

describe("Constructor Functions Exercise", function () {
  it("Should provide a Calculator function", function () {
    expect(typeof Calculator).toBe("function");
  });

  it("Should have prototype functions", function () {
    expect(typeof Calculator.prototype.add).toBe("function");
    expect(typeof Calculator.prototype.mul).toBe("function");
    expect(typeof Calculator.prototype.get).toBe("function");
  });
});