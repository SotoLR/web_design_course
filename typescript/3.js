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
