const formatCurrency = (price) => {
  return price.toLocaleString('en-US') + ' VNĐ';
};

const productInfo = (productName, price) => {
  return `Sản phẩm: ${productName}, Giá: ${formatCurrency(price)}`;
};

const greet = (name) => {
  return `Xin chào, ${name}!`;
};

const sumUpTo = (max) => {
  let result = 0;
  for (let i = 1; i <= max; i++) {
    result += i;
  }
  return result;
};

const square = (number) => number * number;

const isEven = (number) => number % 2 === 0;

const firstElement = (arr) => arr[0];

const sum = (...args) => args.reduce((total, item) => total + item, 0);

const getValueObject = (obj) => {
    return `Name: ${obj.name}, Age: ${obj.age}`;
};

const showName = (arr) => {
  return arr.map((item) => item.name).join(', ');
};

const stringLength = (str) => str.length;

const toUpperCase = (str) => str.toUpperCase();

const formatCurrency12 = (amount) => {
  return amount.toLocaleString('en-US') + ' VNĐ';
};

const max = (arr) => {
  return [...arr].sort((a, b) => a - b)[arr.length - 1];
};

const isPrime = (number) => {
  if (number < 2) return false;
  if (number === 2) return true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const repeatString = (str, count) => {
  return (str + ' ').repeat(count).trim();
};

const sumOdd = (arr) => {
  return arr.reduce((total, item) => (!isEven(item) ? total + item : total), 0);
};

const sumGreaterThan = (arr, n) => {
  return arr.reduce((total, item) => (item > n ? total + item : total), 0);
};

const formatDate = (strDate) => {
  const date = new Date(strDate);
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

const firstThree = (arr) => arr.slice(0, 3);

const containsChar = (str, char) => str.includes(char);

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

const countOccurrences = (arr, item) => {
  return arr.filter((value) => value === item).length;
};

const filterOdd = (arr) => arr.filter((value) => !isEven(value));

const greaterThan = (arr, item) => arr.filter((value) => value > item);

const factorial = (number) => {
  if (number <= 1) return 1;
  return number * factorial(number - 1);
};

const separateEvenOdd = (arr) => {
  return {
    even: arr.filter((item) => isEven(item)),
    odd: arr.filter((item) => !isEven(item)),
  };
};

const sortAsc = (arr) => [...arr].sort((a, b) => a - b);

const sumEvenIndex = (arr) => {
  return arr.reduce((total, value, index) => (isEven(index) ? total + value : total), 0);
};

const multiplyByTwo = (arr) => arr.map((item) => item * 2);

const arrayToString = (arr) => arr.join('');

export {
  formatCurrency,
  productInfo,
  greet,
  sumUpTo,
  square,
  isEven,
  firstElement,
  sum,
  getValueObject,
  showName,
  stringLength,
  toUpperCase,
  formatCurrency12,
  max,
  isPrime,
  repeatString,
  sumOdd,
  sumGreaterThan,
  formatDate,
  firstThree,
  containsChar,
  mergeArrays,
  countOccurrences,
  filterOdd,
  greaterThan,
  factorial,
  separateEvenOdd,
  sortAsc,
  sumEvenIndex,
  multiplyByTwo,
  arrayToString,
};