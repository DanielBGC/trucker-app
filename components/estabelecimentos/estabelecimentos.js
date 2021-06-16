const currentFooterIcon = document.querySelector("footer .icon.estabelecimentos")
currentFooterIcon.classList.add("active")


const items = document.querySelectorAll(".estabelecimentos li")

items.forEach(item => {
    item.addEventListener("click", function() {
        navigateTo(this)
    })
})

function navigateTo(item) {
    const type = item.querySelector("span").className;
    console.log(type)

    switch(type) {
        case "1": {
            window.location.href = "display/showEstabelecimento.html"
            break;
        }
    }
}

const modal = document.querySelector("#modal")

function openModal() {
    modal.style.display = "block"
}

function closeModal() {
    modal.style.display = "none"
}

function cadastrarEstabelecimento() {
    
}