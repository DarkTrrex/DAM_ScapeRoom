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

function BorrarContenido (){

    let principal = document.getElementById("Principal");
    principal.innerHTML = "";
}

function MeterContenido (nuevo,fondo){

    let principal = document.getElementById("Principal");

    principal.innerHTML = nuevo;
    principal.style.backgroundImage= "url("+fondo+")";
    

}

function Casper (top,left,right,bottom){

    casper = document.getElementById("Casper");
    casper.style.top =top;
    casper.style.left =left;
    casper.style.right = right;
    casper.style.bottom = bottom;
}
function Nova(top,left,right,bottom){

    nova = document.getElementById("Nova");
    nova.style.top =top;
    nova.style.left =left;
    nova.style.right = right;
    nova.style.bottom = bottom;
}

function CambiarVolver (Escena,Imagen){

    let Volver = document.getElementById("Volver");
    Volver.setAttribute("onclick",Escena);

    if(Imagen == ""){
        Volver.setAttribute("src","../Imagenes/Volver.png");
    }
    else{
        Volver.setAttribute("src",Imagen);
    }
    
    
    
}

function CambiarSeguir (Escena,Imagen){
    let Seguir = document.getElementById("Seguir");
    Seguir.setAttribute("onclick",Escena);
    
    if(Imagen == ""){
        Seguir.setAttribute("src","../Imagenes/Seguir.png");
    }
    else{
        Seguir.setAttribute("src",Imagen);
    }
}

function CambiarDialogo (Dialogo){

    document.getElementById("CuadroJuego").innerHTML = Dialogo;

}



function Escena1 (){

    BorrarContenido();

    MeterContenido("",'../Imagenes/Casper_y_Nova.jpg');

    CambiarVolver('DeVuelta()',"");

    CambiarSeguir('Escena2()',"");

    CambiarDialogo("Un dia 2 magos aburridos deciden tomar un viaje");
    
}

function Escena2 (){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>",'../Imagenes/galaxiaCasper.jpg');

    CambiarVolver('Escena1()',"");

    CambiarSeguir('Escena3()',"");

    CambiarDialogo("Este es Casper. Lleva un gorro de dormir y a veces es muy precipitado");

    Casper("15%","42%","0","0");
    

  
 
}
function Escena3(){

    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>",'../Imagenes/galaxiaNova.jpg');

    CambiarVolver('Escena2()',"");

    CambiarSeguir('Escena4()',"");

    CambiarDialogo("Esta es Nova. LLeva una gema en su frente y es mas prudente que Casper");

    Nova("16%","42%","0","0");
    

    
}
function Escena4(){

    
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>","");

    CambiarVolver('Escena3()',"");

    CambiarSeguir('Escena5()',"");

    CambiarDialogo("Tu les acompañaras en su viaje y les ayudaras a tomar las decisiones Necesarias. Buena Suerte");

    Casper("10%","30%","0","0");

    Nova("12%","30%","0","0");

    

    

}
function Escena5 (){
    
    BorrarContenido();

    MeterContenido("<div id='puerta' onclick ='Escena6()'></div>",'../Imagenes/Casa.jpg');

    CambiarVolver('Escena4()',"");

    CambiarSeguir("",'../Imagenes/NoSeguir.png');

    CambiarDialogo("Esta es la casa de Casper y Nova"+" <br></br>"+" (Pulsa la puerta para entrar)");

    document.getElementById("Principal").style.backgroundSize = "content";
    
   
    let puerta = document.getElementById("puerta");
    puerta.style.width = "6%";
    puerta.style.height = "10%";
    
    puerta.style.backgroundImage ="url('../Imagenes/Puerta.png')";
    puerta.style.backgroundPosition = "center";
    puerta.style.backgroundRepeat = "no-repeat";
    puerta.style.backgroundSize = "contain";
    puerta.style.position = "relative";
    puerta.style.top = "71%";
    puerta.style.left = "57%";

}
function Escena6 (){

    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>",'../Imagenes/Salon.jpg');

    CambiarVolver('Escena5()',"");

    CambiarSeguir("Escena7()","");

    CambiarDialogo("Nova: Casper date prisa o no llegaremos para coger sitio en el Motel!!!");

    Nova("35%","35%","0","0");

}
function Escena7 (){

    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> "+"<div id='puerta' onclick ='Escena8()'></div>",'../Imagenes/Salon.jpg');

    CambiarVolver('Escena6()',"");

    CambiarSeguir("","../Imagenes/NoSeguir.png");

    CambiarDialogo("Casper: Ya voy!!! "+"<br></br> "+"(Pulsa la puerta de la entrada para salir)");

    Nova("35%","35%","0","0");

    let puerta = document.getElementById("puerta");
    puerta.style.width = "30%";
    puerta.style.height = "60%";
    puerta.style.bottom = "30%";
    puerta.style.position = "relative";
    
}
function Escena8 (){  
    
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>",'../Imagenes/Casa.jpg');

    CambiarVolver('Escena7()',"");

    CambiarSeguir("Escena9()","../Imagenes/BusDia.png");

    CambiarDialogo("Nova:Bien. Ya estamos listos para la aventura" +" <br></br> "+"(Pulsa el bus para continuar)");

    Nova("52%","3%","0","0");
   
    Casper("49%","3%","0","0");
   
}
function Escena9(){
     
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>",'../Imagenes/Casa.jpg');

    CambiarVolver('Escena8()',"../Imagenes/BusNoche.png");

    CambiarSeguir("Escena10()","");

    CambiarDialogo("");

    Nova("52%","3%","0","0");
   
    Casper("49%","3%","0","0");
   
}
