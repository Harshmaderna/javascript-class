// const pr = new Promise((resolve, reject) => {
//     const success = true
//     if(success)
//         resolve("is work")
//     else resolve("not work")
// })

// pr.then((result) => clg(result))
// .catch((e) =>{
//     console.log("e")
// })


//q1 Write a Promise that resolves after 2 seconds with the message “Hello after delay”.

// console.log("Start");
// const promise = new Promise((resolve) => {
//   resolve("Resolved!");
// });
// setTimeout(function() {
//   console.log("Delay")
// });
// promise.then((res) => {
//   console.log(res);
// });
// console.log("End");

// console.log("Start");
// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("hello i am delay in 3 second")
//         resolve("hello i am delay in 3 second")
//     }, 2000)
// });

// promise.then((res) => { 
//     console.log(res)
// })

// q2 Convert the following callback-based function to use Promises:
// function getData(callback) {
//     setTimeout(() => {
//       callback("Data received");
//     }, 1000);
//   }

function getData(){
    console.log("fetching data...")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data received")
        }, 2000)
    });
}

getData().then((res) => {
    console.log(res)
})