'use strict';
const exec = require('child_process').exec;

module.exports = () => {
    return new Promise((resolve, reject) => {
        let command;
        switch (process.platform) {
            case 'win32':
                command = 'echo %SystemDrive%';
                break;
            case 'darwin':
                command = `df -l | awk '$9 == "/"'`;
                break;
            default:
                command = `df -l | awk '$6 == "/"'`;
                break;
        }

        exec(command, (err, stdout, stderr) => {
            if (err || stderr) {
                reject(new Error('Error: Something wrong happened.'));
            }

            switch (process.platform) {
                case 'win32':
                    resolve(stdout.split('\r\n')[0]);
                    break;
                case 'darwin':
                    resolve(stdout.split('  ')[0]);
                    break;
                default:
                    resolve(stdout.split('   ')[0]);
                    break;
            }
        });
    });
};

module.exports.getAllConnected = () => {
    return new Promise((resolve, reject) => {
        let command;
        switch (process.platform) {
            case 'win32':
                command = 'wmic logicaldisk get name';
                break;
            case 'darwin':
                command = ``;
                break;
            default:
                command = ``;
                break;
        }

        exec(command, (err, stdout, stderr) => {
            if (err || stderr) {
                reject(new Error('Error: Something wrong happened.'));
            }

            switch (process.platform) {
                case 'win32':
                    const tempdiskArray = stdout.split('Name')[1].split('\n');
                    let diskArray = [];
                    for (let i = 0; i < tempdiskArray.length; i++) {
                        if (tempdiskArray[i].includes(':')) {
                            diskArray.push(tempdiskArray[i].split('    \r\r')[0]);
                        }
                    }
        
                    resolve(diskArray);
                    break;
                case 'darwin':
                    throw new Error('Not implemented');
                    break;
                default:
                    throw new Error('Not implemented');
                    break;
            }
            resolve('NOT')
        });
    });
};