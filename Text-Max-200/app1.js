const Usuario_Nombre = document.querySelector('#Txt_Nombre');
const Comentario = document.querySelector('#Comentario');
const Contador = document.querySelector('#Contador');
const Boton = document.querySelector('#Boton_Enviado');
const Inicial_Nombre = document.querySelector('#IniciaNombre');
const Mostrando_TextArea = document.querySelector('#ImprimiendoTxtArea')

Boton.addEventListener('click', Inicial_Nombre_And_ImpresoTextArea)
    
function Inicial_Nombre_And_ImpresoTextArea() {
    InicialNombreUsuario = Usuario_Nombre.value.charAt(0).toUpperCase(0);
    Inicial_Nombre.textContent = InicialNombreUsuario;
    Mostrando_TextArea.textContent = Comentario.value;
}

Comentario.addEventListener('keydown', function(LimitandoCaracteres) {
    const LeyendoDatosTxt = Comentario.value.length
    const MaximoCaracteres = 200;
    const DisminuyendoContador = MaximoCaracteres - LeyendoDatosTxt;

    if(LeyendoDatosTxt >= MaximoCaracteres){
        LimitandoCaracteres.preventDefault();
    }
    Contador.innerHTML = DisminuyendoContador;

    if (DisminuyendoContador <= 50){
        Contador.style.color = 'red';
    }
});

console.log('Helloda');