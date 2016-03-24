$(document).ready(function() {
  var animalselection = prompt("Do you want to learn about turtles, snakes, or insects?");
  var selectionresult = animalselection.toLowerCase();

  if (selectionresult === "turtles") {
    $('#turtles').show();
  } else if (selectionresult === "snakes") {
    $('#snakes').show();
  } else if (selectionresult === "insects"){
    $('#insects').show();
  } else {
    alert("Please enter either turtles, snakes, or insects")
  }
});
