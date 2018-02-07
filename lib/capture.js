module.exports = function (str) {
  // TODO
  let match = str.match(/x=(\d+)/)
  return match ? match[1] : null
}