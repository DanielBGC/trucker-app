const iconsFooter = document.querySelectorAll("footer .icon")
iconsFooter.forEach(icon => {
    icon.addEventListener("click", function() {
        changeCurrentPage(this.classList[1])
    })
})

function changeCurrentPage(action) {
  console.log(action)
  let currentIcon;

  if(action == "home") {
    // window.location.href = "/components/menu/menu-inicial.html"
    window.location.href = "../menu/menu-inicial.html"
    currentIcon = document.querySelector("footer .icon." + action)
  }

  if(action == "perfil") {
    // window.location.href = "/components/perfil/perfil.html"
    window.location.href = "../perfil/perfil.html"
    currentIcon = document.querySelector("footer .icon." + action)
  }

  if(action == "estabelecimentos") {
    // window.location.href = "/components/estabelecimentos/estabelecimentos.html"
    window.location.href = "../estabelecimentos/estabelecimentos.html"
    currentIcon = document.querySelector("footer .icon." + action)
  }

  if(action == "forum") {
    // window.location.href = "/components/forum/forum.html"
    window.location.href = "../forum/forum.html"
    currentIcon = document.querySelector("footer .icon." + action)
  }

  currentIcon.classList.add("active")
}