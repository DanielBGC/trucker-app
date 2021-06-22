const emailValidation = new RegExp(/^[^\s@]+@[^\s@]+$/)
const emailValidation2 = new RegExp(/^\S+@\S+$/)
const emailValidation3 = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

const numerosValidation = new RegExp(/[0-9]/);
const minusculasValidation = new RegExp(/[a-z]/);
const maiusculasValidation = new RegExp(/[A-Z]/);
const especialValidation = new RegExp(/[\W]/);
const espacoValidation = new RegExp(/[\s]/);
const tamanhoValidation = 8;

const emailInput = document.querySelector("form input#email")
const senhaInput = document.querySelector("form input#senha")
const confirmSenhaInput = document.querySelector("form input#confirmSenha")


emailInput.addEventListener("keyup", validarForm);
senhaInput.addEventListener("keyup", validarForm);
confirmSenhaInput.addEventListener("keyup", validarForm)       

function validarForm() {
    const emailValidationAlert = document.querySelector(".alert.emailValidationAlert")
    const confirmPasswordAlert = document.querySelector(".alert.confirmPassword")
    const espacoValidationAlert = document.querySelector(".alert.espacoValidationAlert")
    const minusculaValidationAlert = document.querySelector(".alert.minusculaValidationAlert")
    const maiusculaValidationAlert = document.querySelector(".alert.maiusculaValidationAlert")
    const numeroValidationAlert = document.querySelector(".alert.numeroValidationAlert")
    const especialValidationAlert = document.querySelector(".alert.especialValidationAlert")
    const tamanhoValidationAlert = document.querySelector(".alert.tamanhoValidationAlert")
    
    // console.log(senhaInput.value, confirmSenhaInput.value)


    if(emailValidation.test(emailInput.value) == false && emailInput.value != "") {
        emailValidationAlert.style.display = "block"
        emailValidationAlert.classList.add("error")
        emailValidationAlert.classList.remove("success")
    } 
    else if(emailValidation.test(emailInput.value) == true && emailInput.value != "") {
        emailValidationAlert.style.display = "none"
    }

    if(senhaInput.value != confirmSenhaInput.value && confirmSenhaInput.value != "") {
        confirmPasswordAlert.style.display = "block"
        confirmPasswordAlert.classList.add("error")
        confirmPasswordAlert.classList.remove("success")
    } 
    else if(senhaInput.value == confirmSenhaInput.value && confirmSenhaInput.value != "") {
        confirmPasswordAlert.style.display = "none"
    }

    if(senhaInput.value != "") {
        if(espacoValidation.test(senhaInput.value) == true) {
            espacoValidationAlert.style.display = "block"
            espacoValidationAlert.classList.add("error")
            espacoValidationAlert.classList.remove("success")
        } else {
            espacoValidationAlert.style.display = "none"
        }

        if(minusculasValidation.test(senhaInput.value) == false) {
            minusculaValidationAlert.style.display = "block"
            minusculaValidationAlert.classList.add("error")
            minusculaValidationAlert.classList.remove("success")
        } else {
            minusculaValidationAlert.style.display = "none"
        }

        if(maiusculasValidation.test(senhaInput.value) == false) {
            maiusculaValidationAlert.style.display = "block"
            maiusculaValidationAlert.classList.add("error")
            maiusculaValidationAlert.classList.remove("success")
        } else {
            maiusculaValidationAlert.style.display = "none"
        }

        if(numerosValidation.test(senhaInput.value) == false) {
            numeroValidationAlert.style.display = "block"
            numeroValidationAlert.classList.add("error")
            numeroValidationAlert.classList.remove("success")
        } else {
            numeroValidationAlert.style.display = "none"
        }

        if(especialValidation.test(senhaInput.value) == false) {
            especialValidationAlert.style.display = "block"
            especialValidationAlert.classList.add("error")
            especialValidationAlert.classList.remove("success")
        } else {
            especialValidationAlert.style.display = "none"
        }

        if(senhaInput.value.length < tamanhoValidation) {
            tamanhoValidationAlert.style.display = "block"
            tamanhoValidationAlert.classList.add("error")
            tamanhoValidationAlert.classList.remove("success")
        } else {
            tamanhoValidationAlert.style.display = "none"
        }
    }
}
validarForm() 

