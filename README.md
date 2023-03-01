# system-disk

> Get the system disk of the computer (e.g. `C:` or `/dev/sda`)

For Windows this module uses the [`%SystemDrive%`](http://environmentvariables.org/SystemDrive) environment variable and the [`df`](https://en.wikipedia.org/wiki/Df_(Unix)) command for macOS and Linux.

## Installation

```
npm install system-disk
```

## Usage

```js
import systemDisk from 'system-disk';

const disk = await systemDisk();
console.log(disk);
// => C:
```

## API

### systemDisk()

Returns the disk on the computer where the operating system is stored (the boot disk).

## Related

- [@knutkirkhorn/free-space](https://github.com/knutkirkhorn/free-space) - Get the amount of free space for a drive
