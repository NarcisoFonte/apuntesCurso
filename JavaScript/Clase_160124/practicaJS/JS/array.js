//1. Creamos array
var colores = new Array (10);
//Otro modo de crear array
var colores2;
colores2 = new Array (10);
colores2 [0] = "rojo";
colores2 [1] = "azul";
colores2 [2] = "verde";
colores2 [3] = "amarillo";
colores2 [5] = "turquesa";
//Otro modo de crear array
var diasSemana = new Array("lunes","martes","miércoles","jueves","viernes","sábado","domingo");
//Otro modo de crear array
var numeroSemana = [0,1,2,3,4,5,6];
//Imprimimos por pantalla.
for (let i = 0; i < 10; i++) {  
    document.writeln(colores2[i] + "<br>"); 
//Esta forma de imprimir es muy útil si no sabemos el número de elementos que contiene la array. Si queremos sacar todo esta es la manera más eficaz y segura.
}
for (let i = 0; i < colores2.length; i++) {  
    document.writeln(colores2[i] + "<br>"); 
}

document.writeln(colores2[5]);