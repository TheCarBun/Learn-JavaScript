const prompt = require("prompt-sync")();

function printInfo() {
  console.log("Contact Management System");
  console.log("-------------------------");
  console.log("1. Add a Contact");
  console.log("2. Delete a Contact");
  console.log("3. View Contacts");
  console.log("4. Search Contacts");
  console.log("5. Exit");
}

function addContact() {
  const name = prompt("Name: ");
  const email = prompt("Email: ");
  const contact = {
    name: name,
    email: email,
  };
  contacts.push(contact);
  console.log("---------------------");
}

function deleteContact() {
  console.log("Contact IDs");
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    console.log((i + 1).toString() + ":", contact.name);
  }
  const number = parseInt(prompt("Enter an ID: "));
  if (isNaN(number) || number > contacts.length) {
    console.log("Invalid");
    return;
  }
  contacts.splice(number - 1, 1);
  console.log("Contact Removed");
}

function listContact(contacts) {
  for (let contact of contacts) {
    console.log("---------------------");
    console.log("Name: ", contact.name);
    console.log("Email: ", contact.email);
    console.log("---------------------");
  }
}
function searchContact() {
  const searchString = prompt("Search: ").toLowerCase();
  const results = [];

  for (const contact of contacts) {
    if (contact.name.toLowerCase().includes(searchString))
      results.push(contact);
  }

  listContact(results);
}

const contacts = [];
let keepGoing = true;
printInfo();

while (keepGoing) {
  console.log("---------------------");
  const number = prompt("Enter an operation(1-5): ");
  console.log("---------------------");
  switch (number) {
    case "1":
      addContact();
      break;
    case "2":
      deleteContact();
      break;
    case "3":
      listContact(contacts);
      break;
    case "4":
      searchContact();
      break;
    case "5":
      keepGoing = false;
      console.log("Bye");
      break;
    default:
      console.log("Unknown Input");
      break;
  }
}
