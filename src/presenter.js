import mostrarPrimos from "./Factores_Primos";

const num_factores_primos = document.querySelector("#num-primos");
const form = document.querySelector("#factores-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const num = Number.parseInt(num_factores_primos.value);
  div.innerHTML = "<p> Factores del " + num + ": " + JSON.stringify(mostrarPrimos(num)) + "</p>";
});
