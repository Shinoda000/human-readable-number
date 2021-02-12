module.exports = function toReadable (number) {
  if (String(number).length == 1) {
    if (number == 0) {
      return 'zero';
    } else {
      return ones[number];
    }
  } else if (String(number).length == 2) {
    if (number % 10 == 0) {
      return tens[number / 10];
    } else if (number > 10 && number < 20) {
      return elevenToNineteen[number];
    } else {
      return tens[Math.floor(number / 10)] + ' ' + ones[number % 10];
    }
  } else if (String(number).length == 3) {
    if (number %  100 == 0) {
      return ones[Math.floor(number / 100)] + ' hundred';
    }
    if (number % 100 % 10 == 0) {
      if (Math.floor(number % 100 < 10)) {
        return ones[Math.floor(number / 100)] + ' hundred' + ' ' +  ones[number % 100 % 10];
      } else if (Math.floor(number % 100 / 10) != 1) {
        return ones[Math.floor(number / 100)] + ' hundred' + ' ' + tens[Math.floor(number % 100 / 10)];
      } else if (Math.floor(number % 100) == 10) {
        return ones[Math.floor(number / 100)] + ' hundred' + ' ' + tens[Math.floor(number % 100 / 10)];
      } else {
        return ones[Math.floor(number / 100)] + ' hundred' + ' ' + elevenToNineteen[Math.floor(number % 100 / 10)];
      }
    } else {
      if (Math.floor(number % 100 < 10)) {
        return ones[Math.floor(number / 100)] + ' hundred' + ' ' + ones[number % 100 % 10];
      } else if (Math.floor(number % 100 / 10) != 1) {
        return ones[Math.floor(number / 100)] + ' hundred' + ' ' + tens[Math.floor(number % 100 / 10)] + ' ' + ones[number % 100 % 10];
      }  else if (Math.floor(number % 100) == 10) {
        return ones[Math.floor(number / 100)] + ' hundred' + ' ' + tens[Math.floor(number % 100 / 10)];
      }else {
        return ones[Math.floor(number / 100)] + ' hundred' + ' ' + elevenToNineteen[Math.floor(number % 100)];
      }
    }
  }
}

let ones = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
}

let tens = {
  0: '',
  1: 'ten',
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
}

let elevenToNineteen = {
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
}
