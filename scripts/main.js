// 1- Que al hacer submit en el form se genere un div con clase "mensaje" y se anexe dentro de #wall
// 2- Si no existe, agregar un input de tipo texto al form y modificar el script para que ese texto se incluya en un párrafo adentro de cada nuevo .mensaje 
// 2.1- Evitar que el input quede vacío.

// 3- Si no existe, agregar un input de tipo color al form y modificar el script para que el texto del nuevo .mensaje sea del color seleccionado 

// 4- Agregar una X dentro de un span con clase "close" en cada .mensaje nuevo para agregar la funcionalidad de eliminar ese graffiti
// 5- Agregar un input de tipo checkbox al form y modificar el script para que el .mensaje tenga la clase .poster en lugar de .graffiti 

const form = document.querySelector('form');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    handleSubmit("#wall")
});

const div = document.querySelector('#wall')

div.addEventListener('click', (event) => {
    event.preventDefault();

    console.log({event})
    if(event.target.className == "close")
    {
        let parentDiv = event.target.parentNode
        //parentDiv.parentNode.removeChild(parentDiv)
        div.removeChild(parentDiv)
    }
})


function handleSubmit(id){

    let wallID = document.querySelector(id)
    let newDiv = document.createElement("div");

    let Check = document.querySelector("input[type='checkbox']")

    newDiv.classList.add("mensaje");

    Check.checked ? newDiv.classList.add("poster") : newDiv.classList.add("graffiti")

    let text = document.getElementById("text-wall");
    let color = document.getElementById("color-text-wall");
    let shadow = document.getElementById("color-shadow-wall")
    let sizeT = document.getElementById("size-text-wall")
    let colorP = document.getElementById("color-poster-wall")

    newDiv.innerHTML = `
    <span class="close">&times;</span>
    <p>${text.value}</p>
    `
    newDiv.style.color = color.value
    newDiv.style.textShadow = `3px 3px ${shadow.value}`
    newDiv.style.fontSize = sizeT.value+"px";
    newDiv.style.backgroundColor = colorP.value;
    
    wallID.appendChild(newDiv);
 
    // BONUS- Al hacer submit, los inputs del formulario deben volver a los valores iniciales
    form.reset();
}



