module.exports = function (str) {
  // TODO
  let result = str.replace(/0x([A-Fa-f\d+])([A-Fa-f\d+])\n/g, '0x$1$2\\\\n')
  return result
}