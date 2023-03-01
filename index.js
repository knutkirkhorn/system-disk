import {promisify} from 'node:util';
import {exec} from 'node:child_process';

const execAsync = promisify(exec);
const commands = {
	win32: 'echo %SystemDrive%',
	darwin: 'df -l | awk \'$9 == "/"\''
};

export default async function systemDisk() {
	const command = process.platform in commands
		? commands[process.platform]
		: 'df -l | awk \'$6 == "/"\'';
	const {error, stdout, stderr} = await execAsync(command);

	if (error || stderr) {
		throw new Error('Error: Something wrong happened.');
	}

	if (process.platform === 'win32') {
		return stdout.split('\r\n')[0];
	}

	if (process.platform === 'darwin') {
		return stdout.split('  ')[0];
	}

	return stdout.split('   ')[0];
}
