function multiply(a) {
    return function executeMultiply(b) {
      return a * b;
    }
  }

const double = multiply(2);
console.log(double(100));