#!/usr/bin/env node

const { getCode } = require("country-list");
const axios = require('axios').default;
const figlet = require('figlet');
const chalk = require('chalk');
const myArgs = process.argv.slice(2);
 
figlet('Holidays!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

console.log(chalk.cyan('Check your national...'));

let year;
if (myArgs[1]) {
    year = myArgs[1]
} else {
    year = new Date().getFullYear();
}

axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${getCode(myArgs[0])}`)
.then(function (response) {
    figlet(``, ()=> {
        console.log;
        
        response.data.forEach(holiday => {
            console.log(`${chalk.bgGrey(holiday.date)} - ${holiday.name}`);
        });
    });
    
    
})
.catch(function (error) {
    console.log(`Error, please check your command line...
    ${chalk.red('!!')} - command line must be : holidates <country> <year> `);
});