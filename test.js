import test from 'ava';
import m from '.';

test('Able to return a disk', t => {
    return m().then(disk => {
        t.pass();
    }).catch(() => {
        t.fail();
    });
});