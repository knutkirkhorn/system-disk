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
### freeSpace()
Returns the disk on the computer where the operative system is stored.

## License
MIT © [Knut Kirkhorn](LICENSE)