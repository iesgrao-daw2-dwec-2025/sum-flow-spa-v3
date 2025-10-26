// --- Globals ---
import {
  $,
  render,
  template,
  KEY,
  randInt,
  clearElement,
  toggleHidden,
} from "../utils/globals.js";

// --- Imported views ---
import { viewSummary } from "./viewSummary.js";
import { viewLogin } from "./viewLogin.js";

// --- View definition ---
export function viewDashboard() {
  template(`
    <h1>Panel principal</h1>
    <input id="numItems" type="number" min="1" placeholder="Número de ítems" />
    <div>
      <button id="btnGenerate">Generar</button>
      <button id="btnToggleInstructions">Mostrar instrucciones</button>
    </div>
    <p id="instructions" class="notice hidden">
      Introduce un número y genera ítems. Cada ítem muestra un número aleatorio entre 0 y 100.
    </p>
    <div id="items"></div>
    <div>
      <button id="btnContinue">Sumar</button>
      <button id="btnExit">Salir</button>
    </div>
  `);

  const itemsDiv = $("#items");
  const num = $("#numItems");
  const instructions = $("#instructions");

  $("#btnGenerate")?.addEventListener("click", () => {
    const n = Number(num?.value);
    if (!n || n < 1) return;
    clearElement(itemsDiv);
    const vals = [];
    for (let i = 0; i < n; i++) {
      const v = randInt(0, 100);
      vals.push(v);
      const d = document.createElement("div");
      d.className = "item";
      d.textContent = String(v);
      itemsDiv.appendChild(d);
    }
    localStorage.setItem(KEY, JSON.stringify(vals));
  });

  $("#btnToggleInstructions")?.addEventListener("click", () =>
    toggleHidden(instructions)
  );

  $("#btnContinue")?.addEventListener("click", () => render(viewSummary));

  $("#btnExit")?.addEventListener("click", () => {
    localStorage.removeItem(KEY);
    render(viewLogin);
  });
}
