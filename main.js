"use strict";

const btnClaroEscuro = document.querySelector(".botao-claro-escuro");
const pagina = document.body;

btnClaroEscuro.addEventListener("click", function () {
  pagina.classList.toggle("dark-mode");
});
