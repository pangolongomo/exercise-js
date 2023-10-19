function treeParameters() {
  let text = "";
  for (let i = 0; i < arguments.length; i++) {
    text += arguments[i];
  }
  return text.length > 100
    ? "C'est une grande phrase"
    : "C'est une grande phrase";
}

treeParameters("a", "b", "c");
