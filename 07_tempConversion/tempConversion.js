const ftoc = function (fTemp) {
  //prettier-ignore
  return Number(((fTemp - 32) * 5 / 9).toFixed(1))
}
console.log(ftoc(100))
const ctof = function (cTemp) {
  //prettier-ignore
  return Number(((cTemp * 9 / 5) + 32).toFixed(1))
}
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
}
