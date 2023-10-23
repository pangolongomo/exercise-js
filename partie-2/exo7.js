function evalNumbers(num1, num2, operation) {
  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "modulus":
      result = num1 % num2;
      break;
    default:
      result = "Invalid operation";
  }
  console.log(result);
}

const calculate = evalNumbers(11, 10, "modulus");

console.log(calculate);
