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

  it("Should add and multiply numbers", function () {
    let c = new Calculator(10);

    c.push(5);
    c.add();
    expect(c.get()).toBe(15);

    c.push(2);
    c.mul();
    expect(c.get()).toBe(30);
  });
});