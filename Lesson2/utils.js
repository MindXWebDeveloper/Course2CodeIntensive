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
  return arr.filter((item) => item === value).length;
};

//=====================================Bai 3======================================================
// Bài 3. Viết hàm removeDuplicates(arr) trả về mảng không có phần tử trùng lặp.

// Input: arr = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6]
// Output: [1, 2, 3, 4, 6]
const removeDuplicates = (arr) => {
  let result = [...arr];
  for (let i = 0; i < result.length; i++) {
    if (countOccurrences(result, result[i]) > 1) {
      result.splice(result.lastIndexOf(result[i]), 1);
    }
  }
  return result;
};

//=====================================Bai 4======================================================
// Bài 4. Viết hàm flattenArray(arr) chuyển một mảng gồm các phần tử mảng 2D (2 chiều) thành mảng 1D (1 chiều)

// Input: arr = [[1, 2], [3, 4]]
// Output: [1, 2, 3, 4]
const flattenArray = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(...arr[i]);
  }
  return result;
};

//=====================================Bai 5======================================================
// Bài 5. Viết hàm isSymmetric(arr) kiểm tra xem mảng có đối xứng hay không.

// Input: arr = [1, 2, 3, 2, 1]
// Output: true
const isSymmetric = (arr) => {
  if (arr.length % 2 === 0) return false;
  else {
    let index = (arr.length - 1) / 2;
    for (let i = 0; i < index; i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
  }
};

//=====================================Bai 6======================================================
// Bài 6. Viết hàm findSecondLargest(arr) trả về giá trị lớn thứ hai trong mảng.

// Input: arr = [3, 1, 4, 2, 4]
// Output: 3
const findSecondLargest = (arr) => {
  let result = removeDuplicates(arr).sort((a, b) => a - b);
  return result[result.length - 2];
};

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

const sortProductsByPrice = (products) => {
  return products.sort((a, b) => a.price - b.price);
};

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

const findMostExpensiveProduct = (products) => {
  let result = sortProductsByPrice(products);
  return result[result.length - 1];
};

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

const groupByType = (arr) => {
  return {
    fruit: arr.filter((item) => item.type === "fruit").map((item) => item.name),
    vegetable: arr
      .filter((item) => item.type === "vegetable")
      .map((item) => item.name),
  };
};

//=====================================Bai 10======================================================
// Bài 10. Viết hàm isSubset(arr1, arr2) kiểm tra xem arr2 có phải là mảng con của arr1 hay không.

// Input: arr1 = [1, 2, 3, 4], arr2 = [2, 4]
// Output: true

const isSubset = (parent, child) => {
  return child.filter(item => parent.some(value => value === item)).length === child.length;
};

//=====================================Bai 11======================================================
// Bài 11. Viết hàm findMaxKey(obj) trả về key có giá trị số lớn nhất trong object.

// Input: obj = { a: 10, b: 20, c: 15 }
// Output: 'b'
const findMaxKey = (obj) => {
    let max = null;
    let result = null;
    for(let key in obj) {
        if (max === null || obj[key] > max)
        {
            max = obj[key]
            result = key
        }
    }
    return result;
}

//=====================================Bai 12======================================================
// Bài 12. Viết hàm mergeObjectsSumValues(obj1, obj2) hợp hai object, nếu key trùng nhau thì cộng giá trị.

// Input:
// obj1 = { a: 10, b: 20 };
// obj2 = { b: 30, c: 40 };
// Output: { a: 10, b: 50, c: 40 }

const mergeObjectsSumValues = (obj1, obj2) => {
    let result = {...obj1}
    for(let key in obj2) {
        if(result[key])
            result[key] += obj2[key]
        else
            result[key] = obj2[key]
    }
    return result
}

// Bài 13. Viết hàm countElements(arr) trả về object đếm số lần xuất hiện của mỗi phần tử trong mảng.

// Input: arr = ['a', 'b', 'a', 'c', 'b', 'a']
// Output: { a: 3, b: 2, c: 1 }

const countElements = (data) => {
    let result = {}
    let filter = removeDuplicates(data)
    filter.forEach((item, index, arr) => {
        result[item] = countOccurrences(data, item)
    })
    return result
}

//=====================================Bai 14======================================================
// Bài 14. Viết hàm cleanObject(obj) xóa các key có giá trị là null hoặc undefined.

// Input: obj = { a: 1, b: null, c: undefined, d: 4 }
// Output: { a: 1, d: 4 }

const cleanObject = (obj) => {
    for(let key in obj){
        if (obj[key] === null || obj[key] === undefined){
            delete obj[key]
        }
    }
    return obj;
}

//=====================================Bai 15======================================================
// Bài 15. Viết hàm hasDuplicate(arr) kiểm tra xem mảng có phần tử lặp lại hay không.

// Input: arr = [1, 2, 3, 4, 2]
// Output: true

const hasDuplicate = (arr) => {
    let result = removeDuplicates(arr)
    return result.length !== arr.length;
}

//=====================================Bai 15======================================================
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

const sumByGroup = (arr) => {
   let result = {}
   let key;
   let valueKey;
    arr.forEach((item) => {
        key = [...Object.keys(item)][0];
        valueKey = [...Object.keys(item)][1];
        if(result[item[key]])
         result[item[key]] += item[valueKey]
        else
          result[item[key]] = item[valueKey] 

    });
   return (result)
}

//=====================================Bai 17======================================================
// Bài 17. Viết hàm uniqueValues(arr1, arr2) trả về mảng các giá trị duy nhất từ hai mảng.
// Input: arr1 = [1, 2, 3], arr2 = [3, 4, 5]
// Output: [1, 2, 3, 4, 5]

const uniqueValues = (arr1, arr2) => {
    return removeDuplicates([...arr1, ...arr2])
}

//=====================================Bai 18======================================================
// Bài 18. Viết hàm isPermutation(arr1, arr2) kiểm tra xem hai mảng có phải là hoán vị của nhau không.
// Input: arr1 = [1, 2, 3], arr2 = [3, 2, 1]
// Output: true

const isPermutation = (arr1, arr2) => {
    let temp = [...arr2].sort((a, b) => a - b);
    if(arr1.length !== arr2.length)
        return false;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== temp[i])
            return false;
    }
    return true;
}

//=====================================Bai 19======================================================
// Bài 19. Viết hàm findLongestString(arr) trả về chuỗi có độ dài lớn nhất trong mảng.

// Input: arr = ['abc', 'abcd', 'a']
// Output: 'abcd'

const findLongestString = (arr) => {
    return [...arr.sort((a, b) => b.length - a.length)][0]
}

//=====================================Bai 20======================================================
// Bài 20. Viết hàm intersection(arr1, arr2) trả về mảng chứa các giá trị chung giữa hai mảng.

// Input: arr1 = [1, 2, 3], arr2 = [2, 3, 4]
// Output: [2, 3]

const intersection = (arr1, arr2) => {
    return removeDuplicates([...[...arr1, ...arr2].filter((item, index, arr) => countOccurrences(arr, item) > 1)])
}

//=====================================Bai 21======================================================
// Bài 21. Viết hàm filterByMinValue(arr, minValue) để xóa tất cả các phần tử có giá trị nhỏ hơn minValue.

// Input: arr = [5, 10, 15, 20], minValue = 12
// Output: [15, 20]

const filterByMinValue = (arr, minValue) => {
    return arr.filter(item => item > minValue);
}

//=====================================Bai 22======================================================
// Bài 22.  Viết hàm findLongestValue(obj) để tìm giá trị có độ dài lớn nhất trong một object.

// Input: obj = { a: 'cat', b: 'elephant', c: 'dog' }
// Output: 'elephant'

const findLongestValue = (obj) => {
    let result = []
    for(let key in obj) {
        result.push(obj[key])
    }
    return result.sort((a, b) => b.length - a.length)[0]
}

//=====================================Bai 23======================================================
// Bài 23. Viết hàm groupByFirstLetter(arr) để gom nhóm các chuỗi theo chữ cái đầu tiên.

// Input: arr = ['apple', 'banana', 'avocado', 'blueberry']
// Output:
// {
//     a: ['apple', 'avocado'],
//     b: ['banana', 'blueberry']
// }

const groupByFirstLetter = (arr) => {
    let data = {};
    arr.sort();

    arr.forEach((item) => {
        const firstLetter = item.charAt(0);

        if (!data[firstLetter]) {
            data[firstLetter] = [];
        }

        data[firstLetter].push(item);
    });

    return data;
};

// Bài 24. Viết hàm getAdults(people) để trả về danh sách người lớn (tuổi >= 18) từ một danh sách người.

// Input:
// people = [
//     { name: 'Alice', age: 17 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 16 },
//     { name: 'David', age: 22 }
// ];

const getAdults = (people) => {
    return people.filter((item) => item.age >= 18);
}

// Bài 25. Viết hàm convertToArray(obj) để chuyển đổi một object thành mảng các cặp [key, value].

// Input: obj = { a: 1, b: 2, c: 3 }
// Output: [['a', 1], ['b', 2], ['c', 3]]

const convertToArray = (obj) => {
    let result = []

    for (let key in obj) {
        result.push([key, obj[key]])
    }

    return result
}

//=====================================Bai 26======================================================
// Bài 26. Viết hàm sortStringsByLength(arr) để sắp xếp mảng chuỗi theo độ dài tăng dần.

// Input: arr = ['a', 'ccc', 'bb']
// Output: ['a', 'bb', 'ccc']


const sortStringsByLength = (arr) => {
    return arr.sort((a, b) => a.length - b.length)
}

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

const sumByKey = (arr, key) => {
    return arr.reduce((total, item) => total += item[key], 0)
}

// Bài 28. Viết hàm countWords(str) để đếm số từ trong một chuỗi.

// Input: str = "Hello world! Welcome to JavaScript"
// Output: 5

const countWords = (str) => {
    return str.split(" ").length;
}

//=====================================Bai 29======================================================
// Bài 29. Viết hàm findMinKey(obj) để tìm key có giá trị số nhỏ nhất trong object.

// Input: obj = { a: 100, b: 20, c: 50 }
// Output: 'b'

const findMinKey = (obj) => {
    let minKey = [...Object.keys(obj)][0]
    let min = obj[minKey]
    
    for(let key in obj) {
        if(min > obj[key]){
            min = obj[key]
            minKey = key
        }
    }
    return minKey
}

export {
  sumArray,
  countOccurrences,
  removeDuplicates,
  flattenArray,
  isSymmetric,
  findSecondLargest,
  sortProductsByPrice,
  findMostExpensiveProduct,
  isSubset,
  findMaxKey,
  mergeObjectsSumValues,
  countElements,
  cleanObject,
  hasDuplicate,
  sumByGroup,
  uniqueValues,
  isPermutation,
  findLongestString,
  intersection,
  filterByMinValue,
  groupByType,
  groupByFirstLetter,
  findLongestValue,
  getAdults,
  convertToArray,
  sortStringsByLength,
  sumByKey,
  countWords,
  findMinKey
};
