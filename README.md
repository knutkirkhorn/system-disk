# system-disk [![Build Status](https://travis-ci.org/Knutakir/system-disk.svg?branch=master)](https://travis-ci.org/Knutakir/system-disk)
> Get the system disk of the computer (e.g. `C:` or `/dev/sda`)

For Windows this module uses the [`%SystemDrive%`](http://environmentvariables.org/SystemDrive) environment variable, the [`df`](https://en.wikipedia.org/wiki/Df_(Unix)) command for macOS and the [`lsblk`](https://www.linux.org/docs/man8/lsblk.html) command for Linux.

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
```

## API
### systemDisk()
Returns the disk on the computer where the operating system is stored (the boot disk).

## Related
- [@knutkirkhorn/free-space](https://github.com/Knutakir/free-space) - Get the amount of free space for a drive

## License
MIT © [Knut Kirkhorn](LICENSE)
