const currentFooterIcon = document.querySelector("footer .icon.estabelecimentos")
currentFooterIcon.classList.add("active")

const items = document.querySelectorAll(".estabelecimentos li")

// items.forEach(item => {
//     item.addEventListener("click", function() {
//         navigateTo(this)
//     })
// })

const visualizarButton = document.querySelector(".info button.visualizarButton")
visualizarButton.addEventListener("click", showEstabelecimentos)

function navigateTo(item) {
    const type = item.querySelector("span").className;
    console.log(type)

    switch(type) {
        case "1": {
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