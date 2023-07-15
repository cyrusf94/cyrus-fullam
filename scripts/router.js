const home = document.getElementById("home")
const about = document.getElementById("about")
const projects = document.getElementById("projects")
const contact = document.getElementById("contact")
const input = document.getElementById("input")

function onRouteChanged() {

    const hash = window.location.hash;

    switch (hash) {
        case "#home":
            home.click();
            input.focus()
            break;
        case "#about":
            about.click()
            input.focus()
            break;
        case "#projects":
            projects.click()
            input.focus()
            break;
        case "#contact":
            contact.click()
            input.focus()
            break;

        default:
            break;
    }
}

window.addEventListener("hashchange", onRouteChanged);