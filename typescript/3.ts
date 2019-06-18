var alumno = {Nombre: "Juan", Apellido:"Velez"};
console.log(alumno.Nombre);

class Padre{
	Nombre: string;
	constructor(nom:string){
		this.Nombre = nom;
	}
}

class Hijo extends Padre{
	imprimir(){
		console.log(this.Nombre);
	}
}

var hijo = new Hijo("Juan");
hijo.imprimir();
console.log(hijo instanceof Padre);