'use strict';

const {exec} = require('child_process');

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
                reject(new Error('Something wrong happened.'));
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
                command = `df -T | awk '$2 != "devtmpfs" && $2 != "tmpfs" && $2 != "squashfs"'`;
                break;
            default:
                command = `df -T | awk '$2 != "devtmpfs" && $2 != "tmpfs" && $2 != "squashfs"'`;
                break;
        }

        exec(command, (err, stdout, stderr) => {
            if (err || stderr) {
                reject(new Error('Something wrong happened.'));
            }

            const diskArray = [];
            let tempdiskArray;

            switch (process.platform) {
                case 'win32':
                    tempdiskArray = stdout.split('Name')[1].split('\n');
                    
                    for (let i = 0; i < tempdiskArray.length; i++) {
                        if (tempdiskArray[i].includes(':')) {
                            diskArray.push(tempdiskArray[i].split('    \r\r')[0]);
                        }
                    }
        
                    resolve(diskArray);
                    break;
                case 'darwin':
                    tempdiskArray = stdout.split('\n');

                    // Start at one to skip the header row of the input
                    for (let i = 1; i < tempdiskArray.length; i++) {
                        if (tempdiskArray[i].includes('      ')) {
                            const currentDisk = tempdiskArray[i].split('      ')[0];
                            diskArray.push(currentDisk);
                        }
                    }

                    resolve(diskArray);
                default:
                    tempdiskArray = stdout.split('\n');

                    // Start at one to skip the header row of the input
                    for (let i = 1; i < tempdiskArray.length; i++) {
                        if (tempdiskArray[i].includes('      ')) {
                            const currentDisk = tempdiskArray[i].split('      ')[0];
                            diskArray.push(currentDisk);
                        }
                    }

                    resolve(diskArray);
                    break;
            }
        });
    });
};