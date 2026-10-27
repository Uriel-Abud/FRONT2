fetch('https://swapi.dev/api/people/')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Personajes de Star Wars:');
    console.log(data.results);    
    personajes = data.results;        // Asignar el JSON a la variable comidas
    mostrarComidasconForEach();
    actualiarFiltros();
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al conectar con la API:', error);
  });

let personajes = [];

// HAY QUE AGREGAR A TODOS LOS PERSONAJES

function mostrarComidasconForEach (listadodepersonajes = personajes) {

    let CONTENEDOR = document.getElementById("comidaContainer");
    CONTENEDOR.innerHTML = "";

    listadodepersonajes.forEach ( buscarPERSONAJE => {

        CONTENEDOR.innerHTML +=
        `
        <article class="card">
            <h2 class="nombrecomida">${buscarPERSONAJE.name}</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsyK4j2YHkwHbSCAFb3RLRY6Ol1lvM8mDP8hokbGzRug&s=10" class="lasimágenes" alt="${buscarPERSONAJE.name}">
            <p class="fechadecumple">Fecha de cumple: ${buscarPERSONAJE.birth_year}</p>
            <p class="colordeojo">Color de ojo: ${buscarPERSONAJE.eye_color}</p>
        </article>
        `;
    });
    // CAMBIAR LAS IMÁGENES
}

mostrarComidasconForEach();