// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import systemDisk from './index.js';

test('Able to return a disk', async t => {
	try {
		await systemDisk();
		t.pass();
	} catch {
		t.fail();
	}
});

test('Return correct type', async t => {
	try {
		const disk = await systemDisk();
		t.is(typeof disk, 'string');
	} catch {
		t.fail();
	}
});
