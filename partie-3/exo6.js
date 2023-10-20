const sumAndProduct = (arr) => {
  let sum = arr.reduce((a, b) => a + b);
  let product = arr.reduce((a, b) => a * b);
  return [sum, product];
};

const [sum, product] = sumAndProduct([1, 2, 3, 4, 5]);

console.log(sum, product);
