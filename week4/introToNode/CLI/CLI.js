const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.0.4');

program.command('countwords')
    .description('Count the number of lines in a file')
    .argument('<file>', 'file to count the number of words')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const lines = data.trim().split(/\s+/).length;
                console.log(`There are ${lines} words in ${file}`);
            }
        })
    });

    program.command('countsentences')
    .description('Count the number of lines in a file')
    .argument('<file>', 'file to count the number of lines')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const lines = data.split('\n').length;
                console.log(`There are ${lines} lines in ${file}`);
            }
        })
    });

program.parse();