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
            window.location.href = "showEstabelecimento.html"
            break;
        }
    }
}