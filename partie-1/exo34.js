function animals(chickens, cows, pigs) {
  const legs = chickens * 2 + cows * 4 + pigs * 4;
  console.log(legs);
}

animals(2, 3, 5); //➞ 36

animals(1, 2, 3); //➞ 22

animals(5, 2, 8); //➞ 50
