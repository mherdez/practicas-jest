// export const factorial = (numero) => {
//   let factorial = 1;
//   for (let i = 1; i <= numero; i++) {
//     factorial *= i;
//   }
//   return factorial;
// };

export const factorial = (numero) =>
  numero === 0 ? 1 : numero * factorial(numero - 1);

console.log(factorial(5));
