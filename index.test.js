import { capitalize, reverseString, calculator, caesarCipher, arrayAnalyzer } from './index';

test('first letter of string is capitalized', () => {
  expect(capitalize('Hello')).toMatch(/^[A-Z][a-z0-9_-]{3,19}$/);
});

test('string is reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('calculator operations are accurate', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.subtract(4, 2)).toBe(2);
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.divide(4, 2)).toBe(2);
})

test('decrypt a message using the caesar cipher', () => {
  expect(caesarCipher('Hello how are you', 1)).toBe('Ifmmp ipx bsf zpv')
  expect(caesarCipher('today is a bright and sunny day', 3)).toBe('wrgdb lv d euljkw dqg vxqqb gdb')
})

test('analyzes stats of an array', () => {
  expect(arrayAnalyzer([1,2,3,4,5])).toStrictEqual({ length: 5, max: 5, min: 1, average: 7.5 })
})