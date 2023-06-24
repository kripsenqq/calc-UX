function calculator(inputString) {
  const [a, operator, b] = inputString.split(' ');
  let num1 = a;
  let num2 = b;

  const objectAA = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10
  }


  if (!(num1 in objectAA) || !(num2 in objectAA)) {
    return "Invalid input";
  }

  num1 = objectAA[num1];
  num2 = objectAA[num2];

  if (isNaN(num1) || isNaN(num2)) {
      return "Invalid input";
  }

  let result = null;

  switch (operator) {
      case "+":
          result = sum(num1, num2);
          break;
      case "-":
          result = subtract(num1, num2);
          break;         
      case "*":
          result = multiply(num1, num2);
          break;
      case "/":
          result = divide(num1, num2);
          Math.floor(num1/num2);
          break;
      default:
          return "Invalid operator";
  }

  result = String(result);
  return result;

}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}


console.log(calculator("X / V"))