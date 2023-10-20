function score(wins, draws, losses) {
  let points = wins * 3 + draws * 1 + losses * 0;
  console.log(points);
}

score(3, 4, 2);
