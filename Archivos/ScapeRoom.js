/*Funciones de inicio: */
function Hola (nombre){
    
    if(nombre == "Nova"){
        document.getElementById("CuadroInicio").innerHTML= "Hola. Mi nombre es "+nombre+", vamos a vivir una increible aventura. Dale al boton de Start para comenzar!!!";
    }
    else{
        document.getElementById("CuadroInicio").innerHTML= "Hola. Mi nombre es "+nombre+" y estoy impaciente por empezar. Dale al boton de Start y comencemos la aventura!!!";
    }
 
}

/*Funciones de configuracion: */
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

function Objeto (id,width,height,top,bottom,left,right){

    let Objeto = document.getElementById(id);
    Objeto.style.position = "relative";
    Objeto.style.width = width;
    Objeto.style.top = top;
    Objeto.style.height = height;
    Objeto.style.bottom = bottom;
    Objeto.style.left = left;
    Objeto.style.right = right;
    /*Objeto.style.backgroundColor = "yellow";*/
}

/*Escenas: */

function Escena1 (){

    BorrarContenido();

    MeterContenido(/*<div id='prueba' onclick = 'Escena11()'></div>*/"",'../Imagenes/Casper_y_Nova.jpg');

    CambiarVolver('DeVuelta()',"");

    CambiarSeguir('Escena2()',"");

    CambiarDialogo("Un dia 2 magos aburridos deciden tomar un viaje");

    /*Objeto("prueba","50%","50%","0","","0","");*/
    
}

function Escena2 (){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>",'../Imagenes/galaxiaCasper.jpg');

    CambiarVolver('Escena1()',"");

    CambiarSeguir('Escena3()',"");

    CambiarDialogo("Este es Casper. Lleva un gorro de dormir y a veces es muy precipitado");

    Casper("20%","40%","0","0"); /*top,left,right,bottom*/
    

  
 
}
function Escena3(){

    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>",'../Imagenes/galaxiaNova.jpg');

    CambiarVolver('Escena2()',"");

    CambiarSeguir('Escena4()',"");

    CambiarDialogo("Esta es Nova. LLeva una gema en su frente y es mas prudente que Casper");

    Nova("20%","40%","0","0"); /*top,left,right,bottom*/
    

    
}
function Escena4(){

    
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>","");

    CambiarVolver('Escena3()',"");

    CambiarSeguir('Escena5()',"");

    CambiarDialogo("Tu les acompañaras en su viaje y les ayudaras a tomar las decisiones Necesarias. Buena Suerte");

    Casper("10%","30%","0","0"); /*top,left,right,bottom*/

    Nova("12%","30%","0","0"); /*top,left,right,bottom*/

    

    

}
function Escena5 (){
    
    BorrarContenido();

    MeterContenido("<div id='puerta' onclick ='Escena6()'></div>",'../Imagenes/Casa.jpg');

    CambiarVolver('Escena4()',"");

    CambiarSeguir("",'../Imagenes/NoSeguir.png');

    CambiarDialogo("Esta es la casa de Casper y Nova"+"<br>"+" (Pulsa la puerta para entrar)");

    Objeto("puerta","3%","7%","72%","","58%",""); /*id,width,height,top,bottom,left,right */
   
    
   
    

}
function Escena6 (){

    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>",'../Imagenes/Salon.jpg');

    CambiarVolver('Escena5()',"");

    CambiarSeguir("Escena7()","");

    CambiarDialogo("Nova: Casper date prisa o no llegaremos para coger sitio en el Motel!!!");

    Nova("35%","35%","0","0"); /*top,left,right,bottom*/

}
function Escena7 (){

    BorrarContenido();
    
    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> "+"<div id='puerta' onclick ='Escena8()'></div>",'../Imagenes/Salon.jpg');

    CambiarVolver('Escena6()',"");

    CambiarSeguir("","../Imagenes/NoSeguir.png");

    CambiarDialogo("Casper: Ya voy!!! "+"<br>"+"(Pulsa la puerta de la entrada para salir)");

    Nova("35%","35%","0","0"); /*top,left,right,bottom*/

    Objeto("puerta","15%","62%","","28%","",""); /*id,width,height,top,bottom,left,right */
   
}
function Escena8 (){  
    
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>",'../Imagenes/Casa.jpg');

    CambiarVolver('Escena7()',"");

    CambiarSeguir("Escena9()","../Imagenes/BusDia.png");

    CambiarDialogo("Nova:Bien. Ya estamos listos para la aventura" +"<br>"+"(Pulsa el bus para continuar)");

    Nova("52%","3%","0","0"); /*top,left,right,bottom*/
   
    Casper("49%","3%","0","0"); /*top,left,right,bottom*/
   
}
function Escena9(){
     
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <div id='puerta' onclick='Escena10()'></div>",'../Imagenes/Motel.jpg');

    CambiarVolver('Escena8()',"../Imagenes/BusNoche.png");

    CambiarSeguir("","../Imagenes/NoSeguir.png");

    CambiarDialogo("Nova: Por fin hemos llegado.Hasta se nos ha hecho de noche. Dejemos el equipaje"+"<br>"+"(Pulsa la puerta para entrar en la habitacion)");

    Nova("52%","3%","0","0"); /*top,left,right,bottom*/
   
    Casper("49%","3%","0","0"); /*top,left,right,bottom*/
   
    Objeto("puerta","8%","25%","","0","52%",""); /*id,width,height,top,bottom,left,right */
    
}
function Escena10(){
    
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <div id='cuadro'> <img src='../Imagenes/Cuadro.jpg'> </div>" ,'../Imagenes/Interior_motel.jpg');

    CambiarVolver('Escena9()',"");

    CambiarSeguir('Escena11()',"");

    CambiarDialogo("Nova: Bien, ya estamos instalados." + "<br>"+"Casper: Yo voy a ir al baño");

    Nova("52%","3%","0","0"); /*top,left,right,bottom*/
   
    Casper("49%","3%","0","0"); /*top,left,right,bottom*/
    
    Objeto("cuadro","10%","20%","","43%","43%",""); /*id,width,height,top,bottom,left,right */

}
function Escena11(){

    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <div id='armario' onclick = 'Armario()'></div> <div id='ventana' onclick='ventana()'></div>" +
        "<div id='cuadro' onclick = 'cuadro()'> <img src='../Imagenes/Cuadro.jpg'> </div>",'../Imagenes/Interior_motel.jpg');

    CambiarVolver('Escena10()',"");

    CambiarSeguir('Escena12()',"");

    CambiarDialogo("Nova: Ahora que Casper se ha ido al baño es buen momento para explorar la casa"+"<br>"+"(Pulsa en las zonas clikeables para investigarlas)");

    Nova("52%","40%","0","0"); /*top,left,right,bottom*/
   
    Objeto("armario","15%","95%","","50%","0",""); /*id,width,height,top,bottom,left,right */

    Objeto("ventana","15%","75%","","145%","82%",""); /*id,width,height,top,bottom,left,right */

    Objeto("cuadro","10%","20%","","213%","43%",""); /*id,width,height,top,bottom,left,right */
    
    
}
/*Elementos de la habitacion */

function Armario(){

    BorrarContenido();

    MeterContenido("",'../Imagenes/Armario.jpg');

    CambiarVolver('Escena11()',"");

    CambiarSeguir('Escena11()',"");

    CambiarDialogo("Nova: En este armario caben muchas cosas, no me imaginaba que tuviera el suficiente espacio para nuestra ropa");
}
function cuadro (){

    BorrarContenido();

    MeterContenido("",'../Imagenes/cuadro.jpg');

    CambiarVolver('Escena11()',"");

    CambiarSeguir('Escena11()',"");

    CambiarDialogo("Nova: Este cuadro me recuerda a un juego pero no estoy muy segura a cual");
}
function ventana(){
    BorrarContenido();

    MeterContenido("",'../Imagenes/Bosque2.jpg');

    CambiarVolver('Escena11()',"");

    CambiarSeguir('Escena11()',"");

    CambiarDialogo("Nova: Guau, se ve un bonito bosque desde aqui");
}

/*Mas Escenas: */

function Escena12 (){

}