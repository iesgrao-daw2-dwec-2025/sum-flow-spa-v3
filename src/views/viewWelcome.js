// --- Globals ---
import { $, render, template, html } from "../utils/globals.js";

// --- Imported views ---
import { viewLogin } from "./viewLogin.js";

import { accionMarc } from "./viewMarc.js";

// --- View definition ---
export function viewWelcome() {
  template(html`
    <h1>Aplicación Sum Flow (SPA Modular con globals.js)</h1>
    <p>Bienvenido/a. Pulsa para continuar al login.</p>
    <button id="btnStart">Continuar</button>
    <button id="btnMarc">Botón Marc</button>
  `);

  $("#btnStart")?.addEventListener("click", () => render(viewLogin));

 // Nuevo botón comunicado con marc.js
  $("#btnMarc")?.addEventListener("click", () => { accionMarc(); 
  });
}