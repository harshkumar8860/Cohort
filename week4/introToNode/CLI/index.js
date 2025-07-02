const fs = require('fs');

function main(fileName) {
    let total = 0;
    fs.readFile(fileName, "utf-8", function (err, data) {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (data[i] == " ") {
                total++
            }
        }
        console.log(total);
    })

}


main(process.argv[2]);
// console.log(process.argv);
