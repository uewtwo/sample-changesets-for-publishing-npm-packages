import { greetFromSample1, addNumbers, VERSION as VERSION1 } from '@uewtwo/sample1';
import { greetFromSample2, combinedGreeting, multiplyAndAdd, VERSION as VERSION2 } from '@uewtwo/sample2';

console.log('=== Example App using @uewtwo packages ===\n');

console.log('Package versions:');
console.log(`@uewtwo/sample1: ${VERSION1}`);
console.log(`@uewtwo/sample2: ${VERSION2}\n`);

console.log('--- Testing @uewtwo/sample1 ---');
console.log(greetFromSample1('Developer'));
console.log(`Addition result: ${addNumbers(5, 3)}\n`);

console.log('--- Testing @uewtwo/sample2 ---');
console.log(greetFromSample2('Developer'));
console.log(`Multiply and add result: ${multiplyAndAdd(2, 3, 4)}`);
console.log('(2 + 3) * 4 = 20\n');

console.log('--- Combined functionality ---');
console.log(combinedGreeting('World'));