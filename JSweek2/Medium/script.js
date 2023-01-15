let input = prompt("Enter some text: ");

if (input == input.toUpperCase()) {
    console.log("The user is shouting!");
} else if (input === input.toLowerCase()) {
    console.log("The user is whispering!");
} else {
    console.log("The user is talking normally.");
}