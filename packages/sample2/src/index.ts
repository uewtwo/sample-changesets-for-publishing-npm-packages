import { greetFromSample1, addNumbers } from '@uewtwo/sample1';

export function greetFromSample2(name: string): string {
  return `Hello, ${name}! This is from @uewtwo/sample2`;
}

export function combinedGreeting(name: string): string {
  const greeting1 = greetFromSample1(name);
  const greeting2 = greetFromSample2(name);
  return `${greeting1}\n${greeting2}`;
}

export function multiplyAndAdd(a: number, b: number, c: number): number {
  const sum = addNumbers(a, b);
  return sum * c;
}

export const VERSION = '0.0.1';