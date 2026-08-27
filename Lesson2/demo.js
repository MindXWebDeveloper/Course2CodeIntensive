const arr = ['a', 'b']

const empty = [1, 2, 3]

const defaultSizeArray = new Array(5);

console.log(defaultSizeArray)

const first = arr[0]

console.log(first)

const arrayNumber = [1, 2, 3, 4, 5];
const [x,y,z] = arrayNumber;
console.log(x); // 0
console.log(y); // 1
console.log(z); // 2

let fruits = ['Apple', 'Banana', 'Cherry'];

// Thêm một phần tử vào cuối mảng
fruits.push('Date');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']

// Xóa phần tử cuối cùng của mảng
fruits.pop();
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// Xóa phần tử đầu tiên của mảng
fruits.shift();
console.log(fruits); // Output: ['Banana', 'Cherry']

// Thêm một phần tử vào đầu mảng
fruits.unshift('Apricot');
console.log(fruits); // Output: ['Apricot', 'Banana', 'Cherry']

// Sử dụng splice thao tác với phần tử qua vị trí

// Xoá một phần từ kể từ vị trí số 0
fruits.splice(0, 1);
console.log(fruits); // Output: ['Banana', 'Cherry']

// Thêm một phần tử kể từ vị trí số 1, không xoá phần tử nào
fruits.splice(1, 0, 'Lemon');
console.log(fruits); // Output: ['Banana', 'Lemon', 'Cherry']

let arr = [1, 2, 3];
let newArr = arr.map((item)=>{
    return item * 2;
});
console.log(newArr); // Output: [2, 4, 6]

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((item) => {
  // trả về phần tử khi phần tử đó thoả mãn điều kiện return
  return item % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(element => element > 10);

console.log(found); // Output: 12 (phần tử đầu tiên lớn hơn 10)