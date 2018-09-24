/* global describe, test, expect */
require('jest');

const numberCounter = require('./index');


describe('Input number', function () {
  test('input one number from the list', () => {
    let number = new numberCounter(9);
    expect(number.spelled()).toBe('nove');
  });
	test('input one number from the list', () => {
		let number = new numberCounter(12);
		expect(number.spelled()).toBe('doze');
	});
	test('input one number from the list', () => {
		let number = new numberCounter(300);
		expect(number.spelled()).toBe('trezentos');
	});
	test('input one number from outside the list', () => {
		let number = new numberCounter(999);
		expect(number.spelled()).toBe('novecentos e noventa e nove');
	});
	test('input one number from outside the list', () => {
		let number = new numberCounter(333);
		expect(number.spelled()).toBe('trezentos e trinta e três');
	});

});