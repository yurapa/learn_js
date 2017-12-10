/*
 * Игра морской бой по книге
*/

var randomLoc = Math.floor(Math.random() * 5),
    location1 = randomLoc,
    location2 = location1 + 1,
    location3 = location2 + 1,
    guess,
    hits = 0,
    guesses = 0,
    isSunk = false;

console.log(randomLoc);

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter number 0-6)");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS");
    }

  }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
 "which means your shooting accuracy was " + (3/guesses);
alert(stats);
