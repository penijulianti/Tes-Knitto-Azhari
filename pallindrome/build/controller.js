"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
const isPalindrome = (str) => {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
};
exports.isPalindrome = isPalindrome;
