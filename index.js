const capitalize = (a) => {
  return a;
};

const reverseString = (a) => {
  return a.split('').reverse().join('');
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
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

export { capitalize, reverseString, caesarCipher, calculator };
