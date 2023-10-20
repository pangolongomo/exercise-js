function normalize(date) {
  return date.replaceAll("-", "/");
}
const date = normalize("20-05-2017");
console.log(date);
