import {estabelecimentosArray} from "../estabelecimentos/db.js"
console.log(estabelecimentosArray)

const currentFooterIcon = document.querySelector("footer .icon.estabelecimentos")
currentFooterIcon.classList.add("active")

const items = document.querySelectorAll(".estabelecimentos li")
const totalEstabelecimentosTitle = document.querySelector(".estabelecimentos h4 span") 
totalEstabelecimentosTitle.innerText = estabelecimentosArray.length

items.forEach(item => {
    setQuantidadePorTipo(item)
})


const visualizarButton = document.querySelector(".info button.visualizarButton")
visualizarButton.addEventListener("click", showEstabelecimentos)

function setQuantidadePorTipo(item) {
    const type = item.classList[1]
    console.log(type)

        
    const qtdEstabelecimentosPorTipo = {
        "posto": 0,
        "restaurante": 0,
        "borracharia": 0,
        "oficina": 0
    }

    estabelecimentosArray.forEach(obj => {
        if(obj.tipo == 1) {
            qtdEstabelecimentosPorTipo.posto++;
        }
        if(obj.tipo == 2) {
            qtdEstabelecimentosPorTipo.restaurante++;
        }
        if(obj.tipo == 3) {
            qtdEstabelecimentosPorTipo.borracharia++;
        }
        if(obj.tipo == 4) {
            qtdEstabelecimentosPorTipo.oficina++;
        }
    })


    switch(type) {
        case "1": {
            item.querySelector("strong").innerText = qtdEstabelecimentosPorTipo.posto;
            break;
        }
        case "2": {
            item.querySelector("strong").innerText = qtdEstabelecimentosPorTipo.restaurante;
            break;
        }
        case "3": {
            item.querySelector("strong").innerText = qtdEstabelecimentosPorTipo.borracharia;
            break;
        }
        case "4": {
            item.querySelector("strong").innerText = qtdEstabelecimentosPorTipo.oficina;
            break;
        }
    }
}

function showEstabelecimentos() {
    window.location.href = "display/showEstabelecimento.html"
}


const modal = document.querySelector("#modal")

const cadastrarButton = document.querySelector(".info button.cadastrarButton")
cadastrarButton.addEventListener("click", openModal)
function openModal() {
    modal.style.display = "block"
}

const closeModalButton = modal.querySelector("header button")
closeModalButton.addEventListener("click", closeModal)

function closeModal() {
    modal.style.display = "none"
}

function cadastrarEstabelecimento() {
    
}