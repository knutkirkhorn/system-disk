import test from 'ava';
import systemDisk from '.';

test('Able to return a disk', t => {
    t.notThrows(() => {
        systemDisk();
    });
});

test('Return correct type', t => {
    return systemDisk().then(disk => {
        t.is(typeof disk, 'string');
    }).catch(() => {
        t.fail();
    });
});

test('Get all disks', t => {
    t.notThrows(() => {
        systemDisk.getAllConnected();
    });
});

test('Get all disks return correct types', t => {
    return systemDisk.getAllConnected().then(disks => {
        // Ensure the retuned object is an array
        t.true(Array.isArray(disks));

        // The retuned array needs to at least have one element
        t.not(disks.length, 0);

        disks.forEach(disk => {
            // Every element in the array needs to be a string
            t.is(typeof disk, 'string');
        });
    }).catch(() => {
        t.fail();
    })
});