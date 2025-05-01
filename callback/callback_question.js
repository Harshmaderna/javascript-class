// q1 get the total price of all available products except laptop using map filter reduce
// using map
// const products = [
//   { name: "laptop", price: 70000, available: true },
//   { name: "mouse", price: 1500, available: false },
//   { name: "keyboard", price: 3000, available: true },
//   { name: "monitor", price: 12000, available: true },
// ];

// const newProducts = products.filter((products) => products.name !== "laptop")


// console.log(newProducts);




// Q2 Return a single string of comma-separated capitalized names (e.g., "BOB, CHARLIE") of users over 18
// const users = [
//     { name: "alice", age: 17 },
//     { name: "bob", age: 22 },
//     { name: "charlie", age: 19 },
//     { name: "dave", age: 16 },
//   ];
//    const capitalName = users.filter(num => num.age > 18)
//    const capitalsName = users.map(word => word.name.toUpperCase())
//    console.log(capitalName, capitalsName, capitalsName)
   

  


//   Q3 Find the total number of characters in words that have even length using map, filter, reduce
// const words = ["apple", "banana", "kiwi", "mango", "plum", "grape"];

// const evenLength = words.filter(word => word.length % 2 === 0)
// const evensLength = words.map(word => word.length )
// const evLength = words.reduce((acc, curr) => acc+curr)
// console.log(evenLength,evensLength, evLength)






// Q: Use map, filter, reduce to calculate the average score of students who passed (score >= 50)
const students = [
    { name: "Rahul", score: 45 },
    { name: "Priya", score: 78 },
    { name: "Ajay", score: 88 },
    { name: "Neha", score: 32 },
  ];
    const passStudent = students.filter(item => item.score >= 50)
    const pasStudent = students.map(student => student.score)
    const passesStudent = students.reduce((acc, curr,) => acc+curr)
    console.log(passStudent, pasStudent,passesStudent)


