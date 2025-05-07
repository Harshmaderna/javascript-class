// let box = document.getElementById("box")
 
// let sib = box.nextElementSibling
// console.log(sib.textContent)


// let div = document.querySelector("div")
// console.log(div)

// let id = div.getAttribute("id")
// console.log(id)

// let para = document.querySelector("p")
// console.log(para.setAttribute("class", "newclass"))


// let div = document.querySelector("div")
// console.log(div)

// div.style.backgroundColor = "green"
// div.innerText = "harsh"

// let newbtn = document.createElement("button")
//  let newButton =  newbtn.innerText = "click me"
//  console.log(newButton)

// let p = document.querySelector("p")
// div.prepend(newButton)
// div.before(newButton)
// p.after(newButton)

let newHead = document.createElement("h1")
newHead.innerHtml = "hi i am new";
document.querySelector("body").prepend(newHead)


