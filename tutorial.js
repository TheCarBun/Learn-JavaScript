const prompt = require("prompt-sync")();

const gameName = "The Lost Artifact";
const startPoint =
  "You are an archaeologist exploring an ancient tomb.  You've just discovered a hidden chamber";

const scenario1 =
  "The chamber is dimly lit, dust motes dancing in the faint light.  You see three passages leading further into the tomb: one to the left, one straight ahead, and one to the right.";
const choices1 = {
  left: ["l", "left"],
  right: ["r", "right"],
  straight: ["s", "straight"],
};

function handleChoice(scenario, choices) {
  let ans;
  let validChoice = false;

  while (!validChoice) {
    console.log(scenario, "\nChoices:");
    for (var choice in choices) {
      console.log(choice);
    }
    ans = prompt("Pick: ").toLowerCase().trim();

    for (var choice in choices) {
      if (choices[choice].includes(ans)) {
        validChoice = true;
        console.log(`You picked ${choice}`);
        return choice;
      }
    }

    if (!validChoice) {
      console.log("Invalid input. Please try again.");
    }
  }
}

console.log(`------- ${gameName} -------`);
console.log("---------------------------------");
const name = prompt("What is your name? ");
console.log(`Hello ${name}! Welcome to "${gameName}"`);

const shouldWePlay = prompt("Do you want to begin?(y/n) ").toLowerCase().trim();
if (shouldWePlay === "yes" || shouldWePlay === "y") {
  console.log(startPoint);
  scene1Ans = handleChoice(scenario1, choices1);
} else if (shouldWePlay === "no" || shouldWePlay === "n") {
  console.log("Ok :(");
} else {
  console.log("Invalid Input!");
}
