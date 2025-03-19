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

    let principal = document.getElementById("Principal");
    let nuevo = "<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>";
    
    principal.innerHTML = nuevo;
    principal.style.backgroundImage="unset"; /*Pongo unset para quitarle el valor que tuviera*/
    principal.style.backgroundColor = "black";

    let Casper = document.getElementById("Casper");
    let Nova = document.getElementById("Nova");

    Casper.style.top = "9em";
    Casper.style.left="33%";
    Nova.style.top = "10em";
    Nova.style.left="48%";

    let Consola = document.getElementById("CuadroJuego");
    Consola.innerHTML= "Tu les acompañaras en su viaje y les ayudaras a tomar las decisiones Necesarias. Buena Suerte";

    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","Escena3()");

    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick","Escena5()");
    Seguir.setAttribute("src","../Imagenes/Seguir.png");
}
function Escena5 (){
    let principal = document.getElementById("Principal");
    
    principal.style.backgroundImage = "url('../Imagenes/Casa.jpg')";
    principal.innerHTML = "";
    principal.style.backgroundSize = "content";
    document.getElementById("CuadroJuego").innerHTML="Esta es la casa de Casper y Nova (Pulsa la puerta para entrar)";

    let Añadirpuerta = "<div id='puerta' onclick></div>";
    principal.innerHTML = Añadirpuerta;
   

    let puerta = document.getElementById("puerta");
    puerta.style.width = "4%";
    puerta.style.height = "8%";
    
    puerta.style.backgroundImage ="url('../Imagenes/Puerta.png')";
    puerta.style.backgroundPosition = "center";
    puerta.style.backgroundRepeat = "no-repeat";
    puerta.style.backgroundSize = "contain";
    puerta.style.position = "absolute";
    puerta.style.top = "54%";
    puerta.style.left = "55%";
    



    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","Escena4()");

    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick","");
    Seguir.setAttribute("src","../Imagenes/NoSeguir.png");

}

