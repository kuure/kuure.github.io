// how will it work?

// get value from box whenever anything is typed

// take value and randomly make each letter upper or lower case
// search "javascript coin toss" for inspiration...

// put value over the image

// remove everything when the "clear" button is clicked



// variables to handle the three things we need to interact with
const input = document.querySelector('.textInput');
const output = document.querySelector('.imageContainer');
const button = document.querySelector('.clearButton');


// create an empty string with 'let' so its value can change
let outputString = "";


// reset the text box, output string, and image text with a button
button.addEventListener('click', () => {
	input.value = "";
	output.innerHTML = "";
	outputString = "";
});


// code that listens for the input event on the text box
input.addEventListener('input', (event) => {

	// putting a variable name in the parentheses gives you access to
	// all the information about the event
	console.log(event.data);

	// the 'data' property is the most recent change
	const letter = event.data;

	// check if a number between 0 and 0.999 is greater than or 
	// less than 0.5, so essentially a coin toss
	if (Math.random() > 0.5) {
		// if it is, make the letter upper case and add it to the 
		// end of the  output string
		outputString += letter.toUpperCase();

	} else {
		// otherwise, make it lower case
		outputString += letter.toLowerCase();
	}

	// take the current iteration of the output string and put 
	// it into the container
	output.innerHTML = outputString;

});

