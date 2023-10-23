function shortcut() {
  const len = arguments.length;
  let acronym = "";
  for (let i = 0; i < len; i++) {
    acronym += arguments[i][0];
  }
  return acronym;
}

const acronym = shortcut("Amnesty", "International");
