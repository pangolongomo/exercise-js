function findTriangleType(sides) {
  let count = 0;
  while (true) {
    const len = sides.length;

    if (len === 0) break;
    for (let i = 0; i < len; i++) {
      if (sides[0] === sides[i] && i !== 0) {
        count++;
      }
    }
    if (count === 2) break;
    sides.shift();
  }
  if (!count) {
    return "scalene";
  } else if (count === 1) {
    return "isosceles";
  } else {
    return "equilateral";
  }
}

console.log(findTriangleType([12, 17, 18]));
