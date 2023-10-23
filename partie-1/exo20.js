function firstChar(str) {
  str = str.trim();
  return str[0] ? str[0] : "";
}

const firstCharacter = firstChar(" Rosa Parks ");
console.log(firstCharacter);