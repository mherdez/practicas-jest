// const palindrome = (texto) => {
// 	let nuevoTexto = '';

// 	for (let i = 0; i < texto.length; i++) {
// 		nuevoTexto = texto[i] + nuevoTexto;
// 	}

// 	return nuevoTexto === texto;
// };

// export const palindrome = (texto) =>
// 	texto.split('').reverse().join('') === texto;

export const palindrome = (texto) =>
  texto
    .split('')
    .reverse()
    .join('')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[ \u0300-\u036f\s,:.]+/g, '')
    .trim() ===
  texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f \s,:.]+/g, '')
    .trim();
