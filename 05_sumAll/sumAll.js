const sumAll = function (a, b) {
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
    return 'ERROR'

  let min = Math.min(a, b),
    max = Math.max(a, b)
  return ((max - min + 1) * (min + max)) / 2
}

// Do not edit below this line
module.exports = sumAll
