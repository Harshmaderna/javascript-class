// let n= 5;
// for(let i = 1; i <= 5; i++){
//     let star = " "
//     for(let j = 1; j <= i; j++){
//         star += "* "
//     }
//     console.log(star)
// }

// let i = 5;
// while(i>=1){
//     let star = ""
//     let j = 1
//     while(j<=i){
//         star += "* "
//         j++
//     }
//     console.log(star)
//     i--
// }

let n = 4
let m = 5

for(let i = 1; i<=5; i++){
    for(let j = 1; j <=m; j++){
        if(i == j || j == 1 || i == n || j == m){
            console.log("*")
        } else{
            console.log(" ")
        }
    }
    console.log()
}