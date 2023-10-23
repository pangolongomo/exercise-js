function toCase(str) {
  return str.toLowerCase() + "-" + str.toUpperCase();
}

const combinedText = toCase("Mthatha");
console.log(combinedText);
