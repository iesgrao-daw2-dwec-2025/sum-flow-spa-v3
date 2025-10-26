// --- Globals ---
import { $, render, template, KEY } from "../utils/globals.js";

// --- Imported views ---
import { viewDashboard } from "./viewDashboard.js";
import { viewLogin } from "./viewLogin.js";

// --- View definition ---
export function viewSummary() {
  const vals = JSON.parse(localStorage.getItem(KEY) || "[]");
  const sum = vals.reduce((a, b) => a + b, 0);

  template(`
    <h1>Resumen</h1>
    <p>${
      vals.length > 0
        ? `Resultado: ${vals.join(" + ")} = ${sum}`
        : "No hay datos disponibles."
    }</p>
    <div>
      <button id="btnBack">Volver</button>
      <button id="btnExit">Salir</button>
    </div>
  `);

  $("#btnBack")?.addEventListener("click", () => render(viewDashboard));
  $("#btnExit")?.addEventListener("click", () => {
    localStorage.removeItem(KEY);
    render(viewLogin);
  });
}
