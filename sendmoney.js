const botonAgregarContacto = document.querySelector('.agregar-contacto button');
const formularioContacto = document.querySelector('.formulario');

botonAgregarContacto.addEventListener('click', () => {
  formularioContacto.style.display = 'block';
});