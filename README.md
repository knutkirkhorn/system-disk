# system-disk
> Get the system disk of the computer (e.g. `C:` or `/dev/sda`)

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

## License
MIT © [Knut Kirkhorn](LICENSE)