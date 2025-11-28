import { viewDashboard } from "./viewDashboard";
import { template, html, render } from "../utils/globals.js";

export function viewRodrigoVillanueva() {
  template(
    html` <div>
        <h1>Vista Rodrigo-Exponenciadora</h1>
      </div>
      <div>
        <p>Valor:</p>
        <input type="number" placeholder="Ej 2" id="numero" />
        <p>Exponente:</p>
        <input type="number" placeholder="Ej 2" id="exponente" />
        <button id="calcular">Calcular</button>
        <button id="volver">Volver</button>
      </div>
      <div id="resultado_exponencial"></div>`
  );

  const numeroInput = document.getElementById("numero");
  const exponenteInput = document.getElementById("exponente");
  const calcularBtn = document.getElementById("calcular");
  const resultadoDiv = document.getElementById("resultado_exponencial");
  const volver = document.getElementById("volver");

  calcularBtn.addEventListener("click", () => {
    const base = parseFloat(numeroInput.value);
    const exponente = parseFloat(exponenteInput.value);

    if (isNaN(base) || isNaN(exponente)) {
      resultadoDiv.textContent =
        "Por favor, introduce números válidos en ambos campos.";
    } else {
      const resultado = base ** exponente;

      if (exponente > 0 && Number.isInteger(exponente)) {
        const multiplicaciones = new Array(exponente).fill(base);
        const textoMultiplicacion = multiplicaciones.join(" * ");
        resultadoDiv.textContent = `${textoMultiplicacion} = ${resultado}`;
      } else {
        resultadoDiv.textContent = `Resultado: ${resultado}`;
      }
    }
  });

  volver.addEventListener("click", function () {
    render(viewDashboard);
  });
}
