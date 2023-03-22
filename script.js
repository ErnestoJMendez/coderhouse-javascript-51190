let repeat = true;
function calcular() {
  let precioProducto;
  while (
    isNaN(precioProducto) ||
    precioProducto === ' ' ||
    precioProducto === ''
  ) {
    precioProducto = prompt('ingrese el precio del producto');
  }
  let cantCuotas;
  while (cantCuotas !== '3' && cantCuotas !== '6' && cantCuotas !== '12') {
    cantCuotas = prompt('ingrese cantidad de cuotas (3, 6 o 12)');
  }
  let int3Cuotas = 1.15;
  let int6Cutoas = 1.2;
  let int12Cuotas = 1.3;
  let resultado3 = precioProducto * int3Cuotas;
  let valorCuota3 = resultado3 / 3;
  let resultado6 = precioProducto * int6Cutoas;
  let valorCuota6 = resultado6 / 6;
  let resultado12 = precioProducto * int12Cuotas;
  let valorCuota12 = resultado12 / 12;
  let continuar = true;
  if (cantCuotas == 3) {
    alert(
      'El precio en efectivo es de $' +
        precioProducto +
        '. ' +
        'Para pago con tarjeta de credito el precio será de $' +
        resultado3 +
        ' a abonar en 3 cuotas de $' +
        valorCuota3
    );
  } else if (cantCuotas == 6) {
    alert(
      'El precio en efectivo es de $' +
        precioProducto +
        '. ' +
        'Para pago con tarjeta de credito el precio será de $' +
        resultado6 +
        ' a abonar en 6 cuotas de $' +
        valorCuota6
    );
  } else if (cantCuotas == 12) {
    alert(
      'El precio en efectivo es de $' +
        precioProducto +
        '. ' +
        'Para pago con tarjeta de credito el precio será de $' +
        resultado12 +
        ' a abonar en 12 cuotas de $' +
        valorCuota12
    );
  }
}
while (repeat) {
  calcular();
  repeat = confirm('Quieres calcular nuevamente?');
}
