/*
    Title: states.js
    Author: Connor Smith
    Date: March 6th, 2024
    Description: Practice file.
*/

// Reading in csv file

const fs = require('fs');

class reader {
    constructor(fileName) {
        this.fileName = fileName;
    }

    splitter(callback) {
        fs.readFile(this.fileName, 'utf-8', (err, data) => {
            if(err) {
                console.log(err);
                return;
            }

            const arrayLine = data.split('\n');
            const result = [];
            for(let line of arrayLine) {
                const parts = line.split(',');
                result.push(parts[0]);
            }
            callback(result);
        });
    }
}

const read = new reader('states.csv');
read.splitter((result) => {
    console.log(result);
})

// const fs = require('fs');

// fs.readFile('states.csv', 'utf-8', (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     const arrayLine = data.split('\n');

//     arrayLine.forEach((line) => {
//         const part = line.split(',');

//         if(part.length > 1) {
//             console.log(part[0]);
//         }
//     });
// });