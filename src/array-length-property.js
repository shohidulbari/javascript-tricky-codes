const arr = [1, 2, 3, 4, 5, 6];
arr.length = 3;
console.log(arr); //[1, 2, 3]
arr.length = 0;
console.log(arr[0]); //undefined
arr[0] = 1;
console.log(arr); //[1]
arr[3] = 3;
console.log(arr); //[ 1, <2 empty items>, 3 ]
console.log(arr.length); //4
console.log(arr[100]); //undefined
console.log(arr.length); //4
arr[100] = 100;
console.log(arr.length); //101