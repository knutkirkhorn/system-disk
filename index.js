'use strict';
const exec = require('child_process').exec;

module.exports = () => {
    return new Promise((resolve, reject) => {
        let command;
        if (process.platform === 'win32') {
            command = 'echo %SystemDrive%';
        } else {
            reject(new Error('Not imlpemented'));
        }

        exec(command, (err, stdout, stderr) => {
            if (err || stderr) {
                reject(new Error('Error: Something wrong happened.'));
            }
            resolve(stdout.split('\n')[0]);
        });
    });
}