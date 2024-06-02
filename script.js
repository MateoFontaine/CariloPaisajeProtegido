const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const navLinks = document.querySelectorAll(".nav-list li a");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Añadir evento de clic a cada enlace de navegación
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});
