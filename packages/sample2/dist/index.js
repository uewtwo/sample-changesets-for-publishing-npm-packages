"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = void 0;
exports.greetFromSample2 = greetFromSample2;
exports.combinedGreeting = combinedGreeting;
exports.multiplyAndAdd = multiplyAndAdd;
const sample1_1 = require("@uewtwo/sample1");
function greetFromSample2(name) {
    return `Hello, ${name}! This is from @uewtwo/sample2`;
}
function combinedGreeting(name) {
    const greeting1 = (0, sample1_1.greetFromSample1)(name);
    const greeting2 = greetFromSample2(name);
    return `${greeting1}\n${greeting2}`;
}
function multiplyAndAdd(a, b, c) {
    const sum = (0, sample1_1.addNumbers)(a, b);
    return sum * c;
}
exports.VERSION = '0.0.1';
