console.log("Work");

const button = document.querySelectorAll("button");
const inputValue = document.querySelector(".display");
const equal = document.querySelector(".try");
const hapus = document.querySelector(".delete");
const title = document.querySelector("h1");
const reset = document.querySelector(".reset");

button.forEach(e => {
   e.addEventListener("click",function (event) {
       inputValue.value += this.value;
   })
});

equal.addEventListener("click",function () {
	if (inputValue.value.includes("%")) {
		let check = inputValue.value;
		let convert = check.replace("%","/100");
		let count = eval(convert);
		console.log(count);
	} else if (/^[a-zA-Z0-9]+$/.test(inputValue.value)) {
		inputValue.value = "";
		alert("Anda Memasukkan Huruf Dan Angka Bersamaan");
	} else {
		let val = inputValue.value;
	    let number = val.split("");
	    let coba = eval(val);
	    console.log(coba);
	}
});


function myFunction() {
	let valInput = inputValue.value;
	let number = valInput.split("");
	number.pop();
	inputValue.value = number.join("");
}

hapus.addEventListener("click",function () {
	myFunction();
});

reset.addEventListener("click", function() {
	inputValue.value = "";
})


