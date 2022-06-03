import { palindrome } from '../src/palindrome';

describe('Test Palindrome.js', () => {
	// PALABRA PALINDROME
	test('Debe mostrar true si recibe un palindrome', () => {
		const expected = palindrome('otto');
		const result = true;
		expect(expected).toBe(result);
	});

	// NO PALINDROME
	test('Debe mostrar false si recibe un texto no palindrome', () => {
		const expected = palindrome('hola');
		const result = false;
		expect(expected).toBe(result);
	});
});
