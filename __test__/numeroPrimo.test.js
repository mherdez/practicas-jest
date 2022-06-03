import { esPrimo } from '../src/numeroPrimo';

describe('numeroPrimo.js', () => {
  test('debe ser False si recibe un número menor que 2', () => {
    const expected = esPrimo(1);
    const result = false;

    expect(expected).toBe(result);
  });

  test('debe ser True si recibe un numero primo', () => {
    const expected = esPrimo(5);
    const result = true;

    expect(expected).toBe(result);
  });

  test('debe ser False si no recibe un numero primo', () => {
    const expected = esPrimo(10);
    const result = false;

    expect(expected).toBe(result);
  });

  test('debe ser False si no recibe un numero entero', () => {
    const expected = esPrimo(10.8);
    const result = false;

    expect(expected).toBe(result);
  });
});
