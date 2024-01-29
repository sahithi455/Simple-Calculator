function display(value){
	document.getElementById("display").value += value;
}
 

function Calculate() {
        let expression = document.getElementById("display").value;
	let result = eval(expression);
	document.getElementById("display").value = result;
}

function Clear(){
	document.getElementById("display").value = "";
}


function Back(){
	let currentDisplay = document.getElementById("display").value;
	document.getElementById("display").value = currentDisplay.slice(0,-1);
}