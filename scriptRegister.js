document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input");

  const userInput = inputs[0];     // Primer input: usuario
  const passInput = inputs[1];     // Segundo input: contraseña

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // detenemos el envío de formulario

    const user = userInput.value.trim();
    const pass = passInput.value.trim();

    if (user === "admin" && pass === "admin") {
      // si quieres redirigir a otra pagina
      window.location.href = "index.html";
    } else {
     document.getElementById("errorMsg").textContent =
        "Por favor ingrese un nombre de usuario y contraseña correctos";
      document.getElementById("errorMsg").style.display = "block";
    }
  });
});
