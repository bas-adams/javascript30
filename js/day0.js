/* day0.js */
console.log('buuu');

//run this function when the document is loaded

window.onload = function(){
	console.log('test');
	var heading = document.createElement('h1');
	var headingText = document.createTextNode('Big Head!');
	heading.appendChild(headingText);
	document.body.appendChild(heading);

	
	
	var newDiv = document.createElement('div');
	var newContent = document.createTextNode('The text has been created dynamically');

	newDiv.appendChild(newContent); // add the text node to the newly created div
	
	// add the newly created eleemnt and its content into the DOM
	var currentDiv = document.getElementById('div1');
	document.body.insertBefore(newDiv, currentDiv);

	//------------ new  p tag between div's

	var newP = document.createElement('p');
	var pContent = document.createTextNode("I should be between div's");
	newP.appendChild(pContent);

	document.body.insertBefore(newP, currentDiv);

	// insertBefore(); replaceChild(); removeChild(); createElement(); createTextNode(); hasChildNodes();
	// adoptChild(); importNode();

	// remove first child node inside the element with the id = 'div1' -> variable: CurrentDiv

	if(currentDiv.hasChildNodes()){
		console.log(currentDiv.hasChildNodes());
		console.log(currentDiv.childNodes[1]);
		currentDiv.removeChild( currentDiv.childNodes[1]);

	}


}

