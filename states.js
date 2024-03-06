/*
    Title: states.js
    Author: Connor Smith
    Date: March 6th, 2024
    Description: Practice file.
*/

// Reading in csv file
const fs = require("fs");
fs.readFile("states.csv", "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    }

    const array = data.split(',');
    
    array.forEach((row, index) => {
        if(!row.trim()) {
            return;
        }
        // console.log something here
    });
});
