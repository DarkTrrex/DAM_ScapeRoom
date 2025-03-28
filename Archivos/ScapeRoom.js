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

function Casper (width,height,top,left,right,bottom){

    casper = document.getElementById("Casper");
    casper.style.width = width;
    casper.style.height = height;
    casper.style.top =top;
    casper.style.left =left;
    casper.style.right = right;
    casper.style.bottom = bottom;
}
function Nova(width,height,top,left,right,bottom){ 

    nova = document.getElementById("Nova");
    nova.style.width = width;
    nova.style.height = height;
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
function Lista (numero,onclicks){
    let nuevo = "<ul id='lista'>";

    for(i = 0;i < numero; i++){
        nuevo += "<li class='opcion' onclick="+onclicks[i]+"></li>";
    }

    nuevo += "</ul>";
    return nuevo;
}
function ElementoLista (Class,frases){

    let elementos = document.getElementsByClassName(Class); /*Obtengo varios elementos que son los que tengan esta clase */

    let elemento;

    for(i = 0;i < elementos.length; i++){ //Como son varios los tengo que separar

        elemento = elementos[i];

        elemento.style.position = "relative";
        
        elemento.innerHTML = frases[i];
    }
     
    
}
function Incorrecto (){
    document.getElementById('code').style.backgroundColor = "red";
    document.getElementById('code').value= 'Incorrecto';   
    document.getElementById('code').style.color = 'brown'; 
}
function Correcto (){
    document.getElementById('code').style.backgroundColor = "greenyellow";
    document.getElementById('code').value= 'Correcto';   
    document.getElementById('code').style.color = 'green'; 
}

/*Escenas: */

function Escena1 (){

    BorrarContenido();

    MeterContenido("<div id='prueba' onclick = 'Escena17_1()'></div>",'../Imagenes/Casper_y_Nova.jpg');

    CambiarVolver('DeVuelta()',"");

    CambiarSeguir('Escena2()',"");

    CambiarDialogo("Un dia 2 magos aburridos deciden tomar un viaje");

    Objeto("prueba","50%","50%","0","","0","");
    
}

function Escena2 (){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>",'../Imagenes/galaxiaCasper.jpg');

    CambiarVolver('Escena1()',"");

    CambiarSeguir('Escena3()',"");

    CambiarDialogo("Este es Casper. Lleva un gorro de dormir y a veces es muy precipitado");

    Casper("25%","60%","15%","37%","0","0"); /*width,height,top,left,right,bottom*/
    

  
 
}
function Escena3(){

    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>",'../Imagenes/galaxiaNova.jpg');

    CambiarVolver('Escena2()',"");

    CambiarSeguir('Escena4()',"");

    CambiarDialogo("Esta es Nova. LLeva una gema en su frente y es mas prudente que Casper");

    Nova("25%","60%","15%","37%","0","0"); /*width,height,top,left,right,bottom*/
    

    
}
function Escena4(){

    
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>","");

    CambiarVolver('Escena3()',"");

    CambiarSeguir('Escena5()',"");

    CambiarDialogo("Tu les acompañaras en su viaje y les ayudaras a tomar las decisiones Necesarias. Buena Suerte");

    Casper("25%","60%","10%","22%","0","0"); /*width,height,top,left,right,bottom*/

    Nova("25%","60%","12%","22%","0","0"); /*width,height,top,left,right,bottom*/

    

    

}
function Escena5 (){
    
    BorrarContenido();

    MeterContenido("<div id='puerta' onclick ='Escena6()'></div>",'../Imagenes/Casa.jpg');

    CambiarVolver('Escena4()',"");

    CambiarSeguir("",'../Imagenes/NoSeguir.png');

    CambiarDialogo("Esta es la casa de Casper y Nova"+"<br>"+" (Pulsa la puerta para entrar)");

    Objeto("puerta","5%","8%","72%","","58%",""); /*id,width,height,top,bottom,left,right */
   
    
   
    

}
function Escena6 (){

    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>",'../Imagenes/Salon.jpg');

    CambiarVolver('Escena5()',"");

    CambiarSeguir("Escena7()","");

    CambiarDialogo("Nova: Casper date prisa o no llegaremos para coger sitio en el Motel!!!");

    Nova("20%","50%","35%","35%","0","0"); /*width,height,top,left,right,bottom*/

}
function Escena7 (){

    BorrarContenido();
    
    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> "+"<div id='puerta' onclick ='Escena8()'></div>",'../Imagenes/Salon.jpg');

    CambiarVolver('Escena6()',"");

    CambiarSeguir("","../Imagenes/NoSeguir.png");

    CambiarDialogo("Casper: Ya voy!!! "+"<br>"+"(Pulsa la puerta de la entrada para salir)");

    Nova("20%","50%","35%","35%","0","0"); /*width,height,top,left,right,bottom*/

    Objeto("puerta","15%","62%","","28%","",""); /*id,width,height,top,bottom,left,right */
   
}
function Escena8 (){  
    
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>",'../Imagenes/Casa.jpg');

    CambiarVolver('Escena7()',"");

    CambiarSeguir("Escena9()","../Imagenes/BusDia.png");

    CambiarDialogo("Nova:Bien. Ya estamos listos para la aventura" +"<br>"+"(Pulsa el bus para continuar)");

    Nova("12%","30%","70%","66%","",""); /*width,height,top,left,right,bottom*/
   
    Casper("12%","30%","68%","66%","",""); /*width,height,top,left,right,bottom*/
   
}
function Escena9(){
     
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <div id='puerta' onclick='Escena10()'></div>",'../Imagenes/Motel.jpg');

    CambiarVolver('Escena8()',"../Imagenes/BusNoche.png");

    CambiarSeguir("","../Imagenes/NoSeguir.png");

    CambiarDialogo("Nova: Por fin hemos llegado.Hasta se nos ha hecho de noche. Dejemos el equipaje"+"<br>"+"(Pulsa la puerta para entrar en la habitacion)");

    Nova("12%","30%","70%","66%","",""); /*width,height,top,left,right,bottom*/
   
    Casper("12%","30%","68%","66%","",""); /*width,height,top,left,right,bottom*/
   
    Objeto("puerta","5%","20%","26%","","54%",""); /*id,width,height,top,bottom,left,right */
    
}
function Escena10(){
    
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <div id='cuadro'></div>" ,'../Imagenes/Interior_motel.jpg');

    CambiarVolver('Escena9()',"");

    CambiarSeguir('Escena11()',"");

    CambiarDialogo("Nova: Bien, ya estamos instalados." + "<br>"+"Casper: Yo voy a ir al baño");

    Nova("20%","50%","52%","3%","0","0"); /*width,height,top,left,right,bottom*/
   
    Casper("20%","50%","49%","3%","0","0"); /*width,height,top,left,right,bottom*/
    
    Objeto("cuadro","10%","15%","","42%","42%",""); /*id,width,height,top,bottom,left,right */

}
function Escena11(){

    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <div id='cuadro' onclick = 'cuadro()'></div><div id='armario' onclick = 'Armario()'></div> <div id='ventana' onclick='ventana()'></div>",'../Imagenes/Interior_motel.jpg');

    CambiarVolver('Escena10()',"");

    CambiarSeguir('Escena12()',"");

    CambiarDialogo("Nova: Ahora que Casper se ha ido al baño es buen momento para explorar la casa"+"<br>"+"(Pulsa en las zonas clikeables para investigarlas)");

    Nova("20%","50%","52%","40%","0","0"); /*width,height,top,left,right,bottom*/
   
    Objeto("armario","15%","95%","","65%","0",""); /*id,width,height,top,bottom,left,right */

    Objeto("ventana","15%","75%","","155%","82%",""); /*id,width,height,top,bottom,left,right */

    Objeto("cuadro","10%","15%","","41.5%","42%",""); /*id,width,height,top,bottom,left,right */
    
    
}
/*Elementos: */

function Armario(){

    BorrarContenido();

    MeterContenido("",'../Imagenes/Armario.jpg');

    CambiarVolver('Escena11()',"");

    CambiarSeguir('Escena11()',"");

    CambiarDialogo("Nova: En este armario caben muchas cosas, no me imaginaba que tuviera el suficiente espacio para nuestra ropa");
}
function cuadro (){

    BorrarContenido();

    MeterContenido("",'../Imagenes/Cuadro.jpg');

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

    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/><div id='cuadro'></div>",'../Imagenes/Interior_motel.jpg');

    CambiarVolver('Escena11()',"");

    CambiarSeguir('Escena13()',"");

    CambiarDialogo("Casper: Ya estoy de vuelta" + "<br>"+"Nova: Bien, yo ya he estado revisando la habitacion. Voto por ir a dar un paseo");

    Nova("20%","50%","52%","40%","0","0"); /*width,height,top,left,right,bottom*/
    Casper("20%","50%","49%","","20%","0"); /*width,height,top,left,right,bottom*/

    Objeto("cuadro","10%","15%","","42%","42%",""); /*id,width,height,top,bottom,left,right */
    
}

function Escena13() {

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <div id='papel' onclick='codigo()'></div>",'../Imagenes/Bosque3.jpg');

    CambiarVolver('Escena12()',"");

    CambiarSeguir('Escena14()',"");

    CambiarDialogo("Nova: Que bonita noche hace"+"<br>"+"Casper: Seguro que hay un paisaje mucho mas bonito si caminamos un poco mas");

    Nova("20%","50%","52%","50%","0","0"); /*width,height,top,left,right,bottom*/
    Casper("20%","50%","49%","50%","","0"); /*width,height,top,left,right,bottom*/

    Objeto("papel","2%","7%","","45%","75%",""); /*id,width,height,top,bottom,left,right */
}

/*Mas Elementos: */

function codigo (){

    BorrarContenido();

    MeterContenido("",'../Imagenes/Codigo.png');

    CambiarVolver('Escena13()',"");

    CambiarSeguir('Escena13()',"");

    CambiarDialogo("Parece una pista. Servira para mas adelante");

 
}

function Escena14(){
    
    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>",'../Imagenes/Cabaña.jpg');

    CambiarVolver('Escena13()',"");

    CambiarSeguir('Escena15()',"");

    CambiarDialogo("Nova: Esa cabaña de ahi da un poco de miedo, yo diria de seguir"+"<br>"+"Casper: A mi me parece emocionante, entremos");

    Nova("15%","40%","52%","50%","0","0"); /*width,height,top,left,right,bottom*/
    Casper("15%","40%","49%","50%","","0"); /*width,height,top,left,right,bottom*/
}
function Escena15(){

    BorrarContenido();

    let nuevo = Lista(2,['Escena16_1()','Escena16_2()']); /*numero de elementos li, funciones para cada elemento*/

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> "+nuevo,'../Imagenes/Cabaña.jpg');

    CambiarVolver('Escena14()',"");

    CambiarSeguir('',"../Imagenes/NoSeguir.png");

    CambiarDialogo("Escoge a quien hacer caso"+"<br>"+"(Despues de elegir,no podras volver atras)");

    Nova("15%","40%","52%","50%","0","0"); /*width,height,top,left,right,bottom*/
    Casper("15%","40%","49%","50%","","0"); /*width,height,top,left,right,bottom*/

    Objeto("lista","60%","60%","","25%","18%",""); /*id,width,height,top,bottom,left,right */
    ElementoLista ("opcion",["Casper","Nova"]); /*Class,frases*/
}
function Escena16_1(){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>",'../Imagenes/Cabaña.jpg');

    CambiarVolver('Escena15()',"");

    CambiarSeguir('Escena17_1()',"");

    CambiarDialogo("Casper: Buena eleccion.Ya veras sera divertido");

    Nova("15%","40%","52%","50%","0","0"); /*width,height,top,left,right,bottom*/
    Casper("15%","40%","49%","50%","","0"); /*width,height,top,left,right,bottom*/
}
function Escena17_1(){

    BorrarContenido();

    MeterContenido("<input id='code' type='text' size='4' minlength='4' maxlength='4' placeholder='Code'>",'../Imagenes/Candado.jpg');

    CambiarVolver('Escena16_1()',"");

    CambiarSeguir('Escena18_1()',"");

    CambiarDialogo("Nova: Parece que necesitamos un codigo para entrar."+"<br>"+"Casper: Yo encontre uno antes de llegar aqui y despues de salir del Motel");
    
    Objeto("code","13%","13%","40%","","38%",""); /*id,width,height,top,bottom,left,right */
}
function Escena18_1(){
    
    if(document.getElementById('code').value != 1958){

        BorrarContenido();

        MeterContenido("<input id='code' type='text' size='4' minlength='4' maxlength='4' placeholder='Code'>",'../Imagenes/Candado.jpg');

        CambiarVolver('Escena17_1()',"");

        CambiarSeguir('',"../Imagenes/NoSeguir.png");

        CambiarDialogo("Nova: Vaya, parece que el codigo no es correcto, yo seguiria por el camino de antes");
    
        Objeto("code","13%","13%","40%","","38%",""); /*id,width,height,top,bottom,left,right */
    
        Incorrecto();   

    }else{
        BorrarContenido();

        MeterContenido("<input id='code' type='text' size='4' minlength='4' maxlength='4' placeholder='Code'>",'../Imagenes/Candado.jpg');

        CambiarVolver('Escena17_1()',"");

        CambiarSeguir('Escena19_1()',"");

        CambiarDialogo("Casper: Genial, el codigo es correcto, Entremos!!!"+"<br>"+"Nota: A partir de aqui no podras volver, la opcion es tuya");
    
        Objeto("code","13%","13%","40%","","38%",""); /*id,width,height,top,bottom,left,right */
    
        Correcto(); 
    }
}
function Escena19_1 (){

    BorrarContenido();

    MeterContenido("",'../Imagenes/Interior_abandonada.jpg');

    CambiarVolver('',"../Imagenes/NoVolver.png");

    CambiarSeguir('Escena20_1',"");

    CambiarDialogo("Nova: Esto no me gusta nada hay, por las escaleras se oye un ruido extraño y en la habitacion de enfrente huele a quemado");
    
    Objeto("code","13%","13%","40%","","38%",""); /*id,width,height,top,bottom,left,right */
}
