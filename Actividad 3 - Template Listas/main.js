/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas-extended.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;                   // Asignar el JSON a la variable comidas
    mostrarComidasconForEach();
    actualiarFiltros();
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = [];

function lascomidas () {
  
for (let i = 0; i < comidas.length; i++) {

document.getElementById('comidaContainer').innerHTML +=
`
  <article class="card">
    <h2 class="nombrecomida">${comidas[i].nombre}</h2>
    <p class="lascategorías">${comidas[i].categoria}</p>
    <p class="laprovincia">${comidas[i].provincia}</p>
    <p class="losingredientes">Ingredientes: ${comidas[i].ingredientes}</p>
  </article>;
`
}
}

function mostrarComidasconForEach (listadodecomidas = comidas) {

  comidaContainer.innerHTML = "";

  listadodecomidas.forEach ( comida => {

  document.getElementById('comidaContainer').innerHTML +=
`
  <article class="card">
    <h2 class="nombrecomida">${comida.nombre}</h2>
    <p class="lascategorías">${comida.categoria}</p>
    <p class="laprovincia">${comida.provincia}</p>
    
    <div class="contenedorlistaingredientes">

    <p class="títuloingredientes">Ingredientes:</p>
    
    <ul class="losingredientes">
        ${comida.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
    </ul>
    </div>
    </article>
`
  } )
}

mostrarComidasconForEach();

agregarComida.addEventListener ("submit", (event) => {

event.preventDefault();
//alert("Comida nueva recibida: " + event.target.nombre.value);

let listaIngredientes = [];
const ingredientesInputs = document.querySelectorAll(".ingrediente");

ingredientesInputs.forEach( input => {
  listaIngredientes.push(input.value.trim());
});

let nuevaComida = {
  nombre: event.target.nombre.value,
  categoria: event.target.categoria.value,
  provincia: event.target.provincia.value,
  ingredientes: listaIngredientes, /*event.target.ingredientes.value.split(","), */
}

comidas.push(nuevaComida);

mostrarComidasconForEach();

ingredientesContainer.innerHTML = `<input type="text" class="ingrediente" placeholder="Ingrediente" required>`;

actualiarFiltros();

event.target.reset();

});


const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("filtroCategoria");
const filtroProvincia = document.getElementById("filtroProvincia");

function filtrar () {
  const comidasFiltradas = comidas.filter(comida => {
    return comida.categoria.includes(filtroCategoria.value)
    && comida.provincia.includes(filtroProvincia.value);
  });

  mostrarComidasconForEach(comidasFiltradas);
  console.log(comidasFiltradas);
}

function buscar () {
  const texto = buscador.value.toLowerCase();

  const comidasFiltradas = comidas.filter(comida => {
    return comida.nombre.toLowerCase().includes(texto)
    || comida.provincia.toLowerCase().includes(texto)
    || comida.categoria.toLowerCase().includes(texto);
  });

  mostrarComidasconForEach(comidasFiltradas);

  //const comidasFiltradas = comidas.filter(comida => {
  //  const datosComida = (comida.nombre + " " + comida.provincia + " " + comida.categoria).toLowerCase()
  //  return datosComida.includes(texto);
  //});
}

filtroCategoria.addEventListener("change", filtrar);
filtroProvincia.addEventListener("change", filtrar);
buscador.addEventListener("input", buscar);

const agregarIngredientesBtn = document.getElementById("agregarIngrediente");
const ingredientesContainer = document.querySelector(".contenedor-ingredientes");

agregarIngredientesBtn.addEventListener("click", () => {
  ingredientesContainer.innerHTML += `<input type="text" class="ingrediente" placeholder="Ingrediente" required>`;
});

function actualiarFiltros() {

  filtroCategoria.innerHTML = `<option value="">Todas la categorías</option>`;
  filtroProvincia.innerHTML = `<option value="">Todas las provincias</option>`;

  let categorias = [];
  let provincias = [];

  comidas.forEach(comida => {
    if (!categorias.includes(comida.categoria)) {
      categorias.push(comida.categoria);
    }

    if (!provincias.includes(comida.provincia)) {
      provincias.push(comida.provincia);
    }
  });


  categorias.forEach(categoria => {
    filtroCategoria.innerHTML += `<option value="${categoria}">${categoria}</option>`;
  });

  provincias.forEach(provincia => {
    filtroProvincia.innerHTML += `<option value="${provincia}">${provincia}</option>`;
  });
};