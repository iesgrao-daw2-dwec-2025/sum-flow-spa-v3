// --- Globals ---
import { $, render, template } from "../utils/globals.js";

// --- Imported views ---
import { viewDashboard } from "./viewDashboard.js";
import { viewError } from "./viewError.js";
import { viewWelcome } from "./viewWelcome.js";

// --- View definition ---
export function viewLogin() {
  template(html`
    <h1>Acceso</h1>
    <input id="user" placeholder="Usuario" autocomplete="username" />
    <input
      id="pass"
      type="password"
      placeholder="Contraseña"
      autocomplete="current-password"
    />
    <button id="btnHome">Volver al inicio</button>
    <button id="btnLogin">Iniciar sesión</button>
  `);

  $("#btnLogin")?.addEventListener("click", () => {
    const u = $("#user")?.value.trim();
    const p = $("#pass")?.value.trim();
    if (u === "admin" && p === "1234") render(viewDashboard);
    else render(viewError);
  });

  $("#btnHome")?.addEventListener("click", () => render(viewWelcome));
}
