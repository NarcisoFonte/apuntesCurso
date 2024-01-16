var cadena = "Rincón de la Victoria";
//length - Longitud de la cadena.
document.writeln(cadena.length);//Muestra 21.
//substring - Fragmentos de cadena.
document.writeln("<br>" + cadena.substring(10));//Muestra "la Victoria".
document.writeln("<br>" + cadena.substring(0, 10));//Muestra "Rincón de".
document.writeln("<br>" + cadena.substring(-5));//Muestra la cadena original.
//charAt - Devuelve un caracter.
document.writeln("<br>" + cadena.charAt(5));//Muestra el caracter en la posición 5. Muestra "n".
//concat - Unir dos cadenas.
var cadena2 = "Málaga";
document.writeln("<br>" + cadena.concat(" " + cadena2));//Se muestra "Rincón de la Victoria Málaga"
//indexOf
document.writeln("<br>" + cadena.indexOf("Victoria"));//Devuelve la posición en la que empieza la subcadena Victoria.
document.writeln("<br>" + cadena.indexOf("Victoria", 5));//Devuelve la posición en la que empieza la subcadena Victoria, buscando desde el caracter 0, pero devuelve sí está o no desde la posición indicada.
document.writeln("<br>" + cadena.indexOf("Málaga"));//Devuelve -1, porque la subcadena no está dentro de la cadena.
//replace - Reemplazar subcadenas.
document.writeln("<br>" + cadena.replace("Rincón", "Calle"));//Devuelve la cadena cambiando el primer argumento por el segundo.
//split - División de cadena en un array de cadenas.
document.writeln("<br>" + cadena.split(" "));//Devuelve un array de 4 cadenas (Rincón + de + la + Victoria).
document.writeln("<br>" + cadena.split("a"));//Devuelve un array de 2 cadenas (Rincón  de  l, + Victori).
document.writeln("<br>" + cadena.split(","));//Devuelve un array de X cadenas (Rincón  de  la  Victoria) Depende de las , que hay en nuestra cadena.
document.writeln("<br>" + cadena.split(""));//Devuelve un array de cadenas independientes (R+i+n+c++ó+n+ +d+e+ +l+a+ + +V+i+c+t+o+r+i+a).
//toLowerCase - Lo vuelve todo a minúscula.
document.write("<br>" + cadena.toLowerCase());
//toUpperCase - Lo vuelve todo a mayúsculas.
document.writeln("<br>" + cadena.toUpperCase());