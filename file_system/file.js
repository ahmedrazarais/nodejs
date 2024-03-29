// Question:

// Write a Node.js program that reads the contents of a text file named "input.txt", converts the text to uppercase, and then writes the uppercase text to a new file named "output.txt". 
// Make sure to handle any errors that may occur during file operations.

const fs = require("fs");

// Setting file paths
let inputFilePath = "file_system/input.txt";
let outputFilePath = "file_system/output.txt";

// First writing some text to input.txt file
fs.writeFile(inputFilePath, "hey hello world", (err) => {
    if (err) {
        console.log("ERROR: Unable to write to file:", err);
        return;
    }
    console.log("Data written successfully to input.txt.");

    // Now reading the data from input.txt file
    fs.readFile(inputFilePath, "utf8", (err, data) => {
        if (err) {
            console.log("ERROR: Unable to read file:", err);
            return;
        }
        console.log(`File contains text: ${data}`);

        // Convert the text to uppercase
        const upperCaseData = data.toUpperCase();

        // Write the uppercase text to output.txt file
        fs.writeFile(outputFilePath, upperCaseData, (err) => {
            if (err) {             //take care of errors
                console.log("ERROR: Unable to write to output file:", err);
                return;
            }
            console.log("Uppercase data written successfully to output.txt.");
        });
    });
});
