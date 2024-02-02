export const isPalindrome = (str: string): boolean => {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  };
  