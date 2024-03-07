/*
    Title: states.js
    Author: Connor Smith
    Date: March 6th, 2024
    Description: Practice file.
*/

// Reading in csv file

const fs = require('fs');

fs.readFile('states.csv', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
        return;
    }

    const arrayLine = data.split('\n');

    arrayLine.forEach((line) => {
        const part = line.split(',');

        if(part.length > 1) {
            console.log(part[0]);
        }
    });
});