// let n = 5
// let sum = 1
// for(let i = 1; i<=n; i++){
//     let num = ""
//     for(let j = 1; j<=i; j++){
//         num += sum + " "
//         sum++
//     }
//     console.log(num)
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 23 14 15

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let space = "";
//   for (let j = 1; j <= n - i; j++) {
//     space += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k == 1 || k == 2 * i - 1) {
//       space += "*";
//     } else {
//       space += " ";
//     }
//   }
//   console.log(space);
// }

// for (let i = n-1; i >= 1; i--) {
//     let spaces = "";
//     for (let j = 1; j <= n - i; j++) {
//       spaces += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       if (k == 1 || k == 2 * i - 1) {
//         spaces += "*";
//       } else {
//         spaces += " ";
//       }
//     }
//     console.log(spaces);
//   }

//    *
//   * *
//  *   *
// *     *
// *      *
// *     *
//  *   *
//   * *
//    *

// let n = 5;
// for(let i =1; i<=n; i++){
//   let star = ""
//   for(let j = 1; j<=n-i; j++){
//     star+= " "
//   }
//   for(let k = 1; k<=2*i-1; k++){
//     if(k%2==0){
//       star+=" "
//     }
//     else{
//      star+= "*"
//     }
//   }
//   console.log(star)
// }

// for(let i =n; i>=1; i--){
//   let star = ""
//   for(let j = 1; j<=n-i; j++){
//     star+= " "
//   }
//   for(let k = 1; k<=2*i-1; k++){
//     if(k%2==0){
//       star+=" "
//     }
//     else{
//      star+= "*"
//     }
//   }
//   console.log(star)
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let star = " ";
//   for (let j = 1; j <= n - i; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k % 2 == 0) {
//       star += " ";
//     } else {
//       star += "*";
//     }
//   }
//   console.log(star);
// }

//

// let n = 6
// let fact = 1
// while(n!==0){
//   fact *= n;
//   n--;

// }
// console.log(fact)

// for(let i = 1; i<=-10; i++){
//   if(i==4){
//     continue
//   }
//   console.log(i)
// }

// yesterday task

// Write a program that calculates the sum of digits of a given number
//  num = 45679312321;

// let num = 45679312321;
// let sum = 0
// while(num !== 0){
//     let rem = num % 10
//     sum += rem
//     num = Math.floor(num / 10)
// }
// console.log(sum)

// Write a program to check if a number is prime
//  num = 29;
// let n = 29
// for(let i = 2; i <= n-1; i++){
//     if(n % i == 0){
//         console.log("not a prime number");
//         break;
//     }
//     else{
//         console.log("prime number")
//         break;
//     }
// }

// Write a program that prints all prime numbers between two given numbers
// start = 10, end = 50

// let start = 10;
// let end = 50;

// for (let i = start; i <= end; i++) {
//   isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if(isPrime){
//     console.log(i)
//   }
// }

// Write a program to find the GCD of two numbers
//  a = 56, b = 98;

// let n1 = 10
// let n2 = 20

// for(let i = 2; i<=Math.min(10, 20); i++){
//     if(n1 % i === 0 && n2 % i === 0){
//         gcd = i
//     }
//     console.log(gcd)
// }

// Last occurrence in a sorted array
// Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1.
// Input: N = 7, target=13, array[] = {3,4,13,13,13,20,40}
// Output: 4

// let arr = [3, 4, 5, 6, 2, 6, 2];
// let target = 5;
// function search(arr, target) {
//   let start = 0,
//     end = arr.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) {
//       return true;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return false;
// }

// const ans = search(arr, target);
// console.log(ans);




// sort 0 1 2 without using .sort() method
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

const num1 = [2, 1, 0, 2, 1, 0]
let n = num1.length
let low = 0, mid = 0, high = n - 1;
while (mid <= high) {
    if (num1[mid] === 0) {
        [num1[mid], num1[low]] = [num1[low], num1[mid]];
        low++
        mid++
    }
    else if (num1[mid] === 1) {
        mid++
    }
    else {
        [num1[mid], num1[high]] = [num1[high], num1[mid]];
        high--;
    }
}
console.log(num1);
