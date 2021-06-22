import {estabelecimentosArray} from "./db.js"

const currentFooterIcon = document.querySelector("footer .icon.estabelecimentos")
currentFooterIcon.classList.add("active")

var currentPositionEstabalecimento = 0;
var currentEstabelecimento = estabelecimentosArray[currentPositionEstabalecimento];
const qtdEstabelecimentos = estabelecimentosArray.length
console.log(currentEstabelecimento)

function changeCurrentEstabelecimento(action) {
  if(action == "next") {
    if(currentPositionEstabalecimento == qtdEstabelecimentos - 1) {
      currentPositionEstabalecimento = 0;
    }
    else {
      currentPositionEstabalecimento++;
    }
  }
  else if(action == "prev") {
    if(currentPositionEstabalecimento == 0) {
      currentPositionEstabalecimento = qtdEstabelecimentos - 1;
    }
    else {
      currentPositionEstabalecimento--;
    }
  }

  currentEstabelecimento = estabelecimentosArray[currentPositionEstabalecimento];
  console.log(currentEstabelecimento)

  setTipoEstabelecimento();
  setFavoriteEstabelecimento()
  setInfoEstabelecimento()
  setCurrentImage()
  getUserCurrentPosition();
  getDistanceFromLatLonInKm();
  setDistanceBetweenUserAndEstabelecimento();
}

function setTipoEstabelecimento() {
  const tipoEsbalecimentoTitle = document.querySelector(".container .title")

  if(currentEstabelecimento.tipo == 1) {
    tipoEsbalecimentoTitle.innerText = "Postos de gasolina"
  }
  if(currentEstabelecimento.tipo == 2) {
    tipoEsbalecimentoTitle.innerText = "Restaurante"
  }
}
setTipoEstabelecimento();

const favButton = document.querySelector(".info-header button")

const imagesFavButton = [`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>`,
  `
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
  `
]


function setFavoriteEstabelecimento() {
  if(currentEstabelecimento.isFavorite == true) {
    favButton.innerHTML = imagesFavButton[1];
  }
  else {
    favButton.innerHTML = imagesFavButton[0];
  }
}
setFavoriteEstabelecimento();


favButton.addEventListener("click", function() {
  if(currentEstabelecimento.isFavorite == true) {
    currentEstabelecimento.isFavorite = false;
  }
  else {
    currentEstabelecimento.isFavorite = true;
  }
  setFavoriteEstabelecimento();
})

const prevCarouselButton = document.querySelector(".carousel-control-prev")
prevCarouselButton.addEventListener("click", function() {
  // changeCarouselImage("prev")
  changeCurrentEstabelecimento("prev")
})

const nextCarouselButton = document.querySelector(".carousel-control-next")
nextCarouselButton.addEventListener("click", function() {
  // changeCarouselImage("next")
  changeCurrentEstabelecimento("next")
})


let currentPosition = 0;
const imgCarousel = document.querySelector(".carousel-item.active img")
var fotos = currentEstabelecimento.fotos;
imgCarousel.src = fotos[currentPosition]

function changeCarouselImage(action) {
  // const carouselDivs = document.querySelectorAll(".carousel-item")
  const currentCarouselDiv = document.querySelector(".carousel-item.active")

  // const qtdImages = carouselDivs.length
  const qtdImages = currentEstabelecimento.fotos.length

  let i;
  for(i=0; i<qtdImages; i++) {
    if(fotos[i] == img.src) {
      currentPosition = i;
    }
  }

  if(action == "next") {
    // carouselDivs[currentPosition].classList.remove("active")
    if(currentPosition == qtdImages - 1) {
      currentPosition = 0;
    }
    else {
      currentPosition++;
    }
    // carouselDivs[currentPosition].classList.add("active")
  }

  if(action == "prev") {
    // carouselDivs[currentPosition].classList.remove("active")
    if(currentPosition == 0) {
      currentPosition = qtdImages - 1;
    }
    else {
      currentPosition--;
    }
    // carouselDivs[currentPosition].classList.add("active")
  }
  imgCarousel.src = fotos[currentPosition]
  
  console.log(currentPosition)
} 

function setCurrentImage() {
  var fotos = currentEstabelecimento.fotos;
  imgCarousel.src = fotos[0]
}

const infoHeader = document.querySelector(".info-header")
const titleContainerInfoHeader = infoHeader.querySelector(".title-container")

function setInfoEstabelecimento() {
  const currentEndereco = currentEstabelecimento.endereco;

  titleContainerInfoHeader.innerHTML = `
  <h1>${currentEstabelecimento.nome}</h1>
  <h4>${currentEndereco.cidade} - ${currentEndereco.uf}</h4>
  <p>${currentEndereco.rua} ${currentEndereco.numero ? ", " + currentEndereco.numero : ""}</p>
  `
}
setInfoEstabelecimento()



const searchLocationButton = document.querySelector(".info .info-footer button")
const distanceButtonText = searchLocationButton.querySelector(".distancia span")
searchLocationButton.addEventListener("click", searchLocation)

function setDistanceBetweenUserAndEstabelecimento() {
  const distancia = getDistanceFromLatLonInKm();
  distanceButtonText.innerText = distancia.toFixed(2);
}


function searchLocation() {
  const infoContainer = document.querySelector(".info")
  const footerContainer = document.querySelector("footer")
  const headerLink = document.querySelector("header a")
  let headerTitle = document.querySelector("header .title")

  const titleEstablishment = titleContainerInfoHeader.querySelector("h1").innerText;
  const cityEstablishment = titleContainerInfoHeader.querySelector("h4").innerText;
  const addressEstablishment = titleContainerInfoHeader.querySelector("p").innerText;
  
  

  headerLink.href = ""
  headerTitle.innerHTML = `${titleEstablishment}  (${cityEstablishment}) </br> ${addressEstablishment}`
  headerTitle.style.fontSize = "12pt"
  headerTitle.style.maxWidth = "70%"
  
  infoContainer.style.display = "none"
  footerContainer.style.display = "none"
  
  const currentLatidude = currentEstabelecimento.coordenadas.latitude;
  const currentLongitude = currentEstabelecimento.coordenadas.longitude;

  setMap(currentLatidude, currentLongitude)
}

function setMap(lat, long) {
    const mapDiv = document.querySelector("#map")
    mapDiv.style.display = "block";
    var mymap = L.map('map').setView([lat, long], 16);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZGFuaWVsYmdjIiwiYSI6ImNrZzhlNjFvNDAydDgzMnF4OWkwamZ6dTAifQ.YPQLk_8mPLsqPxPuhcr_5g'
    }).addTo(mymap);
    
    var circle = L.circle([lat, long], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.4,
        radius: 50
    }).addTo(mymap);
    circle.bindPopup("Dirija-se até essa área").openPopup()

    var marker = L.marker([lat, long]).addTo(mymap)
    // var marker2 = L.marker([-19.74823633276831, -47.97564183161778]).addTo(mymap)
}

var userCurrentPosition = {
  lat: null,
  long: null
}

function getUserCurrentPosition() {
  navigator.geolocation.getCurrentPosition(function(pos) {

    var crd = pos.coords;
    console.log('Sua posição atual é:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('Precisão: ' + crd.accuracy + ' metros');


    userCurrentPosition.lat = crd.latitude
    userCurrentPosition.long = crd.longitude

    console.log(userCurrentPosition)
  }, 
  function(error) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }, 
  {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 0
  });
}
setTimeout(() => {
  getUserCurrentPosition()
}, 500);


function getDistanceFromLatLonInKm() {
  const lat1 = userCurrentPosition.lat;
  const lon1 = userCurrentPosition.long;
  const lat2 = currentEstabelecimento.coordenadas.latitude;
  const lon2 = currentEstabelecimento.coordenadas.longitude;

  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  console.log("Distância: ", d)
  return d;
}
setTimeout(() => {
  getDistanceFromLatLonInKm()
  setDistanceBetweenUserAndEstabelecimento();
}, 1000);

function deg2rad(deg) {
  return deg * (Math.PI/180)
}