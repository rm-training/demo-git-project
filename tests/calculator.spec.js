import Calculator from "../lib/calculator.js";

describe("Constructor Class", function () {
  it("Should provide a Calculator function", function () {
    expect(typeof Calculator).toBe("function");
  });

  it("Should have prototype functions", function () {
    expect(typeof Calculator.prototype.add).toBe("function");
    expect(typeof Calculator.prototype.mul).toBe("function");
    expect(typeof Calculator.prototype.get).toBe("function");
    expect(typeof Calculator.prototype.get).toBe("function");
  });

  it("Should default the initial value to zero", function () {
    let c1 = new Calculator(10);
    expect(c1.get()).toBe(10);

    let c2 = new Calculator();
    expect(c2.get()).toBe(0);
  });

  it("Should support multiplication of the current value", async function () {
    let c = new Calculator(10);

    c.push(5);
    await c.add();
    expect(c.get()).toBe(15);

    c.push(2);
    c.mul();
    expect(c.get()).toBe(30);
  });

  it("Should support division of the current value", async function () {
    let c = new Calculator(10);
    c.push(10);
    await c.add();
    expect(c.get()).toBe(20);

    c.push(2);
    c.div();
    expect(c.get()).toBe(10);
  });

  it("Should add the numbers before it multiplies", async function () {
    let d = new Calculator(10);
    d.push(2);
    d.push(3);
    d.mul();
    expect(d.get()).toBe(50);
  });

  it("Should support creation of unique instances", async function () {
    let c1 = new Calculator(10);
    let c2 = new Calculator(5);

    c1.push(2);
    c2.push(1);
    await c1.add();
    await c2.add();

    expect(c1.get()).toBe(12);
    expect(c2.get()).toBe(6);
  });

  it("Should be able to run example code", async function () {
    let c = new Calculator(5);
    c.push(5);
    c.push(10);
    await c.add();
    expect(c.get()).toBe(20);
  });
});