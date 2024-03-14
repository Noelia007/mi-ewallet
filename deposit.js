// Obtener referencias a los elementos del formulario
const formDeposito = document.getElementById('deposit-form');
const alertaDeposito = document.getElementById('alerta-deposito');

// Evento al enviar el formulario
formDeposito.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir que el formulario se envíe por defecto

  // Simular un proceso de depósito (reemplaza con tu lógica real)
  setTimeout(() => {
    // Mostrar la alerta
    alertaDeposito.classList.remove('d-none');
  }, 1000); // Simula un tiempo de espera
});