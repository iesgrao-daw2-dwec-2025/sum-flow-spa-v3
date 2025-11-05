import { template, html } from "../utils/globals.js";

export function viewPepeTureatca() {
  template(html`
    <h1>Vista Pepe — Tablas de multiplicar</h1>

    <div>
      <label for="lowerLimit">Límite inferior:</label>
      <input id="lowerLimit" type="number" placeholder="Ej. 2" min="1" />
    </div>

    <div>
      <label for="upperLimit">Límite superior:</label>
      <input id="upperLimit" type="number" placeholder="Ej. 5" min="1" />
    </div>

    <div>
      <button id="btnShowTables">Mostrar tablas</button>
      <button id="btnBack">Volver</button>
    </div>

    <pre id="output" style="white-space: pre-wrap; background:#f4f4f4; padding:10px; border-radius:5px;"></pre>
  `);

  document.getElementById("btnShowTables").addEventListener("click", () => {
    let lower = +document.getElementById("lowerLimit").value;
    let upper = +document.getElementById("upperLimit").value;

    let result = "";

    for (let i = lower; i <= upper; i++) {
      result += `Tabla del ${i}\n`;
      for (let j = 1; j <= 10; j++) {
        result += `${i} × ${j} = ${i * j}\n`;
      }
      result += "\n";
    }

    document.getElementById("output").innerText = result;
  });

  // Botón para volver al Dashboard
  document.getElementById("btnBack").addEventListener("click", async () => {
    const { viewDashboard } = await import("./viewDashboard.js");
    viewDashboard();
  });
}
