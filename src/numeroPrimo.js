export const esPrimo = (numero) => {
  if (!Number.isInteger(numero)) return false;
  if (numero < 2) return false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
};
