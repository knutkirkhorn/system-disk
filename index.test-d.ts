import {expectType} from 'tsd';
import systemDisk from './index.js';

expectType<Promise<string>>(systemDisk());
