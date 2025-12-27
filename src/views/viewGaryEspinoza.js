import {
  $,
  render,
  html,
  KEY,
  randInt,
  toggleHidden,
  clearElement,
  app,
  template
} from '../utils/globals.js'
import { viewDashboard } from './viewDashboard.js'

export function viewGaryEspinoza () {
  template(html`
    <h1>Vista Gary_</h1>
    <div>
      <span> [Instrucciones]</span>
      <button
        id="btnInstrucciones"
        style="display: inline !important; width: auto !important;"
      >
        Mostrar
      </button>
      <p id="instrucciones" class="notice hidden">
        numero generado aleatoriamente entre 1 -5, debes adivinar el numero: 3
        intentos
      </p>
      <span>Ingresa el numero a adivinar:</span>
      <input id="number" type="number" placeholder="numero" />

      <input id="btnComprobar" type="button" value="Comprobar si ganaste !" />
      <p id="resultado"></p>
      <button id="back"><< Back</button>
      <button id="btnReset">Otra Intento</button>
    </div>
  `)

  const btnback = $('#back')
  const btnInstrucciones = $('#btnInstrucciones')
  const instrucciones = $('#instrucciones')
  const btnComprobar = $('#btnComprobar')
  const number = $('#number')
  const resultado = $('#resultado')
  const btnReset = $('#btnReset')
  let intento = 0
  let maxintento = 3
  let numAle = randInt(1, 5)

  btnback?.addEventListener('click', () => {
    render(viewDashboard)
  })

  btnInstrucciones?.addEventListener('click', () => {
    toggleHidden(instrucciones)
  })

  btnComprobar?.addEventListener('click', () => {
    if (number.value === "") {
      resultado.textContent = `Debes ingresar un numero`
      return
    }
    const numero = Number(number.value)
    if (numero < 1 || numero > 5 || isNaN(numero)) {
      resultado.textContent = `El numero debe ser de 1 a 5`
      return
    }

    intento++

    if (intento < maxintento) {
      if (numero === numAle) {
        resultado.textContent = `Felicidades lo lograste en el intento ${intento}`
        btnComprobar.disabled = true
      } else {
        resultado.textContent = `Numero equivocado. Intento nro:  ${intento}`
      }
    }
    if (intento >= maxintento) {
      btnComprobar.disabled = true
      resultado.textContent = `Ya excedio los intentos: ${intento} Perdiste - Intentalo otra vez !`
    }
  })

  btnReset?.addEventListener('click', () => {
    btnComprobar.disabled = false
    clearElement(resultado)
    number.value = ''
    intento = 0
    numAle = randInt(1, 5)
  })
}
