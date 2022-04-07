// 1- Capturar elemento del DOM
// const campo = document.getElementsByClassName("campo")[0]
const campo = document.querySelector(".campo")



// 2- Agregar un escuchador de eventos
// addEventListener recibe 2 parámetros: 
//  El primero un string definiendo el EVENTO a escuchar.
//  El segundo, la función a ejecutar cuando ocurra el evento definido. 
campo.addEventListener("click", (evento) => handleClick(evento))

function handleClick(e) {
  console.log({ target: e.target })
  if (e.target.style.backgroundColor === "red") {
    e.target.style.backgroundColor = "blueviolet"
  } else {
    e.target.style.backgroundColor = "red"
  }

  if (e.target.classList.contains("campo")) {
    e.target.style.backgroundColor = "blue"
  }
  if (e.target.id === "circulo-3") {
    e.target.style.backgroundColor = "orange"
  }
}

function saludar(nombre) {
  console.log(`Hola, ${nombre}`)
}

// ------------------------------------------------
// PLAYGROUND CON NUMEROS


const numeros = [5, 98, 3, 4, 10, 65, 77, 2, 60, 84, 12, 21, 65, 14]

const form = document.querySelector("form")


form.addEventListener("change", evento => handleForm(evento))

function handleForm(e) {
  let radioSeleccionado = ""

  let radios = form.querySelectorAll("input[type='radio']")

  radios.forEach(radio => {
    if (radio.checked) {
      radioSeleccionado = radio.value
    }
  })

  // Capturar checkboxes
  let checkboxes = form.querySelectorAll("input[type='checkbox']")
  // Filtra los seleccionados. Primero debemos convertir el NodeList a array para poder usar .filter()
  let arrayCheckboxes = Array.from(checkboxes)    
  let checkboxesSeleccionados = arrayCheckboxes.filter(checkbox => checkbox.checked)
  // Obtener los valores de los inputs seleccionados utilizando .map()
  let valoresSeleccionados = checkboxesSeleccionados.map(checkbox => checkbox.value)

  console.log({
    checkboxes,
    arrayCheckboxes,
    checkboxesSeleccionados,
    valoresSeleccionados
  })


  let select = form.querySelector("select")
  // console.log({ radioSeleccionado, optionSeleccionada: select.value })

  let filtradosPorParidad = filtrar(numeros, radioSeleccionado)
  let numerosFiltrados = filtrar(filtradosPorParidad, select.value)

  dibujarLista(numerosFiltrados, "lista-numeros")
}

function filtrar(array, seleccion) {
  let auxiliar = []
  if (seleccion === "mayores") {
    auxiliar = array.filter((numero) => {
      return numero > 10
    })
  }
  if (seleccion === "menores") {
    auxiliar = array.filter((numero) => {
      return numero < 10
    })
  }
  if (seleccion != "mayores" && seleccion != "menores") {
    auxiliar = array.filter((numero) => {
      return numero % 2 === parseInt(seleccion) || seleccion === "all"
    })
  }
  return auxiliar
}

function dibujarLista(array, idLista) {
  const listaNumeros = document.querySelector(`#${idLista}`)
  listaNumeros.innerHTML = ""

  array.forEach(numero => {
    let listItem = document.createElement("li")
    listItem.innerText = numero
    listaNumeros.appendChild(listItem)
  })

}

dibujarLista(numeros, "lista-numeros")