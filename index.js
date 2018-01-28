'use strict';
const exec = require('child_process').exec;

module.exports = () => {
    return new Promise((resolve, reject) => {
        let command;
        if (process.platform === 'win32') {
            command = 'echo %SystemDrive%';
        } else {
            command = `lsblk -io KNAME,TYPE | awk '$2 == "disk"'`;
        }

        exec(command, (err, stdout, stderr) => {
            if (err || stderr) {
                reject(new Error('Error: Something wrong happened.'));
            }
            if (process.platform === 'win32') {
                resolve(stdout.split('\r\n')[0]);
            } else {
                resolve(stdout.split('   ')[0]);
            }
            
        });
    });
}