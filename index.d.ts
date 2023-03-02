/**
Get the system disk of the computer (e.g. `C:` or `/dev/sda`)

For Windows this module uses the [`%SystemDrive%`](http://environmentvariables.org/SystemDrive) environment variable and the [`mount`](https://en.wikipedia.org/wiki/Mount_(Unix)) command for macOS and Linux.

@example
```
import systemDisk from 'system-disk';

const disk = await systemDisk();
console.log(disk);
// => C:
```
*/
export default function systemDisk(): Promise<string>;
