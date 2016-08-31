
/*
Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets".
arr.forEach(callback, [thisArg])
*/

 var newPlanets = document.getElementById("planets");
 var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

 planets.forEach(function(planet) {
  	newPlanets.innerHTML += "<div>" + planet + "</div>";
  });
 	
/* Use the map method to create a new array where the first letter of each planet is capitalized */
  var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
  var planetsCapitalized = planets.map(function(planets) {
  	return planets.charAt(0).toUpperCase() + planets.slice(1);
  });
 // 	console.log(planetsCapitalized);
 	

// Use the filter method to create a new array that contains planets with the letter 'e'
  var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
  var new_array = planets.filter(function(planets) {
  	return planets.includes ("e");
 	});
 // 	console.log(new_array);


// Use the reduce method to create a sentence from the words in the following array
 var words = ["The", "early" , "bird" , "might" , "get" , "the" , "worm" , "but" , "the" , "second" , "mouse" , "gets" , "the" , "cheese"];
 var newSentence = words.reduce(function(previousValue, currentValue){  
   return previousValue + " " + currentValue;
 });
	console.log(newSentence);