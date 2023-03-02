import {promisify} from 'node:util';
import {exec} from 'node:child_process';

const execAsync = promisify(exec);

export default async function systemDisk() {
	const command = process.platform === 'win32'
		? 'echo %SystemDrive%'
		: 'mount | awk \'$3 == "/" {print $1}\'';
	const {error, stdout, stderr} = await execAsync(command);

	if (error || stderr) {
		throw new Error('Error: Something wrong happened.');
	}

	if (process.platform === 'win32') {
		return stdout.split('\r\n')[0];
	}

	return stdout.split('\n')[0];
}
