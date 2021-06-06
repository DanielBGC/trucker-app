const favButton = document.querySelector(".info-header button")
const imagesFavButton = [
  '../assets/Estabelecimentos/star-empty.png',
  '../assets/Estabelecimentos/star-full.png'
  ]
let controlCurrentImage = 0;

favButton.addEventListener("click", function() {
  if(controlCurrentImage == 0) {
    controlCurrentImage = 1;
    favButton.querySelector("img").src = imagesFavButton[controlCurrentImage];
  }
  else {
    controlCurrentImage = 0;
    favButton.querySelector("img").src = imagesFavButton[controlCurrentImage];
  }
})

function searchLocation() {
  const infoContainer = document.querySelector(".info")
  const headerLink = document.querySelector("header a")
  let headerTitle = document.querySelector("header .title")

  const titleContainer = document.querySelector(".info-header .title-container")
  const titleEstablishment = titleContainer.querySelector("h1").innerText;
  const cityEstablishment = titleContainer.querySelector("h4").innerText;
  const addressEstablishment = titleContainer.querySelector("p").innerText;
  
  

  headerLink.href = ""
  headerTitle.innerHTML = `${titleEstablishment}  (${cityEstablishment}) </br> ${addressEstablishment}`
  headerTitle.style.fontSize = "12pt"
  headerTitle.style.maxWidth = "70%"
  

  
  infoContainer.style.display = "none"
  
  setMap(-19.748801145260664, -47.9758025545576)
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
