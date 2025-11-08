import { template, html } from "../utils/globals.js";

export function viewDiegoRomero() {
  template(html`
    <h1>Vista Diego — Números primos</h1>
    <div>
      <label for="primeNumber">Número:</label>
      <input id="primeNumber" type="number" placeholder="Ej. 7" min="1" />
    </div>
    <div>
      <button id="btnCheckPrime">Comprobar número primo</button>
      <button id="btnBack">Volver</button>
    </div>
    <pre id="output" style="white-space: pre-wrap; background:#f4f4f4; padding:10px; border-radius:5px;"></pre>    
  `);

  document.getElementById("btnCheckPrime").addEventListener("click", () => {
    const num = +document.getElementById("primeNumber").value;
    const output = document.getElementById("output");

    if (isNaN(num) || num < 1) {
      output.textContent = "Por favor, ingresa un número válido mayor que 0.";
      return;
    }

    let isPrime = true;

    //Bucle para comprobar si el número es primo.
    //Empezamos el bucle porq uno es divisible por todos
    //Luego, hacemos la raiz cuadrada del número para optimizar el bucle, es decir: Si un número no tiene divisores hasta su raíz cuadrada, no los tendrá nunca.
    //Comprobamos si el numero es divisible entre dos, si lo es, no es primo.
    if (num === 1) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
    }

    //comprobamos y mostramos el resultado con operador ternario: ? is true : is false
    output.textContent = isPrime
      ? `✅ ${num} es un número primo.`
      : `❌ ${num} NO es un número primo.`;
  });

  document.getElementById("btnBack").addEventListener("click", async () => {
    const { viewDashboard } = await import("./viewDashboard.js");
    viewDashboard();
  });
}
