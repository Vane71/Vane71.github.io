
function enviarFormulario(event) {
    event.preventDefault(); 
    
    
    const nombre = document.getElementById('nombre').value;
    const codigoUDG = document.getElementById('codigoUDG').value;
    const materia = document.getElementById('materia').value;
    
    
    if (!nombre || !codigoUDG || !materia) {
      console.log('Por favor, complete todos los campos del formulario.');
      return;
    }
    
  const datosFormulario = {
    nombre,
    codigoUDG,
    materia
  };
    
   
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosFormulario)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta de la API:', data);

    
    document.getElementById('nombre').value = '';
    document.getElementById('codigoUDG').value = '';
    document.getElementById('materia').value = '';
  })
  .catch(error => {
    console.log('Error al enviar los datos:', error);
  });
    
  }
  
const formulario = document.getElementById('miFormulario');


formulario.addEventListener('submit', enviarFormulario);