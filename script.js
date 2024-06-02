const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const navLinks = document.querySelectorAll(".nav-list li a");
const body = document.body;

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    body.classList.add("no-scroll");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    body.classList.remove("no-scroll");
});

// Añadir evento de clic a cada enlace de navegación
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("visible");
        body.classList.remove("no-scroll");
    });
});
