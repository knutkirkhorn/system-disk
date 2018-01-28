import test from 'ava';
import m from '.';

test('Able to return a disk', t => {
    return m().then(disk => {
        t.pass();
    }).catch(() => {
        t.fail();
    });
});

test('Return correct type', t => {
    return m().then(disk => {
        t.is(typeof disk, 'string');
    }).catch(() => {
        t.fail();
    });
});