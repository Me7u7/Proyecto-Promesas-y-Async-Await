// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (mesasSolicitadas <= mesasDisponibles) {
        resolve("Mesas disponibles");
    } else {
        reject("No hay suficientes mesas disponibles");
    }
    }, 2000);
});
}


function enviarConfirmacionReserva(nombreCliente) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    const exito = Math.random() < 0.8;  
    if (exito) {
        resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
    } else {
        reject("Error al enviar el correo de confirmación");
    }
    }, 1500);
});
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
try {
    console.log("Verificando disponibilidad de mesas...");
    await verificarDisponibilidad(mesasSolicitadas);
    console.log("Mesas disponibles. Enviando confirmación...");
    const mensaje = await enviarConfirmacionReserva(nombreCliente);
    console.log(mensaje);
} catch (error) {
    console.log("Error:"+ error+" para", nombreCliente);
}
}

hacerReserva("Juan Pérez", 3);  
hacerReserva("Akeri Espinoza", 1);  
hacerReserva("Usman Munshi", 1);
hacerReserva("Alondra Landeros", 5);
hacerReserva("Malen Mori", 6);
