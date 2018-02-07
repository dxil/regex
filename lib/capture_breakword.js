module.exports = function (str) {
  // TODO
  let match = str.match(/\bx\b=(\b\d+\b)/)
  return match ? match[1] : null
}