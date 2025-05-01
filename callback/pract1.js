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
  data2 = data1.reduce((acc, curr) => acc + curr / data1.length, 0)
  console.log(data2)