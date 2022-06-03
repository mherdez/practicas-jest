import { factorial } from '../src/factorial';

describe('factorial.js', () => {
  //Primer test
  test('Debe mostrar 1 si recibe 1', () => {
    const expected = factorial(1);
    const result = 1;

    expect(expected).toBe(result);
  });

  //Segundo test
  test('Debe mostrar 6 si recibe 3', () => {
    const expected = factorial(3);
    const result = 6;

    expect(expected).toBe(result);
  });

  //Tercer test
  test('Debe mostrar 120 si recibe 5', () => {
    const expected = factorial(5);
    const result = 120;

    expect(expected).toBe(result);
  });
});
