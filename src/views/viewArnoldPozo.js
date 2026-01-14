import { $, render, template, html, toggleHidden, clearElement } from "../utils/globals.js";

import { viewDashboard } from "./viewDashboard.js";

export function viewArnoldPozo() {
  template(html`
    <h1>Vista Arnold - Números primos</h1>
    <p id="instruct" class="notice hidden">
      Genera todos los números primos desde 1 hasta el número introducido
    </p>
    <input
      id="numIntrod"
      type="number"
      min="1"
      placeholder="Introduce un número"
    />
    <div id="items"></div>
    <div>
      <button id="btnGenerate">Generar lista</button>
      <button id="btnToggleInstructions">Mostrar instrucciones</button>
      <button id="exit">Volver</button>
    </div>
  `);

  const num = $("#numIntrod");
  const itemsDiv = $("#items");

  function esPrimo(num) {
    if (num === 2) return true;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  $("#btnGenerate")?.addEventListener("click", () => {
    const n = Number(num?.value);
    if (!n || n <= 1) return;
    clearElement(itemsDiv);

    for (let i = 2; i < n; i++) {
      if (esPrimo(i)) {
        const d = document.createElement("div");
        d.className = "item";
        d.textContent = String(i);
        itemsDiv.appendChild(d);
      }
    }
  });

  $("#exit")?.addEventListener("click", () => render(viewDashboard));

  $("#btnToggleInstructions")?.addEventListener("click", () => toggleHidden(instruct));

}
