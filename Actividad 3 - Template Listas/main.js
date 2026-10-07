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

function mostrarComidasconForEach () {

  comidaContainer.innerHTML = "";

  comidas.forEach ( comida => {

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

let nuevaComida = {
  nombre: event.target.nombre.value,
  categoria: event.target.categoria.value,
  provincia: event.target.provincia.value,
  ingredientes: event.target.ingredientes.value.split(","),
}

comidas.push(nuevaComida);

mostrarComidasconForEach();

});