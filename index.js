

const fs = require('fs');

// ====WRITE FUNCTION====
function writetext(int1, int2) {
    for (let i = int1; i <= int2; i++) {

        fs.appendFile('../node-appjs/text-files/home.txt', `${i}\n`, (err) => {
            if (err) throw err;
            console.log('Saved!');
        })
    }

};

writetext(12, 25);

// ====PRINT FUNCTION====

function printext(fileName) {
    fs.readFile(fileName, function (err, data) {
        if (err) throw err;
        console.log(data.toString());
    });
}

printext('../node-appjs/text-files/home.txt');


// ====MERGE FUNCTION====

function mergeFiles(file1, file2) {
    function createFile(data) {
        fs.appendFile('./text-files/merge.txt', data + '\n', (err) => {
            if (err) throw err;
        })
    };

    fs.readFile(file1, (err, data) => {
        if (err) throw err;
        createFile(data);
    })
    fs.readFile(file2, (err, data) => {
        if (err) throw err;
        createFile(data);
    });
}
mergeFiles('../node-appjs/text-files/home.txt', '../node-appjs/text-files/newhome.txt');


// ====MOMENT.JS FUNCTION====

const moment = require('moment');

function getDay(daycount) {
    console.log('day name:' + moment().add(daycount, 'days').format('dddd'));
}

getDay(3);

