// function getUser(name, callback){
//     console.log("logging in....")

//     setTimeout(()=>{
//         console.log(`welcome ${name}`)
//     }, 1000)
//     callback()
// }

// function dash(){
//     setTimeout(()=>{
//         console.log("this is our dash")
//     }, 4000)
// }

// getUser("harsh",dash)






//Question given is done 
const calculateG = (a, b, callback) => {
    return callback(a, b);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multipy = (a, b) => a * b;
const divide = (a, b) => a / b;
const mod = (a, b) => a % b;

console.log("Add: ", calculateG(2, 3, add));
console.log("Subtract: ", calculateG(2, 3, subtract));
console.log("Multiply: ", calculateG(2, 3, multipy));
console.log("Divide: ", calculateG(2, 3, divide));
console.log("Mod: ", calculateG(2, 3, mod));