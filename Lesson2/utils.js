//=====================================Bai 1======================================================
// Bài 1. Viết hàm sumArray(arr) trả về tổng các phần tử trong mảng
// Input: arr = [1, 2, 3, 4]
// Output: 10

const sumArray = (arr) => arr.reduce((total, item) => total + item, 0);

//=====================================Bai 2======================================================
// Bài 2. Viết hàm countOccurrences(arr, value) đếm số lần xuất hiện của value trong mảng arr

// Input: arr = [1, 2, 2, 3, 2], value = 2
// Output: 3

const countOccurrences = (arr, value) => {
    return arr.filter(item => item === value).length
}


//=====================================Bai 3======================================================
// Bài 3. Viết hàm removeDuplicates(arr) trả về mảng không có phần tử trùng lặp.

// Input: arr = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6]
// Output: [1, 2, 3, 4, 6]
const removeDuplicates = (arr) => {
    let result = arr;
    for(let i = 0; i < result.length; i++){
        if(countOccurrences(result, result[i]) > 1) {
         result.splice(result.lastIndexOf(result[i]),1);
        }
    }
    return result
}

//=====================================Bai 4======================================================
// Bài 4. Viết hàm flattenArray(arr) chuyển một mảng gồm các phần tử mảng 2D (2 chiều) thành mảng 1D (1 chiều)

// Input: arr = [[1, 2], [3, 4]]
// Output: [1, 2, 3, 4]
const flattenArray = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(...arr[i]);
    }
    return result;
}

//=====================================Bai 5======================================================
// Bài 5. Viết hàm isSymmetric(arr) kiểm tra xem mảng có đối xứng hay không.

// Input: arr = [1, 2, 3, 2, 1]
// Output: true
const isSymmetric = (arr) => {
    if(arr.length % 2 === 0)
        return false
    else {
        let index = (arr.length - 1) / 2
        for(let i=0; i < index; i++) {
            if(arr[i] !== arr[arr.length - 1 - i])
                return false
        }
        return true;
    }
}

//=====================================Bai 6======================================================
// Bài 6. Viết hàm findSecondLargest(arr) trả về giá trị lớn thứ hai trong mảng.

// Input: arr = [3, 1, 4, 2, 4]
// Output: 3
const findSecondLargest = (arr) => {
    let result = removeDuplicates(arr).sort((a, b) => a - b)
    return result[result.length - 2];
}

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

export {sumArray, countOccurrences, removeDuplicates, flattenArray, isSymmetric, findSecondLargest}