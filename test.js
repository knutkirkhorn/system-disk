import test from 'ava';
import m from '.';

test('Able to return a disk', t => {
    t.notThrows(() => {
        m();
    });
});

test('Return correct type', t => {
    return m().then(disk => {
        t.is(typeof disk, 'string');
    }).catch(() => {
        t.fail();
    });
});

test('Get all disks', t => {
    t.notThrows(() => {
        m.getAllConnected();
    });
});