function secondIndexOf(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    let a = true;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        a = false;
        break;
      }
    }
    if (a) count++;
    if (count === 2) return i;
  }
}

console.log(secondIndexOf("White Rabbit", "it"));
