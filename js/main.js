

//----------DECLARACIONES------------//


const minimo = 1;
const maximo = 10;
const lampara = 'lampara';
const soporte1 = 'soporte notebook';
const soporte2 = 'soporte celular';
const lapicero = 'lapicero';
let subtotal = 0;
let continuar;
let envio;
let tarjeta;
let cuotas;
let total = 0;


//--------------FUNCIONES-------------//

function tienda(producto, cantidad) {
    switch (producto) {
        case "lampara":
            return 5000 * cantidad;
        case "soporte notebook":
            return 2000 * cantidad;
        case "soporte celular":
            return 1500 * cantidad;
        case "lapicero":
            return 1000 * cantidad;
        case "default":
            return alert('producto no disponible');
    }
}


function interes(envio, cuotas) {
    switch (cuotas) {
        case 1:
            return (envio * 1) / cuotas;
        case 2:
            return (envio * 1) / cuotas;
        case 3:
            return (envio * 1) / cuotas;
        case 4:
            return (envio * 1.20) / cuotas;
        case 5:
            return (envio * 1.25) / cuotas;
        case 6:
            return (envio * 1.30) / cuotas;
        case 7:
            return (envio * 1.35) / cuotas;
        case 8:
            return (envio * 1.40) / cuotas;
        case 9:
            return (envio * 1.45) / cuotas;
        case 10:
            return (envio * 1.50) / cuotas;
        case 11:
            return (envio * 1.55) / cuotas;
        case 12:
            return (envio * 1.60) / cuotas;
        case "default":
            return alert('Cantidad no valida');
    }
}



//--------------PROYECTO TIENDA---------------//


do {
    let producto = prompt('Bienvenido a la tienda!' + '\n' + 'Seleccione producto:' + '\n'
        + '- Lampara | Precio: $5000' + '\n'
        + '- Soporte Notebook | Precio: $2000' + '\n'
        + '- Soporte Celular | Precio: $1500' + '\n'
        + '- Lapicero | Precio: $1000');
    let cantidad = +prompt('Ingrese la cantidad de unidades que desea comprar (maximo 10 unidades):');
    if (cantidad >= minimo && cantidad <= maximo) {
        subtotal = subtotal + tienda(producto, cantidad);
        continuar = prompt('Total: $ ' + subtotal + ' ¿Desea seguir agregando productos? si/no');
    } else {
        alert('Cantidad no valida');
    }
} while (continuar == 'si');

envio = prompt('¿Desea incluir envío a su domicilio? (envío gratis a partir de los $15000!) si/no');
if (envio == 'si' && subtotal < 15000) {
    envio = subtotal + 2500
} else {
    envio = subtotal + 0
}

tarjeta = prompt('Subtotal: $' + envio + '\n' + 'Seleccione medio de pago: efectivo/tarjeta');
if (tarjeta == 'tarjeta') {
    cuotas = +prompt('Ingrese la cantidad de cuotas (Hasta 12 cuotas | 3 sin interes!)');
    total = total + interes(envio, cuotas);
    alert('Costo total con envío: $' + total * cuotas + ' en ' + cuotas + ' cuotas de $' + total + '.');
} else { alert('Costo total con envío: $' + envio + ' pago en efectivo'); }