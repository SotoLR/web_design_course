var numero = 12;
class Numero{
	numero_valor = 13;
	static sval = 10;
	resultado:number = 0;

	guardar():void{
		var variable_local = 14;
	}

	suma(num1:number, num2:number):number{ //THIS IS A METHOD
		var resultado = num1+num2;
		//return this.resultado; //gives 0
		return resultado; //gives sum
	}
}

console.log(numero);
console.log(Numero.sval);
var obj = new Numero();
console.log(obj.numero_valor);
obj.guardar();
//console.log(obj.variable_local); //breaks, variable doesn exist outside of scope

console.log(obj.numero_valor);
console.log(obj.suma(1,2));

var x = "32";
var y = +x;
console.log(typeof y);

var z = Number('1234');
console.log("valor: "+z+" tipo: "+typeof z);

var w = parseInt('1234');
console.log("valor: "+w+" tipo: "+typeof w);

var v = !!"2";
console.log("valor: "+v+" tipo: "+typeof v);

var s = ""+3;
console.log("valor: "+s+" tipo: "+typeof s);

var arr:number[]=[1,2,3,4,5];
console.log(arr[4]);

var nombre:string[] = new Array("Juan","Pedro","Jose");
for(var i = 0; i<nombre.length; i++){
	console.log(nombre[i]);
}

function func(arr:string[]){ //THIS IS A FUNCTION
	console.log(arr);	
}

function func2(arr?:string[]){ //arr is optional here
	console.log(arr);	
}
console.log("----------");
func2(nombre);

function function2(...num:number[]){
	var i = 0;
	var suma :number = 0;
	for(var i = 0; i<num.length; i++){
		suma = suma + num[i];
	}

	console.log(suma);
}
function2(1,2,3,4,5);


function calculo(precio:number, iva:number = 1.16){
	var total = precio * iva;
	console.log(total);
}

calculo(100,2);
console.log("+++++");
calculo(100);

var tup = [1,"hola"];
console.log(tup[0]);
console.log(tup[1]);
tup[2] = "string";
console.log(tup);
tup.pop();
console.log(tup);
tup.push(12);
console.log(tup);