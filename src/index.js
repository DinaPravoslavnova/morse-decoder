const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const encodedArray = [];

  const encodedLength = expr.length / 10;
  for (let i = 0; i < encodedLength; i++) {
    encodedArray[i] = expr.substring(i * 10, (i + 1) * 10);
  }

  const encodedArraySlacedZero = encodedArray.map((item) => {
    let slaced = 0;

    for (let i = 0; i < 10; i = i + 2) {
      if (item[i] === '0' && item[i + 1] === '0') {
        slaced += 2;
      }
    }

    return item.slice(slaced);
  });

  const morseArray = [];
  encodedArraySlacedZero.forEach((item) => {
    let morseCode = '';
    if (item[0] === '*') {
      morseArray.push(' ');
    } else {
      for (i = 1; i < item.length; i = i + 2) {
        if (item[i] === '0') {
          morseCode += '.';
        } else {
          morseCode += '-';
        }
      }
      morseArray.push(morseCode);
    }
  });

  let result = '';

  for (let i = 0; i < morseArray.length; i++) {
    result += morseArray[i] === ' ' ? ' ' : MORSE_TABLE[morseArray[i]];
  }

  return result;
}

module.exports = {
  decode,
};
