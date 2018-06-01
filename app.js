alert("hola");
/*Se declara variable uName para guardar el nombre del usuario*/
var uName = prompt("Ingresa tu nombre").toUpperCase();

//Se valida que el usuario ingrese una palabra//
while (uName == false || uName === " ") {
    alert("no has escrito un nombre, intentalo de nuevo");
    uName = prompt("Ingresa tu nombre").toUpperCase();
} 

/*se declara userName para remplasar el contenido del id 'nombre' 
y se remplaza el contenido del Id 'nombre'por lo ingresado por el usuario*/
var userName = document.getElementById ("nombre");
userName.innerHTML = uName; 

//Se declara variable ansewrConatainer para modificar id contenedor de respuestas
var answerContainer = document.getElementById ("contenedorRespuestas"),
//con la variable play se preguta al usuario si quiere jugar
play = confirm ("¿Quieres jugar?"); 

if (play) {
     alert("Responde con el numero de la respuesta correcta");
     //Creamos variables para las preguntas y respuetas
    var answerOne, answerTwo, answerThree,
    qPrompt = "¿QUÉ ES UN PROMPT?\n1.UN JUEGO\n2.UN ELEMENTO DE JAVA\n3.ELEMENTO DE JAVASCRIPT",
    qJs = "¿ES LO MISMO JAVASCRIPT Y JAVA?\n1.AMBAS SON IGUALES\n2.NO SON IGUALES",
    qHtml = "¿QUÉ ES EL HTML?\n1.UN INTERPRETE\n2.UN LENGUAJE DE PROGRAMACIÓN\n3.LAS 2 ANTERIORES",
    corrects = document.getElementById("correctas"),
    incorrects = document.getElementById("incorrectas");

    //se guardan las respuestas del usuario
    answerOne = parseInt (prompt(qPrompt));
    answerTwo = parseInt (prompt(qJs));
    answerThree = parseInt (prompt(qHtml));
    
    var correctOne = "\n ", correctTwo = "\n ", correctThree = "\n ", incorrectOne = "\n ", incorrectTwo = "\n ", incorrectThree = "\n ";

    // comparamos pregunta 1
    while (answerOne===0 || answerOne>3) {//se valida que el usuario ingrese un numero del 1 al 3
        alert ("RESPUESTA INVALIDA EN PREGUNTA 1");
        answerOne = parseInt (prompt(qPrompt));
    } 
    if(answerOne===3){
        qPrompt = "¿QUÉ ES UN PROMPT?\n" + "<br/>" + "1.UN JUEGO\n" + "<br/>" + "2.UN ELEMENTO DE JAVA\n" + "<br/>" + "3.ELEMENTO DE JAVASCRIPT";
        correctOne = qPrompt + "<br/>TU RESPUESTA FUE LA No. " + answerOne + "<br/><br/>";
    } else {
        qPrompt = "¿QUÉ ES UN PROMPT?\n" + "<br/>" + "1.UN JUEGO\n" + "<br/>" + "2.UN ELEMENTO DE JAVA\n" + "<br/>" + "3.ELEMENTO DE JAVASCRIPT";
        incorrectOne = qPrompt + "<br/>TU RESPUESTA FUE LA NO. " + answerOne + "<br/><br/>";
    }

    // comparamos pregunta 2
    while (answerTwo===0 || answerTwo>2) {// || answerTwo!=true) {//se valida que el usuario ingrese un numero del 1 al 2
        alert ("RESPUESTA INVALIDA EN PREGUNTA 2");
        answerTwo = parseInt (prompt(qJs));
    }
    if(answerTwo===2){
        qJs = "¿ES LO MISMO JAVASCRIPT Y JAVA?\n" + "<br/>" + "1.AMBAS SON IGUALES\n" + "<br/>" + "2.NO SON IGUALES";
        correctTwo = qJs + "<br/>TU RESPUESTA FUE LA No. " + answerTwo + "<br/><br/>";
    } else {
        qJs = "¿ES LO MISMO JAVASCRIPT Y JAVA?\n" + "<br/>" + "1.AMBAS SON IGUALES\n" + "<br/>" + "2.NO SON IGUALES";
        incorrectTwo = qJs + "<br/>TU RESPUESTA FUE LA NO. " + answerTwo + "<br/><br/>";
    }

    // comparamos pregunta 3
    while (answerThree===0 || answerThree>3) { // || answerThree!=true) {//se valida que el usuario ingrese un numero del 1 al 3
        alert ("RESPUESTA INVALIDA EN PREGUNTA 3");
        answerThree = parseInt (prompt(qHtml));
    }
    if(answerThree===1){
        qHtml = "¿QUÉ ES EL HTML?\n" + "<br/>" + "1.UN INTERPRETE\n" + "<br/>" + "2.UN LENGUAJE DE PROGRAMACIÓN\n" + "<br/>" + "3.LAS 2 ANTERIORES";
        correctThree = qHtml + "<br/>TU RESPUESTA FUE LA No. " + answerThree + "<br/><br/>";
    } else {
        qHtml = "¿QUÉ ES EL HTML?\n" + "<br/>" + "1.UN INTERPRETE\n" + "<br/>" + "2.UN LENGUAJE DE PROGRAMACIÓN\n" + "<br/>" + "3.LAS 2 ANTERIORES";
        incorrectThree = qHtml + "<br/>TU RESPUESTA FUE LA NO. " + answerThree + "<br/><br/>";
    }
    
    //mostramos respuestas en la pagina
    answerContainer.innerHTML = uName + ", TUS RESPUESTAS FUERON:";
    
    corrects.innerHTML = correctOne +  "<br/>" + "<br/>" + correctTwo +  "<br/>" + "<br/>" + correctThree;
    incorrects.innerHTML = incorrectOne + "<br/>" + "<br/>" + incorrectTwo + "<br/>" + "<br/>" + incorrectThree;


}//Si no quiere jugar, la pagina se despide
else {
    answerContainer.innerHTML = "HASTA PRONTO " + uName;
    document.getElementById ("titulo1").innerHTML = " ";
    document.getElementById ("titulo2").innerHTML = " ";
 }