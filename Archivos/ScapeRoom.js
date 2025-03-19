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

    document.getElementById("CuadroJuego").innerHTML = "Un dia 2 magos aburridos deciden tomar un viaje";

    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","DeVuelta()");

    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick","Escena2()");

    
}
function Escena2 (){

    let principal = document.getElementById("Principal");
    let nuevo = "<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>";

    
    principal.innerHTML = nuevo;
    principal.style.backgroundImage = "url('../Imagenes/galaxiaCasper.jpg')";
    
    document.getElementById("Casper").style.top ="9.5em";
    document.getElementById("Casper").style.left ="40%";

    document.getElementById("CuadroJuego").innerHTML = "Este es Casper. Lleva un gorro de dormir y a veces es muy precipitado";   

    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","Escena1()");

    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick","Escena3()");
 
}
function Escena3(){

    let principal = document.getElementById("Principal");
    let nuevo = "<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>";

    principal.innerHTML = nuevo;
    principal.style.backgroundImage = "url('../Imagenes/galaxiaNova.jpg')";

    document.getElementById("Nova").style.top= "10em";
    document.getElementById("Nova").style.left="40%";
    document.getElementById("CuadroJuego").innerHTML = "Esta es Nova. LLeva una gema en su frente y es mas prudente que Casper";

    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","Escena2()");

    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick","Escena4()");

    
}
function Escena4(){

    let principal = document.getElementById("Pirncipal");
    let nuevo = "<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>" + "<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>";

    principal.innerHTML = nuevo;

    
}
