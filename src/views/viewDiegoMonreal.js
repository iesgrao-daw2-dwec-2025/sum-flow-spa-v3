import { render, $, template, html } from "../utils/globals.js";

import { viewLogin } from "./viewLogin.js";

export function viewDiegoMonreal() {
  template(html`
    <h1>Calculadora Diego</h1>

    <input placeholder="Número 1" id="num1" />

    <select id="operate">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>

    <input placeholder="Número 2" id="num2" />

    <button id="btnCalcule">¡Calcular!</button>

    <p id="result">Resultado:</p>

    <button id="btnBack">Volver</button>
  `);

  $("#btnCalcule")?.addEventListener("click", () => {
    const num1 = Number($("#num1")?.value);
    const num2 = Number($("#num2")?.value);
    const operate = $("#operate")?.value;
    let result;

    switch (operate) {
      case "+":
        result = num1 + num2;

        break;
      case "-":
        result = num1 - num2;

        break;
      case "/":
        result = num1 / num2;

        break;
      case "*":
        result = num1 * num2;

        break;
      default:
        result = "Operación no válida";
        break;
    }

    $("#result").textContent = `Resultado: ${result}`;
  });

  $("#btnBack")?.addEventListener("click", () => render(viewLogin));
}
