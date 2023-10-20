function onesDigit(number) {
  return number.toString().split("")[number.toString().length - 1];
}
const number = onesDigit(2674);

console.log(number);
