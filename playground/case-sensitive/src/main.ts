import noop from 'lodash.noop';
import { foo } from './foo';

console.log('hello!', foo(), noop());
