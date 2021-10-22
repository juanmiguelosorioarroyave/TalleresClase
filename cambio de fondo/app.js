const change_body = document.querySelector('#body');
const Boton = document.querySelector('#Boton_Enviado');
const response = document.querySelector('#response-verify');

Boton.addEventListener('click', get_color )

function get_color(){
    const R = randomNumber(0,255);
    const G = randomNumber(0,255);
    const B = randomNumber(0,255);

    let change = `rgb(${R} , ${G} , ${B})`;
    change_body.style.background = change;
    console.log(change);
    response.textContent = `${change}`
    
}function randomNumber(min , max) {
    return (Math.floor(Math.random() * (max - min)) + min);
}
        
