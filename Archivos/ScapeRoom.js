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

    let elementos = document.getElementsByClassName(Class); 

    let elemento;

    for(i = 0;i < elementos.length; i++){ //Como son varios los tengo que separar

        elemento = elementos[i];

        elemento.style.position = "relative";
        
        elemento.innerHTML = frases[i];
    }
     
    
}

let agotado = null; /*La declaro como una variable global para que exista en todas las funciones.*/
function Temporizador(tiempo){
     agotado = setTimeout(() => {
        CambiarDialogo("<span id='pista'>Pista: Cuando has salido del hotel podrias haberte encontrado con alguna parte de un codigo. Si ya lo has encontrado fijate en los colores del codigo y asocialos con algo que hayas investigado</span>"); /*Frase que saldra cuando expire el tiempo*/
    }, tiempo*1000); /*Milisegundos que van a pasar hasta que se cambie la frase de la Consola*/
}

function QuitarTemporizador (){ /*Hago este metodo para quitar el temporizador cambiando el valor de agotado. Si es igual a 0 no haria nada*/
    if(agotado){
        clearTimeout(agotado); //Desactivo el temporizador
        agotado = null; // Quito el temporizador y pongo valor null
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
function ReproducirAudio (sonido){
    
    let audio = document.getElementById(sonido);
    audio.play();
}

/*Zonas Ocultas del Scaperoom: */

function Armario(){

    BorrarContenido();

    MeterContenido("<div id='a'>A</div>",'../Imagenes/Armario.jpg');

    CambiarVolver('Escena11()',"");

    CambiarSeguir('Escena11()',"");

    CambiarDialogo("Nova: En este armario caben muchas cosas, no me imaginaba que tuviera el suficiente espacio para nuestra ropa");
    Objeto("a","5%","8%","5%","","2%",""); /*id,width,height,top,bottom,left,right */
}
function cuadro (){

    BorrarContenido();

    MeterContenido("<div id='b'>B</div>",'../Imagenes/Cuadro.jpg');

    CambiarVolver('Escena11()',"");

    CambiarSeguir('Escena11()',"");

    CambiarDialogo("Nova: Este cuadro me recuerda a un juego pero no estoy muy segura a cual");
    Objeto("b","5%","8%","5%","","2%",""); /*id,width,height,top,bottom,left,right */
}
function ventana(){
    BorrarContenido();

    MeterContenido("<div id='c'>C</div>",'../Imagenes/Bosque2.jpg');

    CambiarVolver('Escena11()',"");

    CambiarSeguir('Escena11()',"");

    CambiarDialogo("Nova: Guau, se ve un bonito el bosque desde aqui");
    Objeto("c","5%","8%","5%","","2%",""); /*id,width,height,top,bottom,left,right */
}

function codigo (){

    BorrarContenido();

    MeterContenido("",'../Imagenes/Codigo.png');

    CambiarVolver('Escena13()',"");

    CambiarSeguir('Escena13()',"");

    CambiarDialogo("Nova:Parece una pista. Servira para mas adelante");
    

 
}


/*Escenas: */

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

    CambiarDialogo("Esta es la casa de Casper y Nova"+"<br>"+"<span id='pista'>(Pulsa la puerta para entrar)</span>");

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

    CambiarDialogo("Casper: Ya voy!!! "+"<br>"+"<span id='pista'>(Pulsa la puerta de la entrada para salir)</span>");

    Nova("20%","50%","35%","35%","0","0"); /*width,height,top,left,right,bottom*/

    Objeto("puerta","15%","62%","","28%","",""); /*id,width,height,top,bottom,left,right */
   
}
function Escena8 (){  
    
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/>",'../Imagenes/Casa.jpg');

    CambiarVolver('Escena7()',"");

    CambiarSeguir("Escena9()","../Imagenes/BusDia.png");

    CambiarDialogo("Nova:Bien. Ya estamos listos para la aventura" +"<br>"+"<span id='pista'>(Pulsa el bus para continuar)</span>");

    Nova("12%","30%","70%","66%","",""); /*width,height,top,left,right,bottom*/
   
    Casper("12%","30%","68%","66%","",""); /*width,height,top,left,right,bottom*/
   
}
function Escena9(){
     
    BorrarContenido();

    MeterContenido("<img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <div id='puerta' onclick='Escena10()'></div>",'../Imagenes/Motel.jpg');

    CambiarVolver('Escena8()',"../Imagenes/BusNoche.png");

    CambiarSeguir("","../Imagenes/NoSeguir.png");

    CambiarDialogo("Nova: Por fin hemos llegado.Hasta se nos ha hecho de noche. Dejemos el equipaje"+"<br>"+"<span id='pista'>(Pulsa la puerta para entrar en la habitacion)</span>");

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

    CambiarDialogo("Nova: Ahora que Casper se ha ido al baño es buen momento para explorar la casa"+"<br>"+"<span id='pista'>(Hay 3 zonas clasificadas de la 'a' a la 'c'. Puedes inverstigarlas si quieres)</span>");

    Nova("20%","50%","52%","40%","0","0"); /*width,height,top,left,right,bottom*/
   
    Objeto("armario","15%","95%","","65%","0",""); /*id,width,height,top,bottom,left,right */

    Objeto("ventana","15%","75%","","155%","85%",""); /*id,width,height,top,bottom,left,right */

    Objeto("cuadro","10%","15%","","41.5%","42%",""); /*id,width,height,top,bottom,left,right */
    
    
}


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

    Objeto("papel","2%","2%","41%","","2%",""); /*id,width,height,top,bottom,left,right */
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

    CambiarDialogo("<span id='pista'>Escoge a quien hacer caso</span>");

    Nova("15%","40%","52%","50%","0","0"); /*width,height,top,left,right,bottom*/
    Casper("15%","40%","49%","50%","","0"); /*width,height,top,left,right,bottom*/

    Objeto("lista","60%","60%","","25%","18%",""); /*id,width,height,top,bottom,left,right */
    ElementoLista ("opcion",["Casper","Nova"]); /*Class,frases*/
}
/*Casper: */

function Escena16_1(){

    QuitarTemporizador();
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

    Temporizador(20);

}
function Escena18_1(){
    
    QuitarTemporizador();

    if(document.getElementById('code').value != 195+"B" && document.getElementById('code').value != 195+"b"){

        BorrarContenido();

        MeterContenido("<div id='code'>Incorrecto</div>",'../Imagenes/Candado.jpg');

        CambiarVolver('Escena17_1()',"");

        CambiarSeguir('',"../Imagenes/NoSeguir.png");

        CambiarDialogo("Nova: Vaya, parece que el codigo no es correcto, yo seguiria por el camino de antes");
    
        Objeto("code","15%","10%","40%","","36%",""); /*id,width,height,top,bottom,left,right */
    
        Incorrecto();   

    }else{

        BorrarContenido();

        MeterContenido("<div id='code'>Correcto</div>",'../Imagenes/Candado.jpg');

        CambiarVolver('Escena17_1()',"");

        CambiarSeguir('Escena19_1()',"");

        CambiarDialogo("Casper: Genial, el codigo es correcto, Entremos!!!"+"<br>"+"<span id='pista'>Nota: A partir de aqui no podras volver, la opcion es tuya</span>");
    
        Objeto("code","15%","10%","40%","","36%",""); /*id,width,height,top,bottom,left,right */
    
        Correcto(); 
    }
}
function Escena19_1 (){

    BorrarContenido();

    MeterContenido("",'../Imagenes/Interior_abandonada.jpg');

    CambiarVolver('',"../Imagenes/NoVolver.png");

    CambiarSeguir('Escena20_1()',"");

    CambiarDialogo("Nova: Esto no me gusta nada, por las escaleras se oye un ruido extraño y en la habitacion de enfrente huele a quemado");
    
    
}
function Escena20_1(){

    BorrarContenido();

    let nuevo = Lista(2,["Escena21_1_1()","Escena21_1_2()"]);

    MeterContenido(nuevo,'../Imagenes/Interior_abandonada.jpg');

    CambiarVolver('Escena19_1()',"");

    CambiarSeguir('',"../Imagenes/NoSeguir.png");

    CambiarDialogo("Elige con cuidado que camino coger"+"<br>"+"(No podras volver atras a partir de ahora)");
    
    Objeto("lista","80%","80%","10%","","8%",""); /*id,width,height,top,bottom,left,right */
    ElementoLista ("opcion",["Escaleras","Habitacion"]); /*Class,frases*/
}

/*Casper-Escalera: */

function Escena21_1_1(){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='estatua' src='../Imagenes/Estatua.png' alt='Estatua'>",'../Imagenes/Atico.jpg');

    CambiarVolver('',"../Imagenes/NoVolver.png");

    CambiarSeguir('Escena22_1_1()',"");

    Nova("23%","60%","30%","50%","",""); /*width,height,top,left,right,bottom*/
    Casper("22%","58%","30%","50%","",""); /*width,height,top,left,right,bottom*/

    CambiarDialogo("Nova: Parece una estatua. Me suena haberla visto en el museo de al lado de casa."+"<br>"+"Casper: Seguro que si la devolvemos nos dan mazo pasta");

    Objeto("estatua","50%","70%","30%","","","58%"); /*id,width,height,top,bottom,left,right */
}
function Escena22_1_1(){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='estatua' src='../Imagenes/Estatua.png' alt='Estatua' onclick ='ReproducirAudio(\"Extraterrestre\")' > <audio  id='Extraterrestre' src='../Audios/Extraterrestre.mp3'></audio>",'../Imagenes/Atico.jpg');

    CambiarVolver('',"../Imagenes/NoVolver.png");

    CambiarSeguir('FIN1_1()',"");

    Nova("23%","60%","30%","50%","",""); /*width,height,top,left,right,bottom*/
    Casper("22%","58%","30%","50%","",""); /*width,height,top,left,right,bottom*/

    CambiarDialogo("Casper: Y ahora que lo pienso esta estatua hacia ruidos raros para simular un Extraterrestre"+"<br>"+" Nova:Es verdad eso explica lo del ruido");

    Objeto("estatua","50%","70%","30%","","","58%"); /*id,width,height,top,bottom,left,right */
}

/*Casper-Habitacion: */

function Escena21_1_2(){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Chimenea' src = '../Imagenes/Chimenea_llamas.png'> <img id='Extintor' src = '../Imagenes/Extintor.png' onclick='Escena22_1_2()'> <audio loop id='Incendio' src='../Audios/Incendio.mp3'></audio>",'../Imagenes/Habitacion_abandonada.jpg');

    CambiarVolver('',"../Imagenes/NoVolver.png");

    CambiarSeguir('',"../Imagenes/NoSeguir.png");

    ReproducirAudio('Incendio');

    Nova("23%","60%","42%","","",""); /*width,height,top,left,right,bottom*/
    Casper("22%","58%","38%","","",""); /*width,height,top,left,right,bottom*/

    CambiarDialogo("Casper: LA CHIMENEA ESTA EN LLAMAS, VAMOS A MORIIIRR!!!"+"<br>"+"Nova: Mira, un extintor.Cogelo,RAPIDO!!!"+"<br>"+"<span id='pista'>(Pulsa el extintor para apagar el fuego)</span>");

    Objeto("Chimenea","30%","50%","35%","","3%",""); /*id,width,height,top,bottom,left,right */
    Objeto("Extintor","15%","30%","40%","","5%",""); /*id,width,height,top,bottom,left,right */
    

}
function Escena22_1_2 (){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Chimenea' src = '../Imagenes/Chimenea_llamas.png'> <img id='Extintor' src = '../Imagenes/Extintor.png'> <img id='Fuego' src='../Imagenes/Fuego.png'>  <audio loop id='Incendio' src='../Audios/Incendio.mp3'></audio>",'../Imagenes/Habitacion_abandonada_Incendio.jpg');

    CambiarVolver('',"../Imagenes/NoVolver.png");

    CambiarSeguir('FIN1_2()',"");

    ReproducirAudio('Incendio');

    Nova("23%","60%","42%","","",""); /*width,height,top,left,right,bottom*/
    Casper("22%","58%","38%","","",""); /*width,height,top,left,right,bottom*/

    CambiarDialogo("Nova: DEMASIADO TARDE"+"<br>"+"Casper: AAAHHHHH!!!");

    Objeto("Chimenea","30%","50%","35%","","3%",""); /*id,width,height,top,bottom,left,right */
    Objeto("Extintor","15%","30%","40%","","5%",""); /*id,width,height,top,bottom,left,right */
    Objeto("Fuego","15%","30%","12%","","78%",""); /*id,width,height,top,bottom,left,right */
}

/*Nova: */

function Escena16_2(){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>",'../Imagenes/Cabaña.jpg');

    CambiarVolver('Escena15()',"");

    CambiarSeguir('Escena17_2()',"");

    CambiarDialogo("Nova: Ya veras que por aqui no habra ningun peligro"+"<br>"+"Casper: Jo. Con lo chulo que hubiera estado entrar");

    Nova("15%","40%","52%","50%","0","0"); /*width,height,top,left,right,bottom*/
    Casper("15%","40%","49%","50%","","0"); /*width,height,top,left,right,bottom*/
}
function Escena17_2(){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/>",'../Imagenes/Camino.jpg');

    CambiarVolver('Escena16_2()',"");

    CambiarSeguir('Escena18_2()',"");

    CambiarDialogo("Nova:Parece que hay alguien alli al fondo me pregunto quien sera"+"<br>"+"Vamos a verle");

    Nova("15%","40%","63%","20%","",""); /*width,height,top,left,right,bottom*/
    Casper("15%","40%","60%","20%","",""); /*width,height,top,left,right,bottom*/
}
function Escena18_2(){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Bonnie' src='../Imagenes/Bonnie_sentado.png' alt='Bonnie'/>",'../Imagenes/Acantilado.jpg');

    CambiarVolver('Escena17_2()',"");

    CambiarSeguir('Escena19_2()',"");

    CambiarDialogo("Nova: Quien eres?"+"<br>"+"Casper: Que haces aqui?"+"<br>"+"Bonnie:Soy Bonnie y he venido aqui porque la vida ya no tiene sentido para mi");

    Nova("10%","25%","33%","0","",""); /*width,height,top,left,right,bottom*/
    Casper("10%","25%","30%","0","",""); /*width,height,top,left,right,bottom*/
    Objeto("Bonnie","25%","30%","30%","","10%",""); /*id,width,height,top,bottom,left,right */
}
function Escena19_2(){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Bonnie' src='../Imagenes/Bonnie_sentado.png' alt='Bonnie'/>",'../Imagenes/Acantilado.jpg');

    CambiarVolver('Escena18_2()',"");

    CambiarSeguir('Escena20_2()',"");

    CambiarDialogo("Bonnie: Ademas, mataron a mis amigos hace poco en otro ScapeRoom y para colmo mi chimenea se incendio, dejo mi sistema de movimiento sin funcionamiento y seguramente quemo mi casa");

    Nova("10%","25%","33%","0","",""); /*width,height,top,left,right,bottom*/
    Casper("10%","25%","30%","0","",""); /*width,height,top,left,right,bottom*/
    Objeto("Bonnie","25%","30%","30%","","10%",""); /*id,width,height,top,bottom,left,right */
}
function Escena20_2(){

    QuitarTemporizador();
    BorrarContenido();
   
    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Bonnie' src='../Imagenes/Bonnie_sentado.png' alt='Bonnie'/>",'../Imagenes/Acantilado.jpg');

    CambiarVolver('Escena19_2()',"");

    CambiarSeguir('Escena21_2()',"");

    CambiarDialogo("Nova: Podemos reparate dinos como lo hacemos"+"<br>"+"Bonnie: Teneis que reiniciar mi sistema de movimiento con un codigo que perdi hace tiempo. Haciendo eso ya podreis arreglarme");

    Nova("10%","25%","33%","0","",""); /*width,height,top,left,right,bottom*/
    Casper("10%","25%","30%","0","",""); /*width,height,top,left,right,bottom*/
    Objeto("Bonnie","25%","30%","30%","","10%",""); /*id,width,height,top,bottom,left,right */
}
function Escena21_2(){

    BorrarContenido();

    MeterContenido("<input id='code' type='text' size='4' minlength='4' maxlength='4' placeholder='Code'>",'../Imagenes/Circuitos.jpg');

    CambiarVolver('Escena20_2()',"");

    CambiarSeguir('Escena22_2()',"");

    CambiarDialogo("Casper: Descuida, te repararemos"+"<br>"+"Nova: Me pregunto cual sera el codigo");

    Objeto("code","13%","13%","35%","","40%",""); /*id,width,height,top,bottom,left,right */

    Temporizador(20);
   
}
function Escena22_2(){

    QuitarTemporizador();

    if(document.getElementById('code').value != 195+"B" && document.getElementById('code').value != 195+"b"){

        BorrarContenido();

        MeterContenido("<div id='code'>Incorrecto</div>",'../Imagenes/Circuitos.jpg');

        CambiarVolver('Escena21_2()',"");

        CambiarSeguir('',"../Imagenes/NoSeguir.png");

        CambiarDialogo("Nova: Vaya no es correcto, creo que vi una hoja antes de encontrar la casa abandonada y despues de salir del motel con el codigo pero no estoy segura");
    
        Objeto("code","13%","10%","35%","","40%",""); /*id,width,height,top,bottom,left,right */
    
        Incorrecto();   

    }else{

        BorrarContenido();

        MeterContenido("<div id='code'>Correcto</div>",'../Imagenes/Circuitos.jpg');

        CambiarVolver('',"../Imagenes/NoVolver.png");

        CambiarSeguir('Escena23_2()',"");

        CambiarDialogo("Casper: Genial, el codigo es correcto, ya podemos arreglarte"+"<br>"+"<span id='pista'>Nota: A partir de aqui no puedes volver</span>");
    
        Objeto("code","13%","10%","35%","","40%",""); /*id,width,height,top,bottom,left,right */
    
        Correcto(); 
    }
}
function Escena23_2(){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Bonnie' src='../Imagenes/Bonnie.png' alt='Bonnie'/>",'../Imagenes/Acantilado.jpg');

    CambiarVolver('',"../Imagenes/NoVolver.png");

    CambiarSeguir('Escena24_2()',"");

    CambiarDialogo("Bonnie:No se como puedo daros las gracias, Ahora que lo pienso mi casa tenia el mismo codigo de entrada,Seguramente ya esta hecha pedazos por la chimenea");

    Nova("10%","25%","23%","0","",""); /*width,height,top,left,right,bottom*/
    Casper("10%","25%","20%","0","",""); /*width,height,top,left,right,bottom*/
    Objeto("Bonnie","15%","50%","10%","","10%",""); /*id,width,height,top,bottom,left,right */
}
function Escena24_2(){
    
    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Bonnie' src='../Imagenes/Bonnie.png' alt='Bonnie'/>",'../Imagenes/Acantilado.jpg');

    CambiarVolver('',"../Imagenes/NoVolver.png");

    CambiarSeguir('Escena25_2()',"");

    CambiarDialogo("Nova: No te preocupes, puedes quedarte a vivir con nosotros una temporada hasta que consigas otra");

    Nova("10%","25%","23%","0","",""); /*width,height,top,left,right,bottom*/
    Casper("10%","25%","20%","0","",""); /*width,height,top,left,right,bottom*/
    Objeto("Bonnie","15%","50%","10%","","10%",""); /*id,width,height,top,bottom,left,right */
}
function Escena25_2(){

    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Bonnie' src='../Imagenes/Bonnie.png' alt='Bonnie'/>",'../Imagenes/Acantilado.jpg');

    CambiarVolver('',"../Imagenes/NoVolver.png");

    CambiarSeguir('FIN2()',"");

    CambiarDialogo("Bonnie: De verdad hariais eso por mi?"+"<br>"+"Casper: Claro, es lo menos que podemos hacer por ti. Ven con nosotros");

    Nova("10%","25%","23%","0","",""); /*width,height,top,left,right,bottom*/
    Casper("10%","25%","20%","0","",""); /*width,height,top,left,right,bottom*/
    Objeto("Bonnie","15%","50%","10%","","10%",""); /*id,width,height,top,bottom,left,right */

}

/*Finales: */

function FIN1_1 (){
    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='estatua' src='../Imagenes/Estatua.png' alt='Estatua' > <audio loop id='Fin1_1' src='../Audios/Final1_1.mp3'></audio>",'../Imagenes/Museo.jpg');

    ReproducirAudio('Fin1_1');
    CambiarVolver('',"../Imagenes/NoVolver.png");

    CambiarSeguir('DeVuelta()',"../Imagenes/SeguirBueno.png");

    Nova("12%","30%","65%","56%","",""); /*width,height,top,left,right,bottom*/
    Casper("12%","30%","63%","56%","",""); /*width,height,top,left,right,bottom*/

    Objeto("estatua","20%","35%","60%","","10%",""); /*id,width,height,top,bottom,left,right */
    

    CambiarDialogo("FINAL SENSATO 👏👏👏👏👏"+"<br>"+"<span id='pista'>(Enhorabuena has superado el juego,Pulsa siguiente para volver a jugar)</span>");

    
}
function FIN1_2(){

    BorrarContenido();

    MeterContenido("<audio id='Final1_2' loop src= '../Audios/Final1_2.mp3'></audio>",'../Imagenes/Incendio.jpg');

    ReproducirAudio('Final1_2');

    CambiarVolver('',"../Imagenes/NoVolver.png");

    CambiarSeguir('DeVuelta()',"../Imagenes/SeguirMalo.png");

    
    CambiarDialogo("FINAL MALO 💀💀💀💀💀"+"<br>"+"<span id='pista'>(Vaya, otra vez sera,Pulsa siguiente para volver a jugar)</span>");
}
function FIN2(){
    
    BorrarContenido();

    MeterContenido("<img id='Casper' src='../Imagenes/Casper.jpg' alt='Casper'/> <img id='Nova' src='../Imagenes/Nova.jpg' alt='Nova'/> <img id='Bonnie' src='../Imagenes/Bonnie.png' alt='Bonnie' > <audio loop id='Final2' src='../Audios/Final2.mp3'></audio>",'../Imagenes/Casa.jpg');

    ReproducirAudio('Final2');
    CambiarVolver('',"../Imagenes/NoVolver.png");

    CambiarSeguir('DeVuelta()',"../Imagenes/SeguirAnimatronico.png");

    Nova("12%","30%","45%","66%","",""); /*width,height,top,left,right,bottom*/
    Casper("12%","30%","43%","66%","",""); /*width,height,top,left,right,bottom*/

    Objeto("Bonnie","20%","55%","40%","","10%",""); /*id,width,height,top,bottom,left,right */
    

    CambiarDialogo("FINAL ANIMATRONICO 🤖🤖🤖🤖🤖"+"<br>"+"<span id='pista'>(Enhorabuena has superado el juego,Pulsa siguiente para volver a jugar)</span>");
}