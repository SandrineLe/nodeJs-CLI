#!/usr/bin/env node

const { getCode } = require("country-list");
const axios = require('axios').default;
const figlet = require('figlet');
const chalk = require('chalk');
const ora = require('ora');
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

const spinner = ora('Loading').start();


if(myArgs.length != 2 && myArgs.length != 1){
    spinner.stop();
    console.error(chalk.red("Something went wrong..."));
    return;
}

let country = myArgs[0];
let code = getCode(country);

let year = new Date().getFullYear();

if(myArgs.length == 2){
    year = Number(myArgs[1]);
}

axios.get('https://date.nager.at/api/v2/PublicHolidays/'+year+'/'+code)
  .then(function (response) {
    spinner.stop();
    response.data.forEach(holiday => {
        console.log(holiday.name + holiday.date);
    });
   
  })
  .catch(function (error) {
    spinner.stop();
    console.error(chalk.red('Something went wrong...'));
  })
  