/** @format */

const {
	stringLength,
	reverseString,
	Calculator,
	capitalize,
} = require('./script.js');

test('count length of the string', () => {
	expect(stringLength('hi mhd')).toBe(6);
});

test('check empty string', () => {
	expect(stringLength('')).toBe('Empty String');
});

test('check longer than 10', () => {
	expect(stringLength('hello mohammed hussen')).toBe('Long String');
});

test('check reverse string', () => {
	expect(reverseString('hello')).toBe('olleh');
});

describe('Calculator ', () => {
	const calculator = new Calculator();
	describe('Add Two Numbers', () => {
		test('Test 1', () => expect(calculator.add(10, 5)).toEqual(15));
		test('Test 2', () => expect(calculator.add(20, 10)).toEqual(30));
		test('Test 3', () => expect(calculator.add(30, 15)).toEqual(45));
	});

	describe('Difference of Two Numbers', () => {
		test('Test 1', () => expect(calculator.sub(10, 5)).toEqual(5));
		test('Test 2', () => expect(calculator.sub(20, 10)).toEqual(10));
		test('Test 3', () => expect(calculator.sub(30, 15)).toEqual(15));
	});

	describe('Multiply Two Numbers', () => {
		test('Test 1', () => expect(calculator.mult(10, 5)).toEqual(50));
		test('Test 2', () => expect(calculator.mult(20, 10)).toEqual(200));
		test('Test 3', () => expect(calculator.mult(30, 15)).toEqual(450));
	});

	describe('Divide Numbers', () => {
		test('Test 1', () => expect(calculator.div(10, 5)).toEqual(2));
		test('Test 2', () => expect(calculator.div(20, 10)).toEqual(2));
		test('Test 3', () => expect(calculator.div(30, 15)).toEqual(2));
	});
});

test('check capitalize string', () => {
	expect(capitalize('software programmers')).toBe('Software Programmers');
});
