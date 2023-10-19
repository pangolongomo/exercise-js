function indexOfIgnoreCase(text, str) {
  return text.toLowerCase().indexOf(str.toLowerCase());
}

console.log(indexOfIgnoreCase("bit", "it"));
console.log(indexOfIgnoreCase("bit", "IT"));
