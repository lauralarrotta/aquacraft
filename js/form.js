document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Configura los parámetros para enviar
    const templateParams = {
      from_name: nombre,
      from_email: email,
      message: mensaje,
    };

    emailjs.send("service_8wx3khg", "template_93948pf", templateParams).then(
      function (response) {
        alert("Correo enviado con éxito!", response.status, response.text);
        alert("¡Tu mensaje ha sido enviado correctamente!");

        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.log("Error al enviar el correo...", error);
        alert("Hubo un error al enviar el mensaje, inténtalo más tarde.");
      }
    );
  });
