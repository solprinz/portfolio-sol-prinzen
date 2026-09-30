document.addEventListener("DOMContentLoaded", () => {
  // 1. HEADER DINÁMICO (Hide on Scroll Down / Show on Up)
  let lastScrollY = window.scrollY;
  const header = document.querySelector("header");
  const delta = 10;

  if (header) {
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) <= delta) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        header.classList.add("header-hidden");
      } else if (currentScrollY < lastScrollY) {
        header.classList.remove("header-hidden");
      }

      lastScrollY = currentScrollY;
    });
  }

  // 2. BOTÓN "VOLVER ARRIBA" (BACK TO TOP)
  const btnTop = document.getElementById("btn-top");

  if (btnTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btnTop.classList.remove("d-none");
      } else {
        btnTop.classList.add("d-none");
      }
    });

    btnTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 3. FILTRO DE PROYECTOS
  const botonesFiltro = document.querySelectorAll(".btn-filtro-proyecto");
  const columnasProyectos = document.querySelectorAll("[data-categoria]");

  botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
      botonesFiltro.forEach((btn) => btn.classList.remove("activo"));
      boton.classList.add("activo");

      const filtro = boton.dataset.filtro;

      columnasProyectos.forEach((columna) => {
        if (filtro === "ocultar") {
          columna.style.display = "none";
        } else if (filtro === "todos" || columna.dataset.categoria === filtro) {
          columna.style.display = "block";
        } else {
          columna.style.display = "none";
        }
      });
    });
  });

  // 4. ANIMACIÓN AL ENVIAR FORMULARIO DE CONTACTO
  const formContacto = document.querySelector('form[action*="formspree"]');

  if (formContacto) {
    formContacto.addEventListener("submit", function () {
      const btnSubmit = this.querySelector('button[type="submit"]');
      if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.innerHTML =
          '<i class="fa-solid fa-spinner fa-spin me-2"></i>Enviando...';
      }
    });
  }
});
