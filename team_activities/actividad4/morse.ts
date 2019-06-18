//Roberto Soto Leites A01023599

var alpha:string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];

var dict:string[] = [
	".-",
	"-...",
	"-.-.",
	"-..",
	".",
	"..-.",
	"--.",
	"....",
	"..",
	".---",
	"-.-",
	".-..",
	"--",
	"-.",
	"--.--",
	"---",
	".--.",
	"--.-",
	".-.",
	"...",
	"-",
	"..-",
	"...-",
	".--",
	"-..-",
	"-.--",
	"--..",
	".----",
	"..---",
	"...--",
	"....-",
	".....",
	"-....",
	"--...",
	"---..",
	"----.",
	"-----"];

//var msg:string = "Hello this is a sentece. It has a number 34 and a couple periods.";

/*
function toMorse(word:string){
	var result:string[] = [];
	var loc:number;
	for(var i:number = 0; i<word.length; i++){
		loc = alpha.indexOf(word[i]);
		if(loc==-1){
			result.push("|");
		}else{
			result.push(dict[loc]);
		}
	}
	return result;
}
*/

function toMorse(message:string){
	var arr:string[] = [];
	var loc:number;
	for(var i:number = 0; i<message.length; i++){
		loc = alpha.indexOf(message[i]);
		if(loc==-1){
			arr.push("|");
		}else{
			arr.push(dict[loc]);
		}
	}
	//console.log(arr);
	var result:string = arr.join("#");
	return result;
}

function turnOn(){
	document.getElementById("light").style.background = "yellow";
}

function turnOff(){
	document.getElementById("light").style.background = "white";
}

/*
dit = x
dat = 3x
pause between elements (dit,dat) = x
pause between letters = 3x
pause between words = 7x - 2x because of the #s appended in final string
pause between sentences = ?
*/

var base:number = 1000;

function dit(dly:number){
	setTimeout(turnOn, dly);
	setTimeout(turnOff, dly+base);
	console.log(". off in "+(dly+base));
}

function dat(dly:number){
	setTimeout(turnOn, dly);
	setTimeout(turnOff, dly+(3*base));
	console.log("- off in "+(dly+(3*base)));
}

function trans(){
	var msg:string = (<HTMLInputElement>document.getElementById("message")).value;
	msg = toMorse(msg);
	var milis:number = 0;

	for(var i:number=0; i<msg.length; i++){
		console.log(msg[i] + " " +milis);
		switch(msg[i]){
			case ".":
				dit(milis);
				milis+=base;
				milis+=base;
				break;
			case "-":
				dat(milis);
				milis+=base*3;
				milis+=base;
				break;
			case "#":
				//charSpace();
				milis+=base;
				break;
			case "|":
				//wordSpace();
				milis+=5*base;
				break;
		} 
	}
}