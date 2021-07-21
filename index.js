/**
 * @param {String} a - String to be evaluated
 * @returns {String} - unchanged sting to be evaluated
 */

const capitalize = (a) => {
  return a;
};

/**
 * @param {String} a - String to be evaluated
 * @returns {String} - Reverse of string passed in
 */

const reverseString = (a) => {
  return a.split('').reverse().join('');
};

/**
 * @param {String} message - Message to be encrypted
 * @param {Number} key - Number of shifts the cipher should work with
 * @returns {String} - Decrypted form of the message passed in
 */

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

/**
 * @param {Array} a - Array to be processed  
 * @returns {Object} - Object containing staistics about the array passed in
 */

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
