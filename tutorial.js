const prompt = require("prompt-sync")();
const name = prompt("What is your name? ");
console.log("Hello", name, "welcome to our game!");

const shouldWePlay = prompt("Do you want to play? ").toLowerCase().trim();
if (shouldWePlay === "yes" || shouldWePlay === "y") {
  const leftOrRight = prompt(
    "You enter a maze, do you want to go left or right? "
  )
    .toLowerCase()
    .trim();
  if (leftOrRight === "l" || leftOrRight === "left") {
    cross = prompt("You go left and find a bridge. Do you want to cross? ")
      .toLowerCase()
      .trim();
    if (cross === "y" || cross === "yes") {
      console.log("You cross the bridge but it was weak so you fall and die!");
      console.log("<<<<<<<< GAME OVER >>>>>>>>");
    } else if (cross === "n" || cross === "no") {
      console.log("You made the right choice! You live another day.");
      console.log("<<<<<<<<< YOU WIN >>>>>>>>>");
    } else {
      console.log("Invalid Input!");
    }
  } else if (leftOrRight === "r" || leftOrRight === "right") {
    console.log("You fall into a pit and die!");
    console.log("<<<<<<<< GAME OVER >>>>>>>>");
  } else {
    console.log("Invalid Input!");
  }
} else if (shouldWePlay === "no" || shouldWePlay === "n") {
  console.log("Ok :(");
} else {
  console.log("Invalid Input!");
}
