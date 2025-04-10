// Given an input string, reverse the string word by word.
// Input: " hello world "
// Output: "world hello"

// let str = "hello world"
// console.log(str.split(" ").reverse(" ").join(" "));



// Given an integer array nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Input: [1,2,3,4] 
// Output: [24,12,8,6]

// function product(arr) {
//     const pro = [];
//     for (let i = 0; i < arr.length; i++) {
//         let duc = 1;
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j) {
//                 duc *= arr[j];
//             }
//         }
//         pro.push(duc)
//     }
//     return pro;
// }
// const nums = [1, 2, 3, 4];
// console.log(product(nums));



// Longest Palindromic Substring
// Given a string s, return the longest palindromic substring.
// Input: "babad" 
// Output: "bab" or "aba"


// function random(start, end, str) {
//     while (start >= 0 && end < str.length && str[start] === str[end]) {
//         start--;
//         end++;
//     }
//     return str.slice(start + 1, end);
// }

// function finding(str) {
//     let long = "";
//     for (let i = 0; i < str.length; i++) {
//         const odd = random(i, i, str);
//         if (odd.length > long.length) long = odd;

//         const even = random(i, i + 1, str);
//         if (even.length > long.length) long = even;
//     }
//     return long;
// }

// let str = "babad";
// let longestPalindrome = finding(str);
// console.log(longestPalindrome);




// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// function tar(arr,target){
//     n = arr.length, m = arr[0].length
//     for(let i = 0; i<=n; i++){
//         for(let j = 0; j<=m; j++){
//             if(arr[i][j] == target){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// const mat = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// const target = 0

// console.log(tar(mat))

// const arr = [0,3, 149, 8, 6, 20]


// console.log(Math.min(...arr))


function fun(...args){
    let sum = 0
    for(let val of args){
        sum += val
        return sum
    }

}



const ans = fun(1,2,3,4,5)
console.log(ans)