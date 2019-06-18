var mensaje:string = "Hello world";
console.log(mensaje);

//comment
/* multiline comment */

var mynum:number = 12; //64 bits
var mystring:string = "string";
var mybool:boolean = true;
var myvoid:void; //mostly for funcitons
// also have null and undefined types

//the following will break
//var total = "hello";
//total = 22;

//var total:number = "0";

var word = "hello";
var concat = word+15;
console.log(concat);

var n1 = 10;
var n2 = 3;
var n3 = n1/n2;
console.log(n3);

console.log("line\nbreak");

//this is a cast
var a = '1';
var b = <number> <any> a;
console.log(b);