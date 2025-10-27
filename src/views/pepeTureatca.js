import { template, html } from "../utils/globals.js";

export function PepeTureatca() {
  // Estructura HTML
  template(html`
    <h1>Vista Pepe — Tablas de multiplicar</h1>

    <div>
      <label for="limiteInferior">Límite inferior:</label>
      <input id="limiteInferior" type="number" placeholder="Ej. 2" min="1" />
    </div>

    <div>
      <label for="limiteSuperior">Límite superior:</label>
      <input id="limiteSuperior" type="number" placeholder="Ej. 5" min="1" />
    </div>

    <div>
      <button id="btnCalcular">Mostrar tablas</button>
      <button id="btnVolver">Volver</button>
    </div>

    <pre id="resultado" style="white-space: pre-wrap; background:#f4f4f4; padding:10px; border-radius:5px;"></pre>
  `);

  document.getElementById("btnCalcular").addEventListener("click", () => {
    let inferior = +document.getElementById("limiteInferior").value;
    let superior = +document.getElementById("limiteSuperior").value;

    let salida = "";

    for (let i = inferior; i <= superior; i++) {
      salida += `Tabla del ${i}\n `;
      for (let j = 1; j <= 10; j++) {
        salida += `${i} × ${j} = ${i * j}\n`;
      }
      salida += "\n";
    }

    document.getElementById("resultado").innerText = salida;
  });

  // Botón para volver al Dashboard
  document.getElementById("btnVolver").addEventListener("click", async () => {
    const { viewDashboard } = await import("./viewDashboard.js");
    viewDashboard();
  });
}
