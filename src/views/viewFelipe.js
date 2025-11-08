import { $, render, template, html, KEY } from "../utils/globals.js";

import { viewDashboard } from "./viewDashboard.js";
import {viewLogin} from "./viewLogin.js";

export function viewFelipe(){

    template (html `
        <h1>Vista de Felipe</h1>
        <hr>
        <p>Instrucciones:  Tendrás que insertar un texto y un numero, después de ello le tendrás que pulsar al boton de iniciar.</p>
        <p>Introduce el texto: </p>
        <input id ="inptString" placeholder="Ej. Hola">
        <p>Introduce el numero: </p>
        <input id ="inptNum" placeholder="Ej. 7">
        <p id="result"></p>
        <button id="btnResult">Iniciar</button>
        <br>
        <br>
        <hr>
        <button id="btnVolver">Volver al panel</button>
        <button id="btnLogOut">Log out</button>
    `)

    


    $("#btnResult")?.addEventListener("click", () =>{
        const result = $("#result");
        const text = $("#inptString").value;
        const number = parseInt($("#inptNum").value, 10);

        if (!text) {
            result.style.color = "red";
            result.innerText = "Introduce un texto valido, por favor.";
        }
        if (isNaN(number) || number <= 0) {
            result.style.color = "red";
            result.innerText = "Por favor, introduce un número positivo.";
            return;
        }

        result.style.color = "black";
        let temp = "";
        for (let i = 0; i < number; i++) {
            temp += `${i + 1}. ${text} \n`;
        }
        result.innerText = temp;
    })


    $("#btnVolver")?.addEventListener("click", () => render(viewDashboard));
    $("#btnLogOut")?.addEventListener("click", () => {
        localStorage.removeItem(KEY);
        render(viewLogin);
        });

}