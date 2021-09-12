# system-disk [![Build Status](https://travis-ci.org/knutkirkhorn/system-disk.svg?branch=master)](https://travis-ci.org/knutkirkhorn/system-disk)
> Get the system disk of the computer (e.g. `C:` or `/dev/sda`)

For Windows this module uses the [`%SystemDrive%`](http://environmentvariables.org/SystemDrive) environment variable and the [`df`](https://en.wikipedia.org/wiki/Df_(Unix)) command for macOS and Linux.

## Installation
```
$ npm install system-disk
```

## Usage
```js
const systemDisk = require('system-disk');

systemDisk().then(disk => {
    console.log(disk);
    // => C:
});

systemDisk.getAllConnected().then(disks => {
    console.log(disks);
    // => [ 'C:', 'D:', 'E:' ]
});
```

## API
### systemDisk()
Returns the disk on the computer where the operating system is stored (the boot disk).

### systemDisk.getAllConnected()
Returns an array of all disks that are connected to the computer. 

## Related
- [@knutkirkhorn/free-space](https://github.com/knutkirkhorn/free-space) - Get the amount of free space for a drive

## License
MIT © [Knut Kirkhorn](LICENSE)
