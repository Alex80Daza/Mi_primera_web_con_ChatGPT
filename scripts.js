// Este código se encargará de validar y enviar el formulario.

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
  
      // Realiza la validación aquí, por ejemplo, verifica si los campos no están vacíos.
      if (nombre.trim() === "" || email.trim() === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return;
      }
  
      // Si los campos están completos, puedes enviar el formulario o realizar otras acciones.
      // En este ejemplo, mostraremos un mensaje de éxito.
      alert("Formulario enviado con éxito. Gracias por tu interés en viajar a Colombia.");
    });
  });
  
