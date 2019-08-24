const fs = require('fs');

function writetext(int1, int2) {

    if (typeof int1 == 'number' && typeof int2 == 'number') {
        fs.appendFile('home.txt', int1 + ' ' + int2 + ' ', (err) => {
            if (err) throw err;
            console.log('Saved!');
        })
    }
};

writetext(12, 25);

function printext(fileName){
    fs.readFile(fileName, function (err, data) {
        if (err) throw err;
        console.log(data.toString());
    });
}

printext('home.txt');