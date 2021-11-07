/**
 * Calculator Class
 */
class Calculator {
  constructor (value = 0) {
    this.value = value
    this.stack = []
  }

  push (value) {
    this.stack.push(value)
  }

  add () {
    this.value += this.stack.reduce((total, current) => {
      return total + current
    }, 0)

    this.stack = []

    return this.value
  }

  mul () {
    // "sums the stack" then multiplies by the sum...
    this.value *= this.stack.reduce((total, current) => {
      return total + current
    }, 0)

    this.stack = []

    return this.value
  }

  get () {
    return this.value
  }
}

export default Calculator
