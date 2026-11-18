const fs = require('fs');
let lines = [];
let data = '';

try {
    data = fs.readFileSync('./test.txt', 'utf8');
} catch (err) {
    console.error(err);
}

let numberedLines = '';
lines = data.split('\n');

for (let i = 0; i <= lines.length - 1; i++) {
    numberedLines = numberedLines + `${i + 1}: ` + lines[i] + '\n';
}

try {
    fs.writeFileSync('test.sav', numberedLines);
} catch (err) {
    console.error(err);
}
