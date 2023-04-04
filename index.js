const precio = document.querySelector('#precio');
const total = document.querySelector('#total');
const impuestos = document.querySelector('#impuestos');
const btn = document.querySelector('#btn');

function calcularBeneficio(precio) {
  const total =
    Math.round(((precio * 21) / 100 + precio) * 45) / 100 +
    ((precio * 21) / 100 + precio);
  return `${total.toFixed(2)} €`;
}

btn.addEventListener('click', () => {
  precio.value === ''
    ? alert('Tienes que introducir un precio válido')
    : (total.value = calcularBeneficio(Number(precio.value)));
});

precio.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    btn.click();
  }
});
