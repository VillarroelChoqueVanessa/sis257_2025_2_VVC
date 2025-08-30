//let mesaje: string = "Hola Mundo";
//console.log(mesaje);

//esto esun comentario
/*Esto es un comentario
es múltiples línea
*/

//tipos de datos
//boolean
let esActivo: boolean = true;// let: El ambito es local, funciona dentro del scape (funtion, ciclo, if, ())
var esActivo2: boolean = false;// var: El ámbito es en todos el arcgivo
const esActivo3: boolean = true;// const: Para contantes
//Numbre
let entero: number=15
let enteroLArgo: number=1234567892222222;
let real: number=3.14116;
let binario: number= 0b101; //base 2
let octal: number= 0o10; //base 8
let hexadecimal: number= 0xa; //base 16

//String
let sigla: string = "SIS257";
let materia: string ="Desarrollo de Aplicaciones Int/Internet II";
let contanar: string =sigla +" - "+materia;
let contanar2: string = `${sigla} - ${materia}`;
let mayuscula: string = materia.toUpperCase();
let minuscula: string = materia.toLowerCase();
let logitudCadena: number=materia.length;
let remplazo: string = materia.replace(/ /g,"#");
let repetir: string = sigla.repeat(3);
let sinespaciosExternos: string = ('     '+ materia).trim();
let subcadena: string = materia.substring(5,10);
let separar: string[] = materia.split(" ");

//Array

let array: string[]= ['uno','dos','tres','cuatro'];
let arraynumerico: number[]=[1, 2, 3, 4];
let logitudarray= array.length;
let doble: number[]= arraynumerico.map(n =>n*2);
let factorial= arraynumerico.reduce((prev, curr)=> prev*curr);
let revertir :number[]= arraynumerico.reverse();
let impares: number []= arraynumerico.filter(n => n%2 ==1);
array.shift();// elimina el primer elemento
array.pop();//elemina el último elemento
array.push('cinco');//agrega un elemento al final


//tuple
let tuple= [true, 7.5, "hola", [8,9,10]];

//enum
enum sexo{M= 'MASCULINO', F='FEMENINO'};
enum color{red='rojo', yellow='amarillo', blue='azul'};
enum tipo {par= 0, impar=1};

//any
let cualquiera: any= 'cualquier valor';
cualquiera= 15;

//object
let objeto: object= {nombre: 'Juan', apellido: 'Perez', edad: 25};

//estructuras de control

let contine: boolean;
if(arraynumerico.includes(3)) contine=true;
else contine=false;
contine= arraynumerico.includes(3)? true: false;
contine=arraynumerico.includes(3);

for(let i in array)console.log('for in: '+ i);//obtiene las posiciones
for (let i of array)console.log('fot of: '+ i);//obtiene los valores
array.forEach(i => console.log('forEach: '+i));//obtiene los valores

//ambito de las variables
if (materia.includes('Desarrollo')){
    let local: boolean=true;
    console.log(local);    
} 
//console.log(local); //error, no existe la variable local

import { Estudiante, Persona } from "./poo";


// Interfaces
interface IVehiculo {
  placa: string,
  chasis: string,
}
let auto: IVehiculo = { placa: '33-5DD6', chasis: '4AD5F4A5DF45ASD4F'};

// Funcionanes
function saludo(nombre: string): void {
  console.log(`Hola ${nombre}`);
}
saludo('Juan');

// POO
var persona = new Persona('12345', 'Juan', 'Pérez', 'López', new Date(2006, 5, 26), 71717171);
persona.saludar();

var estudiante = new Estudiante('54321', 'Juan', 'Pérez', 'López', new Date(2006, 5, 26), 71717171, '26-6656');
estudiante.saludar();

console.log(auto);

console.log(contine);