/**
 * Calculator Class
 */
const summer = async (currentValue, stack) => {
  currentValue += stack.reduce((total, current) => {
    return total + current
  }, 0);
  return currentValue;
}
class Calculator {
  #value
  #stack = []

  constructor (value = 0) {
    this.#value = value
  }

  push (value) {
    this.#stack.push(value)
  }

  async add () {
    this.#value = await summer(this.#value, this.#stack);
    this.#stack = []
    return this.#value
  }

  mul () {
    // "sums the stack" then multiplies by the sum...
    this.#value *= this.#stack.reduce((total, current) => {
      return total + current
    }, 0)

    this.#stack = []

    return this.#value
  }

  div () {
    // "sums the stack" then divides by the sum...
    this.#value /= this.#stack.reduce((total, current) => {
      return total + current
    }, 0)

    this.#stack = []

    return this.#value
  }

  get () {
    return this.#value
  }
}

export default Calculator
