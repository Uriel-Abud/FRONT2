/*fetch('https://swapi.dev/api/people/')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Personajes de Star Wars:');
    console.log(data.results);    
    personajes = data.results;        // Asignar el JSON a la variable comidas
    mostrarPersonajesconForEach();
    actualiarFiltros();
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al conectar con la API:', error);
  });*/

  Promise.all([
    fetch('https://swapi.dev/api/people/?page=1').then(response => response.json()),  // Convertir la respuesta en JSON
    fetch('https://swapi.dev/api/people/?page=2').then(response => response.json()),  // Convertir la respuesta en JSON
    fetch('https://swapi.dev/api/people/?page=3').then(response => response.json()),  // Convertir la respuesta en JSON
    fetch('https://swapi.dev/api/people/?page=4').then(response => response.json()),  // Convertir la respuesta en JSON
  ])
    .then(paginas => {
      paginas.forEach(data => {
        personajes.push(...data.results);
      });
  
      console.log('Personajes de Star Wars:', personajes);
      mostrarPersonajesconForEach();
      actualiarFiltros();
    })
    .catch(error => {                   // Manejo de errores al leer el archivo JSON
      console.error('Error al conectar con la API:', error);
    });

let personajes = [];

// HAY QUE AGREGAR A TODOS LOS PERSONAJES

/*async function obtenerTodosLosPersonajes() {
  let url = 'https://swapi.dev/api/people/';
  while (url !== null && personajes.length < 50) {
      const res = await fetch(url);
      const data = await res.json();
      personajes.push(...data.results);
      url = data.next;
  }
  
  mostrarPersonajesconForEach();
}*/

const imagenesdelospersonajes = {
  "Luke Skywalker": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/1.jpg",
  "C-3PO": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/2.jpg",
  "R2-D2": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/3.jpg",
  "Darth Vader": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/4.jpg",
  "Leia Organa": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/5.jpg",
  "Owen Lars": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/6.jpg",
  "Beru Whitesun lars": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/7.jpg",
  "R5-D4": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/8.jpg",
  "Biggs Darklighter": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/9.jpg",
  "Obi-Wan Kenobi": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/10.jpg",
  "Anakin Skywalker": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/11.jpg",
  "Wilhuff Tarkin": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/12.jpg",
  "Chewbacca": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/13.jpg",
  "Han Solo": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/14.jpg",
  "Greedo": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/15.jpg",
  "Jabba Desilijic Tiure": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/16.jpg",
  "Wedge Antilles": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/18.jpg",
  "Jek Tono Porkins": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/19.jpg",
  "Yoda": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/20.jpg",
  "Palpatine": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/21.jpg",
  "Boba Fett": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/22.jpg",
  "IG-88": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/23.jpg",
  "Bossk": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/24.jpg",
  "Lando Calrissian": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/25.jpg",
  "Lobot": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/26.jpg",
  "Ackbar": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/27.jpg",
  "Mon Mothma": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/28.jpg",
  "Arvel Crynyd": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/29.jpg",
  "Wicket Systri Warrick": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/30.jpg",
  "Nien Nunb": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/31.jpg",
  "Qui-Gon Jinn": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/32.jpg",
  "Nute Gunray": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/33.jpg",
  "Finis Valorum": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/34.jpg",
  "Padmé Amidala": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/35.jpg",
  "Jar Jar Binks": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/36.jpg",
  "Roos Tarpals": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/37.jpg",
  "Rugor Nass": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/38.jpg",
  "Ric Olié": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/39.jpg",
  "Watto": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/40.jpg",
  "Sebulba": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/41.jpg"
};

function mostrarPersonajesconForEach (listadodepersonajes = personajes) {

    let CONTENEDOR = document.getElementById("comidaContainer");
    CONTENEDOR.innerHTML = "";

    listadodepersonajes.forEach ( buscarPERSONAJE => {

        CONTENEDOR.innerHTML +=
        `
        <article class="card">
            <h2 class="nombrecomida">${buscarPERSONAJE.name}</h2>
            <img src="${imagenesdelospersonajes[buscarPERSONAJE.name]}" class="lasimágenes" alt="${buscarPERSONAJE.name}">
            <p class="fechadecumple">Fecha de cumple: ${buscarPERSONAJE.birth_year}</p>
            <p class="colordeojo">Color de ojo: ${buscarPERSONAJE.eye_color}</p>
        </article>
        `;
    });
    // CAMBIAR LAS IMÁGENES
}

/*mostrarPersonajesconForEach();*/
obtenerTodosLosPersonajes();