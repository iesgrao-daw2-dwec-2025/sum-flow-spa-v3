import { template, html } from "../utils/globals.js";

export function viewIzanMontalba() {
  template(html`
    <h1>Vista Izan — Figuras con Puntos</h1>

    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
      <button id="btnTriangle">Triángulo</button>
      <button id="btnSquare">Cuadrado</button>
      <button id="btnPyramid">Pirámide</button>
      <button id="btnBack">Volver</button>
    </div>

    <pre id="output" style="
      white-space: pre-wrap;
      background:#f4f4f4;
      padding:10px;
      border-radius:5px;
      min-height:100px;
    "></pre>
  `);

  const output = document.getElementById("output");

  const makeTriangle = (size = 5) => {
    let s = "";
    for (let i = 1; i <= size; i++) {
      let line = "";
      for (let j = 0; j < i; j++) {
        line += ".";
      }
      s += line + "\n";
    }
    return s;
  };

  const makeSquare = (size = 5) => {
    let s = "";
    for (let i = 0; i < size; i++) {
      let line = "";
      for (let j = 0; j < size; j++) {
        line += ".";
      }
      s += line + "\n";
    }
    return s;
  };

  const makePyramid = (size = 5) => {
    let s = "";
    for (let i = 1; i <= size; i++) {
      let line = "";
      // Espacios a la izquierda
      for (let j = 0; j < size - i; j++) {
        line += " ";
      }
      // Puntos de la pirámide
      for (let k = 0; k < 2 * i - 1; k++) {
        line += ".";
      }
      s += line + "\n";
    }
    return s;
  };

  // --- Eventos de botones ---
  document.getElementById("btnTriangle").addEventListener("click", () => {
    output.innerText = makeTriangle(6);
  });

  document.getElementById("btnSquare").addEventListener("click", () => {
    output.innerText = makeSquare(6);
  });

  document.getElementById("btnPyramid").addEventListener("click", () => {
    output.innerText = makePyramid(6);
  });

  // --- Botón para volver al Dashboard ---
  document.getElementById("btnBack").addEventListener("click", async () => {
    const { viewDashboard } = await import("./viewDashboard.js");
    viewDashboard();
  });
}
