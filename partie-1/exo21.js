function indexOfIgnoreCase(text, str) {
  const index = text.toLowerCase().indexOf(str.toLowerCase());
  console.log(index);
}

indexOfIgnoreCase("bit", "it");
indexOfIgnoreCase("bit", "IT");
