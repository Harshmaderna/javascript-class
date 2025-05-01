// q5 
// const students = [
//     { studentName: "Ajeet", rollNumber: 101, marks: 55 },
//     { studentName: "Ravi", rollNumber: 102, marks: 45 },
//     { studentName: "Ananya", rollNumber: 103, marks: 20 },
//     { studentName: "Ishika", rollNumber: 104, marks: 85 },
//     { studentName: "Kunal", rollNumber: 105, marks: 60 }
//   ];
//   Check if any student's marks are less than 60.
//   If their marks are less than 60, add 20 grace marks to their score.
//   After updating the marks, calculate the average marks of all the students who is passed(marks >= 60) (including those who received grace marks).

// ans

// const students = [
//     { studentName: "Ajeet", rollNumber: 101, marks: 55 },
//     { studentName: "Ravi", rollNumber: 102, marks: 45 },
//     { studentName: "Ananya", rollNumber: 103, marks: 20 },
//     { studentName: "Ishika", rollNumber: 104, marks: 85 },
//     { studentName: "Kunal", rollNumber: 105, marks: 60 }
//   ];
     

//   data1 = students.map(item => {
//     if(item.marks < 60){
//         item.marks += 20
//     }
//     return item.marks
//   })

//  data2 = data1.filter(item => item >= 60)
//  console.log(data2)

//  data3 = data2.reduce((acc, curr) => acc+curr/data2.length, 0)
//  console.log(data3)


//  q3You are given an object called user that contains a person's name.
// You also have a function called introduce that introduces the person using their name, city, and country.
// Your task is to:
// Use call to invoke the function immediately with user as the context and pass individual arguments for city and country.
// Use apply to do the same but pass the arguments as an array.
// Use bind to create a copy of the function with user set as the context and predefined values for city and country. Then invoke that function later.

// const user = {
//     name:"harsh",
//     introduce: function(name, city, country){
//         this.name = name,
//         this.city = city,
//         this.country = country
//         console.log(`${this.name}, live in ${this.city}, in country ${this.country}`)
//     }
// }

// user.introduce.call(user, "harsh", "bharatpur", "india")
// user.introduce.apply(user, ["harsh", "bharatpur", "country"])
// const bnd = user.introduce.bind(user, "harsh", "bharatpur", "india")

// bnd();




// Create a class Person with a private field #ssn (Social Security Number) and a public method getSSN(). Then, create a subclass Employee that inherits from Person and adds a property employeeId. Write a method in Employee to display all the details.

// class person {
//     #ssn
//     constructor(name, ssn){
//         this.name = name,
//         this.#ssn = ssn
//     }
//     get(){
//         return (`${this.name}, ${this.#ssn}`)
//     }
// }

// class emp extends person {
//     constructor(name, ssn, empId){
//         super(name, ssn)
//         this.empId = empId
//     }
//     getDetails(){
//         return `${this.get()} ${this.empId}`
//     }
// }

// const e1 = new emp("harsh", 1, 12)
// const ans = e1.getDetails();
// console.log(ans)


//q4 Create a custom higher-order function called processData that takes a value and a callback function.
// Then simulate a real-life asynchronous operation like fetching user details, then getting their order details, then getting shipping details — all using nested callbacks


const processData = (val, callback) => {
    setTimeout(()=> {
        callback(val)
    },1000)
}

const getUser = (callback) => {
 const user = {id:1, name: "harsh"}
processData(user, callback)
}

const getOrder = (user, callback) => {
    const order = {id:2, name: user.name, item:"phone"}
    processData(order, callback)
}

// getShipping = (order, callback) => {
//     const shiping = {id: 1, status:"on the way", item: order.item}
//     processData(shiping, callback)
// }


getUser(function (user){
    console.log(`user: ${user}`)
    getOrder(user, function (order){
        console.log(`order ${order}`)
    })
})

// getUser().then((user)=> getOrder(order))
// .then(order => gets(s))
// .then((s) => console.log(e))
// .finally(()=> console.log("done"))




// const processData = (val, cb) => {
//     setTimeout(() => {
//         cb(val)
//     }, 10)
// }
// const getUser = (cb) => {
//     const user = {id:1, name: "Ajeet"}
//     processData(user, cb)
// }
// const getOrder = (user, cb) => {
//     const order = {id:2, name: user.name, item: "Phone"}
//     processData(order, cb)
// }
// const getShipping = (order, cb) => {
//     const shipping = {id:3,item: order.item, status: "On the way"}
//     processData(shipping, cb)
// }
// getUser(function (user) {
//     console.log(user)
//   getOrder(user, function(order) {
//       console.log(order)
//       getShipping(order, function(shipping) {
//           console.log(shipping)
//       })
//   })
// })