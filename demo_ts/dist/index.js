"use strict";
//let mesaje: string = "Hola Mundo";
//console.log(mesaje);
Object.defineProperty(exports, "__esModule", { value: true });
//esto esun comentario
/*Esto es un comentario
es múltiples línea
*/
//tipos de datos
//boolean
let esActivo = true; // let: El ambito es local, funciona dentro del scape (funtion, ciclo, if, ())
var esActivo2 = false; // var: El ámbito es en todos el arcgivo
const esActivo3 = true; // const: Para contantes
//Numbre
let entero = 15;
let enteroLArgo = 1234567892222222;
let real = 3.14116;
let binario = 0b101; //base 2
let octal = 0o10; //base 8
let hexadecimal = 0xa; //base 16
//String
let sigla = "SIS257";
let materia = "Desarrollo de Aplicaciones Int/Internet II";
let contanar = sigla + " - " + materia;
let contanar2 = `${sigla} - ${materia}`;
let mayuscula = materia.toUpperCase();
let minuscula = materia.toLowerCase();
let logitudCadena = materia.length;
let remplazo = materia.replace(/ /g, "#");
let repetir = sigla.repeat(3);
let sinespaciosExternos = ('     ' + materia).trim();
let subcadena = materia.substring(5, 10);
let separar = materia.split(" ");
//Array
let array = ['uno', 'dos', 'tres', 'cuatro'];
let arraynumerico = [1, 2, 3, 4];
let logitudarray = array.length;
let doble = arraynumerico.map(n => n * 2);
let factorial = arraynumerico.reduce((prev, curr) => prev * curr);
let revertir = arraynumerico.reverse();
let impares = arraynumerico.filter(n => n % 2 == 1);
array.shift(); // elimina el primer elemento
array.pop(); //elemina el último elemento
array.push('cinco'); //agrega un elemento al final
//tuple
let tuple = [true, 7.5, "hola", [8, 9, 10]];
//enum
var sexo;
(function (sexo) {
    sexo["M"] = "MASCULINO";
    sexo["F"] = "FEMENINO";
})(sexo || (sexo = {}));
;
var color;
(function (color) {
    color["red"] = "rojo";
    color["yellow"] = "amarillo";
    color["blue"] = "azul";
})(color || (color = {}));
;
var tipo;
(function (tipo) {
    tipo[tipo["par"] = 0] = "par";
    tipo[tipo["impar"] = 1] = "impar";
})(tipo || (tipo = {}));
;
//any
let cualquiera = 'cualquier valor';
cualquiera = 15;
//object
let objeto = { nombre: 'Juan', apellido: 'Perez', edad: 25 };
//estructuras de control
let contine;
if (arraynumerico.includes(3))
    contine = true;
else
    contine = false;
contine = arraynumerico.includes(3) ? true : false;
contine = arraynumerico.includes(3);
for (let i in array)
    console.log('for in: ' + i); //obtiene las posiciones
for (let i of array)
    console.log('fot of: ' + i); //obtiene los valores
array.forEach(i => console.log('forEach: ' + i)); //obtiene los valores
//ambito de las variables
if (materia.includes('Desarrollo')) {
    let local = true;
    console.log(local);
}
//console.log(local); //error, no existe la variable local
const poo_1 = require("./poo");
let auto = { placa: '33-5DD6', chasis: '4AD5F4A5DF45ASD4F' };
// Funcionanes
function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}
saludo('Juan');
// POO
var persona = new poo_1.Persona('12345', 'Juan', 'Pérez', 'López', new Date(2006, 5, 26), 71717171);
persona.saludar();
var estudiante = new poo_1.Estudiante('54321', 'Juan', 'Pérez', 'López', new Date(2006, 5, 26), 71717171, '26-6656');
estudiante.saludar();
console.log(auto);
console.log(contine);
//# sourceMappingURL=index.js.map