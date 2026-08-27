//=====================================Bai 1======================================================
// Bài 1. Viết hàm sumArray(arr) trả về tổng các phần tử trong mảng.

import { cleanObject, convertToArray, countElements, countOccurrences, countWords, filterByMinValue, findLongestString, findLongestValue, findMaxKey, findMinKey, findMostExpensiveProduct, findSecondLargest, flattenArray, getAdults, groupByFirstLetter, groupByType, hasDuplicate, intersection, isPermutation, isSubset, isSymmetric, mergeObjectsSumValues, removeDuplicates, sortProductsByPrice, sortStringsByLength, sumArray, sumByGroup, sumByKey, uniqueValues } from "./utils.js"

// Input: arr = [1, 2, 3, 4]
// Output: 10
console.log("===================Bai 1===============================")
console.log(sumArray([1, 2, 3, 4]))
//=====================================Bai 2======================================================
// Bài 2. Viết hàm countOccurrences(arr, value) đếm số lần xuất hiện của value trong mảng arr

// Input: arr = [1, 2, 2, 3, 2], value = 2
// Output: 3
console.log("===================Bai 2===============================")

console.log(countOccurrences([1, 2, 2, 3, 2, 2], 2))

//=====================================Bai 3======================================================
// Bài 3. Viết hàm removeDuplicates(arr) trả về mảng không có phần tử trùng lặp.

// Input: arr = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6]
// Output: [1, 2, 3, 4, 6]
console.log("===================Bai 3===============================")
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]))

//=====================================Bai 4======================================================
// Bài 4. Viết hàm flattenArray(arr) chuyển một mảng gồm các phần tử mảng 2D (2 chiều) thành mảng 1D (1 chiều)

// Input: arr = [[1, 2], [3, 4]]
// Output: [1, 2, 3, 4]

console.log("===================Bai 4===============================")
console.log(flattenArray([[1, 2], [3, 4]]))

//=====================================Bai 5======================================================
// Bài 5. Viết hàm isSymmetric(arr) kiểm tra xem mảng có đối xứng hay không.

// Input: arr = [1, 2, 3, 2, 1]
// Output: true

console.log("===================Bai 5===============================")
console.log(isSymmetric([1, 2, 2, 1]))


//=====================================Bai 6======================================================
// Bài 6. Viết hàm findSecondLargest(arr) trả về giá trị lớn thứ hai trong mảng.

// Input: arr = [3, 1, 4, 2, 4]
// Output: 3

console.log("===================Bai 6===============================")
console.log(findSecondLargest([3, 1, 4, 2, 4]))

//=====================================Bai 7======================================================
// Bài 7. Viết hàm sortProductsByPrice(products) sắp xếp danh sách sản phẩm theo giá tăng dần.

// Input:
// products = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 50 }
// ];
// Output:
// [
//     { name: 'Product B', price: 20 },
//     { name: 'Product A', price: 30 },
//     { name: 'Product C', price: 50 }
// ]
let products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 },
    { name: 'Product D', price: 10 }
];
console.log("===================Bai 7===============================")
console.log(sortProductsByPrice(products));

//=====================================Bai 8======================================================
// Bài 8. Viết hàm findMostExpensiveProduct(products) trả về sản phẩm có giá lớn nhất.

// Input:
// products = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 50 }
// ];
// Output:
// { name: 'Product C', price: 50 }
products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 }
 ];
 console.log("===================Bai 8===============================")

console.log(findMostExpensiveProduct(products))

//=====================================Bai 9======================================================
// Bài 9. Viết hàm groupByType(arr) gom nhóm các phần tử trong mảng dựa theo loại (type).

// Input:
// arr = [
//     { type: 'fruit', name: 'apple' },
//     { type: 'vegetable', name: 'carrot' },
//     { type: 'fruit', name: 'banana' }
// ];

// Output:
// {
//     fruit: ['apple', 'banana'],
//     vegetable: ['carrot']
// }
let arr = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
];
 console.log("===================Bai 9===============================")
console.log(groupByType(arr))

//=====================================Bai 10======================================================
// Bài 10. Viết hàm isSubset(arr1, arr2) kiểm tra xem arr2 có phải là mảng con của arr1 hay không.

// Input: arr1 = [1, 2, 3, 4], arr2 = [2, 4]
// Output: true
let arr1 = [1, 2, 3, 4]
let arr2 = [2, 4]
console.log("===================Bai 10===============================")
console.log(isSubset(arr1, arr2))

//=====================================Bai 11======================================================
// Bài 11. Viết hàm findMaxKey(obj) trả về key có giá trị số lớn nhất trong object.

// Input: obj = { a: 10, b: 20, c: 15 }
// Output: 'b'
let obj = { a: 10, b: 20, c: 15 }
console.log("===================Bai 11===============================")
console.log(findMaxKey(obj))

//=====================================Bai 12======================================================
// Bài 12. Viết hàm mergeObjectsSumValues(obj1, obj2) hợp hai object, nếu key trùng nhau thì cộng giá trị.

// Input:
// obj1 = { a: 10, b: 20 };
// obj2 = { b: 30, c: 40 };
// Output: { a: 10, b: 50, c: 40 }
let obj1 = { a: 10, b: 20 };
let obj2 = { b: 30, c: 40 };
console.log("===================Bai 12===============================")
console.log(mergeObjectsSumValues(obj1, obj2))

//=====================================Bai 13======================================================
// Bài 13. Viết hàm countElements(arr) trả về object đếm số lần xuất hiện của mỗi phần tử trong mảng.

// Input: arr = ['a', 'b', 'a', 'c', 'b', 'a']
// Output: { a: 3, b: 2, c: 1 }
arr = ['a', 'b', 'a', 'c', 'b', 'a']
console.log("===================Bai 13===============================")
console.log(countElements(arr))

//=====================================Bai 14======================================================
// Bài 14. Viết hàm cleanObject(obj) xóa các key có giá trị là null hoặc undefined.

// Input: obj = { a: 1, b: null, c: undefined, d: 4 }
// Output: { a: 1, d: 4 }
obj = { a: 1, b: null, c: undefined, d: 4 }
console.log("===================Bai 14===============================")
console.log(cleanObject(obj))

//=====================================Bai 15======================================================
// Bài 15. Viết hàm hasDuplicate(arr) kiểm tra xem mảng có phần tử lặp lại hay không.

// Input: arr = [1, 2, 3, 4, 2]
// Output: true
arr = [1, 2, 3, 4, 2]
console.log("===================Bai 15===============================")
console.log(hasDuplicate(arr))


//=====================================Bai 16======================================================
// Bài 16. Viết hàm sumByGroup(arr, key) tính tổng giá trị theo nhóm.
// Input:
// arr = [
//     { type: 'fruit', price: 10 },
//     { type: 'vegetable', price: 20 },
//     { type: 'fruit', price: 30 }
// ];
// Output:
// {
//     fruit: 40,
//     vegetable: 20
// }
arr = [
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
]
console.log("===================Bai 16===============================")
console.log(sumByGroup(arr))

//=====================================Bai 17======================================================
// Bài 17. Viết hàm uniqueValues(arr1, arr2) trả về mảng các giá trị duy nhất từ hai mảng.
// Input: arr1 = [1, 2, 3], arr2 = [3, 4, 5]
// Output: [1, 2, 3, 4, 5]
arr1 = [1, 2, 3], arr2 = [3, 4, 5]
console.log("===================Bai 17===============================")
console.log(uniqueValues(arr1, arr2))

//=====================================Bai 18======================================================
// Bài 18. Viết hàm isPermutation(arr1, arr2) kiểm tra xem hai mảng có phải là hoán vị của nhau không.
// Input: arr1 = [1, 2, 3], arr2 = [3, 2, 1]
// Output: true
arr1 = [1, 2, 3]
arr2 = [3, 2, 1]
console.log("===================Bai 18===============================")
console.log(isPermutation(arr1, arr2))

//=====================================Bai 19======================================================
// Bài 19. Viết hàm findLongestString(arr) trả về chuỗi có độ dài lớn nhất trong mảng.

// Input: arr = ['abc', 'abcd', 'a']
// Output: 'abcd'
arr = ['abc', 'abcd', 'a']
console.log("===================Bai 19===============================")
console.log(findLongestString(arr))


//=====================================Bai 20======================================================
// Bài 20. Viết hàm intersection(arr1, arr2) trả về mảng chứa các giá trị chung giữa hai mảng.

// Input: arr1 = [1, 2, 3], arr2 = [2, 3, 4]
// Output: [2, 3]
arr1 = [1, 2, 3]
arr2 = [2, 3, 4]
console.log("===================Bai 20===============================")

console.log(intersection(arr1, arr2))

//=====================================Bai 21======================================================
// Bài 21. Viết hàm filterByMinValue(arr, minValue) để xóa tất cả các phần tử có giá trị nhỏ hơn minValue.

// Input: arr = [5, 10, 15, 20], minValue = 12
// Output: [15, 20]
arr = [5, 10, 15, 20]
console.log("===================Bai 21===============================")
console.log(filterByMinValue(arr, 12))

//=====================================Bai 22======================================================
// Bài 22.  Viết hàm findLongestValue(obj) để tìm giá trị có độ dài lớn nhất trong một object.

// Input: obj = { a: 'cat', b: 'elephant', c: 'dog' }
// Output: 'elephant'
obj = { a: 'cat', b: 'elephant', c: 'dog' }
console.log("===================Bai 22===============================")
console.log(findLongestValue(obj))

//=====================================Bai 23======================================================
// Bài 23. Viết hàm groupByFirstLetter(arr) để gom nhóm các chuỗi theo chữ cái đầu tiên.

// Input: arr = ['apple', 'banana', 'avocado', 'blueberry']
// Output:
// {
//     a: ['apple', 'avocado'],
//     b: ['banana', 'blueberry']
// }
arr = ['apple', 'banana', 'avocado', 'blueberry']
console.log("===================Bai 23===============================")
console.log(groupByFirstLetter(arr))

//=====================================Bai 24======================================================
// Bài 24. Viết hàm getAdults(people) để trả về danh sách người lớn (tuổi >= 18) từ một danh sách người.

// Input:
// people = [
//     { name: 'Alice', age: 17 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 16 },
//     { name: 'David', age: 22 }
// ];
let people = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 22 }
];
console.log("===================Bai 24===============================")
console.log(getAdults(people))

//=====================================Bai 25======================================================
// Bài 25. Viết hàm convertToArray(obj) để chuyển đổi một object thành mảng các cặp [key, value].

// Input: obj = { a: 1, b: 2, c: 3 }
// Output: [['a', 1], ['b', 2], ['c', 3]]
obj = { a: 1, b: 2, c: 3 }

console.log("===================Bai 25===============================")
console.log(convertToArray(obj))

//=====================================Bai 26======================================================
// Bài 26. Viết hàm sortStringsByLength(arr) để sắp xếp mảng chuỗi theo độ dài tăng dần.

// Input: arr = ['a', 'ccc', 'bb']
// Output: ['a', 'bb', 'ccc']
arr = ['a', 'ccc', 'bb']
console.log("===================Bai 26===============================")
console.log(sortStringsByLength(arr))

//=====================================Bai 27======================================================
// Bài 27. Viết hàm sumByKey(arr, key) để tính tổng giá trị là số của một key được chỉ định trong danh sách object.

// Input:
// arr = [
//     { type: 'fruit', price: 10 },
//     { type: 'vegetable', price: 20 },
//     { type: 'fruit', price: 30 }
// ];
// key = 'price';
// Output: 60
arr = [
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
];
console.log("===================Bai 27===============================")
console.log(sumByKey(arr, 'price'))


//=====================================Bai 28======================================================
// Bài 28. Viết hàm countWords(str) để đếm số từ trong một chuỗi.

// Input: str = "Hello world! Welcome to JavaScript"
// Output: 5
let str = "Hello world! Welcome to JavaScript"
console.log("===================Bai 28===============================")
console.log(countWords(str))

//=====================================Bai 29======================================================
// Bài 29. Viết hàm findMinKey(obj) để tìm key có giá trị số nhỏ nhất trong object.

// Input: obj = { a: 100, b: 20, c: 50 }
// Output: 'b'
obj = { a: 100, b: 20, c: 50 }
console.log("===================Bai 29===============================")
console.log(findMinKey(obj))
