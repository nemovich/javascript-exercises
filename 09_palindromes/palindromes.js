const palindromes = function (str) {
  let word = str.replace(/[^\p{L}]/gu, '').toLowerCase()
  let reverseWord = word
    .split('')
    .reverse()
    .join('')
  return word === reverseWord
}
console.log(palindromes('ZZZZ car, a man, a maracaz.'))
console.log(palindromes('Racecar'))

// Do not edit below this line
module.exports = palindromes
