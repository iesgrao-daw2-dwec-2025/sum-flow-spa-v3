// --- Globals ---
import { $, render, template, html } from "../utils/globals.js";

// --- Imported views ---
import { viewLogin } from "./viewLogin.js";

// --- View definition ---
export function viewSebas() {
  template(html`
    <h1>Que cenar hoy?</h1>
    <select>
      <option>ensalada</option>
      <option>ensalada</option>
      <option>ensalada</option>
      <option>ensalada</option>
      <option>ensalada</option>
      <option>ensalada</option>
    </select>
    <br />
    <button id="btnAceptar">Aceptar</button>
    <button id="btnRetry">Volver al login</button>
  `);

  $("#btnAceptar")?.addEventListener("click", () => {
    alert("WOW gran eleccion!!!!!");
  });
  $("#btnRetry")?.addEventListener("click", () => render(viewLogin));
}
