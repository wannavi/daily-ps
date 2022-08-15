/**
 * @param {string} newId
 */
function solution(newId) {
  const charRegex = /[^\w-_.]/g;
  const multipleDotRegex = /\.+/g;
  const startOrEndDotRegex = /^\.|\.$/g;
  const emptyRegex = /^$/;

  return newId
    .toLowerCase()
    .replace(charRegex, "")
    .replace(multipleDotRegex, ".")
    .replace(startOrEndDotRegex, "")
    .replace(emptyRegex, "a")
    .match(/^.{0,14}[^.]/)[0]
    .replace(/^(.)$/, "$1$1$1")
    .replace(/^(.)(.)$/, "$1$2$2");
}
