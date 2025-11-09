import {template, html} from "../utils/globals.js";

export function viewDavidMartinez ()
{
    template(html`
        <h1>Juego de piedra papel o tijera</h1>
        <label for="opcion">Que eliges?</label>
        <input type="text" placeholder="Elige tu opcion" id="opcion">
        <button id="boton">Pulsa</button>
        <br>
        <p id="respuesta"></p>
        <br>
        <p id="resultado"></p>
        <br>
        <button id="boton2">Volver</button>
        `);

    const btn = document.getElementById("boton");
    const volver = document.getElementById("boton2");

    btn.addEventListener("click", () => {
        const opc = document.getElementById("opcion").value;
        const resp = document.getElementById("respuesta");
        const result = document.getElementById("resultado");

        let numeroJuego = Math.floor(Math.random() * 3) + 1;
        let maquina = "";
        let solucion = "";

        switch (numeroJuego)
        {
            case 1: maquina = "Piedra";
            break;
            case 2: maquina = "Papel";
            break;
            case 3: maquina = "Tijera";
        }

        if (opc == "Piedra")
        {
            if (maquina == "Tijera")
            {
                solucion = "Has ganado!!!";
            }
            else if(maquina == "Piedra")
            {
                solucion = "Empate";
            }
            else
            {
                solucion = "Has perdido";
            }
        }
        else if(opc == "Papel")
        {
            if (maquina == "Tijera")
            {
                solucion = "Has perdido";
            }
            else if(maquina == "Piedra")
            {
                solucion = "Has ganado!!!";
            }
            else
            {
                solucion = "Empate";
            }
        }
        else if (opc == "Tijera")
        {
            if (maquina == "Tijera")
            {
                solucion = "Empate";
            }
            else if(maquina == "Piedra")
            {
                solucion = "Has perdido";
            }
            else
            {
                solucion = "Has ganado!!!";
            }
        }
        else
        {
            solucion = "Eleccion no disponible";
        }

        resp.innerText = maquina;
        result.innerText = solucion;
    })

    volver.addEventListener("click", async () => {
        const {viewDashboard} = await import ("./viewDashboard.js");
        viewDashboard();
    })
}