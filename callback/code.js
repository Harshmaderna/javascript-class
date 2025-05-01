const getUSer = (callback) => {
    setTimeout(()=>{
        console.log("fetched user")
        callback({id:1, name:"ajeet"})
    }, 1000)
}

const getOrder = (user, callback)=>{
    setTimeout(()=>{
        console.log(`order for ${user.name}`)
        callback(["order1", "order2"])
    },2000)
}

const orderDetails = (orders, callback)=>{
    setTimeout(()=>{
        console.log(`order is ${orders[1]}`)
    callback()
    }, 2000)
}

getUSer(function (user){
    getOrder(user, function(orders){
        orderDetails(function() {
            console.log('Done')
        })
    })
})














// map filter reduce


// filter
// const arr = [1, 2, 3]

// const newArr = arr.filter(num => num % 2 !== 0)
// console.log(newArr) 




// reduce
const arr = [1,2,3]

const reduceNum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(reduceNum)


// map
const user = [
    {name:'ajeet', rollno:1, marks:80},
    {name:'harsh', rollno:2, marks:80},
    {name:'ram', rollno:3, marks:50},
    {name:'aam', rollno:4, marks:50}
];

const newUser = user.map(data => {
    return data.name.toUpperCase()
});

console.log(newUser)

const passStudent = user.map(item => item.marks > 60)
console.log(passStudent)







