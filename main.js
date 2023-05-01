 function email(nombre, apellido, edad){
      alert(`Hola ${nombre} ${apellido} bienvenid@, tienes ${edad} años`);
 }


 let nombre = prompt("ingrese su nombre")
 let apellido = prompt("ingrese su apellido")
 let edad = parseInt(prompt("ingrese su edad"))

 email(nombre, apellido, edad)


 let numeroUno = parseInt(prompt("ingrese su primer numero")) 
 let numeroDos = parseInt(prompt("ingrese su segundo numero")) 
 let accion = prompt("Ingrese + , - , * o /")

 if (accion === "+"){
     alert(numeroUno + numeroDos)
 }else if (accion === "-"){
     alert(numeroUno - numeroDos)
 }else if (accion === "*"){
     alert(numeroUno * numeroDos)
 }else if (accion === "/"){
     alert(numeroUno / numeroDos)
 }else {
     alert("no ingresaste un valor correcto")
 }

 let numero = parseInt(prompt("Ingrese las veces que quiera ser saludado"))

 for (i = 1; i <= numero; i++){
     alert("hola")
 }