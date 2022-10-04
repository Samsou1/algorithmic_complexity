const fs = require('fs');

const fileName = process.argv[2];

var list;
try {
    const data = fs.readFileSync(fileName, 'utf8');
    list = data.split(' ').map(element => parseFloat(element));
} catch (error) {
    console.error(error.message);
}

console.log(list)
