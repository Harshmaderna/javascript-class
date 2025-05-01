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

const students = [
    { studentName: "Ajeet", rollNumber: 101, marks: 55 },
    { studentName: "Ravi", rollNumber: 102, marks: 45 },
    { studentName: "Ananya", rollNumber: 103, marks: 20 },
    { studentName: "Ishika", rollNumber: 104, marks: 85 },
    { studentName: "Kunal", rollNumber: 105, marks: 60 }
  ];

  data = students.map(item => {
    if(item.marks < 60){
        item.marks += 20
    }
    return item.marks
  })
  
  data1 = data.filter(item => item >= 60)
  console.log(data1)

  data2 = data1.reduce((acc, curr) => acc+curr / data1.length, 0)
  console.log(data2)

  //  q3You are given an object called user that contains a person's name.
// You also have a function called introduce that introduces the person using their name, city, and country.
// Your task is to:
// Use call to invoke the function immediately with user as the context and pass individual arguments for city and country.
// Use apply to do the same but pass the arguments as an array.
// Use bind to create a copy of the function with user set as the context and predefined values for city and country. Then invoke that function later.

const user = {
    name:"harsh",
    introduce: function(name, city, country){
        this.city = city,
        this.country = country
        console.log(`${this.name} live in ${this.city} and country ${this.country}`)
    }
}

user.introduce.call(user, "harsh", "bharatpur", "india")
user.introduce.apply(user, ["harsh", "bharatpur", "india"])
const bn = user.introduce.bind(user, "harsh", "bharatpur", "india")
bn()


// Create a class Person with a private field #ssn (Social Security Number) and a public method getSSN(). Then, create a subclass Employee that inherits from Person and adds a property employeeId. Write a method in Employee to display all the details.

class person {
    constructor(name, ssn){
        this.name = name,
        this.ssn = ssn
    }

    get(){
        console.log(`name ${this.name} ssn ${this.ssn}`)
    }
}

 class emp extends person {
    constructor(name, ssn, empId){
       super(name, ssn)
        this.empId = empId
    }
 }

 const e1 = new emp("harsh", 1, 12)
 console.log(e1)