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

    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick","Escena2()");

    document.getElementById("CuadroJuego").innerHTML = "Un dia 2 magos aburridos deciden tomar un viaje";

    
}
function Escena2 (){

    let principal = document.getElementById("Principal");
    let nuevo = "<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>";

    
    principal.innerHTML = nuevo;
    principal.style.backgroundImage = "url('../Imagenes/galaxiaCasper.jpg')";
    
    document.getElementById("Casper").style.top ="15%";
    document.getElementById("Casper").style.left ="42%";

    

    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","Escena1()");

    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick","Escena3()");

    document.getElementById("CuadroJuego").innerHTML = "Este es Casper. Lleva un gorro de dormir y a veces es muy precipitado";   
 
}
function Escena3(){

    let principal = document.getElementById("Principal");
    let nuevo = "<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>";

    principal.innerHTML = nuevo;
    principal.style.backgroundImage = "url('../Imagenes/galaxiaNova.jpg')";

    document.getElementById("Nova").style.top= "16%";
    document.getElementById("Nova").style.left="42%";

    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","Escena2()");

    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick","Escena4()");

    document.getElementById("CuadroJuego").innerHTML = "Esta es Nova. LLeva una gema en su frente y es mas prudente que Casper";
    
}
function Escena4(){

    let principal = document.getElementById("Principal");
    let nuevo = "<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>";
    
    principal.innerHTML = nuevo;
    principal.style.backgroundImage="unset"; /*Pongo unset para quitarle el valor que tuviera*/
    principal.style.backgroundColor = "black";

    let Casper = document.getElementById("Casper");
    let Nova = document.getElementById("Nova");

    Casper.style.top = "10%";
    Casper.style.left="33%";
    Nova.style.top = "12%";
    Nova.style.left="48%";

    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","Escena3()");

    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick","Escena5()");
    Seguir.setAttribute("src","../Imagenes/Seguir.png");

    let Consola = document.getElementById("CuadroJuego");
    Consola.innerHTML= "Tu les acompañaras en su viaje y les ayudaras a tomar las decisiones Necesarias. Buena Suerte";
}
function Escena5 (){
    let principal = document.getElementById("Principal");
    
    principal.style.backgroundImage = "url('../Imagenes/Casa.jpg')";
    principal.innerHTML = "";
    principal.style.backgroundSize = "content";
    

    let Añadirpuerta = "<div id='puerta' onclick ='Escena6()'></div>";
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

    document.getElementById("CuadroJuego").innerHTML="Esta es la casa de Casper y Nova (Pulsa la puerta para entrar)";

}
function Escena6 (){
    let principal = document.getElementById("Principal");
    let nuevo = "<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>";
    
    principal.innerHTML = nuevo;
    principal.style.backgroundImage ="url('../Imagenes/Salon.jpg')";

   
    let Nova = document.getElementById("Nova");

    Nova.style.top = "25%";
    Nova.style.left="38%";



    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","Escena5()");

    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick","Escena7()");
    Seguir.setAttribute("src","../Imagenes/Seguir.png");

    document.getElementById("CuadroJuego").innerHTML="Nova: Casper date prisa o no llegaremos para coger sitio en el Motel!!!";


}
function Escena7 (){
    let principal = document.getElementById("Principal");
    let nuevo = "<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> "+"<div id='puerta' onclick ='Escena8()'></div>";
    
    principal.innerHTML = nuevo;
    principal.style.backgroundImage ="url('../Imagenes/Salon.jpg')";

    let puerta = document.getElementById("puerta");
    puerta.style.width = "30%";
    puerta.style.height = "60%";
    puerta.style.position = "absolute";
    puerta.style.top = "11%";
    puerta.style.left = "6.5%";

    Nova.style.top = "25%";
    Nova.style.left="38%";

    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","Escena6()");

    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick","");
    Seguir.setAttribute("src","../Imagenes/NoSeguir.png");

    document.getElementById("CuadroJuego").innerHTML="Casper: Ya voy!!! (Pulsa la puerta de la entrada para salir)";
    
}
function Escena8 (){
    
    let principal = document.getElementById("Principal");
    let nuevo = "<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>";

    principal.style.backgroundImage ="url('../Imagenes/Casa.jpg')";
    principal.innerHTML = nuevo;

    let Nova = document.getElementById("Nova");
    let Casper = document.getElementById("Casper");

    Nova.style.top = "38%";
    Nova.style.left="28%";

    Casper.style.top = "35%";
    Casper.style.left="15%";

    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick","Escena7()");

    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick","Escena9()");
    Seguir.setAttribute("src","../Imagenes/Seguir.png");

    document.getElementById("CuadroJuego").innerHTML="Nova:Bien. Ya estamos listos para la aventura";
}
function Escena9(){
    
}
