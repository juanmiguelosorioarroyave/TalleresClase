
const nameUser = document.querySelector('#name-User')
const dateUser = document.querySelector('#age-User')
const btnCalculate = document.querySelector('#button-calculate')
const response = document.querySelector('#response-verify')

btnCalculate.addEventListener('click', calculate_age);

function calculate_age(){
    console.log("hello")
    const dateUserc = parseInt(dateUser.value);
    if (dateUserc>=18) {
        response.textContent = `${nameUser.value} Es mayor de edad y puede votar`
    }else {
        response.textContent = `${nameUser.value} Es menor de edad y no puede votar`
    }
}

