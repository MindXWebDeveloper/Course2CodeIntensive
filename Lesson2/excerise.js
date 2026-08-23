//=====================================Bai 1======================================================
// Bài 1. Viết hàm sumArray(arr) trả về tổng các phần tử trong mảng.

import { countOccurrences, findSecondLargest, flattenArray, isSymmetric, removeDuplicates, sumArray } from "./utils.js"

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
console.log(isSymmetric([1, 2, 3, 2, 1]))


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
console.log("===================Bai 7===============================")

