// let userDetails = {
//    name:"ajay",
//    age: 19,
//    desgination: "softeare engineer",
//    printDetails:function(){
//     console.log(this)
//    }
// }

// userDetails.printDetails()

const user = {
    name: "harsh",
    getName(age){
        console.log(`name: ${this.name}, age: ${age}`)
    }
}
user.getName.call(user, 21)
user.getName.apply(user, [22])

const bindfn = user.getName.bind(user)
bindfn(21)


