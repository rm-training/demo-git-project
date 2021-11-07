/**
 * Calculator Class
 */
class Calculator {
  #value
  #stack = []

  constructor (value = 0) {
    this.#value = value
  }

  push (value) {
    this.#stack.push(value)
  }

  add () {
    this.#value += this.#stack.reduce((total, current) => {
      return total + current
    }, 0)

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
