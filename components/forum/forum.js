const headerLink = document.querySelector("header a")
const tableContainer = document.querySelector(".table-container")
const table = document.querySelector(".table-container table")

window.addEventListener("load", refreshTopics)

function getTopics() {
    const topicos = table.querySelectorAll("tbody tr")

    return topicos;
}

function refreshTopics() {
    const topicos = getTopics()

    topicos.forEach(item => {
      item.addEventListener("click", function() {
          openTopic(item)
      })
    })
}

const modal = document.querySelector("#modal")

function openModal() {
    modal.style.display = "block"
}

function closeModal() {
    modal.style.display = "none"
}


const newTopicButton = document.querySelector("form button")
newTopicButton.addEventListener("click", createTopic)

function createTopic(e) {
    e.preventDefault()
    const tbody = document.querySelector("table tbody")
    const newTr = document.createElement("tr")


    const newTopicName = document.querySelector("form input").value
    const nameCell = document.createElement("th")
    nameCell.append(newTopicName)

    const newAuthor = "User1"
    const authorCell = document.createElement("td")
    authorCell.append(newAuthor)

    const date = new Date()
    // const newDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    const newDate = "Sem publicações"
    const dateCell = document.createElement("td")
    dateCell.append(newDate)

    const newQtdPost = 0;
    const qtdPostCell = document.createElement("td")
    qtdPostCell.append(newQtdPost)

    const currentIdTopic = getTopics().length;
    const idCell = document.createElement("td")
    idCell.style.display = "hidden"
    idCell.append(currentIdTopic + 1)

    newTr.append(nameCell, authorCell, dateCell, qtdPostCell, idCell)
    tbody.appendChild(newTr)
    
    closeModal()
    refreshTopics()
}

let currentIdTopic = 0;
function openTopic(item) {
    currentIdTopic = +item.querySelector("td:last-child").innerText;

    const topicTitle = item.querySelector("th").innerText
    const topicAuthor = item.querySelector(":nth-child(2)").innerText
    const qtdPost = item.querySelector(":nth-child(4)").innerText

    headerLink.href = ""

    const deleteButton = document.querySelector("button.btn-danger")
    deleteButton.style.display = 'inline'
    const openModalButton = document.querySelector("button#openModal")
    openModalButton.style.display = 'none'
 

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

const deleteTopicButton = document.querySelector("button#deleteTopic")
deleteTopicButton.addEventListener("click", function() {
    deleteTopic()
})

function deleteTopic() {
    const topicos = getTopics()
    const currentTopic = topicos[currentIdTopic - 1]
    
    const tbody = table.querySelector("tbody")
    
    console.log(currentIdTopic)
    console.log(currentTopic)
    console.log(table)
    
    // eventFire(headerLink, 'click');
    tbody.removeChild(currentTopic)
    headerLink.click();
}


function eventFire(el, etype){
    console.log(el, etype)
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }
  