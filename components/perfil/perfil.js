const currentFooterIcon = document.querySelector("footer .icon.perfil")
currentFooterIcon.classList.add("active")


// async function buscarDB() {
//     const rawResponse = await fetch('http://localhost:9090/clientes', {
//         method: 'GET',
//         headers: {    
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         }
        
//     });

//     const content = await rawResponse.json();
//     console.log(content)
// }
// buscarDB()

// function buscarDB() {
//     fetch('http://localhost:9090/clientes', { mode: 'no-cors'})
//     .then(blob => blob.json())
//     .then(data => {
//         console.log(data);
//         return data;
//     })
//     .catch(e => {
//         console.log(e);
//         return e;
//     });
// }