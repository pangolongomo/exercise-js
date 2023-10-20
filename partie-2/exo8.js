function checkLeapYear(year) {
  return (!(year % 4) && year % 100) || !(year % 400)
    ? "leap year"
    : "not a leap year";
}
console.log(checkLeapYear(1900));
