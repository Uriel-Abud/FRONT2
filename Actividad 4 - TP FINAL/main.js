for (let i = 1; i <= 9; i++) { // 9 porque son todas las páginas posibles
fetch(`https://swapi.dev/api/people/?page=${i}`)          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Personajes de Star Wars (lista ' + i + '):');
    console.log(data.results);    
    paginas[i - 1] = data.results;
    personajes = [];
    paginas.forEach(lista => {
      lista.forEach(personaje => {
        personajes.push(personaje);
      });
    });

    if (i === 9) {
      console.log("Todos los personajes", personajes);
    }
    
    mostrarPersonajesconForEach();
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al conectar con la API:', error);
  });
}

let personajes = [];
let paginas = [];

let imagenesdelospersonajes = {
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
  "Sebulba": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/41.jpg",
  "Quarsh Panaka": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/42.jpg",
  "Shmi Skywalker": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/43.jpg",
  "Darth Maul": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/44.jpg",
  "Bib Fortuna": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/45.jpg",
  "Ayla Secura": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/46.jpg",
  "Ratts Tyerel": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/47.jpg",
  "Dud Bolt": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/48.jpg",
  "Gasgano": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/49.jpg",
  "Ben Quadinaros": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/50.jpg",
  "Mace Windu": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/51.jpg",
  "Ki-Adi-Mundi": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/52.jpg",
  "Kit Fisto": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/53.jpg",
  "Eeth Koth": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/54.jpg",
  "Adi Gallia": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/55.jpg",
  "Saesee Tiin": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/56.jpg",
  "Yarael Poof": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/57.jpg",
  "Plo Koon": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/58.jpg",
  "Mas Amedda": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/59.jpg",
  "Gregar Typho": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/60.jpg",
  "Cordé": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/61.jpg",
  "Cliegg Lars": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/62.jpg",
  "Poggle the Lesser": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/63.jpg",
  "Luminara Unduli": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/64.jpg",
  "Barriss Offee": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/65.jpg",
  "Dormé": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/66.jpg",
  "Dooku": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/67.jpg",
  "Bail Prestor Organa": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/68.jpg",
  "Jango Fett": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/69.jpg",
  "Zam Wesell": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/70.jpg",
  "Dexter Jettster": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/71.jpg",
  "Lama Su": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/72.jpg",
  "Taun We": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/73.jpg",
  "Jocasta Nu": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/74.jpg",
  "R4-P17": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/75.jpg",
  "Wat Tambor": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/76.jpg",
  "San Hill": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/77.jpg",
  "Shaak Ti": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/78.jpg",
  "Grievous": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/79.jpg",
  "Tarfful": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/80.jpg",
  "Raymus Antilles": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/81.jpg",
  "Sly Moore": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/82.jpg",
  "Tion Medon": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/83.jpg"
};

function mostrarPersonajesconForEach (listadodepersonajes = personajes) {

    let CONTENEDOR = document.getElementById("personajeContainer");
    CONTENEDOR.innerHTML = "";

    listadodepersonajes.forEach ( buscarPERSONAJE => {

      if (buscarPERSONAJE.gender === "n/a" || buscarPERSONAJE.gender === "none") {
        buscarPERSONAJE.gender = "robot";
      }
      else if (buscarPERSONAJE.gender === "male") {
        buscarPERSONAJE.gender = "masculino";
      }
      else if (buscarPERSONAJE.gender === "female") {
        buscarPERSONAJE.gender = "femenino";
      }
      else if (buscarPERSONAJE.gender === "hermaphrodite") {
        buscarPERSONAJE.gender = "hermafrodita";
      }

      CONTENEDOR.innerHTML +=
      `
      <article class="card">
          <h2 class="nombrepersonaje">${buscarPERSONAJE.name}</h2>
          <img src="${imagenesdelospersonajes[buscarPERSONAJE.name]}" class="lasimágenes" alt="${buscarPERSONAJE.name}">
          <p class="fechadecumple">Cumpleaños: ${buscarPERSONAJE.birth_year}</p>
          <p class="colordeojo">Color de ojo: ${buscarPERSONAJE.eye_color.toUpperCase()}</p>
          <p class="género">Género: ${buscarPERSONAJE.gender.toUpperCase()}</p>
          <p class="colordepelo">Color de pelo: ${buscarPERSONAJE.hair_color.toUpperCase()}</p>
      </article>
      `;
    });
}

mostrarPersonajesconForEach();