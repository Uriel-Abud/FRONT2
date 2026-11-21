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
    actualizarFiltros();
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al conectar con la API:', error);
  });
}

let paginas = [];
let personajes = [];

fetch("https://swapi.dev/api/films/")
  .then(response => response.json())
  .then(data => {
    console.log('Películas:', data.results);
    data.results.forEach(lapelícula => {
      peliculas[lapelícula.url] = lapelícula.title;
    });

    mostrarPersonajesconForEach();
    actualizarFiltros();
  })
  .catch(error => {
    console.error('Error al conectar con la API:', error);
  });

let peliculas = {};

for (let i = 1; i <= 4; i++) {
  fetch(`https://swapi.dev/api/starships/?page=${i}`)
    .then(response => response.json())
    .then(data => {
      console.log('Naves:', data.results);
      data.results.forEach(lanave => {
        naves[lanave.url] = lanave.name;
      });

      mostrarPersonajesconForEach();
      actualizarFiltros();
    })
    .catch(error => {
      console.error('Error al conectar con la API:', error);
    });
}

let naves = {};

for (let i = 1; i <= 4; i++) {
  fetch(`https://swapi.dev/api/vehicles/?page=${i}`)
    .then(response => response.json())
    .then(data => {
      console.log('Vehículos:', data.results);
      data.results.forEach(elvehiculo => {
        vehículos[elvehiculo.url] = elvehiculo.name;
      });

      mostrarPersonajesconForEach();
      actualizarFiltros();
    })
    .catch(error => {
      console.error('Error al conectar con la API:', error);
    });
}

let vehículos = {};

for (let i = 1; i <= 6; i++) {
  fetch(`https://swapi.dev/api/planets/?page=${i}`)
    .then(response => response.json())
    .then(data => {
      console.log('Planetas:', data.results);
      data.results.forEach(elplaneta => {
        planetas[elplaneta.url] = elplaneta.name;
      });

      mostrarPersonajesconForEach();
      actualizarFiltros();
    })
    .catch(error => {
      console.error('Error al conectar con la API:', error);
    });
}

let planetas = {};

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

function traducirgénero (género) {
  if (género === "n/a") {
    return "Droide";
  }
  else if (género === "none") {
    return "Droide malvado";
  }
  else if (género === "male") {
    return "Masculino";
  }
  else if (género === "female") {
    return "Femenino";
  }
  else if (género === "hermaphrodite") {
    return "Hermafrodita";
  }

  return género;
}

function mostrarPersonajesconForEach (listadodepersonajes = personajes) {

    let CONTENEDOR = document.getElementById("personajeContainer");
    CONTENEDOR.innerHTML = "";

    listadodepersonajes.forEach (buscarPERSONAJE => {

      let nombrepelículas = [];

      buscarPERSONAJE.films.forEach(película => {
        nombrepelículas.push(peliculas[película]);
      });

      let nombrenaves = [];

      buscarPERSONAJE.starships.forEach(nave => {
        nombrenaves.push(naves[nave]);
      });

      if (nombrenaves.length === 0) {
        nombrenaves.push("No tiene");
      }

      let nombrevehículos = [];

      buscarPERSONAJE.vehicles.forEach(vehículo => {
        nombrevehículos.push(vehículos[vehículo]);
      });

      if (nombrevehículos.length === 0) {
        nombrevehículos.push("No tiene");
      }

      let nombreplaneta = planetas[buscarPERSONAJE.homeworld];

      if (nombreplaneta === "unknown") {
        nombreplaneta = "Desconocido";
      }

      CONTENEDOR.innerHTML +=
      `
      <article class="card">
          <h2 class="nombrepersonaje">${buscarPERSONAJE.name}</h2>
          <img src="${imagenesdelospersonajes[buscarPERSONAJE.name]}" class="lasimágenes" alt="${buscarPERSONAJE.name}">
          <p class="fechadecumple">Cumpleaños: ${buscarPERSONAJE.birth_year}</p>
          <p class="colordeojo">Color de ojo: ${buscarPERSONAJE.eye_color.toUpperCase()}</p>
          <p class="género">Género: ${traducirgénero(buscarPERSONAJE.gender).toUpperCase()}</p>
          <p class="colordepelo">Color de pelo: ${buscarPERSONAJE.hair_color.toUpperCase()}</p>
          <ul class="películas">Películas:
            <li>${nombrepelículas.join("</li><li>")}</li>
          </ul>
          <ul class="naves">Naves espaciales:
            <li>${nombrenaves.join("</li><li>")}</li>
          </ul>
          <ul class="vehículos">Vehículos terrestres:
            <li>${nombrevehículos.join("</li><li>")}</li>
          </ul>
          <p class="planeta">Planeta de origen: ${nombreplaneta}</p>
      </article>
      `;
    });
}

mostrarPersonajesconForEach();

let buscador = document.getElementById("buscador");
let filtrogénero = document.getElementById("género");
let filtropelículas = document.getElementById("películas");
let filtronaves = document.getElementById("navesespaciales");
let filtroterrestres = document.getElementById("terrestres");
let filtroplaneta = document.getElementById("planeta");

/*function buscar () {
  let textoescrito = buscador.value.toLowerCase();

  let personajesfiltrados = personajes.filter(elpersonaje => {
    return elpersonaje.name.toLowerCase().includes(textoescrito);
  });

  mostrarPersonajesconForEach(personajesfiltrados);
}*/

function obtenerDatosPersonaje (personaje) {
  let nombrepelículas = [];
  personaje.films.forEach(película => {
    nombrepelículas.push(peliculas[película]);
  });
  
  let nombrenaves = [];
  personaje.starships.forEach(nave => {
    nombrenaves.push(naves[nave]);
  });
    
  if (nombrenaves.length === 0) {
    nombrenaves.push("No tiene");
  }

  let nombrevehículos = [];
  personaje.vehicles.forEach(vehículo => {
    nombrevehículos.push(vehículos[vehículo]);
  });
    
  if (nombrevehículos.length === 0) {
    nombrevehículos.push("No tiene");
  }
    
  let nombreplaneta = planetas[personaje.homeworld];
    
  if (nombreplaneta === "unknown") {
    nombreplaneta = "Desconocido";
  }

  return {nombrepelículas, nombrenaves, nombrevehículos, nombreplaneta};
}

function buscarYFiltrar () {
  let textoescrito = buscador.value.toLowerCase();
  
  let filtros = personajes.filter(elfiltro => {
    let datos = obtenerDatosPersonaje(elfiltro);

    return elfiltro.name.toLowerCase().includes(textoescrito)
    && (filtrogénero.value === "" || elfiltro.gender === filtrogénero.value)
    && (filtropelículas.value === "" || datos.nombrepelículas.includes(filtropelículas.value))
    && (filtronaves.value === "" || datos.nombrenaves.includes(filtronaves.value))
    && (filtroterrestres.value === "" || datos.nombrevehículos.includes(filtroterrestres.value))
    && (filtroplaneta.value === "" || datos.nombreplaneta === filtroplaneta.value);
  });

  mostrarPersonajesconForEach(filtros);
  console.log('Filtros:', filtros);
}

buscador.addEventListener("input", buscarYFiltrar);
filtrogénero.addEventListener("change", buscarYFiltrar);
filtropelículas.addEventListener("change", buscarYFiltrar);
filtronaves.addEventListener("change", buscarYFiltrar);
filtroterrestres.addEventListener("change", buscarYFiltrar);
filtroplaneta.addEventListener("change", buscarYFiltrar);

function actualizarFiltros () {
  filtrogénero.innerHTML = `<option value="">Todos los géneros</option>`;
  filtropelículas.innerHTML = `<option value="">Todas las películas</option>`;
  filtronaves.innerHTML = `<option value="">Todas las naves</option>`;
  filtroterrestres.innerHTML = `<option value="">Todos los vehículos</option>`;
  filtroplaneta.innerHTML = `<option value="">Todos los planetas</option>`;

  let géneros = [];
  let películas = [];
  let naves = [];
  let terrestres = [];
  let planetas = [];

  personajes.forEach(elpersonaje => {
    let datos = obtenerDatosPersonaje(elpersonaje);

    if (!géneros.includes(elpersonaje.gender)) {
      géneros.push(elpersonaje.gender);
    }

    datos.nombrepelículas.forEach(lapelícula => {
      if (!películas.includes(lapelícula)) {
        películas.push(lapelícula);
      }
    });

    datos.nombrenaves.forEach(lanave => {
      if (!naves.includes(lanave)) {
        naves.push(lanave);
      }
    });

    datos.nombrevehículos.forEach(elvehículo => {
      if (!terrestres.includes(elvehículo)) {
        terrestres.push(elvehículo);
      }
    });

    if (!planetas.includes(datos.nombreplaneta)) {
      planetas.push(datos.nombreplaneta);
    }
  });

  géneros.forEach(elgénero => {
    filtrogénero.innerHTML += `<option value="${elgénero}">${traducirgénero(elgénero)}</option>`;
  });

  películas.forEach(lapelícula => {
    filtropelículas.innerHTML += `<option value="${lapelícula}">${lapelícula}</option>`;
  });

  naves.forEach(lanave => {
    filtronaves.innerHTML += `<option value="${lanave}">${lanave}</option>`;
  });

  terrestres.forEach(elvehículo => {
    filtroterrestres.innerHTML += `<option value="${elvehículo}">${elvehículo}</option>`;
  });

  planetas.forEach(elplaneta => {
    filtroplaneta.innerHTML += `<option value="${elplaneta}">${elplaneta}</option>`;
  });
}