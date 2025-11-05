import { html, template } from "../utils/globals";

// --- marc.js ---
export function accionMarc() {
  template(html`
    <h1>Vista Suma de Números</h1>

    <div>
      <label for="num1">Numero 1:</label>
      <input id="num1" type="number" placeholder="ESCRIBE UN NUMERO" />
    </div>

    <div>
      <label for="num2">Numero 2:</label>
      <input id="num2" type="number" placeholder="ESCRIBE OTRO NUMERO" />
    </div>

    <div style="margin-top: 10px;">
      <button id="btnAddNumbers">Sumar</button>
      <button id="btnBack">Volver</button>
    </div>

    <p id="result"></p>
  `);

  document.getElementById("btnAddNumbers").addEventListener("click", () => {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const exit = document.getElementById("result");

    if (isNaN(n1) || isNaN(n2)) {
     exit.textContent = "PON NUMEROS.";
      return;
    }

    const sum = n1 + n2;
    exit.textContent = `La suma de ${n1} + ${n2} es = ${sum}`;
  });

 
  document.getElementById("btnBack").addEventListener("click", async () => {
    const { viewDashboard } = await import("./viewDashboard.js");
    viewDashboard();
  });
}
