// Import the 'fs' module to enable file system operations
const fs = require('fs');

// Step 1: Create an array to hold the results
const result = [];

// Step 2: Iterate through numbers 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("BIG BANG"); // Divisible by both 3 and 5
    } else if (i % 3 === 0) {
        result.push("BIG"); // Divisible by 3
    } else if (i % 5 === 0) {
        result.push("BANG"); // Divisible by 5
    } else {
        result.push(i.toString()); // Not divisible by 3 or 5
    }
}

// Step 3: Write the result array to 'output.json'
// 'JSON.stringify' to convert the array to JSON format
fs.writeFileSync('output.json', JSON.stringify(result));

console.log("Output saved to 'output.json'");