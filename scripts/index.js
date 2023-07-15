// elements
const power = document.getElementById("on-off");
const led = document.getElementById("off")
const screen = document.getElementById("screen");
const content = document.getElementById("content")
const modal = document.querySelector(".modal")
const input = document.getElementById("input")
const inputValue = document.getElementById("input-form")
const output = document.getElementById("output")
const home = document.getElementById("home")
const about = document.getElementById("about")
const projects = document.getElementById("projects")
const contact = document.getElementById("contact")

// power light 
let on = false;

power.addEventListener("click", e => {
    e.preventDefault();
    if(!on) {
        on = true;
        modal.style = "animation: 2s fadeOut forwards;"
        led.setAttribute("id", "on")
        home.click()
    } else if (on) {
        on = false;
        modal.style = "animation: 1s fadeIn forwards;"
        led.setAttribute("id", "off")
        setTimeout(() => {
            content.innerHTML = "";
        }, 1500)
    }
})

home.addEventListener("click", e => {
    content.innerHTML = "";
    content.innerHTML = (
        "<h1>Welcome!</h1>" +
        "<p> &emsp; I'm Cyrus Fullam and this is my website." +
        "  To get started select one of the links above.</p><br>" +
        "...or if you know how to use a terminal [cd] into one" +
        " (on desktop view)</p><br>" +
        "<p>Thanks for visiting my site!</p>"
    )
})

inputValue.addEventListener('submit', e => {
    e.preventDefault()
    let command = input.value.toLowerCase();
    input.value = ""
    switch(true){
        case command === "hello" :
            output.innerHTML = "Hello User!"
            break;
        case command === "cd home" :
            home.click()
            break;
        case command === "cd about" :
            about.click()
            break;
        case command === "cd projects" :
            projects.click()
            break;
        case command === "cd contact" :
            contact.click()
            break;
        case command.includes("rm") :
            output.innerHTML = "PLEASE BE CAREFUL!"
            break;
        default : output.innerHTML = "I don't know that command";
    }
})

