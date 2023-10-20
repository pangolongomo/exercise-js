function findDaysInMonth(month) {
  const year = 2011;
  if (month < 1 && month > 12) return "Invalid month";
  else if (month === 2)
    return (!(year % 4) && year % 100) || !(year % 400) ? "29 days" : "28 days";
  else if (month === 4 || month === 6 || month === 9 || month === 11)
    return "30 days";
  else return "31 days";
}

const numberOfDaysInAMonth = findDaysInMonth(2);
console.log(numberOfDaysInAMonth);
