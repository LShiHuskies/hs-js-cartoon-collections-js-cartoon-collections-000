function dwarfRollCall(dwarves) {
  var stringDwarves = [];
  var emptyArr = [];
  for (var i = 0; i < dwarves.length; i++) {
     stringDwarves.push(i+1 + ". " + dwarves[i]);
  }
  for (var k = 0; k < stringDwarves.length; k++) {
    emptyArr += (stringDwarves[k] + " ");
  }
  console.log(emptyArr.toString())
  return emptyArr.toString();
}

function summonCaptainPlanet(planeteerCalls){
  var upperCaseArray = [];
  planeteerCalls.forEach((planeteerCall) => {
  upperCaseArray.push(planeteerCall.toUpperCase() + "!");
  });
  console.log(upperCaseArray);
  return upperCaseArray;
}

function longPlaneteerCalls(words) {
  var counter = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4){
      counter++;
    }
  }
  if (counter === 0) {
    return false;
  } else {
    counter > 0;
    return true;
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
  if (foods[i] === "cheddar") {
    return "cheddar";
  }
  }
  return "no cheese!"
}
