const misteryNumber = 5;
const myNumber = 5;

const answer =
  misteryNumber === myNumber
    ? "Congratulations !"
    : misteryNumber > myNumber
    ? "+"
    : "-";

console.log(answer);
