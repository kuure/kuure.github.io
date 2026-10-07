// how will it work?

// get value(s) from box whenever anything is typed
// take those values and put them inside of the HTML somewhere...

// what is important?

// - input with id 'noInput'
// - input with id 'yesInput'
// - p with class 'noText'
// - p with class 'yesText'

const yesInput = document.querySelector("#yesInput");
const noInput = document.querySelector("#noInput");

const yesText = document.querySelector(".yesText");
const noText = document.querySelector(".noText");


yesInput.addEventListener("input", () => {
	yesText.innerHTML = yesInput.value
});

noInput.addEventListener("input", () => {
	noText.innerHTML = noInput.value

});
