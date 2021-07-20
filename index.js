const capitalize = (a) => {
  return a;
};

const reverseString = (a) => {
  return a.split('').reverse().join('');
};

const caesarCipher = (message, key) => {
  if (key === 0) return message;

  let decryptMsg = '';
  message.toLowerCase();

  for (let i = 0; i < message.length; i++) {
    if (message.charCodeAt(i) === 32) {
      decryptMsg += ' ';
    } else {
      decryptMsg += String.fromCharCode(
        ((message.charCodeAt(i) - 97 + key) % 26) + 97
      );
    }
  }

  return decryptMsg.replace(/W/g, '');
};

const arrayAnalyzer = (a) => {
  const arrayInfo = {}
  if (a.length === 0) a

  arrayInfo.average = a.reduce((a, b) => a + b, 0) / 2;
  arrayInfo.min = Math.min(...a);
  arrayInfo.max = Math.max(...a);
  arrayInfo.length = a.length;

  return arrayInfo;
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

console.log(arrayAnalyzer([1,2,3,4,5]))

export { capitalize, reverseString, caesarCipher, arrayAnalyzer, calculator };
