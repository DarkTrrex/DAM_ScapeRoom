function Hola (nombre){
    if(nombre == "Nova"){
        document.getElementById("CuadroInicio").innerHTML= "Hola. Mi nombre es "+nombre+", vamos a vivir una increible aventura. Dale al boton de Start para comenzar!!!";
    }
    else{
        document.getElementById("CuadroInicio").innerHTML= "Hola. Mi nombre es "+nombre+" y estoy impaciente por empezar. Dale al boton de Start y comencemos la aventura!!!";
    }
 
}