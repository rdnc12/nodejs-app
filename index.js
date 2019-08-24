const fs = require('fs');

// ====WRITE FUNCTION====
function writetext(int1, int2) {

    if (typeof int1 == 'number' && typeof int2 == 'number') {
        fs.appendFile('home.txt', int1 + ' ' + int2 + ' ', (err) => {
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

printext('home.txt');


// ====MERGE FUNCTION====

function mergeFiles(file1, file2) {

    fs.readFile(file2, (err, data) => {
        if (err) throw err;

        fs.appendFile(file1, data, (err) => {
            if (err) throw err;
        });
    });
}
mergeFiles('home.txt', 'newhome.txt');