// --- Globals ---
import { $, render, template, html } from "../utils/globals.js";

// --- Imported views ---
import { viewLogin } from "./viewLogin.js";

// --- View definition ---
export function viewWelcome() {
  template(html`
    <h1>Aplicación Sum Flow (SPA Modular con globals.js)</h1>
    <p>Bienvenido/a. Pulsa para continuar al login.</p>
    <button id="btnStart">Continuar</button>
  `);

  $("#btnStart")?.addEventListener("click", () => render(viewLogin));
}
