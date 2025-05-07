let btn = document.querySelector("button")
btn.addEventListener('click', () => {
    const add = document.createElement("div")
    add.innerText = "welcome in js"
    add.className = "box"
    document.body.appendChild(add)
    add.addEventListener('click', () => {
        add.remove();
    })
})