function treeParameters() {
  let text = "";
  for (let i = 0; i < arguments.length; i++) {
    text += arguments[i];
  }
  return text.length > 100
    ? "C'est une grande phrase"
    : "C'est une grande phrase";
}

const tree = treeParameters("a", "b", "c");

console.log(tree);
