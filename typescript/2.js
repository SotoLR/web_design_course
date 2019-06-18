var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var numero = 12;
var Numero = /** @class */ (function () {
    function Numero() {
        this.numero_valor = 13;
        this.resultado = 0;
    }
    Numero.prototype.guardar = function () {
        var variable_local = 14;
    };
    Numero.prototype.suma = function (num1, num2) {
        var resultado = num1 + num2;
        //return this.resultado; //gives 0
        return resultado; //gives sum
    };
    Numero.sval = 10;
    return Numero;
}());
console.log(numero);
console.log(Numero.sval);
var obj = new Numero();
console.log(obj.numero_valor);
obj.guardar();
//console.log(obj.variable_local); //breaks, variable doesn exist outside of scope
console.log(obj.numero_valor);
console.log(obj.suma(1, 2));
var x = "32";
var y = +x;
console.log(typeof y);
var z = Number('1234');
console.log("valor: " + z + " tipo: " + typeof z);
var w = parseInt('1234');
console.log("valor: " + w + " tipo: " + typeof w);
var v = !!"2";
console.log("valor: " + v + " tipo: " + typeof v);
var s = "" + 3;
console.log("valor: " + s + " tipo: " + typeof s);
var arr = [1, 2, 3, 4, 5];
console.log(arr[4]);
var nombre = new Array("Juan", "Pedro", "Jose");
for (var i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
}
function func(arr) {
    console.log(arr);
}
function func2(arr) {
    console.log(arr);
}
console.log("----------");
func2(nombre);
function function2() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var i = 0;
    var suma = 0;
    for (var i = 0; i < num.length; i++) {
        suma = suma + num[i];
    }
    console.log(suma);
}
function2(1, 2, 3, 4, 5);
function calculo(precio, iva) {
    if (iva === void 0) { iva = 1.16; }
    var total = precio * iva;
    console.log(total);
}
calculo(100, 2);
console.log("+++++");
calculo(100);
var tup = [1, "hola"];
console.log(tup[0]);
console.log(tup[1]);
tup[2] = "string";
console.log(tup);
tup.pop();
console.log(tup);
tup.push(12);
console.log(tup);
var alumno = { Nombre: "Juan", Apellido: "Velez" };
console.log(alumno.Nombre);
var Padre = /** @class */ (function () {
    function Padre(nom) {
        this.Nombre = nom;
    }
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hijo.prototype.imprimir = function () {
        console.log(this.Nombre);
    };
    return Hijo;
}(Padre));
var hijo = new Hijo("Juan");
hijo.imprimir();
