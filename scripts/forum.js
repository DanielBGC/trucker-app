const headerLink = document.querySelector("header a")
const tableContainer = document.querySelector(".table-container")
const table = document.querySelector(".table-container table")
const topicos = table.querySelectorAll("tbody tr")

topicos.forEach(item => {
  item.addEventListener("click", function() {
      openTopic(item)
  })
})

function openTopic(item) {
    console.log(item)
    const topicTitle = item.querySelector("th").innerText
    const topicAuthor = item.querySelector(":nth-child(2)").innerText
    const qtdPost = item.querySelector(":nth-child(4)").innerText

    headerLink.href = ""

    tableContainer.style.flexDirection = "column"
    tableContainer.innerHTML = `
        <h2> ${topicTitle} </h2>
        <span> por <strong>${topicAuthor}</strong> </span>
    `

    const postContainer = document.createElement("div")
    postContainer.style.marginTop = "30px"
    for(i=0; i<qtdPost; i++) {
        const post = document.createElement("p")
        const cont = i + 1;
        post.innerHTML = `${cont}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet eligendi numquam at maiores repellendus, reprehenderit ex dolorum corporis assumenda?`
        post.style.height = "30px"
        post.style.overflow = "hidden"
        post.style.cursor = "pointer"
        post.addEventListener("click", function() {
            post.style.height = "auto"
        })

        postContainer.appendChild(post)
    }
    tableContainer.appendChild(postContainer)
}