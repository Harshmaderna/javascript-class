// let fname = "harsh"
// let lname = "amit"

// // console.log(fname, lname)
// console.table(fname, lname)
// // console.error("harsh")
// // console.warn("harsh")

// var fname = "harsh"
// var lname = "maderna"
// var num = 15
// var isTrue = true

// console.log(fname, lname,num,isTrue)

// var num = 10;
// function fun() {

//     console.log(num)
//     var num = 20;
// }
// fun()
// console.log(num)

// let num = 10;
// {
//     let num = 20;
//     console.log(num)
// }

// console.log(num)

// const name = "raj";

// name = "raj"

// const num = null;

// console.log(num)

// let a = 20
// console.log(a)
// {
//      a = 30;
//     console.log(a)
// }
// console.log(a)
// num = 20;
// console.log(num)

// task

// let x = 10;
// function test() {
//     let x = 20;
//     console.log(x)
// }
// test();
// console.log(x)
// 10 20



// {
//     let a = 10;
//     var b = 20;
// }
// console.log(b)
// console.log(a)
// a is not define



// function scopeTest(){
//     if(true){
//         var x = 5;
//         let y = 10;
//     }
//     console.log(x)
//     console.log(y)
// }
// scopeTest();
// x = 5 and y is not define



// let a = 1;
// function outer(){
//     let a = 2;
//     function inner(){
//         let a = 3;
//         console.log(a)
//     }
//     inner();
//     console.log(a)
// }
// outer();
// console.log(a)
// 3 2 1



// let x = 10;
// function foo(){
//     console.log(x)
//     let x = 20;
// }
// foo()
// cannot access x before initialization

// for(var i = 0; i < 3; i++){
//     setTimeout(()=> console.log(i), 1000)
// }
// var function scoped not block scope this output 3 3 3 after one second
// block scoped like let i use let and outpur 0 1 2 after one second



// var a = 1;
// function example(){
//     console.log(a)
//     var a = 2
//     console.log(a)
// }
// example()
// undefined, 2



// let a = 5;
// {
//   let a = 10;
//   {
//     let a = 15;
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);
// let is block scope output 15, 10, 5



// let a = 10;
// function foo() {
//   console.log(a);
// }
// function bar() {
//   let a = 20;
//   foo();
// }

// bar();
// doubt 10 print kaise hua


// var a = 1;

// function outer() {
//   var a = 2;

//   function inner() {
//     console.log(a);
//   }

//   return inner;
// }

// const fn = outer();
// fn();
//  print 2 please define