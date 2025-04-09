//q1 Modify the following array to insert 'a', 'b', 'c' at index 2 without removing any existing elements:
// let arr = [1, 2, 3, 4, 5];

// let arr = [1, 2, 3, 4, 5]
// arr.splice(2,0, "a","b","c")
// console.log(arr)

//q2 removes duplicates in place using splice()
// let arr = [1, 2, 3, 2, 4, 3, 5, 1];

// let arr = [1, 2, 3, 2, 4, 3, 5, 1];
// function splice(arr) {
//     for(let i = 0; i<=arr.length; i++){
//         if(arr.indexOf(arr[i]!==i)){
//             arr.splice(i, 1)
//             // i--;
//         }
//     }
//     return arr;
// }

// const ans = splice(arr)
// console.log(ans)

//q3 reverse an array in-place using only splice()
// reverseArray([1, 2, 3, 4, 5]);
// let arr = [1, 2, 3, 4, 5]
// for(i=0; i<arr.length; i++){
//     let lastEl = arr.splice(arr.length-1, 1)[0]
//     arr.splice(i,0, lastEl);
// }
// console.log(arr)

//q4 finds the second largest number in an array without sorting it.
// let arr = [10, 5, 8, 20, 15];

// let arr = [10, 5, 8, 20, 15]
// let large = -Infinity;
// for(i=0; i<arr.length; i++){
//     if(arr[i] > large){
//         large = arr[i]
//     }
//     let sl = -infinity
//     for(i = 0; i<arr.length; i++){
//         for(sl < arr [i] && arr[i] !== large){
//             sl = arr[i]
//         }
//     }

// }
// console.log(large)

// let arr = [10, 5, 8, 20, 15];

// let large = -Infinity;
// let sl = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > large) {
//     sl = large;
//     large = arr[i];
//   } else if (arr[i] > sl && arr[i] < large) {
//     sl = arr[i];
//   }
// }

// console.log(sl);





//q1 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// let nums = [2, 7, 11, 15];
// let target = 9;
// let map = {}; 
// let result = [];

// for (let i = 0; i < nums.length; i++) {
//     let element = target - nums[i];

//     if (map.hasOwnProperty(element)) {
//         result = [map[element], i];
//         break; 
//     }

//     map[nums[i]] = i; 
// }

// console.log(result);




//q2  ort 0 1 2 without using .sort() method
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// let nums = [2, 0, 2, 1, 1, 0];
// let low = 0
// let mid = 0
// let high = nums.length - 1;

// while (mid <= high) {
//     if (nums[mid] === 0) {
//         [nums[low], nums[mid]] = [nums[mid], nums[low]]; 
//         low++;
//         mid++;
//     } else if (nums[mid] === 1) {
//         mid++; 
//     } else {
//         [nums[mid], nums[high]] = [nums[high], nums[mid]]; 
//         high--;
//     }
// }

// console.log(nums); 



// binary search 
// let arr = [12, 23, 12, 45, 22]
//  let target = 45
// function search(arr, target){
//     let s= 0, e = arr.length-1
//     while(s<=e){
//         let mid = (s+e)/2
//         if(arr[mid] === target){
//             return true;
//         }
//         else if(arr[mid] < target){
//             start = mid+1
//         } else{
//             end = mid-1
//         }
//     }
//     return false;
// }

// const last = search(arr, target)
// console.log(last)



const intervalId = setInterval(() =>{
    console.log("harsh")
}, 1000);

setTimeout(()=> {
    clearInterval(intervalId)
    console.log("completed!!")
}, 3000)
