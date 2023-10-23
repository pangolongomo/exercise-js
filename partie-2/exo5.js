function findTriangleType(sides) {
  if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return "equilateral";
  } else if (
    sides[0] !== sides[1] &&
    sides[1] !== sides[2] &&
    sides[0] !== sides[2]
  ) {
    return "scalene";
  } else {
    return "isoscele";
  }
}

const triangleType = findTriangleType([12, 17, 18]);

console.log(triangleType);
