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

