const iconsFooter = document.querySelectorAll("footer .icon")
iconsFooter.forEach(icon => {
    icon.addEventListener("click", function() {
        changeCurrentPage(this.classList[1])
    })
})

const currentHostName = window.location.hostname

function changeCurrentPage(action) {
  console.log(action)
  let currentIcon;

  if(action == "home") {
    window.location.href = "../menu/menu-inicial.html"
    currentIcon = document.querySelector("footer .icon." + action)
  }

  if(action == "perfil") {
    window.location.href = "../perfil/perfil.html"
    currentIcon = document.querySelector("footer .icon." + action)
  }

  if(action == "estabelecimentos") {
    window.location.href = "../estabelecimentos/estabelecimentos.html"
    currentIcon = document.querySelector("footer .icon." + action)
  }

  if(action == "forum") {
    window.location.href = "../forum/forum.html"
    currentIcon = document.querySelector("footer .icon." + action)
  }

  currentIcon.classList.add("active")
}