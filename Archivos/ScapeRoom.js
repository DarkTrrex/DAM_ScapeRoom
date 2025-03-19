function Hola (nombre){
    if(nombre == "Nova"){
        document.getElementById("CuadroInicio").innerHTML= "Hola. Mi nombre es "+nombre+", vamos a vivir una increible aventura. Dale al boton de Start para comenzar!!!";
    }
    else{
        document.getElementById("CuadroInicio").innerHTML= "Hola. Mi nombre es "+nombre+" y estoy impaciente por empezar. Dale al boton de Start y comencemos la aventura!!!";
    }
 
}
function DeVuelta (){
    window.location.assign("Bienvenida.html");/*Volver a la pestaña de Bienvenida*/
}
function Escena1 (){
    let principal = document.getElementById("Principal");
    principal.style.backgroundImage= "url('../Imagenes/Casper_y_Nova.jpg')";
    principal.innerHTML = "";
    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","DeVuelta()");
    document.getElementById("CuadroJuego").innerHTML = "Un dia 2 magos aburridos deciden tomar un viaje";
}
function Escena2 (){
    let principal = document.getElementById("Principal");

    principal.style.backgroundImage = "url('../Imagenes/galaxia.jpg')";
    principal.style.backgroundSize = "cover";
    
    let nuevo = "<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>" +
                "<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>";

    principal.innerHTML = nuevo;

    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","Escena1()");
    
    document.getElementById("CuadroJuego").innerHTML = "Uno de ellos que lleva un gorro morado se llama Casper mientras que la otra que lleva una gema en su cabeza se llama Nova";       
    
}
